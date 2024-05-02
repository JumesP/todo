import db from "../data/db.json";

const data = db["Phase 1"]
const checks: any[] = []
const todos: any[] = []

for (let i:number  = 0; i < Object.keys(data).length; i++) {
    let checkbox = "checkbox_" + i

    console.log(data)

    // if (data[i]["checked"]) {
    //     let p = "checked"
    // } else {
    //     let p = ""
    // }

    todos.push(
        <div className="text-gray-800 py-1 px-5">
            <input type="checkbox" id={checkbox} className="w-4 h-4 align-middle"/>
            <label htmlFor={checkbox} className="text-m font-semibold pl-1 align-middle">{data[i]["content"]}</label>
        </div>
    )
}

export default function Todo() {
    return (
        <div className="bg-gray-200 rounded-2xl shadow-2xl">
            <div id="title" className="bg-blue-600 p-5 rounded-t-2xl text-2xl text-center"> Phase 1 </div>
            <div className="py-2">{todos}</div>
        </div>
    );
}