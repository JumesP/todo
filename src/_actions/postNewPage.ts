// import PostModel from "../models/postModels";
import mongoose from "mongoose";
import {postNewTodo} from "@/_actions/postNewTodo";

export async function PostNewPage() {
    const data = JSON.parse(JSON.stringify(await PostModel.find()));

    PostModel.create({dataTitle: (data.length + 1).toString()})

    const data2 = JSON.parse(JSON.stringify(await PostModel.find({dataTitle: "Fimbles"})));


}
