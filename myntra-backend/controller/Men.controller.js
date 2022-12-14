const { MensModel } = require("../Model/Men.model");

const getMenData=async(req,res)=>{
    const menData=await MensModel.find();
    res.send(menData)
}
const filterdata=async(req,res)=>{
    const {brand,color,categories,price}=req.query
    const filterData=await MensModel.find({$or:[{brand},{color},{categories},{price}]});
    res.send(filterData)
}

// const getColor=async(req,res)=>{
//     const {color}=req.query
//     const brandData=await MensModel.find({color});
//     res.send(brandData)
// }

const postMensData=async(req,res)=>{
    const {Idno,categories,title,price,gender,sizes,description,brand,color,discount,off_price,images,rating}=req.body
    const data=new MensModel(req.body);
    if(Idno && categories && title && price && gender && sizes && description && brand && color && discount && off_price && images && rating){
        data.save()
        res.send("Posted Successfully")
    }else{
        console.log(req.body)
        res.send("Please send all the Fields")
    }
}

const MensDataController={
    getMenData,
    filterdata,
    // getColor,
    postMensData
}

module.exports={MensDataController}