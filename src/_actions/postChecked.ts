'use server'

import PostModel from "../models/postModels";
import connectDB from "../config/database";

export async function postChecks(dataTitle: string, dataID: string, checked: boolean){
    try {
        await connectDB();
        const data = JSON.parse(JSON.stringify(await PostModel.find()));

        // console.log("Database data: vvv")
        // // console.log(data);
        // console.log("Database data[0]: vvv")
        // console.log(data[0]);
        // console.log("Database data: ^^^")

        if (checked) {
            console.log("Hi")
            data[0].todoList[dataTitle][dataID].checked = false;
            console.log(data[0]);
            await PostModel.findAndModify({ dataTitle }, { dataID }, { checked:false });

        } else {
            console.log("Hello")
            data[0].todoList[dataTitle][dataID].checked = true;
            // await PostModel.findAndModify({ dataTitle }, { dataID }, { checked:true });
            await PostModel.findAndModify({ dataTitle }, { dataID }, { checked:true });
        }

        // await PostModel.updateOne({ _id: data[0]._id }, { todoList: data[0].todoList });
        await PostModel.findAndModify({ _id: data[0]._id }, { todoList: data[0].todoList });

        // return { data }
    } catch (err) {
        console.log(err.message)
        return { errMsg: err.message }
    }
}