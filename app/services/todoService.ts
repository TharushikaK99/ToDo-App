import TodoInterface from "../components/todoInterface";

export const getTodos = async () => {
    const res = await fetch("http://localhost:3000/api/todos");
    const todos: TodoInterface[]  = await res.json();

    return todos;
}