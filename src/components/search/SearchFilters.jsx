import { useState } from "react";
import period_dates from"../../data/period_dates.json";

const SearchFilters = ({onSearchSubmit}) => {
    const [searchText, setSearchText] = useState("");
    const [highlight, setHighlight] = useState(false);
    const [publicDomain, setPublicDomain] = useState(false);
    const [timelineWork, setTimelineWork] = useState(false);
    const [startYear, setStartYear] = useState(-7000)
    const [endYear, setEndYear] = useState(2025)
    // Medium
    // Gallery Number

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit({ 
            "searchText": searchText,
            "highlight": highlight, 
            "publicDomain": publicDomain, 
            "timelineWork": timelineWork,
            "startYear": startYear,
            "endYear": endYear,
        });
    }

    const clearFilters = () => {
        setSearchText("");
        setHighlight(false);
        setPublicDomain(false);
        setTimelineWork(false);
        setStartYear(-7000);
        setEndYear(2025);
    }

    return (
        <form className="container d-flex flex-column">
            <div className="form-group d-flex flex-row p-3">
                <label for="searchText">Search: </label>
                <input type="text" 
                    id="searchText" 
                    value={searchText}
                    className="form-control border-primary border-2 mx-2"
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
            </div>
            <div className="form-group d-flex flex-row p-2 justify-content-around">
                <div>
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
                <div>
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
                <div>
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
            </div>
            <div className="form-group d-flex flex-row p-2">
                {/* <div class="d-flex flex-row p-2">
                    <label for="period">Period:</label>
                    <select id="period" name="period"
                        onChange={setStartYear(startYear)}>
                        {period_dates.map(period => {
                            return (
                                <option startYear={period.startDate} endYear={period.endDate}>{period.name}</option>
                            )
                        })}  
                    </select>
                </div> */}
                <div class="d-flex flex-row p-2">
                    <label for="startYear">Start Year: </label>
                    <input type="number"
                        id="startYear"
                        name="startYear"
                        min="-7000" max={endYear - 1} 
                        placeholder={startYear}
                        className="form-control border-primary border-2 mx-2"
                        onChange={(e) => {
                            setStartYear(e.target.value);
                        }}/>
                </div>
                <div class="d-flex flex-row p-2">
                    <label for="endYear">End Year: </label>
                    <input type="number"
                        id="endYear"
                        name="endYear"
                        min={startYear} max="2025"
                        placeholder={endYear}
                        className="form-control border-primary border-2 mx-2"
                        onChange={(e) => {
                            setEndYear(e.target.value);
                        }} />
                </div>
            </div>
            <div class="form-actions d-flex flex-row p-2">
                <button className="btn btn-primary m-3" onClick={handleSearchSubmit}>Search</button>
                <button className="btn btn-secondary m-3" onClick={clearFilters}>Clear Search</button>
            </div>
        </form>
    )
}

export default SearchFilters;