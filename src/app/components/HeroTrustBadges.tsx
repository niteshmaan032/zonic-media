import Image from "next/image";

/**
 * Hero trust badges: the same static Clutch "Top Company" badge used in the
 * site footer, next to the Yelp Advertising Partner seal. Shared across the
 * home-inspector and white-label heroes. Neutral (unprefixed) class names —
 * matching styles live in both homeInspAgency.css and whiteLableStyle.css so
 * it drops into either scope.
 */
export default function HeroTrustBadges({
  trustpilotSrc = "/images/Trustpilot-Logo.png",
}: {
  /** Industry pages pass the black Trustpilot logo; others keep the default. */
  trustpilotSrc?: string;
}) {
  return (
    <div className="hero-trust-badges" aria-label="Trusted platforms">
      {/* Self-hosted copy of the Clutch badge — the live
          clutch.co/share/badges iframe sits behind a Cloudflare bot
          challenge and intermittently renders broken. */}
      <a
        href="https://clutch.co/profile/zonic-media?badge=11431"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <Image
          className="htb-clutch"
          src="/images/clutch-top-company-2026.png"
          width={80}
          height={80}
          alt="Top Clutch Digital Marketing Company Delaware 2026"
          style={{ objectFit: "contain" }}
        />
      </a>
      <span className="htb-yelp">
        <Image
          src="/images/Partner.png"
          width={72}
          height={72}
          alt="Yelp Advertising Partner"
          className="htb-yelp-img"
        />
      </span>
      <a
        className="htb-trustpilot"
        href="https://www.trustpilot.com/review/zonicllc.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={trustpilotSrc}
          width={110}
          height={52}
          alt="Zonic Media reviews on Trustpilot"
          className="htb-trustpilot-img"
          style={{ objectFit: "contain" }}
        />
      </a>
    </div>
  );
}
