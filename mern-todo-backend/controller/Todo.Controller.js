const { Todo } = require("../Model/Todo.model");

const getTodo=async(req,res)=>{
    const todoData=await Todo.find();
    res.send(todoData)
}

const postTodo=async(req,res)=>{
    const {todoId,taskname,status,tag}=req.body
    const data=new Todo(req.body);
    if(todoId && taskname && status && tag ){
        data.save()
        res.send("Posted Successfully")
    }else{
        res.send("Please send all the Fields")
    }
}

const putTodo=async(req,res)=>{
    const {todoId}=req.params;
    await Todo.updateOne({todoId:todoId},req.body)
    res.status(201).send("Updated Successfully")
}

const deleteTodo=async(req,res)=>{
    const {todoId}=req.params;
    await Todo.deleteOne({todoId:todoId},req.body);
    res.send("Deleted Successfully")
}


const TodoController={
    getTodo,
    postTodo,
    putTodo,
    deleteTodo
}

module.exports={TodoController}