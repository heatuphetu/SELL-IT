// src/pages/LoginPage.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth.api";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [status, setStatus] = useState({
    loading: false,
    error: "",
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "" });

    // Basic frontend validation
    if (!form.email.trim() || !form.password.trim()) {
      setStatus({ loading: false, error: "Please enter email and password." });
      return;
    }

    try {
      const result = await login({
        email: form.email.trim(),
        password: form.password,
      });

      // Backend-ready token storage (later: use httpOnly cookies if backend supports)
      // For now we store tokens only if backend returns them.
      if (result?.access) localStorage.setItem("accessToken", result.access);
      if (result?.refresh) localStorage.setItem("refreshToken", result.refresh);

      // Optional: store user info
      if (result?.user) localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/");
    } catch (err) {
      setStatus({
        loading: false,
        error: err?.message || "Login failed. Please try again.",
      });
      return;
    }

    setStatus({ loading: false, error: "" });
  };

  return (
    <div className="authPage">
      <div className="authCard card">
        <h1 className="authTitle">Welcome back</h1>
        <p className="authSubtitle">Sign in to continue on SellIt.</p>

        {status.error ? <div className="authError">{status.error}</div> : null}

        <form className="authForm" onSubmit={onSubmit}>
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
              autoComplete="current-password"
            />
          </label>

          <div className="authRow">
            <label className="authCheck">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={onChange}
              />
              Remember me
            </label>

            <button className="authLinkBtn" type="button">
              Forgot password?
            </button>
          </div>

          <button className="btn authSubmit" type="submit" disabled={status.loading}>
            {status.loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="authDivider">
          <span>New here?</span>
        </div>

        <Link className="btn authAltBtn" to="/signup">
          Create an account
        </Link>

        <p className="authFinePrint">
          By signing in, you agree to SellIt’s Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
