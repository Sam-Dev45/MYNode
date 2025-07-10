const { employee } = require('../models');

const EmployeeRepository = {
  findAll: async () => await employee.findAll(),

  findById: async (id) => await employee.findByPk(id),

  create: async (data) => await employee.create(data),

  update: async (id, data) => {
    const emp = await employee.findByPk(id);
    return emp ? emp.update(data) : null;
  },

  delete: async (id) => {
    const emp = await employee.findByPk(id);
    return emp ? emp.destroy() : null;
  },
};

module.exports = EmployeeRepository;
