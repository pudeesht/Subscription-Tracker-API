import mongoose from "mongoose";
import { Error } from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI)
{
    throw new Error("Please define the mongodb URI in .env.(production/deployment).local" );
}



const connectionToDatabse= async ()=>{
    try{
        await mongoose.connect(DB_URI);

        console.log(`connected to database  in  ${NODE_ENV} mode`);
    }
    catch(error){
        console.log("erorr connecting to db", error);
        process.exit(1);

    }
}


export default connectionToDatabse;