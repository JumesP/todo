import Checkbox from "@/components/allTodos/checkbox";


export default function NewTodoEntry() {
    return(
        <div className="text-gray-800 py-1 px-5">
            <Checkbox checkboxid="newTodo" checked={false} dataTitle="newTodo" dataID={0} />
            <input type="text" placeholder="enter new todo"/>
        </div>
    )
}