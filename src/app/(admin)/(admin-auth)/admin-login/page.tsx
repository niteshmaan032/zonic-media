"use client";

import { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../admin-auth-style/admin-auth-style.css";

export default function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);

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

        <form className="row g-3">
          <div className="col-12">
            <label className="form-label">
              Email <span>*</span>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="info@gmail.com"
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

          <div className="col-12 forgot-psswrd">
            <button type="button">Forgot Password?</button>
          </div>

          <div className="col-12">
            <button className="button" type="button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
