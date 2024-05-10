import { getPosts } from "@/_actions/postAction";
import Todo from "../components/allTodos/todoPage";
import NewTodoPage from "@/components/allTodos/newTodoPage";


async function AllTodos() {
    const { data } = await getPosts();

    // console.log({data})
    // console.log(data)
    // console.log("v")
    // console.log(Object.keys(data)[0])
    // console.log("^")

    const allTodos: any[] = []

    // console.log(data[0])

    for (let i: number = 0; i < (Object.keys(data).length); i++) {
        allTodos.push(<Todo dataTitle={data[i]["dataTitle"]} data={data[i]["tasks"]}/>)
    }

    allTodos.push(<NewTodoPage />)

    return(
        <>{allTodos}</>
    )
}


export default function AllTodo() {
    return (
        <AllTodos />
    );
}