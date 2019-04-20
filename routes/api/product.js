const router = require("express").Router();
const products = require("../../models/product");

router.put("/updatemyproduct/:query", (req, res) => {
  console.log("Test");
  var condition = "ProductID= " + req.params.query;
  console.log(condition);
  var obj = {
    Product_Name: req.body.Product_Name,
    UnitPrice: req.body.UnitPrice,
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

router.post("/addproduct", (req,res) => {
  console.log("Add Product Testing");
  const cols = ['Product_Name', 'UnitPrice', 'Stock','Availability','ProductPlaceID', 'Image', 'SupplierID','FK_CategoryID'];
  const vals = [req.body.Product_Name, req.body.UnitPrice, req.body.Stock, req.body.Availability, req.body.ProductPlaceID, 
                req.body.Image, req.body.SupplierID, req.body.FK_CategoryID] ;
  
  products.create(cols, vals, data => {
    res.json(data);
  });
  
});

module.exports = router;
