import Product from "@/database/models/ProductModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    const query = request.nextUrl.searchParams;
    const searchQuery = query.get("query") || "";
    if (!searchQuery) {
        return NextResponse.json({ message: "No search query" }, { status: 400 });
    }
    let filteredItem = []
    if (searchQuery) {
        try {

            filteredItem = await Product.aggregate([
                {
                    $match: {
                        $or: [
                            { productName: { $regex: searchQuery, $options: "i" } },
                            { description: { $regex: searchQuery, $options: "i" } },
                        ],
                    },
                },
            ]);
        }
        catch (err) {
            console.log(err);
            return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
        }
    }

    return NextResponse.json({ filteredItem }, { status: 200 });


}