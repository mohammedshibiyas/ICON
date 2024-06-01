import  Express  from "express";
import router from "./router.js";
import dotenv from 'dotenv'
import cors from 'cors'
import  connection  from "./connection.js";


dotenv.config()
const app=Express();
app.use(Express.json())
app.use(cors());
app.use("/api",router)
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server started at",process.env.PORT);
    })
})