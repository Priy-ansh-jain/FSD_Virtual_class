import mongoose from "mongoose";
import bcrypt from "bcrypt";

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  profession: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Pre-save hook to hash the password
teacherSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
