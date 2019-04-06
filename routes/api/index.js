const router = require("express").Router();
const loginRoutes = require("./login");
const testroutes = require("./test");


// Book routes
router.use("/test", testroutes);
router.use("/user", loginRoutes);

module.exports = router;
