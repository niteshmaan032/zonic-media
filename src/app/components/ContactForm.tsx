"use client";

import Link from "next/link";
import "@/app/style/contactform.css";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
// Import Row and Col
import { Row, Col } from "react-bootstrap";

export default function ContactForm() {
  const [services, setServices] = useState<string[]>([]);

  const serviceList: string[] = [
    "Web Design",
    "UI/UX Design",
    "Pay Per Click (PPC)",
    "Branding",
    "Google My Business (GMB)",
    "Web Development",
    "Local SEO",
  ];

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  return (
    <div className="contact-form-section">
      <Row className="contact-form-row m-0">
        {/* Left Side: Content */}
        <Col xs={12} lg={5} className="p-0">
          <div className="contact-form-content">
            <h2 className="contact-form-heading">
              Have a Project in Mind? <br /> <span> Let's talk </span>
            </h2>

            <ul className="contact-form-points">
              <li>
                <FaRegCircleCheck size={18} /> Long-term support beyond launch
              </li>
              <li>
                <FaRegCircleCheck size={18} /> We’ll respond in 24 hours fast &
                focused.
              </li>
              <li>
                <FaRegCircleCheck size={18} /> Work with senior UX experts, not
                juniors.
              </li>
            </ul>

            <div className="contact-form-button">
              <p>Schedule meeting :</p>

              <Link href="#" className="buttons">
                <span>book a call</span>
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
          </div>
        </Col>

        {/* Right Side: Form */}
        <Col xs={12} lg={6} className="p-0">
          <div className="contact-form-wrapper">
            <form className="row g-4">
              <Col md={6}>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </Col>

              <Col md={6}>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </Col>

              <Col xs={12}>
                <input
                  type="tel"
                  name="contact"
                  className="form-control"
                  placeholder="Contact Number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    const target = e.currentTarget;
                    target.value = target.value.replace(/[^0-9]/g, "");
                  }}
                  required
                />
              </Col>

              <Col xs={12}>
                <textarea
                  name="message"
                  className="form-control"
                  rows={5}
                  placeholder="Message"
                  required
                />
              </Col>

              <Col xs={12}>
                {serviceList.map((service, index) => (
                  <div key={index} className="d-inline-block me-2 me-lg-3 my-2">
                    <input
                      type="checkbox"
                      name="services"
                      className="btn-check"
                      id={`service-${index}`}
                      checked={services.includes(service)}
                      onChange={() => toggleService(service)}
                    />
                    <label
                      className="btn form-services-buttons btn-outline-secondary"
                      htmlFor={`service-${index}`}
                    >
                      {service}
                    </label>
                  </div>
                ))}
              </Col>

              <Col
                xs={12}
                className="d-flex justify-content-between align-items-center"
              >
                <button type="submit" className="buttons">
                  Send Message <FaArrowRightLong />
                </button>
                <p className="contact-form-email-link">
                  Prefer email ? <br />
                  <Link href="#!">zonicmediallc@gmail.com </Link>
                </p>
              </Col>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
