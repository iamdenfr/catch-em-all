const{Schema, model, objectId} = require("mongoose")

const Store = new Schema({
    store_address: {type: String, required: true}, 
    users_ids: [
        {type: Schema.Types.ObjectId, ref: "User"}
    ],
    products_ids: [    
        {type: Schema.Types.ObjectId, ref: "Product"}
    ],
    num: {type: Number}
})

module.exports = model("Store", Store)