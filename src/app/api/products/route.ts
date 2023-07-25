import { connectToDB } from "@/database/database";
import Product  from "@/database/models/ProductModel";
import { NextRequest, NextResponse } from "next/server";



export  async function GET(request : NextRequest){
    await connectToDB();
    const products = await Product.find();
    return  NextResponse.json(products)
}
