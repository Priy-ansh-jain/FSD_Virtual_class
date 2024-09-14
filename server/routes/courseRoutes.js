// routes/courseRoutes.js
import express from "express";
import Course from "../models/courseModel.js";
import Material from "../models/materialModel.js";

const router = express.Router();

// Add a new course
router.post("/course", async (req, res) => {
  try {
    const { title, description, instructor, materials } = req.body;

    // Create a new course
    const newCourse = new Course({
      title,
      description,
      instructor,
      materials,
    });

    // Save the course
    await newCourse.save();

    // Update materials to reference the new course
    if (materials && materials.length > 0) {
      await Material.updateMany(
        { _id: { $in: materials } },
        { $set: { course: newCourse._id } }
      );
    }

    res.status(201).json({ message: "Course created successfully", newCourse });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

export default router;
