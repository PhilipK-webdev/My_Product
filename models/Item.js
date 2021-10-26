const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: "String is required"
    },
    price: {
        type: Number,
        required: "Price is required"
    },
    newPrice: {
        type: Number
    },
    image: {
        type: String,
        trim: true,
    },
    supplier: {
        type: String
    },
    editable: { type: String },
    discount: { type: String },
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;