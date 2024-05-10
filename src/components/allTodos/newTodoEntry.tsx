'use client'

import Checkbox from "@/components/allTodos/checkbox";
import React from "react";
import {PostNewTodo} from "@/_actions/postNewTodo";

export default function NewTodoEntry(dataTitle) {
    return(
        <div className="text-gray-800 py-1 px-5">
            {/*<Checkbox checkboxid="newTodo" checked={false} dataTitle="newTodo" dataID={0}/>*/}
            <form>
                <input type="text" placeholder="enter new todo" id="todoContent" key="todoContent"/>
                <input type="submit" hidden onClick={function(e) { submitNewTodo(dataTitle) }} key="HelloButton"/>
            </form>
        </div>
    )
}

async function submitNewTodo(dataTitle: string) {
    console.log("Helo world")
    const content = document.getElementById("todoContent").value

    console.log(dataTitle)
    // var dataTitle = "James"
    // var content = "Hello all"

    dataTitle= dataTitle["dataTitle"]
    dataTitle= dataTitle["dataTitle"]

    await PostNewTodo(dataTitle, content, false)
}