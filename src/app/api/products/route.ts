import { connectToDB } from "@/database/database";
import Product  from "@/database/models/ProductModel";
import { NextRequest, NextResponse } from "next/server";

export interface ProductType  {
    productName ?: string;
    price ?: number;
    description ?: string;
    images ?: Array<{public_id : string, url : string}>;
}

export  async function GET(){
    await connectToDB();
    const products = await Product.find();
    return  NextResponse.json(products,{status : 200})
}




