import Checkbox from "./checkbox";



export default function SingleTodo({ checkboxid, data, checked }) {
    return (
        <div className="text-gray-800 py-1 px-5">
            <Checkbox checkboxid={checkboxid} checked={checked} />
            <label htmlFor="checkbox" className="text-m font-semibold pl-1 align-middle">
                {data}
            </label>
        </div>
    )
}