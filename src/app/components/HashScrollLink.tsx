"use client";

import { MouseEvent, ReactNode } from "react";

type HashScrollLinkProps = {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
  offset?: number;
};

export default function HashScrollLink({
  href,
  className,
  children,
  offset = 0,
}: HashScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const targetId = href.slice(1);
    const escaped =
      typeof CSS !== "undefined" && typeof CSS.escape === "function"
        ? CSS.escape(targetId)
        : targetId;
    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>(
        `[id="${escaped}"], [data-scroll-target~="${escaped}"]`
      )
    );
    const target =
      candidates.find((el) => el.offsetParent !== null) ?? candidates[0];

    if (!target) {
      return;
    }

    event.preventDefault();

    const top =
      target.getBoundingClientRect().top + window.scrollY - Math.max(offset, 0);

    window.history.replaceState(null, "", href);
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
