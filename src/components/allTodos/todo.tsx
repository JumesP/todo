import Checkbox from "./checkbox";
// import bin from "../../../public/delete.png"
import "../../../public/css/styles.css"


export default function SingleTodo({ checkboxid, data, checked, dataTitle, dataID }) {
    return (
        <div className="text-gray-800 py-1 pl-5 pr-2 flex flex-nowrap justify-between ">
            <div>
                <Checkbox checkboxid={checkboxid} checked={checked} dataTitle={dataTitle} dataID={dataID} />
                <label htmlFor="checkbox" className="text-m font-semibold pl-1 align-middle">
                    {data}
                </label>
            </div>
            <button className="w-6 h-6 ml-3 bg-red-700 border-2 rounded-md border-black flex  align-middle justify-center Logo"></button>
        </div>
    )
}