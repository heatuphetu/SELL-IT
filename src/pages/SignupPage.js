// src/pages/SignupPage.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api/auth.api";

export default function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer", // buyer | seller
  });

  const [status, setStatus] = useState({ loading: false, error: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!form.password.trim()) return "Please enter a password.";
    if (form.password.length < 6) return "Password must be at least 6 characters.";
    if (form.password !== form.confirmPassword) return "Passwords do not match.";
    if (!["buyer", "seller"].includes(form.role)) return "Please choose a valid role.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "" });

    const errMsg = validate();
    if (errMsg) {
      setStatus({ loading: false, error: errMsg });
      return;
    }

    try {
      const result = await signup({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
        role: form.role,
      });

      // store tokens if backend returns them
      if (result?.access) localStorage.setItem("accessToken", result.access);
      if (result?.refresh) localStorage.setItem("refreshToken", result.refresh);
      if (result?.user) localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/");
    } catch (err) {
      setStatus({
        loading: false,
        error: err?.message || "Signup failed. Please try again.",
      });
      return;
    }

    setStatus({ loading: false, error: "" });
  };

  return (
    <div className="authPage">
      <div className="authCard card">
        <h1 className="authTitle">Create your account</h1>
        <p className="authSubtitle">Join SellIt to buy and sell with ease.</p>

        {status.error ? <div className="authError">{status.error}</div> : null}

        <form className="authForm" onSubmit={onSubmit}>
          <label className="authLabel">
            Full name
            <input
              className="authInput"
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              autoComplete="name"
            />
          </label>

          <label className="authLabel">
            Email
            <input
              className="authInput"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label className="authLabel">
            Password
            <input
              className="authInput"
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </label>

          <label className="authLabel">
            Confirm password
            <input
              className="authInput"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={onChange}
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </label>

          <div className="authRoleRow">
            <span className="authRoleLabel">I want to use SellIt as:</span>

            <div className="authRoleOptions">
              <label className={`rolePill ${form.role === "buyer" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="role"
                  value="buyer"
                  checked={form.role === "buyer"}
                  onChange={onChange}
                />
                Buyer
              </label>

              <label className={`rolePill ${form.role === "seller" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="role"
                  value="seller"
                  checked={form.role === "seller"}
                  onChange={onChange}
                />
                Seller
              </label>
            </div>
          </div>

          <button className="btn authSubmit" type="submit" disabled={status.loading}>
            {status.loading ? "Creating..." : "Create account"}
          </button>
        </form>

        <div className="authDivider">
          <span>Already have an account?</span>
        </div>

        <Link className="btn authAltBtn" to="/login">
          Sign in
        </Link>

        <p className="authFinePrint">
          By creating an account, you agree to SellIt’s Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
