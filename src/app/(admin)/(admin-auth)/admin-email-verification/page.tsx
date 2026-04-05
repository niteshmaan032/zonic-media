"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import "../admin-auth-style/admin-auth-style.css";

export default function AdminEmailVerification() {
  const router = useRouter();

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
            <button className="button" type="button">
              Send Reset Link
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
