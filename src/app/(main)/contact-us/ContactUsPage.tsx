"use client";

import "@/app/style/contactUs.css";
import Footer from "@/app/components/Footer";
import ServiceLeadForm from "@/app/components/ServiceLeadForm";
import { SITE_CONTACT } from "@/shared/siteConfig";

const CONTACT_SERVICE_OPTIONS = [
  "Web Design",
  "Pay Per Click (PPC)",
  "Google My Business (GMB)",
  "Web Development",
  "Local SEO",
];

function ContactUsPageClient() {
  return (
    <>
      <div className="contact-page">
        <div className="contact-page-wrap">
          <div className="cp-grid">
            {/* LEFT — heading, intro, contact details */}
            <div className="cp-left">
              <span className="cp-eyebrow">Get in touch</span>
              <h1 className="cp-title">Contact us</h1>
              <p className="cp-lead">
                Tell us where you want to grow and we&apos;ll come back with the
                fastest next step — a free review of your Google profile, search
                visibility, and website. No obligation.
              </p>

              <ul className="cp-details">
                <li>
                  <a href={SITE_CONTACT.phoneHref}>
                    <span className="cp-ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                      </svg>
                    </span>
                    <span className="cp-ct">
                      <span className="cp-lbl">Call us</span>
                      <span className="cp-val">{SITE_CONTACT.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={SITE_CONTACT.emailHref}>
                    <span className="cp-ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </span>
                    <span className="cp-ct">
                      <span className="cp-lbl">Email us</span>
                      <span className="cp-val">{SITE_CONTACT.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="cp-ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <span className="cp-ct">
                      <span className="cp-lbl">Visit us</span>
                      <span className="cp-val">{SITE_CONTACT.address}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* RIGHT — lead form */}
            <div className="cp-right">
              <ServiceLeadForm
                formType="contact"
                badge="Free consultation"
                title="Send us a message"
                subtitle="We'll reply within one business day."
                submitText="Send Message"
                showBusinessName={false}
                serviceOptions={CONTACT_SERVICE_OPTIONS}
                messagePlaceholder="Tell us a bit about your goals or project"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUsPageClient;
