import { useState } from 'react';
import GetData from '../components/search/GetData';
import SearchFilters from '../components/search/SearchFilters';

const CollectionSearch = () => {
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

export default CollectionSearch;