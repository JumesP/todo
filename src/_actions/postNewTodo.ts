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

    // const datacontent:string = "take fimble to town";
    // const datachecked:boolean = true;


    // const newTodo = new singleTaskSchema({
    //     content: datacontent,
    //     checked: datachecked
    // });

    // singleTaskSchema.findOneAndUpdate(
    //     { _id: "6633f70af9aabcbb255cc809"},
    //     { $push: { "Phase 6": newTodo } }
    // )




    // create new todopage title
    PostModel.create({dataTitle: "Fimbles"})


    const data = JSON.parse(JSON.stringify(await PostModel.find({dataTitle: "Fimbles"})));
    console.log(data)

    // const fimbleID = "ObjectId(6638cb25aaaf4c2c0e5922a6)"
    const id = "6638d5668b7eb23675bcbb54"

    singleTaskSchema.findOneAndUpdate(
        { dateTitle: "Fimbles2"},
        { $set: { "tasks": [{content: "take fimble to town", checked: true}] }}
    )

    // PostModel.update(
    //     {dataTitle: "Fimbles2"},
    //     { $set : {
    //         "items.$.name" : "updatedItemName",
    //         "items.$.value" : "updatedItemValue"
    //         }}, function(err) {
    //         if (err) throw err;
    //     })
    // const itemID = 2
    // const query = {dataTitle: "Fimbles"}
    //
    // PostModel.findOne(query).then(doc => {
    //     item = doc.tasks.id(itemID);
    //     item["name"] = "updatedItemName";
    //     item["value"] = "updatedItemValue";
    //     doc.save();
    // })




    // PostModel.insertMany({dataTitle: "Fimbles"}, {tasks: [{content: "take fimble to town", checked: true}]})
    // singleTaskSchema.update(
    //     { _id: "6633f70af9aabcbb255cc809"},
    //     { $push: { "Phase 6": newTodo } }
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