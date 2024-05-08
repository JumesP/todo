'use server'

import PostModel from "@/models/postModels";


export async function PostNewTitle() {

    // const data = PostModel.findOne({dataTitle: "Phase_1"})
    // console.log(data)

    var cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: "Phase_2"})))
    console.log(cleanData)

    PostModel.findOneAndUpdate(
        {dataTitle: "Phase_2"},
        {"$set": {dataTitle: "Phase"}})

    cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: "Phase"})))
    console.log(cleanData)


}