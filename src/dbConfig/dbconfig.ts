import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection;

        connection.on("connected", () => {
        })

        connection.on("error", (err) => {
            console.log("error connecting to database")
            console.log(err)
        })
    }
    catch(err){
        console.log("something went wrong")
        console.log(err)
    }
}