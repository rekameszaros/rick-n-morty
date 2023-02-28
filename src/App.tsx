import { useState } from "react";
import "./App.css";
import CharactersList from "./pages/CharactersList";
import ReactDOM from "react-dom/client";
//import React, { Fragment } from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Shared/Header";

function App() {
  return <div className="App">
    <Header />
    <CharactersList/>
  </div>;
}
export default App;

/*
function App() {
  return ( <div className="App">
     <Router>
        <Route path="/" element={<CharactersList />} exact />{" "}
        <Route path="/search" element={<Search />} exact />{" "}
        <Route path="/:id" element={<Character />} exact />{" "}
      </Router>
  </div>
  );
}

export default App;
*/

/*
function App() {
  return ( <div className="App">
     <Switch>
        <Route strict exact path="/" component={CharactersList} />
        <Route strict exact path="/" component={Search} />
        <Route strict exact path="/" component={Character} />
      </Switch>
  </div>
  );
}

export default App;
*/

/*
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Router>
          <Header />
          <div className="imgcontainer">
            <img src="src/assets/hero.png" className="heroimg" alt="hero"></img>
          </div>
          <Routes>
            <Route path="/" element={<div className="grid"><Card title="" subtitle="" /></div>} />
            <Route path="/characters/:id/" element={<CharacterDetails />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  );
}
*/