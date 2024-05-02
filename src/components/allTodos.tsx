import db from "../data/db.json";
import { getPosts } from "@/_actions/postAction";

const data = db["Phase 1"]

function Todo({ dataTitle, data }) {

    const todos: any[] = []

    for (let i:number  = 0; i < Object.keys(data).length; i++) {
        let checkbox = "checkbox_" + i

        if (data[i]["checked"] === true) {
            todos.push(
                <div className="text-gray-800 py-1 px-5">
                    <input type="checkbox" id={checkbox} className="w-4 h-4 align-middle"/>
                    <label htmlFor={checkbox}
                           className="text-m font-semibold pl-1 align-middle">{data[i]["content"]}</label>
                </div>
            )
        } else {
            todos.push(
                <div className="text-gray-800 py-1 px-5">
                    <input type="checkbox" id={checkbox} className="w-4 h-4 align-middle"/>
                    <label htmlFor={checkbox}
                           className="text-m font-semibold pl-1 align-middle">{data[i]["content"]}</label>
                </div>
            )
        }
    }

    return(
        <div className="bg-gray-200 rounded-2xl shadow-2xl">
            <div id="title" className="bg-blue-600 p-5 rounded-t-2xl text-2xl text-center"> {dataTitle} </div>
            <div className="py-2">{todos}</div>
        </div>
    )
}

async function AllTodos() {
    const { data } = await getPosts();

    const allTodos: any[] = []

    for (let i: number = 2; i < (Object.keys(data[0]).length); i++) {
        allTodos.push(<Todo dataTitle= {Object.keys(data[0])[i]} data={data[0][Object.keys(data[0])[i]]}/>)
    }

    return(
        <>{allTodos}</>
    )
}


export default function AllTodo() {
    return (
        <AllTodos />
    );
}