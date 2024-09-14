import express from "express";
import { verifyToken } from "../middleware/AuthMiddleware.js";
import { verifyAdmin } from "../middleware/adminMiddleware.js";
import Admin from "../models/adminModel.js"; // Adjust according to your model structure
import Teacher from "../models/teacherModel.js";
import Student from "../models/StudentModel.js";
import Course from "../models/courseModel.js"; // Example course model
import Material from "../models/materialModel.js"; // Example material model

const router = express.Router();

// Middleware for protected routes
const adminMiddleware = [verifyToken, verifyAdmin];

// Remove a teacher
router.delete("/teacher/:id", adminMiddleware, async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });
    res.status(200).json({ message: "Teacher removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

// Remove a student
router.delete("/student/:id", adminMiddleware, async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json({ message: "Student removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

// Delete a course
router.delete("/course/:id", adminMiddleware, async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

// Delete a material
router.delete("/material/:id", adminMiddleware, async (req, res) => {
  try {
    const material = await Material.findByIdAndDelete(req.params.id);
    if (!material)
      return res.status(404).json({ message: "Material not found" });
    res.status(200).json({ message: "Material deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

export default router;
