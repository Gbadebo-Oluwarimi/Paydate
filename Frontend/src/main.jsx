import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client'



const httpLink = createHttpLink({
  uri:'http://localhost:4000/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
 
)
