import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Cart from "@/models/Cart";

export async function GET() {
  try {
    await connectDB();
    const cart = await Cart.find();
    return NextResponse.json({ cart });
  } catch {
    return NextResponse.json({ cart: [] });
  }
}