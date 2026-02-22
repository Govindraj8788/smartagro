import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Cart from "@/models/Cart";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    await Cart.create(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}