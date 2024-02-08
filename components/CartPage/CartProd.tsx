import Image from "next/image";
import React, { useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useRecoilState } from "recoil";

import { cartState } from "../../store/atoms/productDetails";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import {
  CartProductDetails,
  orderState,
} from "../../store/atoms/orderDetailsState";

interface ProductDetails {
  ID: number;
  id: string;
  name: string;
  price: string;
  cartIcon: StaticImageData;
  quantity: number;
  size?: string | undefined;
  [key: string]: any; // Allow for additional dynamic properties if needed
}

interface Order {
  products: CartProductDetails[];
  count: number;
  totalAmt: number;
}

interface CartProdProps {
  product: ProductDetails;
}

const CartProd: React.FC<CartProdProps> = ({ product }) => {
  const { ID, id, name, price, cartIcon, quantity, size } = product;

  const router = useRouter();

  const [cart, setCart] = useRecoilState(cartState);
  const [order, setOrder] = useRecoilState<Order>(orderState);

  const calculateCart = () => {
    const products = cart.map((item) => {
      return {
        name: item.name,
        size: item.size,
        quantity: item.quantity,
        price: item.price2,
      };
    });
    const totalPayableAmt = products
      .map((item) => item.price * item.quantity)
      .reduce((a, b) => a + b);
    const productCount = products
      .map((item) => item.quantity)
      .reduce((a, b) => a + b);

    const finalcart = {
      products: products,
      count: productCount,
      totalAmt: totalPayableAmt,
    } as Order;
    setOrder(finalcart);
    return finalcart;
  };

  useEffect(() => {
    const Order = calculateCart();
  }, [cart]);

  const alterQuant = (quant: number, alter: string) => {
    const index = cart.findIndex(
      (item) => item.id === id && item.size === size
    );
    const updatedCart = [...cart];

    if (alter === "add") {
      if (quant < 3)
        updatedCart[index] = {
          ...cart[index],
          quantity: cart[index].quantity + 1,
        };
      else {
        alert("Not accepting same product more than trice");
        return;
      }
    }

    if (alter === "sub") {
      if (quant == 1) {
        setCart([...cart.filter((item) => item.ID !== ID)]);
        localStorage.removeItem("cart");
        return;
      }
      if (quant > 1) {
        updatedCart[index] = {
          ...cart[index],
          quantity: cart[index].quantity - 1,
        };
      }
    }

    setCart(updatedCart);
  };

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  return (
    <div className="flex p-3 rounded-lg w-full my-1 justify-between text-black">
      <Image
        src={cartIcon}
        width={70}
        height={70}
        alt=""
        onClick={() => router.push(`/ProductDetails/?id=${id}`)}
      />

      <div>
        {name.split(" ").map((word) => (
          <h3 className="text-sm sm:text-md lg:text-[16.25px] font-light">
            {word}
          </h3>
        ))}
      </div>
      <h3 className="text-sm sm:text-md lg:text-[16.25px] font-light">
        {price}
      </h3>
      <div>
        {size?.split(" ").map((word) => (
          <h3 className="text-sm sm:text-md lg:text-[16.25px] font-light">
            {word}
          </h3>
        ))}
      </div>
      <div className="flex pl-3 md:pl-0 sm:pr-5 lg:pr-0">
        <AiOutlineMinus
          className={`text-[14px] md:text-[16px] mt-[0.35rem]  mr-1 md:mr-2 cursor-pointer`}
          onClick={() => alterQuant(quantity, "sub")}
        />
        <p className="text-lg md:text-xl font-light">{quantity}</p>
        <AiOutlinePlus
          className={`text-[14px] md:text-[16px] mt-[0.35rem] ml-1 md:ml-2 cursor-pointer `}
          onClick={() => alterQuant(quantity, "add")}
        />
      </div>
    </div>
  );
};

export default CartProd;
