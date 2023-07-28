import { connectToDB } from "@/database/database";
import Product  from "@/database/models/ProductModel";
import { NextRequest, NextResponse } from "next/server";

interface ProductType  {
    productName ?: string;
    price ?: number;
    description ?: string;
}

export  async function GET(request : NextRequest){
    await connectToDB();
    const products = await Product.find();
    return  NextResponse.json(products)
}


export async function POST(request : NextRequest){
    try{
        const data = await request.json() as ProductType;
        console.log(data)
        if(!data) return  NextResponse.json({message : "No data provided"}, {status : 400})
        if(!data.productName) return NextResponse.json({message : "No name provided"}, {status : 400})
        if(!data.price) return NextResponse.json({message : "No price provided"}, {status : 400})  
        if(!data.description) return NextResponse.json({message : "No description provided"}, {status : 400})
        await connectToDB();
        const {productName, price, description} = data;
        const newProduct = await new Product({productName:productName, price:Number(price), description});
        return NextResponse.json(newProduct, {status : 201})
    }
    catch(err : any){
        return NextResponse.json({message : err.message}, {status : 500})
    }
}

