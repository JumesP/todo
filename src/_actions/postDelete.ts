'use server'

// import PostModel from "../models/postModels";
import connectDB from "../config/database";
import mongoose from "mongoose";

export async function deletePost(){
    try {
        // await connectDB();
        // const data = JSON.parse(JSON.stringify(await PostModel.find()));

        // const test = mongoose.model('james', postSchema);
        // await test.create({dataTitle: "test", tasks: [{content: "test", checked: false}]}).then((data) => console.log(data));


        // return { data }
    } catch (err) {
        return { errMsg: err.message }
    }
}