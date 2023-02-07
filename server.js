const express = require('express')
const { connectDB } = require('./config/db')
const todoRoutes = require('./Routes/todoRoutes')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.port || 5000

// Database connectivity
connectDB()


// Get
app.get('/', (req, res) => {
    res.json({ msg: "Hello, Welcome to the Todo Api || Use the /todo endPoint to get the todo list ", })
})

// Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/todo', todoRoutes)
app.listen(port, () => {
    console.log(`Server is Running at Port ${port}`);
})

// we can run this server using the node server.js command