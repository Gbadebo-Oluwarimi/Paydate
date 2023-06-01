import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { useState } from 'react'


const CREATE_USER = gql `mutation createauser($registerInput: RegisterInput) {
    createUser(registerInput: $registerInput) {
      email,
      id,
      token
    }
  }`


const SignUp = () => {


    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('')
    const [Username, setUsername] = useState('');

    const [createUser, { loading, error }] = useMutation(CREATE_USER);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(password !== confirmpassword){
            console.log('Passwords field do not match')
        }
        const  data  = await createUser({
            variables: {
              registerInput: {
                password,
                email,
                Username
              },
            },
          })

         .then((data) => {
              // Handle successful response
              console.log(data);
            })
         .catch((error) => {
              // Handle error
              console.error(error);
            });
    }


  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
    <div className='w-full min-h-screen bg-bgcolor font-poppins'>
    <div className='text-textcolor m-auto max-w-lg indent-3.5'>
      <div className='py-10'><span className='font-semibold text-xl px-3'>Pay<span className='text-primarycolor'>Date</span></span></div>
    <div className='w-full bg-white rounded h-auto drop-shadow-xl px-12 py-10'>
        <div className='text-xl font-semibold pb-8'> Create an Account</div>

      <div className='pb-10'>
    
<label for="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
<input className=" outline-none ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
<p id="helper-text-explanation" className="mt-2 text-xs text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>

      </div>
      <div className='pb-10'>
    
    <label for="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Create Username</label>
    <input type="text" className="font-poppins outline-none ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-font-poppins " placeholder="John Doe"  onChange={(e) => setUsername(e.target.value)} value={Username}/>
    <p id="helper-text-explanation" className=" mt-2 float-right font-medium  text-blue-600 hover:underline dark:text-blue-500 text-xs">Must Be Uinque</p>
    
          </div>
      <div className='pb-10'>
    
    <label for="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Create Password</label>
    <input type="Password" className="font-poppins outline-none ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder=""  onChange={(e) => setPassword(e.target.value)} value={password}/>
    
          </div>
          <div className='pb-10'>
    
    <label for="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Confirm Password</label>
    <input type="Password" className="font-poppins outline-none ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder=""  onChange={(e) => setConfirmpassword(e.target.value)} value={confirmpassword}/>
    
          </div>

      <div className='pt-8'>
    <input type="checkbox" value="" className="font-poppins outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
      </div>
    
    <div className='m-auto text-center pt-10'>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-40" onClick={(e) => handleSubmit(e)}>Create Account</button>
    </div>
    </div>
    </div>
   
    </div>
    </form>
  )
}

export default SignUp
