import { NextRequest,NextResponse } from "next/server"
import connectToDb from "@/db/mongoose"
import Order from "@/models/orderDetails"

export async function POST(req:NextRequest) {
    const {products,count,totalAmt,customerId} = await req.json()
    try{
        await connectToDb()
        await Order.create({products,count,totalAmt,customerId})
        return NextResponse.json({ msg: ['hello from server'], success: true })
    }
    catch(err){
        return NextResponse.json({ msg: ['error occured'], success: false })
    }
}

