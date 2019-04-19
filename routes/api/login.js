const router = require("express").Router();
const customer = require("../../models/customer");
const order = require("../../models/order");

// router.route("/customer")
//   .get(console.log(customer))
//   .then(customer.all)
//   ;

router.get("/customer", (req, res) => {
  // console.log('cust', customer.all())
  customer.all(data => {
    res.json(data);
  });
});

router.post("/newuser", (req, res) => {
  console.log("NEW CUSTOMER");
  const cols = [
    "Name",
    "OKTA_ID",
    "Email",
    "Password",
    "Phone",
    "PlaceID",
    "Image",
    "Address"
  ];
  const vals = [
    "",
    req.body.OktaID,
    req.body.CustomerEmail,
    "",
    "",
    "",
    "",
    ""
  ];

  customer.create(cols, vals, cb => {
    res.json(cb);
  });
});

router.get("/order", (req, res) => {
  console.log("Test");
  order.all(data => {
    res.json(data);
  });
});

router.get("/login/:email", (req, res) => {
  var condition = " Email='" + req.params.email + "'";
  customer.selectWhere(condition, data => {
    res.json(data);
  });
});

module.exports = router;
