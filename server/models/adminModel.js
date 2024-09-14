import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, required: true }, // Ensure it's required
  // Other fields
});

// Pre-save hook to hash the password
adminSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
