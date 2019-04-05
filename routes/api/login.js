const router = require("express").Router();
const customer = require("../../models/customer")

router.route("/")
  .get(customer.all);




module.exports = router;  
  