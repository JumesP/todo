'use server'

import PostModel from "@/models/allinoneModel";

export async function deletePage(dataTitle: string){
    try{

        var cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: dataTitle})))
        console.log(cleanData)

        if (cleanData != null) {
            console.log("Successfully Found!")
        } else {
            console.log("Failed to find")
        }

        var id = cleanData["_id"]


        // await PostModel.deleteOne({dataTitle: "dataTitle"})
        await PostModel.deleteOne({_id: id})


        var cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: dataTitle})))
        console.log(cleanData)

        if (cleanData == null) {
            console.log("Successfully Deleted!")
        } else {
            console.log("Failed to delete")
        }


    }catch (err) {
        return { errMsg: err.message }
    }
}