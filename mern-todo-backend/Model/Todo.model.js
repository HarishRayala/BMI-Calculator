const mongoose=require("mongoose");

const todoSchema=mongoose.Schema({
    todoId:Number,
    taskname:String,
    status:Boolean,
    tag:String
})

const Todo=mongoose.model("todo",todoSchema);

module.exports={Todo}