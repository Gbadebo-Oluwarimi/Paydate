import React from 'react'
import { useQuery, InMemoryCache} from '@apollo/client';
import { gql } from '@apollo/client';

const GET_CLIENTS = gql`

query getusers{
  users {
    email,
    id,

  }
}`


const Userpage = () => {
    const { loading, error, data } = useQuery(GET_CLIENTS);
    if (loading) return 'Loading';
    if (error) return <p>Something Went Wrong</p>;
  return (
    <div class="container font-poppins">
    <div class="grid grid-cols-8">
      <div class="col-span-6">
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
            <li>Client</li>
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
            <div className='flex'>
              <div className='text-sm'>
          <h1 className='font-semibold pb-1'>Project Management</h1>
          <h3 className='text-xs text-textcolor2 font-light'>Create and edit all you invoices right here &#x1F44C;</h3>
          
              </div>
            </div>
            </div>
        </div>
        <hr/>

        <div className="m-auto max-w-3xl px-3 py-5">
            <span className='text-xl font-semibold'>
              Today's Client invoice <br/> Reminders
            </span>
        </div>




      </div>

      <div class="col-span-2.5">
        
      </div>
    </div>
  </div>
  )
}

export default Userpage
