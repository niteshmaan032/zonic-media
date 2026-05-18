"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";
import "../admin-auth-style/admin-auth-style.css";

function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validatingToken, setValidatingToken] = useState(true);
  const [tokenIsValid, setTokenIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token")?.trim() ?? "";

  useEffect(() => {
    let ignore = false;

    const validateToken = async () => {
      if (!token) {
        router.replace("/admin-login");
        return;
      }

      try {
        const response = await fetch(
          `/api/admin/auth/reset-password?token=${encodeURIComponent(token)}`,
          { cache: "no-store" },
        );
        const result = (await response.json()) as {
          success?: boolean;
          message?: string;
        };

        if (ignore) {
          return;
        }

        if (!response.ok || !result.success) {
          setError(result.message ?? "This reset link is invalid or expired.");
          setTokenIsValid(false);
          return;
        }

        setTokenIsValid(true);
      } catch {
        if (!ignore) {
          setError("Unable to validate this reset link right now.");
          setTokenIsValid(false);
        }
      } finally {
        if (!ignore) {
          setValidatingToken(false);
        }
      }
    };

    validateToken();

    return () => {
      ignore = true;
    };
  }, [router, token]);

  const handleResetPassword = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!tokenIsValid) {
      setError("This reset link is invalid or expired.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/admin/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setError(result.message ?? "Unable to reset password right now.");
        return;
      }

      setSuccess(result.message ?? "Password reset successfully.");
      setPassword("");
      setConfirmPassword("");
      window.setTimeout(() => router.replace("/admin-login"), 1200);
    } catch {
      setError("Unable to reset password right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-auth-wrapper container">
      <div className="admin-auth-img">
        <Image
          src="/images/reset.png"
          alt="resetpassword"
          width={900}
          height={900}
          priority
        />
      </div>

      <div className="admin-auth-form">
        <div className="admin-auth-form-head">
          <h4 className="admin-form-head">Reset your Password</h4>
          <p className="admin-form-sub-head">Enter your new password</p>
        </div>

        <form className="row g-3" onSubmit={handleResetPassword}>
          <div className="col-12">
            <label className="form-label">
              New Password <span>*</span>
            </label>

            <div className="input-password-container">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your new password"
                autoComplete="new-password"
                value={password}
                disabled={validatingToken || !tokenIsValid || loading}
                onChange={(event) => setPassword(event.target.value)}
              />

              <button
                type="button"
                className="password-toggle-button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? (
                  <FiEyeOff className="password-toggle-icon" />
                ) : (
                  <FiEye className="password-toggle-icon" />
                )}
              </button>
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">
              Confirm Password <span>*</span>
            </label>

            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Re-enter password"
              autoComplete="new-password"
              value={confirmPassword}
              disabled={validatingToken || !tokenIsValid || loading}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>

          {error ? <p className="col-12 error-text mb-0">{error}</p> : null}
          {success ? (
            <p className="col-12 success-text mb-0">{success}</p>
          ) : null}

          <div className="col-12">
            <button
              type="submit"
              className="button"
              disabled={validatingToken || !tokenIsValid || loading}
            >
              {validatingToken
                ? "Validating..."
                : loading
                  ? "Resetting..."
                  : "Reset Password"}
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

export default function ResetPsswrdAdmin() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordForm />
    </Suspense>
  );
}
