import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection
        connection.on("connect", () => {
            console.log("MONGODB connected!")
        })
        connection.on("error", () => {
            console.log("Error connecting to database")
            process.exit();
        })
    } catch (error) {
        console.log("Error connecting to database", error)
    }
}