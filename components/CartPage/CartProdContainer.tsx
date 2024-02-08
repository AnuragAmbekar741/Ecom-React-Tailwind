"use client";

import React, { useEffect } from "react";
import { cartState, ProductDetails } from "../../store/atoms/productDetails";
import { useRecoilState } from "recoil";
import CartProd from "./CartProd";

const CartProductContainer: React.FC = () => {
  const [cart, setCart] = useRecoilState<ProductDetails[]>(cartState);

  var total = 0;

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure code runs only on client side
      const cartStr = sessionStorage.getItem("cart");
      if (cartStr !== null && cartStr !== undefined) {
        const ssCart = JSON.parse(cartStr);
        setCart(ssCart);
      }
    }
  }, []);

  if (cart.length > 0) {
    total = cart
      .map((item) => item.price2 * item.quantity)
      .reduce((a, b) => a + b);
  }

  return (
    <div className="grid align-top w-full shadow-md px-3 py-10 sm:p-3 rounded-lg border border-slate-100">
      <div className="flex justify-between p-3 pr-5">
        <h3 className="xs:text-sm sm:text-md font-medium">Product</h3>
        <h3 className="xs:text-sm sm:text-md font-medium ">Name</h3>
        <h3 className="xs:text-sm sm:text-md font-medium ">Price</h3>
        <h3 className="xs:text-sm sm:text-md font-medium">Size</h3>
        <h3 className="xs:text-sm sm:text-md font-medium">Quant</h3>
      </div>
      <div
        className={`w-full ${
          cart.length > 3 ? "overflow-y-auto h-[510px]" : ""
        } text-left`}
      >
        {cart.map((item) => {
          return <CartProd key={item.name + item.size} product={item} />;
        })}
      </div>
      <div className="flex justify-between py-5 px-2 border-t border-slate-700">
        <p className="xs:text-md sm:text-xl font-light">Total payable amount</p>
        <p
          className={`${
            total > 0 ? "" : "hidden"
          } xs:text-md sm:text-xl font-medium`}
        >
          Rs {total}/-
        </p>
      </div>
    </div>
  );
};

export default CartProductContainer;
