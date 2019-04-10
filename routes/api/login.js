const router = require("express").Router();
const customer = require("../../models/customer");
const order = require("../../models/order");

// router.route("/customer")
//   .get(console.log(customer))
//   .then(customer.all)
//   ;

router.get("/login/:id", (req, res) => {
  var condition = " CustomerID= " + req.params.id;
  customer.selectWhere(condition, data => {
    res.json(data);
  });
});

router.get("/customer", (req, res) => {
  // console.log('cust', customer.all())
  customer.all(data => {
    res.json(data);
  });
});

router.get("/order", (req, res) => {
  console.log("Test");
  order.all(data => {
    res.json(data);
  });
});

module.exports = router;
