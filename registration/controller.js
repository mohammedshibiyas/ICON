import mongoose, { Schema } from "mongoose";
import schema from './user.model.js'

export async function addname(req,res){
    const{...add}=req.body
    console.log({...add});
    const data=await schema.create({...add})
    res.status(200).send(data)
}