var orm = require("../config/orm.js");

var product = {
  selectWhere: function(condition, cb) {
    orm.selectWhere("product", condition, function(res) {
      cb(res);
    });
  },
  all: function(cb) {
    orm.all("product", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("product", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    console.log(objColVals);
    orm.update("product", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("product", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = product;
