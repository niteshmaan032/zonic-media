"use client";

import type { ReactNode } from "react";

type ScrollToFormLinkProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Smooth-scrolls to the visible audit form. The form is rendered twice (a
 * sticky column on desktop, an inline block on mobile) and only one is shown
 * per breakpoint, so we pick the one that's actually laid out (offsetParent is
 * null for display:none elements). A small offset keeps it clear of the fixed
 * navbar.
 */
export default function ScrollToFormLink({
  className,
  children,
}: ScrollToFormLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const forms = Array.from(
      document.querySelectorAll<HTMLElement>(".js-audit-form"),
    );
    const target =
      forms.find((el) => el.offsetParent !== null) ?? forms[0];

    if (!target) return;

    const top =
      target.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <a href="#" className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
