const {Schema, model, objectId} = require("mongoose")

const Receipt = new Schema({
    date: {type: Date, required: true},
    products: [
        {type: Schema.Types.ObjectId, ref: "Product"},
        {type: Number, required: true}
    ]
})

module.exports = model("Receipt", Receipt)