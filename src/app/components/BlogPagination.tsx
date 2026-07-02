"use client";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  ariaLabel?: string;
};

function getPageItems(current: number, total: number): (number | "...")[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = [
    ...new Set(
      [1, current - 1, current, current + 1, total].filter(
        (p) => p >= 1 && p <= total,
      ),
    ),
  ].sort((a, b) => a - b);

  const items: (number | "...")[] = [];
  let prev = 0;

  for (const p of pages) {
    if (p - prev > 1) {
      items.push("...");
    }
    items.push(p);
    prev = p;
  }

  return items;
}

export default function BlogPagination({
  page,
  totalPages,
  onPageChange,
  className,
  ariaLabel = "Pagination",
}: Props) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className={`bp-pagination${className ? ` ${className}` : ""}`}
      aria-label={ariaLabel}
    >
      <button
        type="button"
        className="bp-page-btn"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <FaAngleLeft size={14} />
      </button>

      {getPageItems(page, totalPages).map((item, index) =>
        item === "..." ? (
          <span key={`ellipsis-${index}`} className="bp-page-ellipsis">
            &hellip;
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={`bp-page-btn${item === page ? " bp-page-active" : ""}`}
            onClick={() => onPageChange(item)}
            aria-current={item === page ? "page" : undefined}
          >
            {item}
          </button>
        ),
      )}

      <button
        type="button"
        className="bp-page-btn"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        <FaAngleRight size={14} />
      </button>
    </nav>
  );
}
