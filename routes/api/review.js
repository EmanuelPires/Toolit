const router = require("express").Router();
const review = require("../../models/review");

router.post("/feedback", (req, res) =>{
    console.log(req.body);
    console.log(req.body.Rating);
    console.log(req.body.FK_ProductID);
    let cols = ['Rating', 'Comments', 'FK_ProductID'];  
    let vals = [req.body.Rating, req.body.Comments, req.body.FK_ProductID]
    console.log(vals);
    review.create(cols,vals, data =>{
        res.json(data);
    }) ;
});


module.exports = router;