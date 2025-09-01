const express = require('express');
const {
  recordPayment,
  getPayments,
  confirmPayment
} = require('../controllers/paymentController');
const { verifyToken, checkRole } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, recordPayment);
router.get('/:tenantId', verifyToken, getPayments);
router.put('/:id/confirm', verifyToken, checkRole(['admin', 'landlord']), confirmPayment);

module.exports = router;
