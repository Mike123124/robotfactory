import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import Products from '../components/Products'
import SiteHeading from '../components/SiteHeading'

export default function HomePage() {

  const { publicKey } = useWallet()

  return (
    <div className="flex flex-col items-stretch max-w-4xl gap-8 pt-24 m-auto  ">
      {/* <SiteHeading>Robot Factory RPC</SiteHeading> */}

      {/* We add the Solana wallet connect button */}
      <div className="basis-1/4 absolute top-5 right-5 ">
        <WalletMultiButton className='!bg-black  hover:scale-105' />
      </div>

  

      {/* We disable checking out without a connected wallet */}
      {/* Also the submitTarget is /buy/transaction instead of /checkout */}
      <Products submitTarget='/checkout' enabled={publicKey !== null} />
    </div>
  )
}
