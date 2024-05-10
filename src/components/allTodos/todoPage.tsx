'use client'

import SingleTodo from "@/components/allTodos/todo";
import AddItemButton from "@/components/allTodos/addItemButton";
import { PostNewTitle } from "@/_actions/PostNewTitle";
import RenameTodoTitle from "@/components/allTodos/renameTodoTitle";
import DeletePage from "@/components/allTodos/deletePage";

export default function Todo({ dataTitle, data }) {

    const todos: any[] = []

    for (let i:number  = 0; i < Object.keys(data).length; i++) {
        let checkbox = dataTitle + "_checkbox_" + i
        // console.log(data)
        // console.log(data[i]["content"])
        todos.push(
            <SingleTodo checkboxid={checkbox} data={data[i]["content"]} checked={data[i]["checked"]} dataTitle={dataTitle} dataID={i} key={i}/>
        )
    }

    todos.push ( // Add Item button
        <AddItemButton dataTitle={dataTitle}/>
    )

    // console.log(todos)

    return(
        <div className="bg-gray-200 rounded-2xl shadow-2xl">
            <div id="title" className="bg-blue-600 p-5 rounded-t-2xl text-2xl text-center">
                <RenameTodoTitle dataTitle={dataTitle}/>
                {/*<button className="w-4 h-4 pl-3" onClick={e => PostNewTitle()}>💭</button>*/}
                <DeletePage dataTitle={dataTitle}/>
            </div>

            <div className="pt-2">
                {todos}
            </div>
        </div>
    )
}
