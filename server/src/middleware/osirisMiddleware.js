const Tests = require('../models/osirisModel.js');

async function validateTestId(req, res, next) {
  try {
    const { id } = req.params;
    const testData = await Tests.findById(id);
    if (!testData) {
      return res.status(404).json({ message: `Test with ID ${id} not found` });
    }
    req.applicant = testData; // Attach for use in route handler
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = validateTestId;