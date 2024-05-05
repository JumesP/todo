'use server'

import PostModel from "../models/postModels";
import connectDB from "../config/database";

export async function getPosts(){
    try {
        await connectDB();
        const data = JSON.parse(JSON.stringify(await PostModel.find()));
        // const data = await PostModel.find();

        // throw new Error("This is an error")

        console.log("Database data: vvv")
        console.log(data);
        console.log("Database data: ^^^")

        return { data }
    } catch (err) {
        return { errMsg: err.message }
    }
}