'use server'

import PostModel from "../models/postModels";
import singleTaskSchema from "../models/postModels";
import connectDB from "../config/database";
import mongoose from 'mongoose';

export async function postNewTodo(){

    // Title, ID, content, checked
    // const dataTitle = Title;
    // const dataID = ID;
    // const datacontent = content;
    // const datachecked = checked;

    const datacontent:string = "take fimble to town";
    const datachecked:boolean = true;


    const newTodo = new singleTaskSchema({
        content: datacontent,
        checked: datachecked
    });

    // singleTaskSchema.findOneAndUpdate(
    //     { _id: "6633f70af9aabcbb255cc809"},
    //     { $push: { "Phase 7": newTodo } }
    // )
    //
    // singleTaskSchema.update(
    //     { _id: "6633f70af9aabcbb255cc809"},
    //     { $push: { "Phase 7": newTodo } }
    // )



    // try{
    //     await connectDB();
    //
    //     await newTodoEntry
    //         .save()
    //         .then(newTodoSaved => {
    //             res.status(201).json({
    //                 message: newTodoSaved.content + " has been added to the list"
    //             });
    //         })
    //         .catch(err => console.log(err));

        // try {
        //     await connectDB();
        //     const data = JSON.parse(JSON.stringify(await PostModel.find()));
            // const data = await PostModel.find();

        // throw new Error("This is an error")





        // console.log("Database data: vvv")
        // console.log(data);
        // console.log("Database data: ^^^")

        // return { data }
    // } catch (err) {
    //     return { errMsg: err.message }
    // }
}