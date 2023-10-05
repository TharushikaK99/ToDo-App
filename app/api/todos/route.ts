import { NextRequest, NextResponse } from "next/server";
import todos, { addTodo } from "./data";

export function GET(req: NextRequest) {
    return NextResponse.json(todos, { status: 200 });
}

export async function POST(req: NextRequest) {
    const { name } = await req.json();
    const todo = addTodo(name);
    return NextResponse.json(todo, { status: 201 });
}