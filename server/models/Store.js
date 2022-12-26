const{Schema, model, objectId} = require("mongoose")

const Store = new Schema({
    store_id: {type: objectId, required: true, unique: true},
    store_address: {type: String, required: true},
    products: [
        {type: objectId, ref: "Product"},
        {type: Number, required: true}
    ]
})

module.exports = model("Store", Store)