// src/api/auth.api.js
import { apiClient } from "./client";

/**
 * POST /api/auth/login/
 * body: { email, password }
 * response: { access, refresh, user }
 */
export async function login({ email, password }) {
  return apiClient.request("/api/auth/login/", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

/**
 * POST /api/auth/signup/
 * body: { name, email, password, role }
 * response: { access, refresh, user }
 */
export async function signup({ name, email, password, role }) {
  return apiClient.request("/api/auth/signup/", {
    method: "POST",
    body: JSON.stringify({ name, email, password, role }),
  });
}
