import HashScrollLink from "@/app/components/HashScrollLink";
import type { ReactNode } from "react";

type ServiceSectionCtaProps = {
  href: string;
  children?: ReactNode;
  align?: "left" | "center";
  offset?: number;
};

const ArrowIcon = () => (
  <span className="buttons__icon-wrapper" aria-hidden="true">
    <svg
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="buttons__icon-svg"
      width="8"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      />
    </svg>
    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="8"
      xmlns="http://www.w3.org/2000/svg"
      className="buttons__icon-svg buttons__icon-svg--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      />
    </svg>
  </span>
);

export default function ServiceSectionCta({
  href,
  children = "Get a Free Strategy Call",
  align = "center",
  offset = 120,
}: ServiceSectionCtaProps) {
  return (
    <div
      className={`service-section-cta ${
        align === "left" ? "service-section-cta--left" : ""
      }`}
    >
      <HashScrollLink href={href} className="buttons" offset={offset}>
        {children}
        <ArrowIcon />
      </HashScrollLink>
    </div>
  );
}
