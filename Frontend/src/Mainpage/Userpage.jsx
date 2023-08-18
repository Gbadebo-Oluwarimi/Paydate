import React from 'react'
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./Maincomponent/avatar"

import { useQuery, InMemoryCache} from '@apollo/client';
import { gql } from '@apollo/client';
import Createclient from './Components/Createclient';
import Tablecomponent from './Components/tablecomponent';
import Clienttable from './Components/Clienttable';
import Createinvoice from './Components/Createinvoice';

const GET_CLIENTS = gql`

query getusers{
  users {
    email,
    id,

  }
}`


const Userpage = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Gilbert Gilfoyle",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  // functions to update popup states
  const updatepopup = () => {
      setpopup(!popup)
  }
  const updateclientpopup = () =>{
    settablepopup(false)
    setclientpopup(true)
  }
  // const updatetablepopup = () => {
  //   settablepopup(!tablepopup)
  // }
  const updateinvoicepopup = () => {
    setinvoicepopup(!invoicepopup)
  }






  const [popup, setpopup] = useState(false);
  const [invoicepopup, setinvoicepopup] = useState(false);
  const [clientpopup, setclientpopup] = useState(false)
  const [tablepopup, settablepopup] = useState(true)
 
    const { loading, error, data } = useQuery(GET_CLIENTS); // data to get the client name 
    if (loading) return 'Loading';
    if (error) return <p>Something Went Wrong</p>;
  return (
    <div class=" font-poppins">
      {popup && <Createclient cancelpopup={updatepopup}/>}
      {invoicepopup && <Createinvoice cancelpopup={updateinvoicepopup}/>}
    <div class="flex">
      <div class="flex-grow-2 w-9/12">
        <div className='py-5'>
            <div className='m-auto max-w-3xl'>
            <span className='font-medium text-md px-3'>Pay<span className='text-primarycolor'>Date</span></span>
            </div>
        </div>
        <hr/>
        <div className='py-5 text-xs '>
            <div className='m-auto max-w-3xl px-3'>
              <div className=" w-96">
           <ul className='flex justify-between cursor-pointer'>
            <li>Home</li>
            <li onClick={updateclientpopup}>Client</li>
            <li>Client Invoice</li>
            <li>Completed</li>
            <li>Pending</li>
           </ul>
           </div>
            </div>
        </div>
        <hr/>
        <div className='py-4'>
            <div className='m-auto max-w-3xl px-3'>
            <div className='flex align-middle justify-between'>
              <div className='text-sm'>
          <h1 className='font-semibold pb-1'>&#x1F590; Hello {data.users.email}</h1>
          <h3 className='text-xs text-textcolor2 font-light'>Create and edit all you invoices right here &#x1F44C;</h3>
          
              </div>
              <div>
              <button class="rounded-none text-xs bg-white border-1 border border-slate-500 px-6 py-3 mr-3 focus:ring-2 focus:ring-slate-300" onClick={updateinvoicepopup}>New Invoice</button>
              <button class="rounded-none text-xs bg-darkpri text-white border-1 border border-slate-500 px-6 py-3 focus:ring-2 focus:ring-blue-300" onClick={updatepopup}>Create Client</button>
              </div>
            </div>
            </div>
        </div>
        <hr/>

      {tablepopup && <Tablecomponent invoices={invoices}/>}
      {clientpopup && <Clienttable/>}




      </div>

      <div class="flex-shrink w-3/12 text-xs">
      {/* <div class="w-0.5 h-16 bg-gray-500 mx-auto"></div> */}
      <div className='my-4 w-full'>
           <div className='flex'>
            <div className='ml-4 p-2 rounded-md bg-slate-100'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
        </div>

        <div className='ml-6 p-2 rounded-md bg-slate-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-4 h-4 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>

        </div>

        <div className='ml-6 p-2 rounded-md bg-slate-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
</svg>


        </div>
          
          
           </div>
        </div>
        <hr/>

          <div className='py-7 w-full bg-violet-400 text-white'>
          
</div>
          <hr/>



      </div>
    </div>
  </div>
  )
}

export default Userpage
