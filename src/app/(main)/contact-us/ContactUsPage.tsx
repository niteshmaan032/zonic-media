"use client";

/*
 * CONTACT US — copy + contact channels on the left, the shared
 * ServiceLeadForm on the right, both columns starting at the same top edge.
 * Styling is scoped under `.ctc-page` in contactPage.css.
 *
 * Rebuilt Aug 2026: the markup moved off the old `cp-` prefix (and
 * contactUs.css moved to contactPage.css) because Turbopack's dev chunk URL is
 * derived from the stylesheet's path, so a cached copy of the old chunk could
 * outlive edits to it and render this page against stale rules. New path, new
 * chunk URL; new prefix, nothing cached can match.
 *
 * LEADS: the form submits whichever service the visitor picks from
 * CONTACT_SERVICE_OPTIONS — every value below is on the ALLOWED_SERVICES
 * whitelist in src/api/leadsRoute.ts.
 */

import "@/app/style/contactPage.css";
import Footer from "@/app/components/Footer";
import ServiceLeadForm from "@/app/components/ServiceLeadForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhoneCall,
} from "react-icons/fi";

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
      <div className="ctc-page">
        <section className="ctc-section">
          <div className="ctc-container">
            <div className="ctc-grid">
              <aside className="ctc-aside">
                <p className="ctc-eyebrow">Get in touch</p>
                <h1 className="ctc-title">Contact us</h1>
                <p className="ctc-lead">
                  Tell us where you want to grow and we&apos;ll come back with
                  the fastest next step — a free review of your Google profile,
                  search visibility, and website. No obligation.
                </p>

                <div className="ctc-channels">
                  <a href={SITE_CONTACT.emailHref} className="ctc-channel">
                    <span className="ctc-channel-icon">
                      <FiMail aria-hidden="true" />
                    </span>
                    <span className="ctc-channel-txt">
                      <small>Email us anytime</small>
                      <strong>{SITE_CONTACT.email}</strong>
                    </span>
                  </a>

                  <a href={SITE_CONTACT.phoneHref} className="ctc-channel">
                    <span className="ctc-channel-icon">
                      <FiPhoneCall aria-hidden="true" />
                    </span>
                    <span className="ctc-channel-txt">
                      <small>Speak with a strategist</small>
                      <strong>{SITE_CONTACT.phoneDisplay}</strong>
                    </span>
                  </a>

                  <a
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ctc-channel"
                  >
                    <span className="ctc-channel-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <span className="ctc-channel-txt">
                      <small>Visit our Dover office</small>
                      <strong>{SITE_CONTACT.address}</strong>
                    </span>
                  </a>

                  <div className="ctc-channel ctc-channel--static">
                    <span className="ctc-channel-icon">
                      <FiMessageCircle aria-hidden="true" />
                    </span>
                    <span className="ctc-channel-txt">
                      <small>Prefer to chat?</small>
                      <strong>
                        Use the chat bubble — a real strategist replies
                      </strong>
                    </span>
                  </div>
                </div>
              </aside>

              <div className="ctc-formcol">
                <ServiceLeadForm
                  formType="contact"
                  badge="Free consultation"
                  title="Send us a message"
                  subtitle="No contracts, no pressure — just a clear picture of where your business stands and what it takes to grow."
                  submitText="Send Message"
                  showBusinessName={false}
                  serviceOptions={CONTACT_SERVICE_OPTIONS}
                  messagePlaceholder="Tell us a bit about your goals or project"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ContactUsPageClient;
