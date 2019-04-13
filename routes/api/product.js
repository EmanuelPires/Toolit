const router = require("express").Router();
const products = require("../../models/product");

router.put("/updatemyproduct/:query", (req, res) => {
  console.log("Test");
  var condition = "ProductID= " + req.params.query;
  console.log(condition);
  var obj = {
    Product_Name: req.body.Product_Name,
    UnitPrice: req.body.Price,
    Stock: req.body.Stock
  };
  console.log(obj);
  products.update(obj, condition, data => {
    res.json(data);
  });
});

router.delete("/deleteproduct/:id", (req, res) => {
  console.log("Delete Test");
  var condition = "ProductID= " + req.params.id;
  console.log(condition);
  products.delete(condition, data => {
    res.json(data);
  });
});

module.exports = router;
