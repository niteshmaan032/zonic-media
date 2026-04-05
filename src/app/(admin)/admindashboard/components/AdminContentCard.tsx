import { ReactNode } from "react";

type AdminContentCardProps = {
  title: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function AdminContentCard({
  title,
  children,
  action,
  className = "",
}: AdminContentCardProps) {
  return (
    <div className={`bg-light rounded h-100 p-4 ${className}`.trim()}>
      {action ? (
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h6 className="mb-0">{title}</h6>
          {action}
        </div>
      ) : (
        <h6 className="mb-4">{title}</h6>
      )}
      {children}
    </div>
  );
}
