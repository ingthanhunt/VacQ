const express = require('express');

const { getAppointments, getAppointment, addAppoointment, updateAppointment, deleteAppointment } = require('../controllers/appointments');

const router = express.Router({ mergeParams : true });

const { protect, authorize } = require('../middleware/auth');

router.route('/')
  .get(protect, getAppointments)
  .post(protect, authorize('admin', 'user'), addAppoointment);

router.route('/:id')
  .get(protect, getAppointment)
  .put(protect, authorize('admin', 'user'),updateAppointment)
  .delete(protect, authorize('admin', 'user'),deleteAppointment);

module.exports = router; 