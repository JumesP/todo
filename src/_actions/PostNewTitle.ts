'use server'

import PostModel from "@/models/allinoneModel";


export async function PostNewTitle( currentTitle, newTitle ) {

    // const data = PostModel.findOne({dataTitle: "Phase_1"})
    // console.log(data)

    var cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: currentTitle})))
    console.log(cleanData)

    if (cleanData != null) {
        console.log("Successfully Found!")
    } else {
        console.log("Failed to find")
    }


    await PostModel.findOneAndUpdate(
        {dataTitle: currentTitle},
        {$set: {dataTitle: newTitle}},
        {new: true}
    )

    // const name = "Phase"
    //
    // await PostModel.findByIdAndUpdate(
    //     "6639739fd95bc78ff49d81d4",
    //     {$set: {dataTitle: name}},
    //     {new: true}
    // )

    // await PostModel.findByIdAndUpdate(
    //     "6639739fd95bc78ff49d81d4",
    //     { dataTitle: name },
    //     { new: true }
    // )

    cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: newTitle})))
    console.log(cleanData)

    if (cleanData != null) {
        console.log("Successfully Changed!")
    } else {
        console.log("Failed to change")
    }

    // cleanData = JSON.parse(JSON.stringify(await PostModel.findById("6639739fd95bc78ff49d81d4")))
    // console.log(cleanData)
}