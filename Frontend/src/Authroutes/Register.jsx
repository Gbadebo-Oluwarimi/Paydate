import React from 'react'
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client'
import { useState } from 'react'


const LOGIN_USER = gql`
mutation logins($loginInput: LoginInput){
    LoginUser(loginInput: $loginInput) {
      email
    }
  }
`


const Register = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [LoginUser, { loading, error }] = useMutation(LOGIN_USER);
    const handleSubmit = (e) =>{
        e.preventDefault();
        LoginUser({
            variables: {
              loginInput: {
                password,
                email,
              },
            },
          })
         .then((response) => {
              // Handle successful response
              console.log(response);
            })
         .catch((error) => {
              // Handle error
              console.error(error);
            });
    }
  return (
    <div>
      Kindly Register
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Register
