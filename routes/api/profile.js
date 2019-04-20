const router = require("express").Router();
const customer = require("../../models/customer");

router.put("/updatemyprofile/:query", (req, res) => {
  console.log("Test");
  var condition = "CustomerID= " + req.params.query;
  console.log(condition);
  var obj = {
    Name: "'"+req.body.Name+"'",
    Email: req.body.Email,
    Phone: req.body.Phone,
    PlaceID: req.body.PlaceID,
    Image: req.body.Image
  };
  console.log(obj);
  customer.update(obj, condition, data => {
    res.json(data);
  });
});

router.put("/updateimage", (req, res) => {
  console.log("Testing Image Upload");

  customer.updateProfile(req.body, cb => {
    res.json(cb);
  });
});

module.exports = router;