import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define a schema for the Course model
const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher', // Reference to the Teacher model
    required: true,
  },
  materials: [{
    type: Schema.Types.ObjectId,
    ref: 'Material', // Reference to the Material model
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Course model
const Course = mongoose.model('Course', courseSchema);
export default Course;
