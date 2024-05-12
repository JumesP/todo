'use server'

import AllTodo from "../pages/allTodos";
import AddNewTodo from "@/components/allTodos/addNewTodo";

// function submitForm() {
//     var dataTitle = document.getElementById("dataTitle");
//     var dataID = document.getElementById("dataID");
//     var content = document.getElementById("content");
//     var checked = document.getElementById("checked");
//     postNewTodo(dataTitle.valueOf(), dataID.valueOf(), content.valueOf(), checked.valueOf());
// }




export default async function Home(){
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-400">
            <h1 className="text-gray-800 text-3xl p-5">To-do List</h1>
            <div className="flex flex-row flex-wrap flex-start gap-8 w-screen justify-center">
                <AllTodo />
            </div>
        </main>
    );
}