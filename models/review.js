var orm = require("../config/orm.js");

var review = {
  selectWhere: function(condition, cb) {
    orm.selectWhere("review", condition, function(res) {
      cb(res);
    });
  },

  //Testing

  all: function(cb) {
    orm.all("review", function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("review", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("review", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("review", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = review;
