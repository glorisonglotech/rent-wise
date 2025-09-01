const Property = require('../models/property');
const Tenant = require('../models/tenant');
const Payment = require('../models/payment');

exports.getDashboardStats = async (req, res) => {
  try {
    const totalProperties = await Property.countDocuments();
    const activeTenants = await Tenant.countDocuments({ status: 'active' });
    const totalPayments = await Payment.aggregate([{ $group: { _id: null, total: { $sum: '$amount' } } }]);

    res.status(200).json({
      properties: totalProperties,
      tenants: activeTenants,
      totalRentCollected: totalPayments[0]?.total || 0
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
