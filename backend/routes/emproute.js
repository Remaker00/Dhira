const {Router} = require('express');
const router = Router();

const EmployController = require('../Controller/empcontroller')

router.post('/employees', EmployController.insertemploy);
router.get('/get_employees', EmployController.getemploy);

module.exports = router;
