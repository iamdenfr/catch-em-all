const {Schema , model, objectId} = require("mongoose")

const Product = new Schema({
    _id : {type: objectId, required: true, unique: true},
    code: {type: Number, required: true, unique: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String}
})

module.exports = model("Product", Product)