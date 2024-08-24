import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.DB_URL;

export const connectUsingMongoose = async() => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB using mongoose is connected")
    }catch(error){
        console.error("Mongoose connection error: ", error)
    }
}