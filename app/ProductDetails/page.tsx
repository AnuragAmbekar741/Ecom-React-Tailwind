"use client";
import ProdDescription from "@/components/ProductDetails/ProdDescription";
import ProdImage from "@/components/ProductDetails/ProdImage";
import ProdSizeAndCart from "@/components/ProductDetails/ProdSizeAndCart";

const page = () => {
  return (
    <div className="grid lg:flex p-7 pt-40 lg:px-16 border w-full">
      <ProdDescription screenSize />
      <div className="w-full h-[85vh] md:h-[75vh] lg:w-1/3 px-4 flex flex-col overflow-y-auto">
        <ProdImage />
      </div>
      <ProdSizeAndCart />
      <ProdDescription />
    </div>
  );
};

export default page;
