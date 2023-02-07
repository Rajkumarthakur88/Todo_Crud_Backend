
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Fill All the Fields"]
    }
},{timestamps:true})

module.exports = mongoose.model('todo',todoSchema)