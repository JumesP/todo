'use server'

import PostModel from "@/models/postModels";

export async function PostNewTodo(dataTitle: string, content: string, checked: boolean) {

    var cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: dataTitle})))
    console.log(cleanData)

    var length

    if (cleanData.tasks.length != 0) {
        length = cleanData.tasks.length
    } else {
        length = 0
    }



    // await PostModel.findByIdAndUpdate(
    //     "6639739fd95bc78ff49d81d4",
    //     {$push: {tasks: []}}
    // )

    const tasks = {content: content, checked: checked};

    await PostModel.findOneAndUpdate(
        {dataTitle: dataTitle},
        {$push: {tasks: tasks}}
    )

    cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: dataTitle})))
    console.log(cleanData)

    if (cleanData.tasks.length == length + 1) {
        console.log("Task added successfully")
    } else {
        console.log("Task not added")
    }

}