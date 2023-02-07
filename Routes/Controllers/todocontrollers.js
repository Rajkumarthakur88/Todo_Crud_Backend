const mongoose = require('mongoose')
const Todo = require('../../models/todoModel')
const asyncHandler = require('express-async-handler')

const getTodo = asyncHandler(async (req, res) => {

    const allTodos = await Todo.find()

    if (!allTodos) {
        res.status(404)
        throw new Error("Can't Find Data")
    }
    res.json(allTodos)
}
)
const getSingleTodo = asyncHandler(async (req, res) => {

    const todoId = req.params.id
    const singleTodo = await Todo.findById(todoId)

    if (!singleTodo) {
        res.status(400)
        throw new Error("Can' find any Documents")
    }
    res.json(singleTodo)
});
const createTodo = asyncHandler(async (req, res) => {

    const { title } = req.body

    // Validation
    if (!title) {
        throw new Error("Please Include Title")
    }

    const newTodo = {
        title
    }

    const isCreated = await Todo.create(newTodo)

    if (!isCreated) {
        res.status(400)
        throw new Error("Document not Created")
    }
    res.status(200)
    res.json(isCreated)

});
const updateTodo = asyncHandler(async (req, res) => {

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!updatedTodo) {
        res.status(400)
        throw new Error("Document not Updated")
    }
    res.json(updatedTodo)

});

const deleteTodo = asyncHandler(async (req, res) => {

    await Todo.findByIdAndDelete(req.params.id)

    res.json({ msg: "Todo Deleted" })
}
)
module.exports = { getTodo, getSingleTodo, createTodo, updateTodo, deleteTodo }