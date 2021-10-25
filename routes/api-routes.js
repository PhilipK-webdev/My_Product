const router = require("express").Router();
const db = require("../models/index");
router.get("/example", (req, res) => {
    res.send("message from the back end:success");
});
router.get("/all", (req, res) => {
    db.Item.find({}).then((items) => res.send(items));
});

router.patch("/edit/:id", (req, res) => {
    db.Item.findByIdAndUpdate({ _id: req.params.id }, {
        newPrice: req.body.newPrice,
    }).then(result => res.send(result));
});

router.get("/barcode/:id", (req, res) => {
    //Search by Barcode
    db.Item.find({ _id: req.params.id }).then((result) => res.send(result));
});
router.get("/item/:name", (req, res) => {
    db.Item.find({ name: req.params.name }).then(result => res.send(result));
});
router.get("/sup/:supplier", (req, res) => {
    db.Item.find({ supplier: req.params.supplier }).then(result => res.send(result));
});

module.exports = router;