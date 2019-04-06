const router = require("express").Router();
const customer = require("../../models/customer")

// router.route("/customer")
//   .get(console.log(customer))
//   .then(customer.all)
//   ;

router.get('/customer', (req, res) => {
  // console.log('cust', customer.all())
  customer.all((data) => {
    res.json(data)
  })
})




module.exports = router;  
  