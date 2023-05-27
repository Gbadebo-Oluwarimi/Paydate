import { gql } from '@apollo/client';
import { useEffect } from 'react';
import { ApolloProvider, ApolloClient, useQuery, InMemoryCache} from '@apollo/client';
import './App.css'
// create a apollo server connection here 
const GET_CLIENTS = gql`
query test{
   testing
}
`;


function App() {
  console.log('worked')
  const { loading, error, data } = useQuery(GET_CLIENTS);
console.log(data)
  if (loading) return 'Loading';
  if (error) return <p>Something Went Wrong</p>;

  return (
    <div> 
        <div>
          {data.testing}
        </div>
    </div>
  )
}

export default App
