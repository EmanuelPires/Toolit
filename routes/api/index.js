const router = require("express").Router();
const loginRoutes = require("./login");
const testroutes = require("./test");
const toolSearch = require("./toolsearch");
const product = require("./product");

// Book routes
router.use("/test", testroutes);
router.use("/user", loginRoutes);
router.use("/tool", toolSearch);
router.use("/product", product);

module.exports = router;
