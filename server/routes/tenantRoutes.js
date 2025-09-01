const express = require('express');
const {
  assignTenant,
  getTenant,
  terminateLease
} = require('../controllers/tenantController');
const { verifyToken, checkRole } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, checkRole(['admin', 'landlord']), assignTenant);
router.get('/:id', verifyToken, getTenant);
router.put('/:id/terminate', verifyToken, checkRole(['admin', 'landlord']), terminateLease);

module.exports = router;
