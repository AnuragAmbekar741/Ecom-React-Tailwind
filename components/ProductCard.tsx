"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductDetails {
  product: {
    id: string;
    name: string;
    imgages: [];
    [key: string]: any;
  };
}

const ProductCard: React.FC<ProductDetails> = ({ product }) => {
  const router = useRouter();

  const handleClick = () => router.push(`/ProductDetails/?id=${id}`);

  const { id, name, images } = product;

  return (
    <div
      className="min-w-[300px] md:min-w-[350px] xl:min-w-[400px] mr-9 cursor-pointer hover:scale-105 grid"
      onClick={handleClick}
    >
      <div className="h-2/3">
        <Image
          src={images[0]}
          alt="Product image"
          width={"500"}
          height={"500"}
          className="w-full object-contain object-center"
        />
      </div>

      <p className="text-xl font-light my-2 p-3 border border-black text-center">
        {name}
      </p>
    </div>
  );
};

export default ProductCard;
