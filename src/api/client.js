// src/api/client.js
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

async function request(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const res = await fetch(url, { ...options, headers });

  // Try to parse JSON if possible
  let data = null;
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    data = await res.json();
  } else {
    data = await res.text();
  }

  if (!res.ok) {
    const message =
      (data && data.detail) ||
      (data && data.message) ||
      "Request failed. Please try again.";
    const err = new Error(message);
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data;
}

export const apiClient = { request, API_BASE_URL };
