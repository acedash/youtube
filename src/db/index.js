import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDb Connected !! Db Host ${connectionInstance.connect.host}`);
    } catch (error) {
        console.log("connection failed: " +  error);
    }
}
console.log(process.env.MONGODB_URI);
export default connectDb;