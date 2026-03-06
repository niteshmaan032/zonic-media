"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import "@/app/style/contactUs.css";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import Footer from "@/app/components/Footer";
import RecaptchaCheckbox from "@/app/components/RecaptchaCheckbox";

type ContactUsFormValues = {
  fullName: string;
  email: string;
  contact: string;
  message: string;
  services: string[];
  captchaToken: string;
};

function ContactUsPageClient() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");
  const [captchaResetSignal, setCaptchaResetSignal] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactUsFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      contact: "",
      message: "",
      services: [],
      captchaToken: "",
    },
  });

  const captchaToken = watch("captchaToken");

  const serviceList: string[] = [
    "Web Design",
    "Pay Per Click (PPC)",
    "Google My Business (GMB)",
    "Web Development",
    "Local SEO",
  ];

  const onSubmit = async (data: ContactUsFormValues) => {
    setSubmitError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || "Failed to submit form.");
      }

      reset();
      setCaptchaResetSignal((current) => current + 1);
      sessionStorage.setItem(
        "thank_you_access_allowed_at",
        Date.now().toString(),
      );
      router.push("/thank-you");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setCaptchaResetSignal((current) => current + 1);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
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
                  <Link href="mailto:contact@zonicllc.com">
                    <IoMailOutline size={20} /> contact@zonicllc.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=8+The+Green,+STE+B,+Dover,+Kent,+DE+19901,+United+States"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrLocation size={20} /> 8 The Green, STE B Dover Kent, DE
                    19901 United States
                  </Link>
                </li>
              </ul>

              <div className="contact-us-form-button">
                <p>Schedule meeting :</p>

                <Link
                  href="https://calendar.app.google/EGNcQQMvMU3DGP5R6"
                  className="buttons"
                  target="blank"
                >
                  <span>book a strategy call</span>
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
                      minLength: {
                        value: 2,
                        message: "Full name must be at least 2 characters.",
                      },
                      maxLength: {
                        value: 100,
                        message: "Full name must be at most 100 characters.",
                      },
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
                      pattern: {
                        value: /^[0-9]{7,15}$/,
                        message:
                          "Contact number must contain only digits (7 to 15).",
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
                      minLength: {
                        value: 5,
                        message: "Message must be at least 5 characters.",
                      },
                      maxLength: {
                        value: 2000,
                        message: "Message must be at most 2000 characters.",
                      },
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

                <Col xs={12}>
                  <input
                    type="hidden"
                    {...register("captchaToken", {
                      required: "Please complete the CAPTCHA checkbox.",
                    })}
                  />
                  <RecaptchaCheckbox
                    value={captchaToken}
                    onChange={(token) => {
                      setValue("captchaToken", token, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                      });
                    }}
                    resetSignal={captchaResetSignal}
                    error={errors.captchaToken?.message}
                  />
                </Col>

                <Col
                  xs={12}
                  className="d-flex justify-content-between align-items-center"
                >
                  <button
                    type="submit"
                    className="buttons"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <FaArrowRightLong />
                      </>
                    )}
                  </button>

                  <p className="contact-us-form-email-link">
                    Prefer email ? <br />
                    <Link href="#!">zonicmediallc@gmail.com</Link>
                  </p>
                </Col>

                {submitError && (
                  <Col xs={12}>
                    <p className="text-danger mb-0">{submitError}</p>
                  </Col>
                )}
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

            <Link
              href="https://calendar.app.google/EGNcQQMvMU3DGP5R6"
              target="blank"
              className="buttons"
            >
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

export default ContactUsPageClient;
