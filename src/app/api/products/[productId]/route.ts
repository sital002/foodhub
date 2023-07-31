import { connectToDB } from "@/database/database";
import Product from "@/database/models/ProductModel";
import { NextRequest, NextResponse } from "next/server";

 interface ProductType  {
    productName ?: string;
    price ?: number;
    description ?: string;
    images ?: string[];
}

export  async function GET(request:NextRequest,productId:string){
    try{
            console.log(request)

            await connectToDB();
            const products = await Product.findById(productId) as ProductType
            return  NextResponse.json(products,{status : 200})
        }
        catch(err:any){
            return NextResponse.json({message : err.message}, {status : 500})
        }
}