import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

//import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client' imports the Apollo Client library, which is used to connect to the GraphQL API. Specifically, it imports the ApolloClient class, which is used to create a new client, and the ApolloProvider component, which is used to provide the client to the React components. It also imports the InMemoryCache class, which is used to cache data on the client-side.

//const client = new ApolloClient({ uri: "https://rickandmortyapi.com/graphql", cache: new InMemoryCache() }) creates a new Apollo Client instance with a URI that points to the GraphQL endpoint of the Rick and Morty API. The cache option specifies that the client should use an in-memory cache to store the data it receives from the server.

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
)
