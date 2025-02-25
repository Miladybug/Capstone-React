import { useState } from 'react';
import './App.scss';
import GetData from './components/GetData';
import SearchFilters from './components/SearchFilters';

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
      <div className="bg-primary text-light p-3">
        &copy; 2025 | Emma Johnson's Senior Capstone Project
      </div>
    </>
  )
}

export default App
