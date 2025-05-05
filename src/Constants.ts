export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://tasker-collaborate-app.vercel.app"
    : "http://localhost:3000";
