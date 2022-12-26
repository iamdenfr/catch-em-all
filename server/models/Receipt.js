const {Schema, model, objectId} = require("mongoose")

const Receipt = new Schema({
    _id: {type: objectId, required: true, unique: true},
    date: {type: Date, required: true},
    user: {type: objectId, ref: "User"},
    products: [
        {type: objectId, ref: "Product"},
        {type: Number, required: true}
    ]
})

module.exports = model("Receipt", Receipt)