interface Todo {
    readonly id: number;
    name: string;
    isComplete: boolean | false;
}

let todos: Todo[] = [
    { id: 1, name: "First One", isComplete: false},
    { id: 2, name: "Second One", isComplete: true},
    { id: 3, name: "Third One", isComplete: false},
]

export const getTodos = (): Todo[] => {
    return todos;
}

export const addTodo = (name: string): void => {
    const id = todos[-1].id + 1;
    const todo: Todo = { id, name, isComplete: false };
    todos.push(todo);
}

export const updateTodo = (todo: Todo): Todo | undefined => {
    const obj = todos.find(t => t.id == todo.id);
    if (!obj) return obj;

    obj.name = todo.name;
    obj.isComplete = todo.isComplete;
    return obj;
}

export const deleteTodo = (id: number): Todo | undefined => {
    const todo = todos.find(todo => todo.id == id);
    if (!todo) return todo;

    todos = todos.filter(todo => todo.id != id);
    return todo;
}

export default getTodos;