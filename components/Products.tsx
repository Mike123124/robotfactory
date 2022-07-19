import { useRef, useState, useEffect} from "react";
import { products } from "../lib/products"
import NumberInput from "./NumberInput";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
let price = require('crypto-price')
interface Props {
  submitTarget: string;
  enabled: boolean;
}




export default function Products({ submitTarget, enabled }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [price, setPrice] = useState(0)
  
  useEffect(() => {
    // 👇️ only runs once
   axios
  .get("https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD&api_key=007d8b479a54da6c88c13bb103d92469847f94c583f2fcd3f44d7fa8f77a1dad")
  .then(response => setPrice(response.data.USD))
  }, []); 




  const checkingout = () => toast.success('Checking out...')
  return (
    
    <form method='get' action={submitTarget} ref={formRef}>
      <Toaster/>
      <div className='flex flex-col gap-16 select-none'>
      <div className="grid grid-cols-2 gap-8">

        {products.map(product => {
          let button;
          if(product.disabled == 'true')
          {
            button =  <div className="mt-1" >
              
            {/* <NumberInput name={product.id} formRef={formRef} /> */}
          </div>
          } else{
            button =  <div className="mt-1 flex items-center" >
              
            <NumberInput name={product.id} formRef={formRef} />
          </div>
          }
          return (
            <div className="p-8 text-left bg-[#583329] text-white rounded-md items-center flex flex-col " key={product.id} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              {/* <h3 className="text-2xl font-bold">{product.name}</h3> */}
              <p className="text-sm text-white">{product.description}</p>
              <p className="my-4 text-center">
             
                 <span className="mt-4 text-xl font-bold ">{product.priceSol} $SOL </span>
                {product.unitName && <span className="text-sm text-white-800 text-center"> /{product.unitName}   <span className="mt-1 text-xs  flex flex-col text-center ">({price} $USDC) </span> </span>}
              </p>
              {/* <div className="mt-1" >
              
                <NumberInput name={product.id} formRef={formRef} />
              </div> */}
              <div className="mt-1 flex items-center" >
              
              {button}
            </div>
              
            </div>
          )
        })}
      </div>

        <button
          className=" items-center self-center px-20 py-2 text-white bg-black rounded-md max-w-fit hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!enabled}
          onClick={checkingout}
        >
          Checkout
        </button>
      </div>
    </form>
  )
}
