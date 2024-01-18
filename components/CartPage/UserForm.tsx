"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  userDetailsState,
  UserDetails,
} from "../../store/atoms/userDetailsState";
import { orderState } from "@/store/atoms/orderDetailsState";

import { TbShoppingBagEdit } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import sha256 from "crypto-js/sha256";
import axios from "axios";

const UserForm: React.FC = () => {
  const router = useRouter();

  const [userDetails, setUserDetails] =
    useRecoilState<UserDetails>(userDetailsState);

  const [readOnly, setReadOnly] = useState(false);

  // const order = useRecoilValue(orderState);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserDetails>({
    defaultValues: {
      email: userDetails.email,
      phone: userDetails.phone,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      apt: userDetails.apt,
      locality: userDetails.locality,
      city: userDetails.city,
      state: userDetails.state,
      pin: userDetails.pin,
    },
  });

  const makePayment = async () => {
    // e.preventDefault();
    const transactionid = "Tr-" + uuidv4().toString().slice(-6);

    const payload = {
      merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
      merchantTransactionId: transactionid,
      merchantUserId: "MUID-" + uuidv4().toString().slice(-6),
      amount: 1000,
      redirectUrl: `https://www.rheavania.com/${transactionid}`,
      redirectMode: "POST",
      callbackUrl: `https://www.rheavania.com/${transactionid}`,
      mobileNumber: "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const dataPayload = JSON.stringify(payload);
    console.log(dataPayload);

    const dataBase64 = Buffer.from(dataPayload).toString("base64");
    console.log(dataBase64);

    const fullURL =
      dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;

    const dataSha256 = sha256(fullURL);

    const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;
    console.log("c====", checksum);

    console.log(
      "saltkey-",
      process.env.NEXT_PUBLIC_SALT_KEY,
      "saltindex",
      process.env.NEXT_PUBLIC_SALT_INDEX,
      "muid",
      process.env.NEXT_PUBLIC_MERCHANT_ID
    );

    // const PAY_API_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

    // try {
    //   const response = await axios.post(
    //     "/api/phonepe",
    //     {
    //       request: dataBase64,
    //     },
    //     {
    //       headers: {
    //         accept: "application/json",
    //         "Content-Type": "application/json",
    //         "X-VERIFY": checksum,
    //       },
    //     }
    //   );
    //   const redirect = response.data.data.instrumentResponse.redirectInfo.url;
    //   router.push(redirect);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const onSubmit = async (data: UserDetails) => {
    setUserDetails(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setReadOnly(true);
  };

  // const addCustomerAndOrder = async () => {
  //   if (order.totalAmt === 0 || order.count === 0) return;
  //   const res = await axios.post("/api/customerDetails", userDetails);
  //   const customerId = res.data.customerId;
  //   const orderWithCustomerId = { ...order, customerId: customerId };
  //   const res2 = await axios.post("/api/orderDetails", orderWithCustomerId);
  //   console.log(res2.data);
  // };

  const emailValidationRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validatePhone = (value: string) => {
    const isValidPhone = /^\d{10}$/.test(value);
    if (!isValidPhone) {
      reset({ phone: "" });
      return "Phone must be 10 digits";
    }
    console.log(isValidPhone);
    return isValidPhone;
  };

  const validatePin = (value: string) => {
    const isValidPin = /^\d{6}$/.test(value.trim());
    if (!isValidPin) {
      reset({ pin: "" });
      return "Pin must be 6 digits";
    }
    return isValidPin;
  };

  return (
    <div className="text-lg font-light px-5 py-2 relative">
      <TbShoppingBagEdit
        className={`text-4xl absolute right-5 top-5 ${
          readOnly ? "block" : "hidden"
        }`}
        onClick={() => setReadOnly(false)}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        {readOnly ? (
          <h1 className="text-3xl text-black font-light my-3">
            Confirm Shipping Details
          </h1>
        ) : (
          <h1 className="text-3xl text-black font-light my-3">Contact</h1>
        )}
        <div className="grid md:flex">
          <input
            className={`p-1 border-b border-black w-full md:w-1/2 focus:outline-none mb-3 mr-3 rounded-none ${
              errors.email
                ? "placeholder:text-red-500 placeholder:text-md border-red-500 "
                : "placeholder:text-gray-300-300"
            }`}
            placeholder={`${errors.email ? errors.email.message : "Email"}`}
            {...register("email", {
              required: "Email is Required",
              validate: (value) =>
                emailValidationRegex.test(value) === true ||
                "Enter valid Email",
            })}
            readOnly={readOnly}
          />

          <input
            className={`p-1 border-b border-black w-full md:w-1/2 focus:outline-none mb-3 rounded-none ${
              errors.phone
                ? "placeholder:text-red-500 placeholder:text-md border-red-500 "
                : "placeholder:text-gray-300-300"
            }`}
            placeholder={`${errors.phone ? errors.phone.message : "Phone"}`}
            {...register("phone", {
              required: "Phone is required",
              validate: validatePhone,
            })}
            readOnly={readOnly}
          />
        </div>

        <h1
          className={`text-3xl text-black font-light my-3 ${
            readOnly ? "hidden" : "block"
          }`}
        >
          Shipping Details
        </h1>
        <div className="grid lg:flex w-full">
          <input
            className={`p-1 border-b border-black w-full lg:w-1/2 focus:outline-none mr-3 mb-3 rounded-none ${
              errors.firstName
                ? "placeholder:text-red-500 placeholder:text-md border-red-500 "
                : "placeholder:text-gray-300-300"
            } `}
            placeholder={`${
              errors.firstName ? errors.firstName.message : "First name"
            }`}
            {...register("firstName", {
              required: "First name required",
            })}
            readOnly={readOnly}
          />
          <input
            className={`p-1 border-b border-black w-full lg:w-1/2 focus:outline-none mb-3 rounded-none ${
              errors.lastName
                ? "placeholder:text-red-500 placeholder:text-md border-red-500 "
                : "placeholder:text-gray-300-300"
            } `}
            placeholder={`${
              errors.lastName ? errors.lastName.message : "Last name"
            }`}
            {...register("lastName", {
              required: "Last name required",
            })}
            readOnly={readOnly}
          />
        </div>

        <input
          className={`p-1 border-b border-black w-full focus:outline-none mb-3 rounded-none ${
            errors.apt
              ? "placeholder:text-red-500 placeholder:text-md border-red-500 "
              : "placeholder:text-gray-300-300"
          } `}
          placeholder={`${
            errors.apt ? errors.apt.message : "Address - Apartment/House No."
          }`}
          {...register("apt", {
            required: "Apartment/House No. is required",
          })}
          readOnly={readOnly}
        />

        <input
          className={`p-1 border-b border-black w-full focus:outline-none mb-3 rounded-none`}
          placeholder="Address - Street/Locality"
          {...register("locality")}
          readOnly={readOnly}
        />

        <div className="grid lg:flex w-full">
          <input
            className={`p-1 border-b border-black w-full lg:w-1/3 focus:outline-none mb-3 mr-3 rounded-none ${
              errors.state
                ? "placeholder:text-red-500 placeholder:text-md border-red-500 "
                : "placeholder:text-gray-300-300"
            }`}
            placeholder={`${errors.state ? "Enter State" : "Enter State"}`}
            {...register("state", {
              required: "Enter State",
            })}
            readOnly={readOnly}
          />
          <input
            className={`p-1 border-b border-black w-full lg:w-1/3 focus:outline-none mb-3 mr-3 rounded-none ${
              errors.city
                ? "placeholder:text-red-500 placeholder:text-md border-red-500 "
                : "placeholder:text-gray-300-300"
            }`}
            placeholder={`${errors.state ? "Enter City" : "Enter City"}`}
            {...register("city", {
              required: "Enter City",
            })}
            readOnly={readOnly}
          />
          <input
            className={`p-1 border-b border-black w-full lg:w-1/3 focus:outline-none mb-3 rounded-none ${
              errors.pin
                ? "placeholder:text-red-500 placeholder:text-md border-red-500 "
                : "placeholder:text-gray-300-300"
            }`}
            placeholder={`${errors.state ? "Enter Pin" : " Pin Code"}`}
            {...register("pin", {
              required: "Enter Pin",
              validate: validatePin,
            })}
            readOnly={readOnly}
          />
        </div>

        {readOnly ? (
          <p className="text-red-500 text-sm">
            *Cannot proceed to payment with an empty cart!
          </p>
        ) : (
          ""
        )}

        {readOnly ? (
          <button
            disabled={isSubmitting}
            className={`mt-5 mb-5 p-3 border border-black w-full text-lg font-light`}
            type="submit"
            onClick={makePayment}
          >
            Proceed to payment
          </button>
        ) : (
          <button
            disabled={isSubmitting}
            className={`mt-5 mb-5 p-3 border border-black w-full text-lg font-light`}
            type="submit"
          >
            Proceed to checkout
          </button>
        )}
      </form>
    </div>
  );
};

export default UserForm;
