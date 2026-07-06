import Image from "next/image";

/**
 * Hero trust badges: the same static Clutch "Top Company" badge used in the
 * site footer, next to the Yelp Advertising Partner seal. Shared across the
 * home-inspector and white-label heroes. Neutral (unprefixed) class names —
 * matching styles live in both homeInspAgency.css and whiteLableStyle.css so
 * it drops into either scope.
 */
export default function HeroTrustBadges() {
  return (
    <div className="hero-trust-badges" aria-label="Trusted platforms">
      <iframe
        className="htb-clutch"
        width="80"
        height="80"
        loading="lazy"
        src="https://clutch.co/share/badges/2617344/11431?utm_source=clutch_top_company_badge&utm_medium=image_embed"
        title="Top Clutch Digital Marketing Company Delaware 2026"
      />
      <span className="htb-yelp">
        <Image
          src="/images/Partner.png"
          width={72}
          height={72}
          alt="Yelp Advertising Partner"
          className="htb-yelp-img"
        />
      </span>
    </div>
  );
}
