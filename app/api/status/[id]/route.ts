import { NextRequest, NextResponse } from "next/server";
import { sha256 } from "js-sha256";
import axios from "axios";
import OrderModel from "@/models/orderDetails";

export async function POST(req:NextRequest, res:NextResponse) {
  const data = await req.formData();
  const status = data.get("code");
  const merchantId = data.get("merchantId");
  const transactionId = data.get("transactionId");

  const st =
    `/pg/v1/status/${merchantId}/${transactionId}` +
    process.env.NEXT_PUBLIC_SALT_KEY;
  const dataSha256 = sha256(st);

  const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;

  const options = {
    method: "GET",
    url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": `${merchantId}`,
    },
  };

  // CHECK PAYMENT STATUS
  const response = await axios.request(options);

  if (response.data.code == "PAYMENT_SUCCESS"){
    const order = await OrderModel.findByIdAndUpdate(response.data.data.merchantTransactionId,{ $set: { paymentStatus: true } },{ new: true })
    return NextResponse.redirect("http://localhost:3000/",{
    status: 301,
    });
  }
  else return NextResponse.redirect("http://localhost:3000/",{
  status: 301,
});

}