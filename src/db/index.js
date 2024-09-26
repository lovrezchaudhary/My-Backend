import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected!! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB not Connect", error);
        throw error;
    }
}

export default connectDB;

