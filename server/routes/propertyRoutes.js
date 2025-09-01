const express = require('express');
const {
  createProperty,
  getProperties,
  updateProperty,
  deleteProperty
} = require('../controllers/propertyController');
const { verifyToken, checkRole } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, checkRole(['admin', 'landlord']), createProperty);
router.get('/', verifyToken, getProperties);
router.put('/:id', verifyToken, checkRole(['admin', 'landlord']), updateProperty);
router.delete('/:id', verifyToken, checkRole(['admin']), deleteProperty);

module.exports = router;
