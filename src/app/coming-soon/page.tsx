"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Row, Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import "@/app/style/comingSoon.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RecaptchaCheckbox from "@/app/components/RecaptchaCheckbox";
import { SITE_CONTACT } from "@/shared/siteConfig";

type ComingSoonFormValues = {
  fullName: string;
  email: string;
  contact: string;
  message: string;
  services: string[];
  captchaToken: string;
};

function Page() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [captchaResetSignal, setCaptchaResetSignal] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ComingSoonFormValues>({
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
    "UI/UX Design",
    "Pay Per Click (PPC)",
    "Branding",
    "Google My Business (GMB)",
    "Web Development",
    "Local SEO",
  ];

  const onSubmit = async (data: ComingSoonFormValues) => {
    if (isSubmitting) return;

    setSubmitError("");
    setIsSubmitting(true);

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
      sessionStorage.setItem("thank_you_access_allowed_at", Date.now().toString());
      router.push("/thank-you");
    } catch (error) {
      console.error("Coming soon form submission failed:", error);
      setCaptchaResetSignal((current) => current + 1);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="coming-soon-wrapper">
        <div className="coming-soon-section">
          <Row className="coming-soon-row m-0">
            {/* Left Side: Content */}
            <Col xs={12} lg={5} className="p-0">
              <div className="coming-soon-content">
                <h1 className="coming-soon-heading">
                  Awesome Website <br /> <span> Coming Soon ! </span>
                </h1>

                <p>
                  Coming soon-bringing you actionable insights, data-driven
                  strategies, and emerging digital trends designed to help your
                  business grow and scale online.
                </p>

                <p>
                  No worries-we&apos;re here and ready to work with you. Connect
                  with us to get started.
                </p>

                <div className="coming-soon-button">
                  <p>Explore our website :</p>

                  <Link href="/" className="buttons">
                    <span>Back to home </span>
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
              <div className="coming-soon-form-wrapper">
                <form className="row g-4" onSubmit={handleSubmit(onSubmit)} noValidate>
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
                        pattern: {
                          value: /^[0-9]{7,15}$/,
                          message:
                            "Contact number must contain only digits (7 to 15).",
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
                      <p className="text-danger mt-2 mb-0">{errors.message.message}</p>
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
                          className="btn coming-soon-services-button btn-outline-secondary"
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

                    <p className="coming-soon-email-link">
                      Prefer email ? <br />
                      <Link href={SITE_CONTACT.emailHref}>
                        {SITE_CONTACT.email}
                      </Link>
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
      </div>
    </>
  );
}

export default Page;
