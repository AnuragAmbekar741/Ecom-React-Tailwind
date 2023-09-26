"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { productData,sizeChartData } from "@/lib/data";
import { useState,useRef } from "react";
import Image from "next/image";

import { useRecoilState } from "recoil";
import { cartState,ProductDetails } from "@/store/atoms/cartState";

import { StaticImageData } from "next/image";

interface ProdDetails  {
    id: string;
    name: string;
    price: string;
    cartIcon: StaticImageData;
    quantity?: number;
    size?: string|undefined;
    [key:string]:any
}
 

const page = () => {
  const params = useSearchParams();
  const id = params.get("id");

  const selectedProd = productData.filter((item) => item.id === id)[0];

  const [toggle, setToggle] = useState<{ sizeChart: boolean; customSize: boolean }>({
    sizeChart: false,
    customSize:false
  });

  const selectRef = useRef<HTMLSelectElement | null>(null)

  const [customSizes,setCustomSizes] = useState<{bust:string;waist:string;hip:string}>({
    bust:'',
    waist:'',
    hip:''
  })

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    if(selectRef.current?.value === "custom"){
      setToggle({sizeChart:false,customSize:true})
    }
    if(selectRef.current?.value !== "custom"){
      setToggle({sizeChart:false,customSize:false})
    }
  }

  const handleClick: () => void = () =>{
    setToggle({ customSize:false, sizeChart:true })
    if(selectRef.current?.value === "custom") selectRef.current!.value = 'uk6'
  }

  const [cart,setCart] = useRecoilState(cartState)

  const checkSameSize = async (prodToAdd:ProductDetails) =>{
    let prodIndex = cart.findIndex(prod=>prod.id == prodToAdd.id && prod.size == prodToAdd.size)
    console.log()
    if(prodIndex!==-1){
    const updatedCart = [...cart];
    updatedCart[prodIndex] = { ...cart[prodIndex], quantity: cart[prodIndex].quantity + 1 };
    setCart(updatedCart); 
    }
    else{
      prodToAdd['quantity'] = 1
      setCart([...cart,prodToAdd])
      console.log('diff size')
    }
    console.log(cart)
  }

  const addSizeQuant = async () =>{
    const prodToAdd:ProdDetails = {...selectedProd}
    const cartCheck = cart.filter(item=>item.id===prodToAdd.id && item.quantity>3)
    if(cartCheck.length>0){
      alert("Same prodcut can't be added trice!")
      return
    }
    if(selectRef.current?.value==='custom'){
      if(customSizes.bust!=='' && customSizes.waist!=='' && customSizes.hip!=='') {
        var str = "Bust:"+customSizes.bust+" Waist:"+customSizes.waist+" Hip:"+customSizes.hip
        // var str = JSON.stringify({bust:customSizes.bust,waist:customSizes.waist,hip:customSizes.hip}) 
        console.log(str)
        prodToAdd['size'] = str as string
      }else alert('Please add custom sizes for all the measurements.')
    }
    if(selectRef.current?.value!=='custom'){
      prodToAdd['size'] = selectRef.current?.value as string
    }
    return prodToAdd as ProductDetails
  }

  const addToCart = async() => {
    const prodToAdd = await addSizeQuant()
    if(!prodToAdd) return
    await checkSameSize(prodToAdd)
  }

  return (
    <div className="flex p-7 pt-40 border w-full h-[100vh]">
      <div className="w-1/3 pl-5 pr-10 pt-5  justify-start overflow-y-auto">
        <h2 className="text-xl">Ideadtion</h2>
        <p className="text-[16px] font-light leading-6  mt-2 mb-2">
          {selectedProd.ideation.prop1}
        </p>
        <p className="text-[16px] font-light leading-6  mt-2 mb-2">
          {selectedProd.ideation.prop2}
        </p>
        <p className="text-[16px] font-light leading-6  mt-2 mb-2">
          {selectedProd.ideation.prop3}
        </p>
        <h2 className="text-xl mt-6">Composition</h2>
        <p className="text-[16px] font-medium leading-6  my-2">
          {selectedProd.composition.prop1}
        </p>
        <p className="text-[16px] font-medium leading-6  my-2">
          {selectedProd.composition.prop2}
        </p>
        <h2 className="text-xl mt-6">Material</h2>
        <p className="text-[16px] font-light leading-6  my-2 mb-5">
          {selectedProd.careInstructions}
        </p>
      </div>
      <div className="w-1/3 px-4 flex flex-col overflow-y-auto">
        <Image width={500} height={500} src={selectedProd.img1} className="w-full object-contain" alt="" />
        <Image width={500} height={500} src={selectedProd.img2} className="w-full object-contain" alt="" />
      </div>
      <div className="w-1/3 p-2 pl-7 pt-5">
        <h1 className="text-lg font-bold">{selectedProd.name}</h1>
        <h5 className="text-md mt-3 mb-8">{selectedProd.price}</h5>
        <div className="flex mt-10 justify-between pr-10">
          <h2 className="text-lg mt-2">Select</h2>
          <select 
            className="border-b border-black w-2/5 outline-none p-2 text-xl font-semibold"
            onChange={e=>handleChange(e)}
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
        <div className={`${toggle.customSize?'block':'hidden'} border border-black p-3 mr-10 mt-5 flex justify-between`}>
          <div className="w-1/3 mr-5">
            <p className="text-xl font-light">Bust</p>
            <input 
              type="number" 
              className="w-full p-[2.5px] border-b border-black focus:outline-none"
              onChange={(e)=>setCustomSizes({...customSizes,bust:e.target.value})}  
            />
          </div>
          <div className="w-1/3 mr-5">
            <p className="text-xl font-light">Waist</p>
            <input 
              type="number" 
              className="w-full p-[2.5px] border-b border-black focus:outline-none"
              onChange={(e)=>setCustomSizes({...customSizes,waist:e.target.value})}  
            />
          </div>
          <div className="w-1/3 mr-5">
            <p className="text-xl font-light">Hip</p>
            <input 
              type="number" 
              className="w-full p-[2.5px] border-b border-black focus:outline-none"
              onChange={(e)=>setCustomSizes({...customSizes,hip:e.target.value})}  
            />
          </div>
        </div>
        <div
          className={`${
            toggle.sizeChart ? "grid" : "hidden"
          } mt-8 border border-black p-2 pr-0 mr-10`}
        >
          <div className="flex w-full p-1 pr-10 justify-between">
            <h3 className="text-md font-bold">Uk</h3>
            <h3 className="text-md font-bold">Bust</h3>
            <h3 className="text-md font-bold">Waist</h3>
            <h3 className="text-md font-bold">Hip</h3>
          </div>
          <div className="flex justify-between">
            <div className="grid">
              {sizeChartData.map(size=><h3 key={size.UK} className="text-md px-[0.7rem] py-1">{size.UK}</h3>)}
            </div>
            <div className="grid -ml-3">
              {sizeChartData.map(size=><h3 key={size.Bust} className="text-md px-[0.6rem] py-1">{size.Bust}</h3>)}
            </div>
            <div className="grid -ml-4">
              {sizeChartData.map(size=><h3 key={size.Waist} className="text-md px-[0.6rem] py-1 ">{size.Waist}</h3>)}
            </div>
            <div className="grid mr-4">
              {sizeChartData.map(size=><h3 key={size.Hip} className="text-md px-[0.6rem] py-1">{size.Hip}</h3>)}
            </div>
          </div>
        </div>
        <button
          onClick={addToCart} 
          className="mt-5 py-2 px-36 border text-xl font-light border-black">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default page;
