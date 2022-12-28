const {Schema , model, objectId} = require("mongoose")

const Product = new Schema({
    code: {type: Number, required: true, unique: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String},
    amount: {type: Number, default: 0}
})

module.exports = model("Product", Product)