"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HashScrollLink from "@/app/components/HashScrollLink";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { FiMenu, FiPhoneCall, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Services", href: "#tt-services" },
  { label: "Why Us", href: "#tt-why" },
  { label: "Process", href: "#tt-process" },
  { label: "FAQs", href: "#tt-faqs" },
];

export default function TravelHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`tt-header ${scrolled ? "is-scrolled" : ""} ${
        menuOpen ? "is-open" : ""
      }`}
    >
      <div className="tt-header-inner">
        <Link href="/" className="tt-header-logo" aria-label="Zonic Media — home">
          <Image
            src="/images/logo.webp"
            alt="Zonic Media"
            width={148}
            height={40}
            priority
          />
        </Link>

        <nav className="tt-header-nav" aria-label="Page sections">
          {NAV_LINKS.map((link) => (
            <HashScrollLink
              key={link.href}
              href={link.href}
              className="tt-header-link"
              offset={96}
            >
              {link.label}
            </HashScrollLink>
          ))}
        </nav>

        <div className="tt-header-actions">
          <a href={SITE_CONTACT.phoneHref} className="tt-header-cta">
            <FiPhoneCall aria-hidden="true" />
            <span>{SITE_CONTACT.phoneDisplay}</span>
          </a>
          <button
            type="button"
            className="tt-header-burger"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="tt-header-mobile">
          {NAV_LINKS.map((link) => (
            <HashScrollLink
              key={link.href}
              href={link.href}
              className="tt-header-mobile-link"
              offset={96}
            >
              <span onClick={() => setMenuOpen(false)}>{link.label}</span>
            </HashScrollLink>
          ))}
          <a
            href={SITE_CONTACT.phoneHref}
            className="tt-header-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            <FiPhoneCall aria-hidden="true" />
            Call {SITE_CONTACT.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
