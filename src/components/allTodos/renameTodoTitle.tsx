'use client'


import {PostNewTitle} from "@/_actions/PostNewTitle";
import React, {useState} from "react";
import data from "@mongodb-js/saslprep/dist/code-points-data-browser";

function ClicktoRename( dataTitle ) {
    return (
        <form key="5">
            <input type="text" placeholder="New Title" className="text-gray-800" id="Hello" key="Hello"/>
            <input type="submit" hidden onClick={e => ChangeTitle(dataTitle)} key="HelloButton"/>
        </form>
    )
}

async function ChangeTitle( dataTitle: string ) {

    var newTitle = document.getElementById("Hello").value

    dataTitle = dataTitle["dataTitle"]

    await PostNewTitle( dataTitle, newTitle )
}

export default function RenameTodoTitle( dataTitle:string ) {

    dataTitle = dataTitle["dataTitle"]

    const [showForm, setShowForm] = useState()

    const addTodo = () => {
        if (showForm === undefined) {
            setShowForm([<ClicktoRename dataTitle={dataTitle}/>])
        } else {
            setShowForm(undefined)
        }
        console.log(showForm)
    }


    return(
        <div key="div">
            <button className="" onClick={e => addTodo(dataTitle)} key="5">{dataTitle}</button>
            {showForm}
        </div>
    )
}