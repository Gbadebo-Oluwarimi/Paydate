import React from 'react'
import { useQuery, InMemoryCache} from '@apollo/client';
import { gql } from '@apollo/client';

const GET_CLIENTS = gql`
query test{
   testing
}
`;


const Userpage = () => {
    console.log('worked')
    const { loading, error, data } = useQuery(GET_CLIENTS);
    //console.log(data)
    if (loading) return 'Loading';
    if (error) return <p>Something Went Wrong</p>;
  return (
    <div>
         {data.testing}
    </div>
  )
}

export default Userpage
