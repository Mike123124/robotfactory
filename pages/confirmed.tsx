import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BackLink from '../components/BackLink';
import Confirmed from '../components/Confirmed';
import PageHeading from '../components/PageHeading';
import ContactForm from '../components/ContactForm';
export default function ConfirmedPage() {
  return (
    <div className='flex flex-col items-center gap-8 text-white text-1xl'>
      <BackLink href='/' >Home</BackLink>

      

      {/* <div className='h-80 w-80'><Confirmed /></div> */}
      <PageHeading>Please enter your email, wallet address, and TXID.</PageHeading>
      <ContactForm/>
      
    </div>
  )
}
