"use client";

import React, { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import { cartState } from "../store/atoms/cartState";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import { LiaShoppingBagSolid } from 'react-icons/lia';




const TopNavbar: React.FC = () => {
  const cart = useRecoilValue(cartState);
  var cartLen =
    cart.length > 0
      ? cart.map((item) => item.quantity).reduce((a, b) => a + b)
      : 0;

  const router = useRouter();
  
  const [isLogoHidden, setIsLogoHidden] = useState(false);

  const handleScroll = () => {
    // Determine the scroll position
    const scrollY = window.scrollY;
    const scrollThreshold = 950;
    if (scrollY > scrollThreshold) {
      setIsLogoHidden(true);
    } else {
      setIsLogoHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="z-10 relative w-screen">
      <nav
        className={`hidden md:flex fixed w-full top-0 left-0 right-0 ${
          isLogoHidden ? "justify-end" : "justify-between"
        } md:py-8 md:px-12 lg:px-20`}
      >
        <Image
          src="/assets/logoBlack.png"
          alt="Rhea-Vania-Logo"
          width={180}
          height={78}
          className={`h-[97px] cursor-pointer hover:scale-125 transition delay-100 ${
            isLogoHidden ? "hidden" : "block"
          }`}
          onClick={() => router.push("/")}
        />
        <div className={`flex ${isLogoHidden ? "pb-12" : "py-7"}`}>
          {navLinks.map((link) => {
            return (
              <p
                key={link.hash}
                className={`text-black text-sm font-light lg:text-[16px] mx-4 xl:mx-7 py-2 cursor-pointer ${isLogoHidden ? 'hidden' : 'flex'}`}
                onClick ={()=>router.push("/")}
             >
                {link.name}
              </p>
            );
          })}
          <Image
            src="/assets/cart-icon.png"
            alt="Cart-Icon"
            width={52}
            height={38}
            className={`md:ml-7 xl:ml-20 cursor-pointer ${!isLogoHidden ? 'flex' : 'flex'}`}
            onClick={() => router.push("/CartPage")}
          />
          {/* <LiaShoppingBagSolid 
            className="md:ml-7 mb-20 xl:ml-20 cursor-pointer text-[3.75rem]"
            onClick={() => router.push("/CartPage")}
          >
          </LiaShoppingBagSolid> */}
          <p
                className={`absolute right-[6.25rem] ${
                  isLogoHidden ? "top-[3.2rem]" : "top-[4.85rem]"
                }
                ${isLogoHidden ? 'flex' : 'flex'} 
                text-lg font-medium cursor-pointer`}
                onClick={() => router.push("/CartPage")}
              >
                {cartLen}
          </p>
        </div>
      </nav>
    </header>
  );
};

export default TopNavbar;
