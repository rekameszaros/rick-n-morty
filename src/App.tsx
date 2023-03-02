import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route, RouteProps } from 'react-router-dom';
import Header from "./components/library/pages/Header";
import Footer from "./components/library/pages/Footer";
import CharacterDetails from "./components/library/pages/CharacterDetail";
import CharacterPage from "./components/library/pages/CharacterPage";
import Location from "./components/library/pages/Location";
import SingleLocation from './components/library/pages/SingleLocation';
import './App.css';
import './components/library/visual/CardStyle.css'
import './components/library/pages/Footer.css';
import './components/library/pages/Header.css';

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
          <Routes>
            <Route path="/" element={<CharacterPage />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
            <Route path="/characters" element={<CharacterPage />} />
            <Route path="/locations" element={<Location />} />
            <Route path="/locations/:id" element={<SingleLocation />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
