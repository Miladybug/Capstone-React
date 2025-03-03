import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import CollectionSearch from './pages/CollectionSearch';

// TO DO - Beyond MVP
// Create exhibits AND/OR exhibit-maker
    // Each period
    // Queens
    // Textiles
    // Mummies
// Create quizzes & games
    // Memory Card
    // Hangman
    // Cryptograms
    // Snake
// Display order / sort by

// TO DO - Details
// Better UI for search box
// Standard card size
// Drop-down period search

function App() {
    return (
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element = { <CollectionSearch /> } />
          </Routes>
        </main>
      </BrowserRouter>
    )
}

export default App;
