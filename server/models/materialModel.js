import mongoose from "mongoose";

const { Schema } = mongoose;

// Define a schema for the Material model
const materialSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String, // Can be changed to a richer type like Buffer or URL depending on your needs
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course", // Reference to the Course model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Material model
const Material = mongoose.model("Material", materialSchema);
export default Material;
