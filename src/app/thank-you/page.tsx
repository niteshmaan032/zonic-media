"use client";

import "@/app/style/thankyou.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { RiInstagramFill } from "react-icons/ri";
import { SITE_PATHS, SITE_SOCIAL_LINKS } from "@/shared/siteConfig";

const THANK_YOU_ACCESS_KEY = "thank_you_access_allowed_at";
const THANK_YOU_RENDER_KEY = "thank_you_page_render_allowed";
const socialIcons = {
  LinkedIn: FaLinkedin,
  Facebook: FaFacebookSquare,
  Instagram: RiInstagramFill,
  YouTube: FaYoutube,
} as const;

function Page() {
  const router = useRouter();
  const [canAccess, setCanAccess] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);

  useEffect(() => {
    const hasSuccessfulSubmission = () => {
      const allowedAt = Number(sessionStorage.getItem(THANK_YOU_ACCESS_KEY));
      return Number.isFinite(allowedAt) && allowedAt > 0;
    };

    const hasRenderAccess = () =>
      sessionStorage.getItem(THANK_YOU_RENDER_KEY) === "true";

    const evaluateAccess = () => {
      if (hasSuccessfulSubmission()) {
        sessionStorage.setItem(THANK_YOU_RENDER_KEY, "true");
        sessionStorage.removeItem(THANK_YOU_ACCESS_KEY);
      }

      if (!hasRenderAccess()) {
        router.replace(SITE_PATHS.home);
        return;
      }

      setCanAccess(true);
      setIsCheckingAccess(false);
    };

    const handlePageShow = () => {
      if (!hasRenderAccess()) {
        router.replace(SITE_PATHS.home);
      }
    };

    const handlePageHide = () => {
      sessionStorage.removeItem(THANK_YOU_RENDER_KEY);
    };

    evaluateAccess();
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, [router]);

  useEffect(() => {
    if (!canAccess) {
      return;
    }

    const redirectTimer = window.setTimeout(() => {
      sessionStorage.removeItem(THANK_YOU_RENDER_KEY);
      router.replace(SITE_PATHS.home);
    }, 60_000);

    return () => {
      window.clearTimeout(redirectTimer);
    };
  }, [canAccess, router]);

  if (isCheckingAccess || !canAccess) {
    return null;
  }

  return (
    <>
      <div className="thank-wrapper">
        <Row className="m-0 h-100 align-items-center pb-5 ">
          <Col lg={6}>
            <div className="thank-img-cont">
              <Image
                src="/images/thank.webp"
                fill
                alt="thank you envelope"
              ></Image>
            </div>
          </Col>

          <Col lg={6}>
            <div className="thank-content-wrapper">
              <FaCircleCheck className="check" size={100} aria-hidden="true" />
              <h1 className="thank-heading">Thank You !</h1>
              <p className="thank-descrp">
                Your submission was successful, and we&apos;ll be in touch soon.
                We&apos;re excited to connect with you.
              </p>
              <div className="d-flex gap-2 align-items-center">
                <Link href={SITE_PATHS.home} replace className="buttons">
                  Back to home <GoHomeFill size={18} />
                </Link>

                <Link
                  href="https://calendar.app.google/EGNcQQMvMU3DGP5R6"
                  className="buttons"
                >
                  Book a Strategy Call
                  <span className="buttons__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="buttons__icon-svg"
                      width="8"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="8"
                      xmlns="http://www.w3.org/2000/svg"
                      className="buttons__icon-svg buttons__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              <div className="thank-social-icons-wrapper">
                <p className="thank-social-heading">Connect with us</p>

                <div className="thank-social-icons">
                  {SITE_SOCIAL_LINKS.map((social) => {
                    const Icon = socialIcons[social.label];

                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <Icon size={28} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Page;
