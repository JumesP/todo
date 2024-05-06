import { getPosts } from "@/_actions/postAction";
import Todo from "../components/allTodos/todoPage";
import NewTodoPage from "@/components/allTodos/newTodoPage";


async function AllTodos() {
    const { data } = await getPosts();

    const allTodos: any[] = []

    for (let i: number = 1; i < (Object.keys(data[0]).length); i++) {
        allTodos.push(<Todo dataTitle={Object.keys(data[0])[i]} data={data[0][Object.keys(data[0])[i]]}/>)
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