import Link from "next/link";
import { Fragment } from "react";

/** Renders "[label](href)" links inside a copy string. */
export function Rich({
  text,
  linkClass = "tw:underline tw:decoration-1 tw:underline-offset-[3px] tw:transition tw:hover:opacity-75",
}: {
  text: string;
  linkClass?: string;
}) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        return m ? (
          <Link key={i} href={m[2]} className={linkClass}>
            {m[1]}
          </Link>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        );
      })}
    </>
  );
}
