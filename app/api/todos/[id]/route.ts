import { NextRequest, NextResponse } from "next/server";
import { deleteTodo, getTodos, updateTodo } from "../data";

interface Props {
    params: { id: number}
}

export function GET(req: NextRequest, { params: { id }}: Props) {
    const todos = getTodos();
    const todo = todos.find(t => t.id == id);
    if (!todo) return NextResponse.json({ error: "Invalid id!"}, { status: 400 });
    return NextResponse.json(todo);
}

export function DELETE(req: NextRequest, { params: { id }}: Props) {
    const todo = deleteTodo(id);
    if (!todo) return NextResponse.json({ error: "Invalid id!" }, { status: 400 });
    return NextResponse.json(todo, { status: 200 });
}

export async function PUT(req: NextRequest, { params: { id }}: Props) {
    const { name, isComplete } = await req.json();
    const todo = updateTodo({ id, name, isComplete });
    if (!todo) return NextResponse.json({ error: "Invalid id!" }, { status: 400 });
    return NextResponse.json(todo, { status: 200 });
}