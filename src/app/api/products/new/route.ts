import { connectToDB } from "@/database/database";
import Product from "@/database/models/ProductModel";
import { NextRequest, NextResponse } from "next/server";
import { ProductType } from "../route";

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as ProductType;
    if (!data)
      return NextResponse.json(
        { message: "No data provided" },
        { status: 400 }
      );
    if (!data.productName)
      return NextResponse.json(
        { message: "No name provided" },
        { status: 400 }
      );
    if (!data.price)
      return NextResponse.json(
        { message: "No price provided" },
        { status: 400 }
      );
    await connectToDB();
    const { productName, price, description, images } = data;
    const newProduct = await new Product({
      productName: productName,
      price: Number(price),
      description,
      images,
    });
    await newProduct.save();

    console.log(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
