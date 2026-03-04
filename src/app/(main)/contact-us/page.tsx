"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import "@/app/style/contactUs.css";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import Footer from "@/app/components/Footer";

type ContactUsFormValues = {
  fullName: string;
  email: string;
  contact: string;
  message: string;
  services: string[];
};

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactUsFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      contact: "",
      message: "",
      services: [],
    },
  });

  const serviceList: string[] = [
    "Web Design",
    "UI/UX Design",
    "Pay Per Click (PPC)",
    "Branding",
    "Google My Business (GMB)",
    "Web Development",
    "Local SEO",
  ];

  const onSubmit = () => {
    reset();
  };

  return (
    <>
      {/* contact-us-section-1 */}
      <div className="contact-us-form-section">
        <Row className="contact-us-form-row m-0">
          {/* Left Side: Content */}
          <Col xs={12} lg={5} className="p-0">
            <div className="contact-us-form-content">
              <h1 className="contact-us-form-heading">
                Have a project ? <br /> <span> Let&apos;s talk </span>
              </h1>

              <ul className="contact-us-form-points">
                <li>
                  <Link href="#!">
                    <FiPhone size={20} /> +1 (302) 244-5494
                  </Link>
                </li>
                <li>
                  <Link href="#!">
                    <IoMailOutline size={20} /> contact@zonicllc.com
                  </Link>
                </li>
                <li>
                  <Link href="#!">
                    <GrLocation size={20} /> 8 The Green, STE B Dover Kent, DE
                    19901 United States
                  </Link>
                </li>
              </ul>

              <div className="contact-us-form-button">
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
            <div className="contact-us-form-wrapper">
              <form
                className="row g-4"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <Col md={6}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    aria-invalid={errors.fullName ? "true" : "false"}
                    {...register("fullName", {
                      required: "Full name is required.",
                    })}
                  />
                  {errors.fullName && (
                    <p className="text-danger mt-2 mb-0">
                      {errors.fullName.message}
                    </p>
                  )}
                </Col>

                <Col md={6}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address.",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-danger mt-2 mb-0">
                      {errors.email.message}
                    </p>
                  )}
                </Col>

                <Col xs={12}>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Contact Number"
                    inputMode="numeric"
                    aria-invalid={errors.contact ? "true" : "false"}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                      const target = e.currentTarget;
                      target.value = target.value.replace(/[^0-9]/g, "");
                    }}
                    {...register("contact", {
                      required: "Contact number is required.",
                      minLength: {
                        value: 7,
                        message: "Contact number must be at least 7 digits.",
                      },
                    })}
                  />
                  {errors.contact && (
                    <p className="text-danger mt-2 mb-0">
                      {errors.contact.message}
                    </p>
                  )}
                </Col>

                <Col xs={12}>
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Message"
                    aria-invalid={errors.message ? "true" : "false"}
                    {...register("message", {
                      required: "Message is required.",
                    })}
                  />
                  {errors.message && (
                    <p className="text-danger mt-2 mb-0">
                      {errors.message.message}
                    </p>
                  )}
                </Col>

                <Col xs={12}>
                  {serviceList.map((service, index) => (
                    <div
                      key={index}
                      className="d-inline-block me-2 me-lg-3 my-2"
                    >
                      <input
                        type="checkbox"
                        className="btn-check"
                        id={`service-${index}`}
                        value={service}
                        {...register("services", {
                          validate: (value) =>
                            (value && value.length > 0) ||
                            "Select at least one service.",
                        })}
                      />
                      <label
                        className="btn contact-us-form-services-buttons btn-outline-secondary"
                        htmlFor={`service-${index}`}
                      >
                        {service}
                      </label>
                    </div>
                  ))}
                  {errors.services && (
                    <p className="text-danger mt-2 mb-0">
                      {errors.services.message}
                    </p>
                  )}
                </Col>

                <Col
                  xs={12}
                  className="d-flex justify-content-between align-items-center"
                >
                  <button type="submit" className="buttons">
                    Send Message <FaArrowRightLong />
                  </button>

                  <p className="contact-us-form-email-link">
                    Prefer email ? <br />
                    <Link href="#!">zonicmediallc@gmail.com</Link>
                  </p>
                </Col>
              </form>
            </div>
          </Col>
        </Row>
      </div>

      {/* contact-us-section-2 */}
      <div className="contact-us-section-2">
        <Row className="justify-content-between align-items-end">
          <Col lg={7}>
            <h2 className="contact-us-sec2-heading">
              From startup to enterprise, grow your business with{" "}
              <span> fast and creative designs!</span>
            </h2>
          </Col>

          <Col lg={3}>
            <p className="contact-us-sec2-descrp">
              Zonic Media is a fantastic design team, with a healthy blend of UI
              and UX skills. Highly recommended
            </p>

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
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
}

export default Page;
