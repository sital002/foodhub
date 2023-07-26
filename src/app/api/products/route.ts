import { connectToDB } from "@/database/database";
import Product  from "@/database/models/ProductModel";
import { NextRequest, NextResponse } from "next/server";

interface ProductType  {
    name ?: string;
    price ?: number;
    description ?: string;
    stock ?: number;
}

export  async function GET(request : NextRequest){
    await connectToDB();
    const products = await Product.find();
    return  NextResponse.json(products)
}


export async function POST(request : NextRequest){
    try{

        const data = await request.json() as ProductType;
        if(!data) return  NextResponse.json({message : "No data provided"}, {status : 400})
        if(!data.name) return NextResponse.json({message : "No name provided"}, {status : 400})
        if(!data.price) return NextResponse.json({message : "No price provided"}, {status : 400})  
        if(!data.description) return NextResponse.json({message : "No description provided"}, {status : 400})
        if(!data.stock) return NextResponse.json({message : "No stock provided"}, {status : 400})
        await connectToDB();
        const newProduct = await Product.create(data);
        return NextResponse.json(newProduct, {status : 201})
    }
    catch(err : any){
        return NextResponse.json({message : err.message}, {status : 500})
    }
}

