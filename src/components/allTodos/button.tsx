'use client'

import {PostNewTodo} from "@/_actions/postNewTodo";

async function help() {
    await PostNewTodo();
}

export default function Button() {
    return(
        <button onClick={function(e) { help() }}>click me for WORST EVER hellish problems, for 0 reason</button>
    )
}