import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, ApolloProvider,InMemoryCache} from '@apollo/client';
import { createBrowserRouter, Route, BrowserRouter, RouterProvider } from "react-router-dom";
import CharactersList from "./pages/CharactersList";
import Character from './pages/Character';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const router =createBrowserRouter ([
{
  path: "/",
  element: <App/>
},
{
  path: "/:id",
  element: <Character />,
},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
 
  <ApolloProvider client={client}>
    
 <RouterProvider router={router}/>
  
  </ApolloProvider>
)

//hey
