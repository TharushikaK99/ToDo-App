import { NextRequest, NextResponse } from "next/server";
import todos from "./data";

export function GET(req: NextRequest) {
    return NextResponse.json(todos, { status: 200 });
}