const { Schema, model } = require('mongoose')
const schema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    date: {
        type: Date
    },
    image: {
        type: String
    },
    gender: {
        type: String
    },
    phone: {
        type: Number
    },
    password: {
        type: String
    },
    isManager: {
        type: Boolean,
        default:false
    },
    isDeveloper: {
        type: Boolean,
        default:false
    },
    CreatedAt: {
        type: Date,
        default: new Date()
    }
})

module.exports=model("User",schema)