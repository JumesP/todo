import Todo from "../components/todo"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-amber-50">
      <h1 className="text-gray-800 text-3xl">To-do List</h1>
      <Todo />
        <button>

        </button>
    </main>
  );
}
