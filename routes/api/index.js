const router = require("express").Router();
const loginRoutes = require("./login");
const testroutes = require("./test");
const toolSearch = require("./toolsearch");

// Book routes
router.use("/test", testroutes);
router.use("/user", loginRoutes);
router.use("/tool", toolSearch);
module.exports = router;
