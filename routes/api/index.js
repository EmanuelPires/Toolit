const router = require("express").Router();
const loginRoutes = require("./login");
const testroutes = require("./test");
const toolSearch = require("./toolsearch");
const product = require("./product");
const order = require("./order");
const review = require("./review");
const profile = require("./profile");

// Book routes
router.use("/test", testroutes);
router.use("/user", loginRoutes);
router.use("/tool", toolSearch);
router.use("/product", product);
router.use("/order", order);
router.use("/review", review);
router.use("/profile", profile);
router.use("/customer", profile);

module.exports = router;
