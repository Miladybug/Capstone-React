import { useState, useEffect } from "react";
import data from '../egyptian_art.json';
import ObjectDisplay from "./ObjectDisplay";

const GetData = (props) => {
    const [jsonData, setJsonData] = useState(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const filteredData = [];
        data.map(obj => {
            if (props.searchData.highlight && !obj.isHighlight){
                return;
            }
            if (props.searchData.publicDomain && !obj.isPublicDomain){
                return;
            }
            if (props.searchData.timelineWork && !obj.isTimelineWork){
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
        if (page * 24 < jsonData.length){
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

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-around p-3">
                {shortList}    
            </div>
            <div className="d-flex justify-content-between w-50 mx-auto mb-3">
                <button className="btn btn-primary px-5" onClick={prevPage}>Prev</button>
                <button className="btn btn-primary px-5" onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}

export default GetData;