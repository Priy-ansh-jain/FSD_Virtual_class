import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Import routes
import adminRoutes from "./routes/AdminRoutes.js";
import teacherRoutes from "./routes/TeacherRoutes.js";
import studentRoutes from "./routes/StudentRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // Correct import

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware
app.use(cors({ origin: process.env.VITE_CLIENT_URL, credentials: true }));

// Define the base URL for different routes
const HOST = process.env.VITE_SERVER_URL || "http://localhost:5000";
const ADMIN_ROUTES = "/admin";
const TEACHER_ROUTES = "/teacher";
const STUDENT_ROUTES = "/student";
const AUTH_ROUTES = "/auth";

// Use routes
app.use(ADMIN_ROUTES, adminRoutes); // Admin-related routes
app.use(TEACHER_ROUTES, teacherRoutes); // Teacher-related routes
app.use(STUDENT_ROUTES, studentRoutes); // Student-related routes
app.use(AUTH_ROUTES, authRoutes); // Auth-related routes (login, signup, etc.)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
