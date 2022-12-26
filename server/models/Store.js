const{Schema, model, objectId} = require("mongoose")

const Store = new Schema({ 
    users_ids: [
        {type: Schema.Types.ObjectId, ref: "User"}
    ],
    store_address: {type: String, required: true},
    products_ids: [
        {type: Schema.Types.ObjectId, ref: "Product"}
    ],
    num: {type: Number}
})

module.exports = model("Store", Store)