"use client";
import { useSearchParams } from "next/navigation";
import { productData, sizeChartData } from "@/lib/data";

import { useState, useEffect, useRef } from "react";

import { useRecoilState } from "recoil";
import { cartState, ProductDetails } from "@/store/atoms/productDetails";

import { useRouter } from "next/navigation";

import { StaticImageData } from "next/image";

interface ProdDetails {
  id: string;
  name: string;
  price: string;
  cartIcon: StaticImageData;
  quantity?: number;
  size?: string | undefined;
  [key: string]: any;
}

const ProdSizeAndCart = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const selectedProd = productData.filter((item) => item.id === id)[0];
  const router = useRouter();
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const [cart, setCart] = useRecoilState(cartState);

  const [customSizes, setCustomSizes] = useState<{
    bust: string;
    waist: string;
    hip: string;
  }>({
    bust: "",
    waist: "",
    hip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (selectRef.current?.value === "custom") {
      setToggle({ sizeChart: false, customSize: true });
    }
    if (selectRef.current?.value !== "custom") {
      setToggle({ sizeChart: false, customSize: false });
    }
  };

  const handleClick: () => void = () => {
    setToggle({ customSize: false, sizeChart: true });
    if (selectRef.current?.value === "custom") selectRef.current!.value = "uk6";
  };

  const [toggle, setToggle] = useState<{
    sizeChart: boolean;
    customSize: boolean;
  }>({
    sizeChart: false,
    customSize: false,
  });

  const checkSameSize = async (prodToAdd: ProductDetails) => {
    let prodIndex = cart.findIndex(
      (prod) => prod.id == prodToAdd.id && prod.size == prodToAdd.size
    );
    if (prodIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[prodIndex] = {
        ...cart[prodIndex],
        quantity: cart[prodIndex].quantity + 1,
      };
      setCart(updatedCart);
    } else {
      prodToAdd["quantity"] = 1;
      setCart([...cart, prodToAdd]);
    }
  };

  const addSizeQuant = async () => {
    const prodToAdd: ProdDetails = { ...selectedProd };
    prodToAdd.ID = Math.floor(Math.random() * 1000000000000);
    const cartCheck = cart.filter(
      (item) => item.id === prodToAdd.id && item.quantity > 2
    );
    if (cartCheck.length > 0) {
      alert("Same prodcut can't be added trice!");
      return;
    }
    if (selectRef.current?.value === "custom") {
      if (
        customSizes.bust !== "" &&
        customSizes.waist !== "" &&
        customSizes.hip !== ""
      ) {
        var str =
          "Bust:" +
          customSizes.bust +
          " Waist:" +
          customSizes.waist +
          " Hip:" +
          customSizes.hip;
        prodToAdd["size"] = str as string;
      } else return alert("Please add custom sizes for all the measurements.");
    }
    if (selectRef.current?.value !== "custom") {
      prodToAdd["size"] = selectRef.current?.value as string;
    }
    return prodToAdd as ProductDetails;
  };

  const addToCart = async () => {
    const prodToAdd = await addSizeQuant();
    if (!prodToAdd) return;
    await checkSameSize(prodToAdd);
  };

  useEffect(() => sessionStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  return (
    <div className="w-full lg:w-1/3 p-2 pl-7 lg:pr-5 pt-5">
      <h1 className="text-lg font-bold">{selectedProd.name}</h1>
      <h5 className="text-md mt-3 mb-8">{selectedProd.price}</h5>
      <div className="flex mt-10 justify-between">
        <h2 className="text-lg mt-2">Select</h2>
        <select
          className="border-b border-black w-2/5 outline-none p-2 text-xl font-semibold bg-white rounded-none"
          onChange={(e) => handleChange(e)}
          ref={selectRef}
        >
          <option value="uk6">UK 6</option>
          <option value="uk7">UK 7</option>
          <option value="uk8">UK 8</option>
          <option value="uk9">UK 9</option>
          <option value="uk10">UK 10</option>
          <option value="uk11">UK 11</option>
          <option value="custom">Custom</option>
        </select>
        <p
          className="text-sm font-light mt-4 cursor-pointer"
          onClick={handleClick}
        >
          Size chart
        </p>
      </div>

      <p
        className={`${
          toggle.customSize ? "block" : "hidden"
        } text-sm md:text-md pt-5`}
      >
        *Please provide your custom measurements in inches.
      </p>

      <div
        className={`${
          toggle.customSize ? "block" : "hidden"
        } flex border border-black p-3 mt-3  justify-between`}
      >
        <div className="w-1/3 mr-5">
          <p className="text-xl font-light">Bust</p>
          <input
            type="number"
            className="w-full p-[2.5px] border-b border-black rounded-none focus:outline-none"
            onChange={(e) =>
              setCustomSizes({ ...customSizes, bust: e.target.value })
            }
          />
        </div>
        <div className="w-1/3 mr-5">
          <p className="text-xl font-light">Waist</p>
          <input
            type="number"
            className="w-full p-[2.5px] border-b border-black rounded-none focus:outline-none"
            onChange={(e) =>
              setCustomSizes({ ...customSizes, waist: e.target.value })
            }
          />
        </div>
        <div className="w-1/3 mr-5">
          <p className="text-xl font-light">Hip</p>
          <input
            type="number"
            className="w-full p-[2.5px] border-b border-black rounded-none focus:outline-none"
            onChange={(e) =>
              setCustomSizes({ ...customSizes, hip: e.target.value })
            }
          />
        </div>
      </div>

      <div
        className={`${
          toggle.sizeChart ? "grid" : "hidden"
        } mt-8 border border-black p-2`}
      >
        <div className="flex w-full justify-between pl-2 pr-5">
          <h3 className="text-md font-bold">Uk</h3>
          <h3 className="text-md font-bold">Bust</h3>
          <h3 className="text-md font-bold">Waist</h3>
          <h3 className="text-md font-bold">Hip</h3>
        </div>
        <div className="flex justify-between px-2">
          <div className="grid">
            {sizeChartData.map((size) => (
              <h3 key={size.UK} className="text-md py-1">
                {size.UK}
              </h3>
            ))}
          </div>
          <div className="grid">
            {sizeChartData.map((size) => (
              <h3 key={size.Bust} className="text-md py-1">
                {size.Bust}
              </h3>
            ))}
          </div>
          <div className="grid">
            {sizeChartData.map((size) => (
              <h3 key={size.Waist} className="text-md py-1 ">
                {size.Waist}
              </h3>
            ))}
          </div>
          <div className="grid">
            {sizeChartData.map((size) => (
              <h3 key={size.Hip} className="text-md py-1">
                {size.Hip}
              </h3>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={addToCart}
        className="mt-5 py-2 w-full border text-lg font-light border-black"
      >
        Add to cart
      </button>

      {cart.length > 0 && (
        <button
          onClick={() => router.push("/CartPage")}
          className="mt-5 py-2 w-full border text-lg font-light border-black"
        >
          Proceed to cart
        </button>
      )}
    </div>
  );
};

export default ProdSizeAndCart;
