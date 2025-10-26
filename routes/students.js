const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Student schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  course: { type: String, required: true }
});


const Student = mongoose.model("Student", studentSchema);

// POST /api/students - add a new student
router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    console.error("Backend error:", error);
    res.status(500).json({ message: "Unknown error", error: error.message });
  }
});

// GET /api/students - get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unknown error", error: error.message });
  }
});

module.exports = router;
