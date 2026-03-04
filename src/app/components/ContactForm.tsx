"use client";

import Link from "next/link";
import "@/app/style/contactform.css";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { FaArrowRightLong } from "react-icons/fa6";
import { Row, Col } from "react-bootstrap";

type ContactFormValues = {
  fullName: string;
  email: string;
  contact: string;
  message: string;
  services: string[];
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
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
    <div className="contact-form-section">
      <Row className="contact-form-row m-0">
        <Col xs={12} lg={5} className="p-0">
          <div className="contact-form-content">
            <h2 className="contact-form-heading">
              Have a Project in Mind? <br /> <span> Let&apos;s talk </span>
            </h2>

            <ul className="contact-form-points">
              <li>
                <FaRegCircleCheck size={18} /> Long-term support beyond launch
              </li>
              <li>
                <FaRegCircleCheck size={18} /> We&apos;ll respond in 24 hours fast
                & focused.
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

        <Col xs={12} lg={6} className="p-0">
          <div className="contact-form-wrapper">
            <form className="row g-4" onSubmit={handleSubmit(onSubmit)} noValidate>
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
                  <p className="text-danger mt-2 mb-0">{errors.fullName.message}</p>
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
                  <p className="text-danger mt-2 mb-0">{errors.email.message}</p>
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
                  <p className="text-danger mt-2 mb-0">{errors.contact.message}</p>
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
                  <p className="text-danger mt-2 mb-0">{errors.message.message}</p>
                )}
              </Col>

              <Col xs={12}>
                {serviceList.map((service, index) => (
                  <div key={index} className="d-inline-block me-2 me-lg-3 my-2">
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
                      className="btn form-services-buttons btn-outline-secondary"
                      htmlFor={`service-${index}`}
                    >
                      {service}
                    </label>
                  </div>
                ))}
                {errors.services && (
                  <p className="text-danger mt-2 mb-0">{errors.services.message}</p>
                )}
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
