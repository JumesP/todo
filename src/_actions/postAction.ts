'use server'

import PostModel from "../models/postModels";
import connectDB from "../config/database";

export async function getPosts(){
    try {
        await connectDB();
        const data = JSON.parse(JSON.stringify(await PostModel.find()));

        return { data }
    } catch (err) {
        return { errMsg: err.message }
    }
}