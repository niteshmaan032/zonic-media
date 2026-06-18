"use client";

import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import {
  FiChevronDown,
  FiMail,
  FiPhone,
  FiRefreshCw,
  FiSearch,
} from "react-icons/fi";
import { AdminContentCard } from "./AdminContentCard";
import type { LeadStatus, SafeLead } from "@/shared/chatTypes";

type LeadsResponse = {
  success?: boolean;
  message?: string;
  leads?: SafeLead[];
  total?: number;
  page?: number;
  totalPages?: number;
  sources?: string[];
  stats?: {
    total: number;
    today: number;
    last7Days: number;
    newCount: number;
  };
};

const LEADS_PER_PAGE = 15;

const STATUS_OPTIONS: { value: LeadStatus; label: string }[] = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "live_chat_started", label: "Live Chat" },
  { value: "callback_requested", label: "Callback" },
  { value: "closed", label: "Closed" },
];

const STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  live_chat_started: "Live Chat",
  callback_requested: "Callback",
  closed: "Closed",
};

function formatDateTime(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function leadServices(lead: SafeLead) {
  if (lead.services && lead.services.length > 0) {
    return lead.services.join(", ");
  }
  return lead.service || "—";
}

export function AdminLeadsContent() {
  const [leads, setLeads] = useState<SafeLead[]>([]);
  const [sources, setSources] = useState<string[]>([]);
  const [stats, setStats] = useState<LeadsResponse["stats"] | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filters
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Debounce the free-text search.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSearch(searchInput.trim());
      setCurrentPage(1);
    }, 350);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  const fetchLeads = useCallback(
    async (signal?: AbortSignal) => {
      setLoading(true);
      setError("");

      try {
        const params = new URLSearchParams({
          page: String(currentPage),
          limit: String(LEADS_PER_PAGE),
          status: statusFilter,
          source: sourceFilter,
        });
        if (search) params.set("search", search);
        if (fromDate) params.set("from", fromDate);
        if (toDate) params.set("to", toDate);

        const response = await fetch(`/api/admin/leads?${params.toString()}`, {
          cache: "no-store",
          credentials: "include",
          signal,
        });
        const result = (await response.json()) as LeadsResponse;

        if (!response.ok || !result.success) {
          setError(result.message ?? "Unable to fetch leads.");
          setLeads([]);
          setTotalPages(0);
          setTotal(0);
          return;
        }

        setLeads(result.leads ?? []);
        setTotalPages(result.totalPages ?? 0);
        setTotal(result.total ?? 0);
        setStats(result.stats ?? null);
        if (result.sources) setSources(result.sources);
      } catch (fetchError) {
        if (
          !(fetchError instanceof DOMException && fetchError.name === "AbortError")
        ) {
          setError("Unable to fetch leads.");
          setLeads([]);
          setTotalPages(0);
        }
      } finally {
        setLoading(false);
      }
    },
    [currentPage, statusFilter, sourceFilter, search, fromDate, toDate],
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchLeads(controller.signal);
    return () => controller.abort();
  }, [fetchLeads]);

  const handleStatusChange = async (id: string, status: LeadStatus) => {
    const previous = leads;
    setUpdatingId(id);
    // Optimistic update.
    setLeads((current) =>
      current.map((lead) => (lead.id === id ? { ...lead, status } : lead)),
    );

    try {
      const response = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id, status }),
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        setLeads(previous);
        setError("Failed to update lead status.");
      }
    } catch {
      setLeads(previous);
      setError("Failed to update lead status.");
    } finally {
      setUpdatingId(null);
    }
  };

  const resetFilters = () => {
    setSearchInput("");
    setSearch("");
    setSourceFilter("all");
    setStatusFilter("all");
    setFromDate("");
    setToDate("");
    setCurrentPage(1);
  };

  const hasActiveFilters = useMemo(
    () =>
      Boolean(
        search ||
          sourceFilter !== "all" ||
          statusFilter !== "all" ||
          fromDate ||
          toDate,
      ),
    [search, sourceFilter, statusFilter, fromDate, toDate],
  );

  const statCards = [
    { label: "Total Leads", value: stats?.total ?? 0, tone: "primary" },
    { label: "New / Unactioned", value: stats?.newCount ?? 0, tone: "warning" },
    { label: "Today", value: stats?.today ?? 0, tone: "info" },
    { label: "Last 7 Days", value: stats?.last7Days ?? 0, tone: "success" },
  ] as const;

  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4 mb-1">
        <div className="col-12">
          <div className="admin-leads-header">
            <div>
              <h1 className="admin-leads-title">Leads</h1>
              <p className="admin-leads-subtitle">
                Every enquiry submitted through your website forms and chatbot,
                in one place.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="row g-4">
        {statCards.map((card) => (
          <div className="col-6 col-xl-3" key={card.label}>
            <div className={`admin-leads-stat admin-leads-stat--${card.tone}`}>
              <span className="admin-leads-stat-value">{card.value}</span>
              <span className="admin-leads-stat-label">{card.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4 mt-0">
        <div className="col-12">
          <AdminContentCard title="All Leads">
            {/* Filter bar */}
            <div className="admin-leads-filters">
              <div className="admin-leads-search">
                <FiSearch aria-hidden="true" />
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search name, email, phone, service..."
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                  aria-label="Search leads"
                />
              </div>

              <select
                className="form-select admin-leads-filter-select"
                aria-label="Filter by status"
                value={statusFilter}
                onChange={(event) => {
                  setStatusFilter(event.target.value as LeadStatus | "all");
                  setCurrentPage(1);
                }}
              >
                <option value="all">All Statuses</option>
                {STATUS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <select
                className="form-select admin-leads-filter-select"
                aria-label="Filter by source"
                value={sourceFilter}
                onChange={(event) => {
                  setSourceFilter(event.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="all">All Sources</option>
                {sources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>

              <div className="admin-leads-date">
                <label htmlFor="lead-from">From</label>
                <input
                  id="lead-from"
                  type="date"
                  className="form-control"
                  value={fromDate}
                  max={toDate || undefined}
                  onChange={(event) => {
                    setFromDate(event.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>

              <div className="admin-leads-date">
                <label htmlFor="lead-to">To</label>
                <input
                  id="lead-to"
                  type="date"
                  className="form-control"
                  value={toDate}
                  min={fromDate || undefined}
                  onChange={(event) => {
                    setToDate(event.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>

              <button
                type="button"
                className="admin-leads-reset"
                onClick={resetFilters}
                disabled={!hasActiveFilters}
              >
                <FiRefreshCw aria-hidden="true" />
                Clear
              </button>
            </div>

            <div className="admin-leads-count">
              {loading
                ? "Loading leads..."
                : `Showing ${leads.length} of ${total} lead${total === 1 ? "" : "s"}`}
            </div>

            <div className="table-responsive">
              <table className="table admin-leads-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Service</th>
                    <th scope="col">Source</th>
                    <th scope="col">Status</th>
                    <th scope="col" className="text-end">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => {
                    const isExpanded = expandedId === lead.id;
                    return (
                      <Fragment key={lead.id}>
                        <tr>
                          <th scope="row">
                            {(currentPage - 1) * LEADS_PER_PAGE + index + 1}
                          </th>
                          <td className="admin-leads-nowrap">
                            {formatDateTime(lead.createdAt)}
                          </td>
                          <td>
                            <span className="admin-leads-name">{lead.name}</span>
                            {lead.businessName ? (
                              <span className="admin-leads-business">
                                {lead.businessName}
                              </span>
                            ) : null}
                          </td>
                          <td>
                            <div className="admin-leads-contact">
                              {lead.email ? (
                                <a
                                  href={`mailto:${lead.email}`}
                                  className="admin-leads-contact-link"
                                >
                                  <FiMail aria-hidden="true" />
                                  {lead.email}
                                </a>
                              ) : null}
                              {lead.phone ? (
                                <a
                                  href={`tel:${lead.phone}`}
                                  className="admin-leads-contact-link"
                                >
                                  <FiPhone aria-hidden="true" />
                                  {lead.phone}
                                </a>
                              ) : null}
                              {!lead.email && !lead.phone ? "—" : null}
                            </div>
                          </td>
                          <td>
                            <span className="admin-leads-service">
                              {leadServices(lead)}
                            </span>
                          </td>
                          <td>
                            <span className="admin-leads-source-badge">
                              {lead.source}
                            </span>
                          </td>
                          <td>
                            <select
                              className={`admin-leads-status-select admin-leads-status--${lead.status}`}
                              value={lead.status}
                              disabled={updatingId === lead.id}
                              onChange={(event) =>
                                handleStatusChange(
                                  lead.id,
                                  event.target.value as LeadStatus,
                                )
                              }
                              aria-label={`Status for ${lead.name}`}
                            >
                              {STATUS_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="text-end">
                            <button
                              type="button"
                              className={`admin-leads-expand ${isExpanded ? "open" : ""}`}
                              onClick={() =>
                                setExpandedId(isExpanded ? null : lead.id)
                              }
                              aria-expanded={isExpanded}
                              aria-label={`Toggle details for ${lead.name}`}
                            >
                              <FiChevronDown aria-hidden="true" />
                            </button>
                          </td>
                        </tr>
                        {isExpanded ? (
                          <tr className="admin-leads-detail-row">
                            <td colSpan={8}>
                              <div className="admin-leads-detail">
                                <div className="admin-leads-detail-grid">
                                  <div>
                                    <span className="admin-leads-detail-label">
                                      Full Status
                                    </span>
                                    <span>{STATUS_LABELS[lead.status]}</span>
                                  </div>
                                  {lead.formType ? (
                                    <div>
                                      <span className="admin-leads-detail-label">
                                        Form Type
                                      </span>
                                      <span>{lead.formType}</span>
                                    </div>
                                  ) : null}
                                  {lead.subService ? (
                                    <div>
                                      <span className="admin-leads-detail-label">
                                        Sub-service
                                      </span>
                                      <span>{lead.subService}</span>
                                    </div>
                                  ) : null}
                                  {typeof lead.smsConsent === "boolean" ? (
                                    <div>
                                      <span className="admin-leads-detail-label">
                                        SMS Consent
                                      </span>
                                      <span>{lead.smsConsent ? "Yes" : "No"}</span>
                                    </div>
                                  ) : null}
                                  {lead.pageUrl || lead.sourcePage ? (
                                    <div>
                                      <span className="admin-leads-detail-label">
                                        Page
                                      </span>
                                      <span className="admin-leads-detail-url">
                                        {lead.pageUrl || lead.sourcePage}
                                      </span>
                                    </div>
                                  ) : null}
                                </div>
                                {lead.message || lead.projectDetails ? (
                                  <div className="admin-leads-detail-message">
                                    <span className="admin-leads-detail-label">
                                      Message
                                    </span>
                                    <p>{lead.message || lead.projectDetails}</p>
                                  </div>
                                ) : null}
                              </div>
                            </td>
                          </tr>
                        ) : null}
                      </Fragment>
                    );
                  })}

                  {!loading && leads.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="text-center py-4">
                        {error || "No leads found for the selected filters."}
                      </td>
                    </tr>
                  ) : null}
                  {loading && leads.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="text-center py-4">
                        Loading leads...
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>

            {error && leads.length > 0 ? (
              <p className="admin-leads-error">{error}</p>
            ) : null}

            {totalPages > 1 ? (
              <div
                className="admin-blog-pagination"
                aria-label="Leads pagination"
              >
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((page) => page - 1)}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1)
                  .filter(
                    (page) =>
                      page === 1 ||
                      page === totalPages ||
                      Math.abs(page - currentPage) <= 2,
                  )
                  .map((page, idx, pages) => (
                    <span key={page} className="d-inline-flex">
                      {idx > 0 && page - pages[idx - 1] > 1 ? (
                        <span className="admin-leads-page-ellipsis">…</span>
                      ) : null}
                      <button
                        type="button"
                        className={currentPage === page ? "active" : ""}
                        aria-current={currentPage === page ? "page" : undefined}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    </span>
                  ))}
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((page) => page + 1)}
                >
                  Next
                </button>
              </div>
            ) : null}
          </AdminContentCard>
        </div>
      </div>
    </div>
  );
}
