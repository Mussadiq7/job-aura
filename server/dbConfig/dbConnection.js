import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const dbConnection = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not defined in environment variables.");
        }
        
        await mongoose.connect(process.env.MONGO_URL);

        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ MongoConnection Failed!!", error);
        process.exit(1); // Exit the app on failure
    }
};

export default dbConnection;
