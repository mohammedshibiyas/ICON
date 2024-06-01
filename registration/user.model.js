import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:{type:String},
    age:{type:String},
    gender:{type:String},
    mark_1:{type:String},
    mark_2:{type:String},
    mark_3:{type:String},
    total:{type:String},
    percentage:{type:String}

})
export default mongoose.model.ICON||mongoose.model("icon",schema)