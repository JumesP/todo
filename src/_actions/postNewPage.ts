'use server'

// import PostModel from "../models/postModels";import mongoose from "mongoose";
import {postNewTodo} from "@/_actions/postNewTodo";
import PostModel from "../models/postModels";
// import singleTaskSchema from "@/models/todoModel";
import connectDB from "@/config/database";

export async function PostNewPage() {

    // UseState to create a new page

    const data = JSON.parse(JSON.stringify(await PostModel.find()));

    await PostModel.create({dataTitle: (data.length + 1).toString()})

    const data2 = JSON.parse(JSON.stringify(await PostModel.find({dataTitle: "Fimbles"})));
}
