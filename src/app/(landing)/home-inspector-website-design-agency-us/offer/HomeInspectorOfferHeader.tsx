"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Icon from "./Icon";

const NAV_ITEMS = [
  { label: "How it works", href: "#process" },
  { label: "What you get", href: "#deliverables" },
  { label: "Home Inspector services", href: "#work" },
  { label: "Why Zonic", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];

export default function HomeInspectorOfferHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const syncScrolledState = () => setScrolled(window.scrollY > 40);
    syncScrolledState();
    window.addEventListener("scroll", syncScrolledState, { passive: true });
    window.addEventListener("pageshow", syncScrolledState);
    return () => {
      window.removeEventListener("scroll", syncScrolledState);
      window.removeEventListener("pageshow", syncScrolledState);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("ofr-home-inspector-menu-is-open");
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("ofr-home-inspector-menu-is-open");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="ofr-home-inspector-skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`nav-wrap${scrolled || menuOpen ? " is-scrolled" : ""}`}>
        <Link
          className="nav-logo"
          href="/"
          aria-label="Zonic Media — home"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo.webp"
            alt="Zonic Media"
            width={400}
            height={113}
            priority
          />
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Claim my home inspector website <Icon name="arrow-up-right" />
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="ofr-home-inspector-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <nav
        id="ofr-home-inspector-mobile-menu"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="mobile-menu-cta" href="#contact" onClick={closeMenu}>
          Claim my home inspector website <Icon name="arrow-up-right" />
        </a>
      </nav>
    </>
  );
}
