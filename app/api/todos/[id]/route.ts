import { NextRequest, NextResponse } from "next/server";
import todos from "../data";

interface Props {
    params: { id: number}
}

export function GET(req: NextRequest, { params: { id }}: Props) {
    const todo = todos.find(t => t.id == id);
    if (!todo) return NextResponse.json({ error: "Invalid id!"}, { status: 400 });
    return NextResponse.json(todo);
}