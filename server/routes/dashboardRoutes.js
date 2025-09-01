const express = require('express');
const { getDashboardStats } = require('../controllers/dashboardController');
const { verifyToken, checkRole } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, checkRole(['admin', 'landlord']), getDashboardStats);

module.exports = router;
