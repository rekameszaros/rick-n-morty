import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, ApolloProvider,InMemoryCache} from '@apollo/client';
import { createBrowserRouter, RouterProvider, Route, BrowserRouter } from "react-router-dom";
import CharactersList from "./pages/CharactersList";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <BrowserRouter>
  <ApolloProvider client={client}>
  <App/>
  </ApolloProvider>
  </BrowserRouter>
</React.StrictMode>
)

