import AllTodo from "../components/allTodos.tsx"
import { getPosts } from "@/_actions/postAction";

export default async function Home(){
    const { data } = await getPosts();

    // if(errMsg){
    //     return <h1>{errMsg}</h1>
    // }

    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-400">
            <h1 className="text-gray-800 text-3xl p-5">To-do List</h1>
            <div className="flex flex-row flex-wrap flex-start gap-8 w-screen justify-center">
                <AllTodo />

            </div>
        </main>
    );
}