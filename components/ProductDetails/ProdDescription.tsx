import { useSearchParams } from "next/navigation";
import { productData } from '@/lib/data';

const ProdDescription = () => {
    const params = useSearchParams();
    const id = params.get("id");
    const selectedProd = productData.filter((item) => item.id === id)[0];

  return (
      <div className="hidden lg:grid w-full lg:w-1/3 pl-5 pr-10 pt-5  justify-start overflow-y-auto">
        <h2 className="text-xl">DESCRIPTION</h2>
        <p className="text-[16px] font-light leading-6  mt-2 mb-2">
          {selectedProd.ideation.prop1}
        </p>
        <p className="text-[16px] font-light leading-6  mt-2 mb-2">
          {selectedProd.ideation.prop2}
        </p>
        <p className="text-[16px] font-light leading-6  mt-2 mb-2">
          {selectedProd.ideation.prop3}
        </p>
        <h2 className="text-xl mt-3">COMPOSITION</h2>
        <p className="text-[16px] leading-6 my-1">
          {selectedProd.composition.prop1}
        </p>
        <p className="text-[16px] leading-6">
          {selectedProd.composition.prop2}
        </p>
        <h2 className="text-xl mt-2">CARE INSTRUCTIONS</h2>
        <p className="text-[16px] font-light leading-6  my-1 mb-5">
          {selectedProd.careInstructions}
        </p>
      </div>
  )
}

export default ProdDescription