const router = require("express").Router();
const product = require("../../models/product");

router.get("/toolsearch/:toolname", (req, res) => {
  var condition = " Product_Name= '" + req.params.toolname + "'";
  console.log("query: " + condition);
  product.selectWhere(condition, data => {
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
