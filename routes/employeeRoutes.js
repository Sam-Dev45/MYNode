const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

router.get('/list', EmployeeController.getAll);
router.post('/add', EmployeeController.create);
router.put('/edit/:id', EmployeeController.update);
router.delete('/delete/:id', EmployeeController.delete);

module.exports = router;
