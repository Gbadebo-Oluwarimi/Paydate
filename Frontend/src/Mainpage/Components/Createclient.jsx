import React, { useState } from 'react'
import { gql, InMemoryCache } from '@apollo/client'
import { useMutation } from '@apollo/client'

// Graphql mutation to create a client
const CREATE_CLIENT = gql `mutation createclients($createclient: createClient){
  createCustomer(createclient: $createclient)
}`





const Createclient = ({ cancelpopup }) => {


    const [Clientemail, SetClientemail] = useState("")
    const [Clientname, SetClientname] = useState("")
    const [Clientmobile, SetClientmobile] = useState("")
    
    const [createCustomer, { loading, error }] = useMutation(CREATE_CLIENT);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log('ran')
        const clientdata = await createCustomer({
            variables: {
              createclient: {
                clientusername:Clientname,
                Clientemail,
                clientmobile:Clientmobile
              },
            },
          }).then(() => {
            cancelpopup();
          })
        }
  return (
    <div className='min-h-screen
     w-full fixed bg-gray-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <div className='text-textcolor m-auto max-w-lg indent-3.5 py-20'>
    <div className='w-full bg-white rounded h-auto drop-shadow-xl px-12 py-10'>
 <div className='text-xl font-semibold pb-8'>Create Client</div>

      <div className='pb-10'>
    
<label for="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client email</label>
<input className=" outline-none ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="johndoe@gmail.com" onChange={(e) => SetClientemail(e.target.value)} value={Clientemail}/>

      </div>
      <div className='pb-10'>
    
    <label for="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client-mobile</label>
    <input type="text" className="font-poppins outline-none ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="*********"  onChange={(e) => SetClientmobile(e.target.value)} value={Clientmobile}/>

    
          </div>
          <div>
    
    <label for="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client-Username</label>
    <input type="text" className="font-poppins outline-none ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="*********"  onChange={(e) => SetClientname(e.target.value)} value={Clientname}/>

    
          </div>
     
    <div className='m-auto text-center pt-10'>
    <button type="button" className="text-white rounded-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 w-40" onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Createclient
