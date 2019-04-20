const router = require("express").Router();
const product = require("../../models/product");
const axios = require("axios");

router.get("/toolsearch/:toolname", (req, res) => {
  var condition = " Product_Name= '" + req.params.toolname + "'";
  console.log("query: " + condition);
  product.selectWhere(condition, data => {
    res.json(data);
  });
});

router.get("/usertools/:id", (req, res) => {
  var condition = " SupplierID= " + req.params.id;
  console.log("query: " + condition);
  product.selectWhere(condition, data => {
    res.json(data);
  });
});

router.get("/distance/:id1/:id2", (req,res) =>{
  const url1 = "origins=place_id:";
  const url2 = "&destinations=place_id:";
  const url3 = "&key=AIzaSyB_aSR45DHCAraJSCrm20csNj_X4LG6410";
  let url = url1+req.params.id1+url2+req.params.id2+url3;
  axios.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&"+url).then(data => {
          res.json(data);
        });
  });

module.exports = router;

// app.get("/search/:productname", function(req, res) {
//   db.Product.findAll({
//     where: { Product_Name: req.params.productname },
//     include: [db.Customer]
//   }).then(function(dbproducts) {
//     res.render("index_products", {
//       product: dbproducts
//     });
//   });
// });
