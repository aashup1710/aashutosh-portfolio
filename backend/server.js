const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
const path = require('path');

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies in requests
app.use(express.static("public")); // Serve static files like the resume file

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Example route for resume
app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resume.pdf'));
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to my backend server!");
});

app.post("/api/save-user", (req, res) => {
  const { name, email } = req.body;

  // Validate inputs
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  // Log the received data (for testing purposes)
  console.log("Received data:", { name, email });

  // Respond with a success message
  res.status(200).json({ message: "User details saved successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




