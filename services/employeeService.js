const EmployeeRepository = require('../repositories/employeeRepository');

const EmployeeService = {
  getAll: () => EmployeeRepository.findAll(),
  getById: (id) => EmployeeRepository.findById(id),
  create: (data) => EmployeeRepository.create(data),
  update: (id, data) => EmployeeRepository.update(id, data),
  delete: (id) => EmployeeRepository.delete(id),
};

module.exports = EmployeeService;
