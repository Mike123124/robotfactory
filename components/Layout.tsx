import { PropsWithChildren } from "react";
import Footer from "./Footer";

 
export default function Layout({ children }: PropsWithChildren<{}>) {
  
  return (
    
    <div className='min-h-screen flex flex-col gap-16 test-back' style={{ backgroundSize: 'cover'}}>
         {/* <div className="container">
    <img className="fog" src="./fog.png" alt="fog1.png"></img>
        </div> */}
           <div className="select-none relative robot">

        
<div className="select-none relative robot-container " style={{userSelect: 'none'}}>
  <div className="select-none relative robot-icon">
    
  </div>
  {/* <img  className="select-none absolute -top-5 -left-2 cat-image " style={{userSelect: 'none' }} src="./logo.png"></img> */}
</div>
</div>
      <main className='mb-auto pt-24' >
        {children}
      </main>
      <Footer />
    </div>
  )
}
