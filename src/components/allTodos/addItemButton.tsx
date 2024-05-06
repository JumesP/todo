'use client'

import React, { useState } from "react";
import Checkbox from "@/components/allTodos/checkbox";
import NewTodoEntry from "@/components/allTodos/newTodoEntry";
import {postNewTodo} from "@/_actions/postNewTodo";
// import {postNewTodo} from "@/_actions/postNewTodo";

export default function AddItemButton() {

    const [newTodo, setNewTodo] = useState()

    const addTodo = () => {
        postNewTodo()

        // if (newTodo === undefined) {
        //     setNewTodo([<NewTodoEntry />])
        // } else {
        //     setNewTodo(oldArray => [...oldArray, <NewTodoEntry />])
        // }
        // setNewTodo(oldArray => [...oldArray, <NewTodoEntry />])
        // setNewTodo("Spongebob")
    }

    // setNewTodo(["Hi there!"])

    console.log(newTodo)

    const newerTodo: any[] = []

    if (newTodo !== undefined) {
        // for (let i:number = 0; i < newTodo.length; i++) {
        //     newerTodo.push(<div>{newTodo[i]}</div>)
        // }
    }


    return (
        <>
            <div>
                {/*{newTodo.map(entry => {*/}
                {/*    <div>{entry}</div>*/}
                {/*})}*/}
                <p className="text-gray-800">{newTodo}</p>

            </div>
            <div className="text-gray-800 pt-1 pb-2 px-5 active:bg-gray-300 rounded-b-2xl">
                <button className="text-m font-semibold px-1 align-middle border-0 text-gray-800 hover:text-gray-400" onClick={addTodo}>+ Add Item</button>
            </div>
        </>
    )
}