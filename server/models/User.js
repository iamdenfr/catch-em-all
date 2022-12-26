const {Schema, model, objectId} = require("mongoose")

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    num: {type: Number, ref: "Store"}
})

module.exports = model("User", User)

