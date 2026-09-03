import Link from "next/link";

type Props = {
  /** e.g. "/services/hvac-marketing-agency" */
  basePath: string;
  /** Human label for the program, e.g. "HVAC marketing" */
  programLabel: string;
  /** All states in the program: slug -> display name */
  states: Record<string, { name: string }>;
  /** Slug of the page being rendered (excluded from the list) */
  currentSlug: string;
};

/**
 * Server-rendered cross-links between the state pages of one program plus a
 * link back to the national hub. Before this, every state page had exactly two
 * internal links pointing at it (Sept 2026 crawl), which starves them of
 * crawl priority and PageRank.
 */
export default function StateSiblingLinks({
  basePath,
  programLabel,
  states,
  currentSlug,
}: Props) {
  const siblings = Object.entries(states)
    .filter(([slug]) => slug !== currentSlug)
    .sort((a, b) => a[1].name.localeCompare(b[1].name));

  if (siblings.length === 0) return null;

  return (
    <nav className="hia-states-nav" aria-label={`${programLabel} in other states`}>
      <div className="hia-states-nav-inner">
        <p className="hia-states-nav-title">
          {programLabel} in other states
        </p>
        <ul className="hia-states-nav-list">
          {siblings.map(([slug, { name }]) => (
            <li key={slug}>
              <Link href={`${basePath}/${slug}`}>{name}</Link>
            </li>
          ))}
          <li className="hia-states-nav-hub">
            <Link href={basePath}>All states</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
