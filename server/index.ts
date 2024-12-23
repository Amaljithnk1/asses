const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
const dashboardRoutes = require('./routes/dashboard');
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');
const chapterRoutes = require('./routes/chapters');
const helpRoutes = require('./routes/help');
const reportRoutes = require('./routes/reports');
const settingsRoutes = require('./routes/settings');

// API Endpoints
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/chapters', chapterRoutes);
app.use('/api/help', helpRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/settings', settingsRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
