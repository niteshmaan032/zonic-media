import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { SITE_CONTACT } from "@/shared/siteConfig";

export default function FloatingPhone() {
  return (
    <Link
      href={SITE_CONTACT.phoneHref}
      className="floating-phone-link"
      aria-label={`Call Zonic Media at ${SITE_CONTACT.phoneDisplay}`}
    >
      <FaPhoneAlt aria-hidden="true" />
    </Link>
  );
}
