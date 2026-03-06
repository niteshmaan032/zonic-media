"use client";

import "@/app/style/thankyou.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaLinkedin,
  FaSquarePinterest,
} from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { RiInstagramFill } from "react-icons/ri";

const THANK_YOU_ACCESS_KEY = "thank_you_access_allowed_at";
const THANK_YOU_RENDER_KEY = "thank_you_page_render_allowed";

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
        router.replace("/");
        return;
      }

      setCanAccess(true);
      setIsCheckingAccess(false);
    };

    const handlePageShow = () => {
      if (!hasRenderAccess()) {
        router.replace("/");
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

  if (isCheckingAccess || !canAccess) {
    return null;
  }

  return (
    <>
      <div className="thank-wrapper">
        <Row className="m-0 h-100 align-items-center pb-5 ">
          <Col lg={6}>
            <div className="thank-img-cont">
              <Image src="/images/thank.png" fill alt="thank you envelope"></Image>
            </div>
          </Col>

          <Col lg={6}>
            <div className="thank-content-wrapper">
              <Image
                src="/images/check.png"
                width={100}
                height={100}
                alt="check mark"
              ></Image>
              <h1 className="thank-heading">Thank You !</h1>
              <p className="thank-descrp">
                Your submission was successful, and we&apos;ll be in touch soon.
                We&apos;re excited to connect with you.
              </p>
              <div>
                <Link href="/" replace className="buttons">
                  Back to home <GoHomeFill size={18} />
                </Link>
              </div>

              <div className="thank-social-icons-wrapper">
                <p className="thank-social-heading">Connect with us</p>

                <div className="thank-social-icons">
                  <Link href="https://facebook.com" target="_blank">
                    <FaFacebookSquare size={28} />
                  </Link>

                  <Link href="https://instagram.com" target="_blank">
                    <RiInstagramFill size={28} />
                  </Link>

                  <Link href="https://twitter.com" target="_blank">
                    <FaSquareXTwitter size={28} />
                  </Link>

                  <Link href="https://linkedin.com" target="_blank">
                    <FaLinkedin size={28} />
                  </Link>

                  <Link href="https://pinterest.com" target="_blank">
                    <FaSquarePinterest size={28} />
                  </Link>
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
