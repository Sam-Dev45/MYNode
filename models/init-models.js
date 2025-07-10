var DataTypes = require("sequelize").DataTypes;
var _campany = require("./campany");
var _employee = require("./employee");

function initModels(sequelize) {
  var campany = _campany(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);


  return {
    campany,
    employee,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
