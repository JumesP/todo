import db from "../data/db.json";

const checks: any[] = []
const todos: any[] = []

for (let i:number  = 0; i < Object.keys(db.data).length; i++) {
    let checkbox = "checkbox_" + i



    console.log(db.data[i]["content"])

    // if (data[i]["checked"]) {
    //     let p = "checked"
    // } else {
    //     let p = ""
    // }


    checks.push(
        <div className="text-gray-800 py-2 px-5">
            {/*<input id={checkbox} type="checkbox" value="" className="p-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
            <input type="checkbox" id={checkbox} className="w-4 h-4"/>
            <label htmlFor={checkbox} className="text-xl p-5 font-semibold">{db.data[i]["content"]}</label>
        </div>
    )
}

export default function Todo() {
    return (
        <div className="bg-gray-200 rounded-2xl shadow-xl">
            <div id="title" className="bg-blue-600 p-5 rounded-t-2xl text-2xl text-center"> Phase 1 </div>
            <div>{checks}</div>
        </div>
    );
}