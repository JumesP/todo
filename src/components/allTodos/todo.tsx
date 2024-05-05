import Checkbox from "./checkbox";
// import bin from "../../../public/delete.png"


export default function SingleTodo({ checkboxid, data, checked, dataTitle, dataID }) {
    return (
        <div className="text-gray-800 py-1 px-5">
            <Checkbox checkboxid={checkboxid} checked={checked} dataTitle={dataTitle} dataID={dataID} />
            <label htmlFor="checkbox" className="text-m font-semibold pl-1 align-middle">
                {data}
            </label>
            <button className="w-6 h-6 bg-red-700 border-2 rounded-md flex  align-middle justify-center"><img
                src={ require('../../../public/delete.png').default }
            /></button>
        </div>
    )
}