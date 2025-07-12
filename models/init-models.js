var DataTypes = require("sequelize").DataTypes;
var _campany = require("./campany");
var _employee = require("./employee");
var _users = require("./users");

function initModels(sequelize) {
  var campany = _campany(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    campany,
    employee,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
