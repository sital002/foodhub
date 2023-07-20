import { NextRequest, NextResponse } from 'next/server'
 
type resType = {
    name:string,
    password:string
}
export async function POST(request: NextRequest) {
    const res:resType = await request.json()
  return NextResponse.json({ res })
}