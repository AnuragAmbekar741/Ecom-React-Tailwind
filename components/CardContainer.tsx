import React from "react";
import { productData } from "@/lib/data";
import ProductCard from "./ProductCard";

const CardContainer: React.FC = () => {
  return (
    <section className="flex w-full overflow-x-scroll px-5 pb-10 md:px-20">
      {productData.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
};

export default CardContainer;
