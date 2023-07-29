import { connectToDB } from "@/database/database";
import Product  from "@/database/models/ProductModel";
import { NextResponse } from "next/server";

export interface ProductType  {
    productName ?: string;
    price ?: number;
    description ?: string;
    images ?: string[];
}

export  async function GET(){
    await connectToDB();
    const products = await Product.find();
    return  NextResponse.json(products,{status : 200})
}





