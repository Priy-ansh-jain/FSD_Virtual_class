import { Router } from "express";
import {
  loginAdmin,
  loginTeacher,
  loginStudent,
  signupAdmin,
  signupTeacher,
  signupStudent,
} from "../controllers/authController.js"; // Import controller functions

const router = Router();

// Admin login
router.post("/admin/login", loginAdmin);

// Admin signup
router.post("/admin/signup", signupAdmin);

// Teacher login
router.post("/teacher/login", loginTeacher);

// Teacher signup
router.post("/teacher/signup", signupTeacher);

// Student login
router.post("/student/login", loginStudent);

// Student signup
router.post("/student/signup", signupStudent);

export default router;
