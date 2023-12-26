import { NextRequest,NextResponse } from "next/server"
import connectToDb from "@/db/mongoose"
import Customer from "@/models/customerDetails"

export async function POST(req:NextRequest) {
    const {firstName,lastName,email,phone,apt,locality,state,city,pin} = await req.json()
    var customerID;
    try{
        await connectToDb()
        const existingCustomer = await Customer.findOne({ email, phone });
        if(existingCustomer){
            customerID = existingCustomer._id
            return NextResponse.json({ customerId:customerID, success: "customer already exist" })
        }
        if(!existingCustomer){
            const customer = await Customer.create({firstName,lastName,email,phone,apt,locality,state,city,pin})
            customerID = customer._id
            return NextResponse.json({ customerId:customerID, success: true})
        }   
    }
    catch(err){
        return NextResponse.json({ msg: ["Error creating customer"], success: false });
    }
}

