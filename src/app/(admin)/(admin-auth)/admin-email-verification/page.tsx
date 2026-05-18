"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import "../admin-auth-style/admin-auth-style.css";

export default function AdminEmailVerification() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const redirectIfLoggedIn = async () => {
      try {
        const response = await fetch("/api/admin/auth/me", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (response.ok) {
          router.replace("/admindashboard");
          router.refresh();
        }
      } catch {
        // Stay on forgot password when no valid admin session exists.
      }
    };

    redirectIfLoggedIn();

    return () => controller.abort();
  }, [router]);

  const handleForgotPassword = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/admin/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setError(result.message ?? "Unable to send reset link right now.");
        return;
      }

      setMessage(
        result.message ??
          "If an active admin account exists for this email, a reset link has been sent.",
      );
    } catch {
      setError("Unable to send reset link right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-auth-wrapper container">
      <div className="admin-auth-img">
        <Image
          src="/images/email.png"
          alt="password"
          width={900}
          height={900}
          priority
        />
      </div>

      <div className="admin-auth-form">
        <div className="admin-auth-form-head">
          <h4 className="admin-form-head">Forgot Password</h4>
          <p className="admin-form-sub-head">
            Enter your email to receive a password reset link
          </p>
        </div>

        <form className="row g-3" onSubmit={handleForgotPassword}>
          <div className="col-12">
            <label className="form-label">
              Email <span>*</span>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="info@gmail.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          {error ? <p className="col-12 error-text mb-0">{error}</p> : null}
          {message ? (
            <p className="col-12 success-text mb-0">{message}</p>
          ) : null}

          <div className="col-12">
            <button className="button" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </div>
        </form>

        <div className="col-12 back-login">
          <button type="button" onClick={() => router.push("/admin-login")}>
            <FiArrowLeft /> Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
