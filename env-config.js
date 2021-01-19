const prod = process.env.NODE_ENV === "production";

module.exports = {
  BACKEND_URL: prod ? "https://api.example.com" : "https://localhost:8080",
  GOOGLE_MAP_KEY: "AIzaSyDLJ3EJc4IbB5qTrIoGSfwdMCWfv1O-Ufk",
};
