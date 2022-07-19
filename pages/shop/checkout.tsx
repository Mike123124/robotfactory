// pages/shop/checkout.tsx
import { createQR, encodeURL, EncodeURLComponents, findTransactionSignature, FindTransactionSignatureError, validateTransactionSignature, ValidateTransactionSignatureError } from "@solana/pay";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";
import BigNumber from "bignumber.js";
import { time } from "console";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef } from "react";
import BackLink from "../../components/BackLink";
import PageHeading from "../../components/PageHeading";
import { shopAddress, solADDRESS } from "../../lib/addresses";
import calculatePrice from "../../lib/calculatePrice";

export default function Checkout() {
  const router = useRouter()


  const qrRef = useRef<HTMLDivElement>(null)

  const amount = useMemo(() => calculatePrice(router.query), [router.query])


  const reference = useMemo(() => Keypair.generate().publicKey, [])

  
  const network = WalletAdapterNetwork.Mainnet
  const endpoint = 'https://nd-085-635-850.p2pify.com/5b052b74fb6f428c0e3ad312fd601428'
  const connection = new Connection(endpoint)



  const urlParams: EncodeURLComponents = {
    recipient: shopAddress,
    amount,
    reference,
    label: "Dark Skellies RPC",
    message: "Thanks for your support!",
  }

  
  const url = encodeURL(urlParams)
  console.log({ url })


  useEffect(() => {
    const qr = createQR(url, 512, 'transparent')
    if (qrRef.current && amount.isGreaterThan(0)) {
      qrRef.current.innerHTML = ''
      qr.append(qrRef.current)
    }
  })

 
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
     
        const signatureInfo = await findTransactionSignature(connection, reference, {}, 'confirmed')
    
        await validateTransactionSignature(connection, signatureInfo.signature, shopAddress, amount, solADDRESS, reference, 'confirmed')
        router.push('/shop/confirmed')
      } catch (e) {
        if (e instanceof FindTransactionSignatureError) {
          
          return;
        }
        if (e instanceof ValidateTransactionSignatureError) {
      
          console.error('Transaction is invalid', e)
          return;
        }
        console.error('Unknown error', e)
      }
    }, 500)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex flex-col items-center gap-8">
      <BackLink href='/shop'>Cancel</BackLink>

      <PageHeading>Checkout ${amount.toString()}</PageHeading>

     
      <div ref={qrRef} />
    </div>
  )
}
