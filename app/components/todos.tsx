import Todo from "./todo";
import TodoInterface from "./todoInterface";

const Todos = async () => {
    const res = await fetch("http://localhost:3000/api/todos");
    const todos: TodoInterface[] = await res.json();

    return ( 
        <div className="mb-32 grid gap-5 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            { todos.map(todo => (
                <Todo key={todo.id} todo={todo.name} isComplete={todo.isComplete} />
            ))}
        </div>
     );
}
 
export default Todos;