const mongoose = require('mongoose')

const connectDB = async()=>{
    mongoose.set('strictQuery', 
true)
 await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected successfully");
}

module.exports = {connectDB}