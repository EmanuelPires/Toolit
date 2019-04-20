const router = require("express").Router();
const order = require("../../models/order");

router.get("/getorders/:id", (req, res) =>{

    const id = req.params.id;
    console.log("Testing Order"+id);
    var condition = "FK_CustomerID= " +id;
    order.selectWhereOrder(condition, data =>{
        res.json(data);
    }) ;
});


module.exports = router;

