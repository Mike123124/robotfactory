import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PageHeading from "./PageHeading";
const FORM_ENDPOINT = "https://public.herotofu.com/v1/23c47750-0318-11ed-bc36-e1ea9ccadd33"; 
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
      
    }, 100);
  };

  // const success = () => toast.success('You will be emailed in 24 hours.', {
  //   duration: 100000,
  //   position: 'top-center',
  //   // Styling - not needed 
  // });

  if (submitted) {
    return(
       <>
       <Toaster
      position="top-center"
      reverseOrder={false}
      
    />
    <PageHeading>Success!</PageHeading>

    </>
    
    )
   
    console.log("user success")
  }

  return (
    <div>


    
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      
      <div className="mb-1 pt-0">
        <input
          type="text"
          placeholder="Your Wallet ID"
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="TXID (Optional)"
          name="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring w-full"
        />
      </div>
      <div className="mb-3 pt-0 ">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 inline-block align-middle"
          type="submit"
          // onClick={success}
        >
          SUBMIT
        </button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;
