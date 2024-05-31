

const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Example protected route
router.get('/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route.');
});

module.exports = router;
