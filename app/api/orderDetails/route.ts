import { NextRequest,NextResponse } from "next/server"
import connectToDb from "@/db/mongoose"
import Order from "@/models/orderDetails"

export async function POST(req:NextRequest) {
    const {products,count,totalAmt,customerId,paymentStatus} = await req.json()
    try{
        await connectToDb()
        const order = await Order.create({products,count,totalAmt,customerId})
        const orderId = order._id
        return NextResponse.json({ orderId:orderId, success: true })
    }
    catch(err){
        return NextResponse.json({ msg: ['error occured'], success: false })
    }
}

