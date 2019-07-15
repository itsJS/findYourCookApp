const express = require('express');
const router = express.Router();

const chefController = require('../controllers/chef');

router.get('/search', chefController.search); // List all chefs
router.post('/filter', chefController.filterChef);
router.get('/name/:chefname', chefController.getChefByName);
router.get('/readdetail/:chefid', chefController.readdetailinfo);
router.post('/chefCalendar', chefController.addWorkTimeEntry);
router.get('/chefCalendar', chefController.getWorkTimeEntries);

module.exports = router;
