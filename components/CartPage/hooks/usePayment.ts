import { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { sha256 } from "js-sha256";
import { useRouter } from "next/navigation";


const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router  = useRouter()

  const makePayment = async (id: any, amt: number, phone: string) => {
    // e.preventDefault();
    const transactionid = "Tr-" + uuidv4().toString().slice(-6);

    const payload = {
      merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
      merchantTransactionId: id,
      merchantUserId: "MUID-" + uuidv4().toString().slice(-6),
      amount: amt * 100,
      redirectUrl: `http://localhost:3000/api/status/${transactionid}`,
      redirectMode: "POST",
      callbackUrl: `http://localhost:3000/api/status/${transactionid}`,
      mobileNumber: phone,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const dataPayload = JSON.stringify(payload);

    const dataBase64 = Buffer.from(dataPayload).toString("base64");

    const fullURL =
      dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;

    const dataSha256 = sha256(fullURL);

    const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;

    try {
      const response = await axios.post(
        "/api/phonepe",
        {
          request: dataBase64,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-VERIFY": checksum,
          },
        }
      );
      const redirect = response.data.data.instrumentResponse.redirectInfo.url;
      router.push(redirect);
    } catch (err) {
      console.log(err);
    }
  };


  return { makePayment, loading, error };
};

export default usePayment;
