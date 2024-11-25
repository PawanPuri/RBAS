const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

// Protected route for Admins only
router.get('/admin', authMiddleware, roleMiddleware(['Admin']), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

// Protected route for Users and Moderators
router.get('/user', authMiddleware, roleMiddleware(['User', 'Moderator']), (req, res) => {
  res.json({ message: 'Welcome, User or Moderator!' });
});

module.exports = router;
