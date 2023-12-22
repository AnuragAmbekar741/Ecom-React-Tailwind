import { useSearchParams } from "next/navigation";
import { productData } from '@/lib/data';

interface ProdDescriptionProps{
  screenSize?:boolean
}

const ProdDescription:React.FC<ProdDescriptionProps> = ({
  screenSize
}) => {
    const params = useSearchParams();
    const id = params.get("id");
    const selectedProd = productData.filter((item) => item.id === id)[0];

  return (
      <div className={`${screenSize?'hidden lg:grid':'grid lg:hidden'} w-full lg:w-1/3 pl-5 pr-10 pt-5 justify-start overflow-y-auto`}>
        <h2 className="text-xl">DESCRIPTION</h2>
        <p className="text-[16px] md:text-sm font-light leading-6 my-1">
          {selectedProd.ideation.prop1}
        </p>
        <p className="text-[16px] md:text-sm font-light leading-6 my-1">
          {selectedProd.ideation.prop2}
        </p>
        <p className="text-[16px] md:text-sm font-light leading-6 my-1">
          {selectedProd.ideation.prop3}
        </p>
        <h2 className="text-xl mt-3">COMPOSITION</h2>
        <p className="text-[16px] md:text-sm leading-6 my-1">
          {selectedProd.composition.prop1}
        </p>
        <p className="text-[16px] md:text-sm leading-6">
          {selectedProd.composition.prop2}
        </p>
        <h2 className="text-xl mt-2">CARE INSTRUCTIONS</h2>
        <p className="text-[16px] md:text-sm font-light leading-6   mb-5">
          {selectedProd.careInstructions}
        </p>
      </div>
  )
}

export default ProdDescription