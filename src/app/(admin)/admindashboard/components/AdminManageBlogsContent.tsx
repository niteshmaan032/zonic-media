"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { AdminContentCard } from "./AdminContentCard";

type BlogStatus = "published" | "draft";

type BlogRow = {
  id: string;
  blogTitle: string;
  publishDate: string;
  status: BlogStatus;
};

type BlogsResponse = {
  success?: boolean;
  message?: string;
  blogs?: BlogRow[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

type DeleteResponse = {
  success?: boolean;
  message?: string;
};

const BLOGS_PER_PAGE = 10;

function formatBlogDate(value: string) {
  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatStatus(status: BlogStatus) {
  return status === "published" ? "Published" : "Draft";
}

export function AdminManageBlogsContent() {
  const router = useRouter();
  const [statusFilter, setStatusFilter] = useState<BlogStatus | "all">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState<BlogRow[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState("");
  const [navigatingToEditId, setNavigatingToEditId] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogs = async () => {
      setLoading(true);
      setError("");

      try {
        const params = new URLSearchParams({
          status: statusFilter,
          page: String(currentPage),
          limit: String(BLOGS_PER_PAGE),
        });
        const response = await fetch(`/api/admin/blogs?${params.toString()}`, {
          cache: "no-store",
          credentials: "include",
          signal: controller.signal,
        });
        const result = (await response.json()) as BlogsResponse;

        if (!response.ok || !result.success) {
          setError(result.message ?? "Unable to fetch blogs.");
          setBlogs([]);
          setTotalPages(0);
          return;
        }

        setBlogs(result.blogs ?? []);
        setTotalPages(result.pagination?.totalPages ?? 0);
      } catch (fetchError) {
        if (
          !(
            fetchError instanceof DOMException &&
            fetchError.name === "AbortError"
          )
        ) {
          setError("Unable to fetch blogs.");
          setBlogs([]);
          setTotalPages(0);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();

    return () => controller.abort();
  }, [currentPage, statusFilter]);

  const handleStatusFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setStatusFilter(event.target.value as BlogStatus | "all");
    setCurrentPage(1);
  };

  const isAnyActionActive =
    confirmDeleteId !== null || deletingId !== null || navigatingToEditId !== null;

  const handleEditClick = (id: string) => {
    setNavigatingToEditId(id);
    router.push(`/admindashboard/form?id=${id}`);
  };

  const handleDeleteConfirm = async (id: string) => {
    setDeletingId(id);
    setDeleteError("");
    setConfirmDeleteId(null);

    try {
      const response = await fetch(`/api/admin/blogs/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const result = (await response.json()) as DeleteResponse;

      if (!response.ok || !result.success) {
        setDeleteError(result.message ?? "Failed to delete blog.");
        return;
      }

      setBlogs((current) => current.filter((b) => b.id !== id));
    } catch {
      setDeleteError("Failed to delete blog. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      {navigatingToEditId !== null ? (
        <div className="admin-blog-submit-overlay" role="status">
          <div className="admin-blog-submit-overlay-box">
            <div className="spinner-border text-primary" aria-hidden="true" />
            <span>Loading blog editor...</span>
          </div>
        </div>
      ) : null}

      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-12">
            <AdminContentCard
              title="Manage Blogs"
              action={
                <select
                  className="form-select admin-blog-status-filter"
                  aria-label="Filter blogs by status"
                  value={statusFilter}
                  onChange={handleStatusFilterChange}
                >
                  <option value="all">All</option>
                  <option value="draft">Drafts</option>
                  <option value="published">Published</option>
                </select>
              }
            >
              {deleteError ? (
                <p className="admin-blog-upload-error mb-3">{deleteError}</p>
              ) : null}

              <div className="table-responsive">
                <table className="table admin-manage-blogs-table">
                  <thead>
                    <tr>
                      <th scope="col">Serial No</th>
                      <th scope="col">Blog Title</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((row, index) => (
                      <tr key={row.id}>
                        <th scope="row">
                          {(currentPage - 1) * BLOGS_PER_PAGE + index + 1}
                        </th>
                        <td>
                          <span className="admin-blog-title-clamp">
                            {row.blogTitle}
                          </span>
                        </td>
                        <td>{formatBlogDate(row.publishDate)}</td>
                        <td>
                          <span
                            className={`admin-blog-status admin-blog-status-${row.status}`}
                          >
                            {formatStatus(row.status)}
                          </span>
                        </td>
                        <td>
                          {deletingId === row.id ? (
                            <span className="admin-blog-deleting-label">
                              Deleting...
                            </span>
                          ) : confirmDeleteId === row.id ? (
                            <div className="admin-blog-delete-confirm">
                              <span>Delete?</span>
                              <button
                                type="button"
                                className="danger"
                                onClick={() => handleDeleteConfirm(row.id)}
                              >
                                Yes
                              </button>
                              <button
                                type="button"
                                onClick={() => setConfirmDeleteId(null)}
                              >
                                No
                              </button>
                            </div>
                          ) : (
                            <div className="admin-blog-table-actions">
                              <button
                                type="button"
                                aria-label={`Edit ${row.blogTitle}`}
                                disabled={isAnyActionActive}
                                onClick={() => handleEditClick(row.id)}
                              >
                                <FiEdit2 />
                              </button>
                              <button
                                type="button"
                                className="danger"
                                aria-label={`Delete ${row.blogTitle}`}
                                disabled={isAnyActionActive}
                                onClick={() => setConfirmDeleteId(row.id)}
                              >
                                <FiTrash2 />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                    {!loading && blogs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center py-4">
                          {error || "No blogs found."}
                        </td>
                      </tr>
                    ) : null}
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="text-center py-4">
                          Loading blogs...
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
              {totalPages > 1 ? (
                <div
                  className="admin-blog-pagination"
                  aria-label="Manage blogs pagination"
                >
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((page) => page - 1)}
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      type="button"
                      className={currentPage === index + 1 ? "active" : ""}
                      aria-current={
                        currentPage === index + 1 ? "page" : undefined
                      }
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
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
    </>
  );
}
