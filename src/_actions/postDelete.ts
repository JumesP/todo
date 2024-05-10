'use server'

// import PostModel from "../models/postModels";
import connectDB from "../config/database";
import mongoose from "mongoose";
import PostModel from "@/models/allinoneModel";

export async function deletePost(dataTitle, content){
    try {
        console.log(content)

        var cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: dataTitle})))
        console.log(cleanData)

        var tasks = cleanData["tasks"]

        for (var i = 0; i < tasks.length; i++){
            if (tasks[i]["content"] == content){
                tasks.splice(i, 1)
            }
        }

        console.log(tasks)

        await PostModel.findOneAndUpdate(
            {dataTitle: dataTitle},
            {$set: {tasks: tasks}}
        )

        cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: dataTitle})))
        console.log(cleanData)

        // return { data }
    } catch (err) {
        return { errMsg: err.message }
    }
}