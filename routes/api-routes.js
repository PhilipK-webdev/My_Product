const router = require("express").Router();
const db = require("../models/index");
router.get("/example", (req, res) => {
    res.send("message from the back end:success");
});
router.get("/all", (req, res) => {
    db.Item.find().then((items) => res.send(items));
});

router.patch("/edit", (req, res) => {
    db.Item.findByIdAndUpdate({ _id: req.body._id }, {
        newPrice: req.body.newPrice,
    }).then(result => res.send(result));
});

router.get("/barcode", (req, res) => {
    //Search by Barcode
});
router.get("/item", (req, res) => {
    db.Item.find({ name: req.body.name }).then(result => res.send(result));
});
router.get("/supplier", (req, res) => {
    db.Item.find({ supplier: req.body.supplier }).then(result => res.send(result));
});

module.exports = router;