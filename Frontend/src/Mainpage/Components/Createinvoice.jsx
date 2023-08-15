import React from 'react'
import { gql, InMemoryCache } from '@apollo/client'
import { useMutation } from '@apollo/client'


const CREATE_USER_INVOICE = gql`
mutation createInvoice($createInvoice: CreateInvoice){
    createInvoice(CreateInvoice: $createInvoice)
  }
`



const Createinvoice = ({ cancelpopup }) => {
    const [invoice_description, setinvoicedesc] = useState('');
    const [exp_date, setexpdate] = useState("")
    const [start_date, setstartdate] = useState("")

    const handlesubmit = async (e) => {
        e.preventdefault()
        const invocice = await createInvoice({
            variables: {
              createInvoice: {
                invoice_description,
                exp_date,
                start_date
              },
            },
          }).then(() => {
            cancelpopup();
          })

    }
  return (
    <div>
       <div className='min-h-screen
     w-full fixed bg-gray-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <div className='text-textcolor m-auto max-w-lg indent-3.5 py-20'>
    <div className='w-full bg-white rounded h-auto drop-shadow-xl px-12 py-10'>
 <div className='text-xl font-semibold pb-8'>Create Client</div>

      <div className='pb-10'>
    
<label for="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">invoice description</label>
<input className=" outline-none ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="johndoe@gmail.com" onChange={(e) => setinvoicedesc(e.target.value)} value={invoice_description}/>

      </div>
      <div className='pb-10'>
    
    <label for="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">invoice start Date</label>
    <input type="text" className="font-poppins outline-none ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="*********"  onChange={(e) => setstartdate(e.target.value)} value={start_date}/>

    
          </div>
          <div>
    
    <label for="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Invoice Expiry date</label>
    <input type="text" className="font-poppins outline-none ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="*********"  onChange={(e) => setexpdate(e.target.value)} value={exp_date}/>

    
          </div>
     
    <div className='m-auto text-center pt-10'>
    <button type="button" className="text-white rounded-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 w-40" onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Createinvoice
