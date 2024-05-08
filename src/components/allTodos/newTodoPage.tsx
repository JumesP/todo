'use client'

import {PostNewPage} from "@/_actions/postNewPage";
import React, {useState} from "react";
import Todo from "@/components/allTodos/todoPage";

export default function NewTodoPage() {

    const [newTodoPage, setNewTodoPage] = useState()

    const addTodoPage = () => {
        if (newTodoPage === undefined) {
            setNewTodoPage([<Todo dataTitle={200} data={[{content: "take fim to school", checked: true}, {content: "take fimble Pom to school", checked: false}]}/>])
        } else {
            setNewTodoPage(oldArray => [...oldArray, <Todo dataTitle={200} data={[{content: "take fim to school", checked: true}, {content: "take fimble Pom to school", checked: false}]}/>])
        }
        PostNewPage()
    }


    return (
        <>
            {newTodoPage}
            <div className="bg-transparent rounded-2xl w-64 h-64 flex justify-center items-center">
                <button className="h-24 w-24 bg-gray-400 border-2 rounded-2xl border-dashed flex justify-center items-center" onClick={() => addTodoPage()}>+</button>
            </div>
        </>
    )
}
