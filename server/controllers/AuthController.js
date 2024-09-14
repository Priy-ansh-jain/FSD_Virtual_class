import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Admin from "../models/adminModel.js";
import Teacher from "../models/teacherModel.js";
import Student from "../models/StudentModel.js";

// JWT Secret Key
const JWT_KEY = process.env.JWT_KEY || "your_jwt_secret_key";

// Function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_KEY, { expiresIn: "1h" });
};

// Admin Sign Up
export const signupAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    if (admin) return res.status(400).json({ message: "Admin already exists" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    admin = new Admin({ name, email, password: hashedPassword });
    await admin.save();

    // Generate JWT token
    const token = generateToken(admin._id);
    res.cookie("jwt", token, { httpOnly: true });

    res.status(201).json({ message: "Admin registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Admin Login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = generateToken(admin._id);
    res.cookie("jwt", token, { httpOnly: true });

    res.status(200).json({ message: "Logged in successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Teacher Sign Up
export const signupTeacher = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let teacher = await Teacher.findOne({ email });
    if (teacher)
      return res.status(400).json({ message: "Teacher already exists" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    teacher = new Teacher({ name, email, password: hashedPassword });
    await teacher.save();

    // Generate JWT token
    const token = generateToken(teacher._id);
    res.cookie("jwt", token, { httpOnly: true });

    res.status(201).json({ message: "Teacher registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Teacher Login
export const loginTeacher = async (req, res) => {
  const { email, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = generateToken(teacher._id);
    res.cookie("jwt", token, { httpOnly: true });

    res.status(200).json({ message: "Logged in successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Student Sign Up
export const signupStudent = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let student = await Student.findOne({ email });
    if (student)
      return res.status(400).json({ message: "Student already exists" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    student = new Student({ name, email, password: hashedPassword });
    await student.save();

    // Generate JWT token
    const token = generateToken(student._id);
    res.cookie("jwt", token, { httpOnly: true });

    res.status(201).json({ message: "Student registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Student Login
export const loginStudent = async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (!student) return res.status(404).json({ message: "Student not found" });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = generateToken(student._id);
    res.cookie("jwt", token, { httpOnly: true });

    res.status(200).json({ message: "Logged in successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
