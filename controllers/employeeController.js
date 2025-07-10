const EmployeeService = require('../services/employeeService');

const EmployeeController = {
  getAll: async (req, res) => {
    const result = await EmployeeService.getAll();
    res.json(result);
  },

  create: async (req, res) => {
    const data = await EmployeeService.create(req.body);
    res.json({ message: "Created", data });
  },

  update: async (req, res) => {
    const data = await EmployeeService.update(req.params.id, req.body);
    if (!data) return res.status(404).send({ message: "Not found" });
    res.json({ message: "Updated", data });
  },

  delete: async (req, res) => {
    const result = await EmployeeService.delete(req.params.id);
    if (!result) return res.status(404).send({ message: "Not found" });
    res.json({ message: "Deleted" });
  }
};

module.exports = EmployeeController;
