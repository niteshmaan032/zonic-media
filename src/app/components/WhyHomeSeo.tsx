"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Accordion, Col, Row } from "react-bootstrap";

import "@/app/style/localSeoHome.css";
import localSeoAnimation from "@/shared/lottie-files/local-seo-1.json";

type LottieAnimationInstance = {
  destroy: () => void;
  setSpeed?: (speed: number) => void;
};

type LottiePlayer = {
  loadAnimation: (config: {
    container: HTMLElement;
    renderer: "svg" | "canvas" | "html";
    loop: boolean;
    autoplay: boolean;
    animationData: unknown;
  }) => LottieAnimationInstance;
};

declare global {
  interface Window {
    lottie?: LottiePlayer;
  }
}

const whyHomeSeoItems = [
  {
    title: "01. More Calls From Local Customers",
    content:
      "Homeowners search Google when they need immediate help. If your business is not visible, those calls go to competitors. Local SEO helps you appear first and generate more inbound calls from ready-to-book customers.",
  },
  {
    title: "02. Higher Google Maps Rankings",
    content:
      "Most customers choose businesses shown in the top Google Maps results. We help improve your local rankings so your company appears where buying decisions happen.",
  },
  {
    title: "03. Consistent Booked Jobs",
    content:
      "Relying only on referrals creates unpredictable revenue. SEO builds a steady flow of estimates, service requests, and booked jobs month after month.",
  },
  {
    title: "04. Stronger Trust & Reputation",
    content:
      "Customers compare reviews, visibility, and professionalism before choosing a company. A well-optimized online presence builds trust and increases conversions.",
  },
  {
    title: "05. Lower Dependence on Paid Ads",
    content:
      "Ads can stop the moment the budget runs out. Local SEO creates long-term visibility that continues bringing leads without paying for every click.",
  },
  {
    title: "06. Long-Term Business Growth",
    content:
      "SEO is not just about rankings - it creates a repeatable system for growth. More visibility, more calls, and more customers help scale your business over time.",
  },
];

function WhyHomeSeo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isScriptReady, setIsScriptReady] = useState(false);

  useEffect(() => {
    if (!isScriptReady || !containerRef.current || !window.lottie) {
      return;
    }

    const animation = window.lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: localSeoAnimation,
    });

    animation.setSpeed?.(1);

    return () => {
      animation.destroy();
    };
  }, [isScriptReady]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"
        strategy="afterInteractive"
        onReady={() => setIsScriptReady(true)}
      />

      <div className="why-home-seo-wrapper">
        <Row className="align-items-start">
          <Col lg={5} className="why-home-seo-visual-wrapper">
            <div className="why-home-seo-visual">
              <div
                ref={containerRef}
                className="why-home-seo-lottie"
                aria-hidden="true"
              />
            </div>
          </Col>

          <Col lg={7}>
            <div className="why-home-seo-content-wrapper">
              <p className="local-seo-home-label">
                <p className="local-seo-home-label">
                  Get More Calls from Local Customers
                </p>
              </p>
              <h2 className="why-home-seo-heading">
                Why Home Service Businesses Need a Local SEO Company
              </h2>

              <Accordion defaultActiveKey="0" className="global-faqs-accordion">
                {whyHomeSeoItems.map((item, index) => (
                  <Accordion.Item eventKey={String(index)} key={item.title}>
                    <Accordion.Header as="h3">{item.title}</Accordion.Header>
                    <Accordion.Body>{item.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default WhyHomeSeo;
