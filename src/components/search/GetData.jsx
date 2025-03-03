import { useState, useEffect } from "react";
import data from '../../data/egyptian_art.json';
import ObjectDisplay from "./ObjectDisplay";

const GetData = (props) => {
    const [jsonData, setJsonData] = useState(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const filteredData = [];
        console.log(props.searchData.searchText);
        data.map(obj => {
            if (props.searchData.searchText && !obj.title.toLowerCase().includes(props.searchData.searchText.toLowerCase())) {
                return;
            }
            if (props.searchData.highlight && !obj.isHighlight){
                return;
            }
            if (props.searchData.publicDomain && !obj.isPublicDomain){
                return;
            }
            if (props.searchData.timelineWork && !obj.isTimelineWork){
                return;
            }
            if (props.searchData.startYear > obj.objectEndDate
                || props.searchData.endYear < obj.objectEndDate
            ){
                return;
            }
            if (props.searchData.endYear < obj.objectStartDate
                || props.searchData.startYear > obj.objectStartDate
            ) {
                return;
            }
            filteredData.push(obj);
            return;
        })

        setJsonData(filteredData);
    }, [props.searchData])

    if (!jsonData) {
        return (<p>Loading data...</p>)
    }
    
    let shortList = []
    for (let i = (page * 24); i < ((page + 1) * 24); i++){
        if (jsonData[i]){
            shortList.push(<ObjectDisplay obj={jsonData[i]} key={jsonData[i].objectID} />);
        }
    }

    const nextPage = () => {
        if ((page*24 + 24) < jsonData.length){
            const newPage = page + 1;
            setPage(newPage);
        }
    }

    const prevPage = () => {
        if (page > 0) {
            const newPage = page - 1;
            setPage(newPage);
        }
    }

    let maxPage = (page*24) + 24;
    if (maxPage > jsonData.length){
        maxPage = jsonData.length;
    }

    return (
        <div>
            <p className="px-4">Showing results {(page*24)+1}-{maxPage} of {jsonData.length} </p>
            <div className="d-flex flex-wrap justify-content-around p-3">
                {shortList}    
            </div>
            <div className="d-flex justify-content-between w-75 mx-auto mb-3">
                <button className="btn btn-primary px-5" onClick={prevPage}>Prev</button>
                <p>
                    Page 
                        <input type="number"
                            value={page + 1}
                            onChange={(e) => {
                                const value = e.target.value;
                                setPage(value - 1);
                            }} />
                    of {Math.ceil(jsonData.length/24)}
                </p>
                <button className="btn btn-primary px-5" onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}

export default GetData;