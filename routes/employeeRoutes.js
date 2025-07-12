const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/list', verifyToken, EmployeeController.getAll);
router.post('/add', verifyToken, EmployeeController.create);
router.put('/edit/:id', verifyToken, EmployeeController.update);
router.delete('/delete/:id', verifyToken, EmployeeController.delete);

module.exports = router;
