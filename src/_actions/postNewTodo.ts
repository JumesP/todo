'use server'

import PostModel from "@/models/postModels";

export async function PostNewTodo() {
    console.log("HI")

    var cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: "Phase"})))
    console.log(cleanData)

    cleanData = JSON.parse(JSON.stringify(await PostModel.findById("6639739fd95bc78ff49d81d4")))
    console.log(cleanData)

    // await PostModel.findByIdAndUpdate(
    //     "6639739fd95bc78ff49d81d4",
    //     {$push: {tasks: []}}
    // )

    const tasks = {content: "take fimble to town", checked: true};

    await PostModel.findOneAndUpdate(
        {dataTitle: "Phase"},
        {$push: {tasks: tasks}}
    )

    cleanData = JSON.parse(JSON.stringify(await PostModel.findOne({dataTitle: "Phase"})))
    console.log(cleanData)

    cleanData = JSON.parse(JSON.stringify(await PostModel.findById("6639739fd95bc78ff49d81d4")))
    console.log(cleanData)
}







    // Title, ID, content, checked
    // const dataTitle = Title;
    // const dataID = ID;
    // const datacontent = content;
    // const datachecked = checked;

    // const datacontent:string = "take fimble to town";
    // const datachecked:boolean = true;
    //
    //
    // const newTodo = new singleTaskSchema({
    //     content: datacontent,
    //     checked: datachecked
    // });




    // singleTaskSchema.findOneAndUpdate(
    //     { dateTitle: "Phase 1"},
    //     { $set: { tasks: [{content: "take fimble to town", checked: true}] }}
    // )
    //
    // PostModels.findByIdAndUpdate()

    // const filter = { dataTitle: "Phase_1" };
    // const update = { tasks: [{content: "take fimble to town", checked: true}, {content: "take fimble pom to town", checked: false}] };
    //
    //
    // let doc = await PostModels.findOneAndUpdate(filter, update);

    // const doc = await PostModels.findOne(filter)
    // console.log(doc)
    // console.log(doc.DataTitle)
    // console.log(doc.tasks)


    // await connectDB()

    // try {
    //     const data = JSON.parse(JSON.stringify(await PostModel.find()));
    //     console.log(data)
    //     return {data}
    // } catch (err) {
    //     console.log(err.message)
    //     return {errMsg: err.message}
    // }





    // addPost



    // PostModels.findOneAndUpdate({name: "James"})
// }

// const postNewTodo = async () => {
//     await connectDB();
//
//     const dataTitle = "Phase_1";
//     const tasks = [{content: "take fimble to town", checked: true}];
//
//     const newPost = new PostModel({
//         dataTitle,
//         tasks
//     });
//
//     return newPost.update({dataTitle: "Phase_1"}, {tasks: [{content: "take fimble to town", checked: true}]}, {upsert: true}, function(err, doc) {
//         if (err) return console.log(err);
//         console.log("Document inserted successfully");
//     });
//
// }
//
//
// export {postNewTodo}