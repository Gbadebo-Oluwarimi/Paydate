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
    <div class="container mx-auto">
    <div class="grid grid-cols-8">
      <div class="col-span-6">
        // Navbar for the left section
      </div>
      <div class="col-span-2">Right Section</div>
    </div>
  </div>
  )
}

export default Userpage
