"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../admin-auth-style/admin-auth-style.css";

type LoginResult = {
  success?: boolean;
  message?: string;
  code?: "ACCOUNT_LOCKED" | "PASSWORD_RESET_REQUIRED";
  attemptsRemaining?: number;
  retryAfterSeconds?: number;
  lockUntil?: string;
};

const POST_LOCK_ATTEMPTS = 2;

function formatLockTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default function LoginAdmin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState("");
  const [attemptsRemaining, setAttemptsRemaining] = useState<number | null>(
    null,
  );
  const [lockExpiresAt, setLockExpiresAt] = useState<number | null>(null);
  const [lockRemainingSeconds, setLockRemainingSeconds] = useState(0);
  const [passwordResetRequired, setPasswordResetRequired] = useState(false);
  const isLocked = lockRemainingSeconds > 0;

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
        // Stay on the login page if there is no valid server-side session.
      }
    };

    redirectIfLoggedIn();

    return () => controller.abort();
  }, [router]);

  useEffect(() => {
    if (!lockExpiresAt) {
      setLockRemainingSeconds(0);
      return;
    }

    const updateRemainingSeconds = () => {
      const seconds = Math.max(
        0,
        Math.ceil((lockExpiresAt - Date.now()) / 1000),
      );

      setLockRemainingSeconds(seconds);

      if (seconds === 0) {
        setLockExpiresAt(null);
        setAttemptsRemaining(POST_LOCK_ATTEMPTS);
        setError(
          "You can try again now. Two more wrong attempts will require a password reset.",
        );
      }
    };

    updateRemainingSeconds();
    const timer = window.setInterval(updateRemainingSeconds, 1000);

    return () => window.clearInterval(timer);
  }, [lockExpiresAt]);

  const resetLoginFeedback = () => {
    setError("");
    setAttemptsRemaining(null);
    setLockExpiresAt(null);
    setLockRemainingSeconds(0);
    setPasswordResetRequired(false);
  };

  const applyLockState = (result: LoginResult) => {
    const lockUntil = result.lockUntil
      ? new Date(result.lockUntil).getTime()
      : Date.now() + (result.retryAfterSeconds ?? 120) * 1000;

    setAttemptsRemaining(0);
    setLockExpiresAt(lockUntil);
    setLockRemainingSeconds(
      Math.max(0, Math.ceil((lockUntil - Date.now()) / 1000)),
    );
    setError(result.message ?? "Too many failed attempts.");
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (passwordResetRequired) {
      setError("Please reset your password to continue.");
      return;
    }

    if (isLocked) {
      setError(`Please try again in ${formatLockTime(lockRemainingSeconds)}.`);
      return;
    }

    if (!email.trim() || !password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const result = (await response.json()) as LoginResult;

      if (!response.ok || !result.success) {
        if (typeof result.attemptsRemaining === "number") {
          setAttemptsRemaining(result.attemptsRemaining);
        }

        if (result.code === "ACCOUNT_LOCKED") {
          applyLockState(result);
          setPassword("");
          setLoading(false);
          return;
        }

        if (result.code === "PASSWORD_RESET_REQUIRED") {
          setPasswordResetRequired(true);
          setAttemptsRemaining(0);
          setPassword("");
          setError(
            result.message ??
              "Password login is disabled. Please reset your password.",
          );
          setLoading(false);
          return;
        }

        setError(result.message ?? "Invalid email or password");
        setLoading(false);
        return;
      }

      // Success: keep button disabled during the full redirect.
      // setLoading(false) is intentionally NOT called here — the component
      // unmounts when navigation completes, so there is nothing to re-enable.
      setRedirecting(true);
      router.replace("/admindashboard");
      router.refresh();
    } catch {
      setError("Unable to log in right now. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="admin-auth-wrapper container">
      <div className="admin-auth-img">
        <Image
          src="/images/login.png"
          alt="Login"
          width={900}
          height={900}
          priority
        />
      </div>

      <div className="admin-auth-form">
        <div className="admin-auth-form-head">
          <h4 className="admin-form-head">Zonic Media Admin Panel </h4>
        </div>

        <form className="row g-3" onSubmit={handleLogin}>
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
              onChange={(event) => {
                setEmail(event.target.value);
                resetLoginFeedback();
              }}
            />
          </div>

          <div className="col-12">
            <label className="form-label">
              Password <span>*</span>
            </label>

            <div className="input-password-container">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                autoComplete="current-password"
                value={password}
                disabled={loading || isLocked || passwordResetRequired}
                onChange={(event) => setPassword(event.target.value)}
              />

              <button
                type="button"
                className="password-toggle-button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                disabled={loading || isLocked || passwordResetRequired}
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

          <div className="col-12 forgot-psswrd">
            <button
              type="button"
              onClick={() => router.push("/admin-email-verification")}
            >
              {passwordResetRequired ? "Reset Password" : "Forgot Password?"}
            </button>
          </div>

          {error ? <p className="col-12 error-text mb-0">{error}</p> : null}
          {attemptsRemaining !== null && !isLocked && !passwordResetRequired ? (
            <p className="col-12 admin-login-attempts mb-0">
              Attempts left: {attemptsRemaining}
            </p>
          ) : null}
          {isLocked ? (
            <p className="col-12 admin-login-lock mb-0">
              Try again in {formatLockTime(lockRemainingSeconds)}
            </p>
          ) : null}

          <div className="col-12">
            <button
              className="button"
              type="submit"
              disabled={loading || isLocked || passwordResetRequired}
            >
              {redirecting
                ? "Redirecting..."
                : loading
                  ? "Logging in..."
                  : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
