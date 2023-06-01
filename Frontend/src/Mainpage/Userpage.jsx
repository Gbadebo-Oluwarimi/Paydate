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
    <div className='font-poppins'>
         Hello {data.users.email}
    </div>
  )
}

export default Userpage
