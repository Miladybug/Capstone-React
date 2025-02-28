import { useState } from "react";

const SearchFilters = ({onSearchSubmit}) => {
    const [highlight, setHighlight] = useState(false);
    const [publicDomain, setPublicDomain] = useState(false);
    const [timelineWork, setTimelineWork] = useState(false);
    // const [startDate, setStartDate] = useState();
    // const [endDate, setEndDate] = useState();
    // const [period, setPeriod] = useState("");
    // Medium
    // Dimensions
    // Accession Year
    // Location/Geography
    // Gallery Number

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit({ 
            "highlight": highlight, 
            "publicDomain": publicDomain, 
            "timelineWork": timelineWork 
        });
    }

    return (
        <form className="d-flex justify-content-around flex-wrap p-3">
            <div className="form-group">
                <label for="isHighlight">Highlight: </label>
                <input type="checkbox" 
                    id="isHighlight" 
                    checked={highlight}
                    className="form-check-input border-primary border-2 mx-2"
                    onChange={(e) => {
                        setHighlight(e.target.checked);
                    }}
                />
            </div>
            <div className="form-group">
                <label for="isPublicDomain">Public Domain: </label>
                <input type="checkbox" 
                    id="isPublicDomain" 
                    checked={publicDomain}
                    className="form-check-input border-primary border-2 mx-2"
                    onChange={(e) => {
                        setPublicDomain(e.target.checked);
                    }}
                />
            </div>
            <div className="form-group">
                <label for="isTimelineWork">Timeline Work: </label>
                <input type="checkbox" 
                    id="isTimelineWork" 
                    checked={timelineWork}
                    className="form-check-input border-primary border-2 mx-2"
                    onChange={(e) => {
                        setTimelineWork(e.target.checked);
                    }} 
                />
            </div>
            <button className="btn btn-primary" onClick={handleSearchSubmit}>Search</button>
        </form>
    )
}

export default SearchFilters;