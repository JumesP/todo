'use server'

import PostModel from "@/models/allinoneModel";


export async function PostNewTitle() {

    // const data = PostModel.findOne({dataTitle: "Phase_1"})
    // console.log(data)

    var cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: "Phase"})))
    console.log(cleanData)

    cleanData = JSON.parse(JSON.stringify(await PostModel.findById("6639739fd95bc78ff49d81d4")))
    console.log(cleanData)

    // await PostModel.findOneAndUpdate(
    //     {dataTitle: "Phase_1"},
    //     {$set: {dataTitle: "Phase"}},
    //     {new: true}
    // )

    const name = "Phase"

    await PostModel.findByIdAndUpdate(
        "6639739fd95bc78ff49d81d4",
        {$set: {dataTitle: name}},
        {new: true}
    )

    // await PostModel.findByIdAndUpdate(
    //     "6639739fd95bc78ff49d81d4",
    //     { dataTitle: name },
    //     { new: true }
    // )

    cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: "Phase_1"})))
    console.log(cleanData)

    cleanData = JSON.parse(JSON.stringify(await PostModel.findById("6639739fd95bc78ff49d81d4")))
    console.log(cleanData)
}