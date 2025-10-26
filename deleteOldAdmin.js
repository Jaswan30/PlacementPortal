// deleteOldAdmin.js
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    const res = await User.deleteMany({ email: "admin@gmail.com" });
    console.log("Deleted documents count:", res.deletedCount);
    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
};

run();
