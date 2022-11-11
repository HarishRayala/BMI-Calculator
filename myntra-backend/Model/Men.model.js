const mongoose=require("mongoose");

const MenSchema=mongoose.Schema({
    Idno:{type:Number},
    categories:{type:String},
    // size:{type:String},
    title:{type:String},
    price:{type:String},
    gender:{type:String},
    sizes:{type:[String]},
    description:{type:String},
    brand:{type:String},
    color:{type:String},
    discount:{type:Number},
    off_price:{type:Number},
    images:{image1:String,image2:String,image3:String,image4:String},
    rating:{type:Number}
})

const MensModel=mongoose.model("men",MenSchema);

module.exports={MensModel}