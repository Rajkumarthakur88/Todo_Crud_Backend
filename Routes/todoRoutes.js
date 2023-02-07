
const express = require('express')
const router = express.Router()
const {getTodo, getSingleTodo, createTodo, updateTodo, deleteTodo} = require('./Controllers/todocontrollers')

// Routes

router.get('/',getTodo)

router.get('/:id',getSingleTodo)

router.post('/create',createTodo)

router.put('/update/:id',updateTodo)

router.delete('/delete/:id',deleteTodo)


module.exports = router