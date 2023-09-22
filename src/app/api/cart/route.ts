import { connectToDB } from "@/database/database";
import { User } from "@/database/models/UserModel";
import { Schema } from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

interface CartItem {
  productId: Schema.Types.ObjectId;
  quantity: number;
}

export async function GET() {
  try {
    console.log("get cart");
    await connectToDB();
    const data = await getServerSession();
    if (!data)
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    const user = await User.findOne({ email: data?.user?.email }).populate("cart");
    console.log("The user is ", user)
    if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    // const cartItems = await user.getCartItems();
    const cartItems = user.cart;
    console.log("cart items", cartItems);
    return NextResponse.json(cartItems, { status: 200 });
  } catch (err: any) {
    // console.log(err.message);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}



export async function POST(request: NextRequest) {
  try {
    await connectToDB();
    const data = await getServerSession();
    const cartItem: CartItem = await request.json();
    if (!cartItem)
      return NextResponse.json(
        { message: "No data provided" },
        { status: 400 }
      );
    const user = await User.findOne({ email: data?.user?.email });
    if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    user.cart.push(cartItem.productId);
    await user.save();

    return NextResponse.json(user, { status: 200 });
  } catch (err: any) {
    console.log(err.message);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}


export async function DELETE(request: NextRequest) {
  const { productId } = await request.json();
  if (!productId) return NextResponse.json({ message: "No data provided" }, { status: 400 })
  try {
    await connectToDB();
    const data = await getServerSession();
    if (!data) return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    const user = await User.findOne({ email: data?.user?.email });
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 })
    const index = user.cart.indexOf(productId);
    if (index > -1) {
      user.cart.splice(index, 1);
    }
    await user.save();
    return NextResponse.json(user, { status: 200 });
  }
  catch (err: any) {
    console.log(err.message);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
