import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import CollectionSearch from './pages/CollectionSearch';
import Galleries from './pages/Galleries';
import Timeline from "./pages/Timeline";
import Games from './pages/Games';
import Footer from './components/Footer';

function App() {
    return (
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={ <CollectionSearch /> } />
            <Route path="/galleries" element={ <Galleries /> } />
            <Route path="/timeline" element={ <Timeline /> } />
            <Route path="/games" element={ <Games /> } />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    )
}

export default App;
