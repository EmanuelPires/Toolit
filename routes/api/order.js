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

router.post("/NewOrder", (req,res) =>{
    const cols = ['OrderCost', 'Quantity', 'FK_CustomerID','FK_ProductID'];
    const vals = [req.body.OrderCost, req.body.Quantity, req.body.FK_CustomerID, req.body.FK_ProductID];

    order.create(cols, vals, data =>{
        res.json(data);
    });
});


module.exports = router;

