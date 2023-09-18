import { connectToDB } from "@/database/database";
import { User } from "@/database/models/UserModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE() {
  try {
    const data = await getServerSession();
    if (!data) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    await connectToDB();
    const user = await User.findOne({ email: data?.user?.email });
    console.log(user);
    user.cart = [];
    await user.save();
    return NextResponse.json({ message: "Cart cleared" }, { status: 200 });
    
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
