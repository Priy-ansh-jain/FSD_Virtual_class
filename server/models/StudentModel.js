import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  profile: { type: String }, // This could be a URL to a profile picture or some text bio
  email: { type: String, required: true, unique: true },
});

studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
