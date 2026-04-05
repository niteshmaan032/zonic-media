"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";
import "../admin-auth-style/admin-auth-style.css";

export default function ResetPsswrdAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

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

        <form className="row g-3">
          <div className="col-12">
            <label className="form-label">
              New Password <span>*</span>
            </label>

            <div className="input-password-container">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your new password"
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
              type="password"
              className="form-control"
              placeholder="Re-enter password"
            />
          </div>

          <div className="col-12">
            <button type="button" className="button">
              Reset Password
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
