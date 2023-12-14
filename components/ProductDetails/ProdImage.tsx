import { useSearchParams } from "next/navigation";
import { productData } from '@/lib/data';
import Image from "next/image";

const ProdImage = () => {

    const params = useSearchParams();
    const id = params.get("id");
    const selectedProd = productData.filter((item) => item.id === id)[0];

  return  selectedProd.images.map(img=> <Image width={500} height={500} src={img} className="w-full object-contain" alt="" />)

}

export default ProdImage