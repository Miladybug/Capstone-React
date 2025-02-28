import { useState } from 'react';
import './App.scss';
import GetData from './components/GetData';
import SearchFilters from './components/SearchFilters';

// TO DO
// More search filters
// Number of results
// Number of pages
// Custom queries

// Make more reusable
// Documentation
// More themes/styles
// Timeline visualization
// Quizes & games
// Map
// Provenance info

// Exhibit layouts
// Custom galleries
// Filter by exhibit? Or at least saved items
// Other departments

function App() {
  const [searchData, setSearchData] = useState({});

  const handleSearchFilters = (search) => {
    setSearchData(search);
  }

  return (
    <>
      <h1 className="text-center text-light bg-primary p-3">Egyptian Art</h1>
      
      <SearchFilters onSearchSubmit={handleSearchFilters} />
      <GetData searchData={searchData} />
      
      <footer className="bg-primary text-light p-3">
        &copy; 2025 | Emma Johnson's Senior Capstone Project
      </footer>
    </>
  )
}

export default App;
