const express=require("express");
const { TodoController } = require("../controller/Todo.Controller");
const { authentication } = require("../middleware/authentication");
const todoRouter=express.Router();

todoRouter.use(express.json());

todoRouter.get("/",TodoController.getTodo);

todoRouter.post("/create",authentication,TodoController.postTodo);

todoRouter.put("/:todoId",authentication,TodoController.putTodo);

todoRouter.delete("/:todoId",authentication,TodoController.deleteTodo);

module.exports={todoRouter}