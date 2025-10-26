// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import your routes
const authRoutes = require('./routes/auth');  // adjust path if needed
app.use('/api/auth', authRoutes);

// Add other routes here
// app.use('/api/students', studentRoutes);

// Serve frontend (React) if you have it


// // Serve React build
// const frontendPath = path.join(__dirname, 'build'); // if you run 'npm run build' in repo root
// app.use(express.static(frontendPath));

// // Catch-all for React routes
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(frontendPath, 'index.html'));
// });


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
