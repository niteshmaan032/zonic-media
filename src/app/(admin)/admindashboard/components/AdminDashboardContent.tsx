"use client";

import {
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaChartPie,
} from "react-icons/fa";
import { AdminContentCard } from "./AdminContentCard";

const statCards = [
  { label: "Today Sale", value: "$1,234", icon: FaChartLine },
  { label: "Total Sale", value: "$18,420", icon: FaChartBar },
  { label: "Today Revenue", value: "$2,640", icon: FaChartArea },
  { label: "Total Revenue", value: "$49,980", icon: FaChartPie },
];

const recentSales = [
  {
    date: "01 Apr 2026",
    invoice: "INV-0123",
    customer: "John Doe",
    amount: "$123",
    status: "Paid",
  },
  {
    date: "02 Apr 2026",
    invoice: "INV-0124",
    customer: "Emily Clark",
    amount: "$179",
    status: "Pending",
  },
  {
    date: "03 Apr 2026",
    invoice: "INV-0125",
    customer: "Jacob Lee",
    amount: "$245",
    status: "Paid",
  },
  {
    date: "04 Apr 2026",
    invoice: "INV-0126",
    customer: "Sophia Patel",
    amount: "$89",
    status: "Refunded",
  },
  {
    date: "05 Apr 2026",
    invoice: "INV-0127",
    customer: "Oliver Ray",
    amount: "$314",
    status: "Paid",
  },
];

function CardAction() {
  return (
    <button type="button" className="btn btn-link admin-card-link p-0">
      Show All
    </button>
  );
}

export function AdminDashboardContent() {
  return (
    <>
      {/* <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          {statCards.map(({ label, value, icon: Icon }) => (
            <div key={label} className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4 h-100">
                <Icon className="admin-stat-icon text-primary" />
                <div className="ms-3 text-end">
                  <p className="mb-2">{label}</p>
                  <h6 className="mb-0">{value}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}
