

const ObjectDetail = (props) => {

    const obj = props.obj;
    let geoKeys = ["city", "state", "county", "country", "region", "subregion", "locale", "locus"];

    let location_stmt = "";
    geoKeys = geoKeys.map((key) => {
        if (obj[key]) {
            location_stmt += (key + ": " + obj[key] + ", ");
        }
    })
    let beginDate = obj.objectBeginDate;
    let endDate = obj.objectEndDate;
    if (beginDate < 0){
        const diff = 0 - beginDate;
        beginDate = String(diff) + " BCE";
    } else {
        beginDate = String(beginDate) + " CE";
    }
    if (endDate < 0) {
        const diff = 0 - endDate;
        endDate = String(diff) + " BCE";
    } else {
        endDate = String(endDate) + " CE";
    }
    const onCloseButton = () => {
        props.onCloseButton();
    }

    return (
        <div>
            <div className="row m-3">
                <div className="container-fluid p-3 col-sm-12 col-md-6">
                    <img src={obj.primaryImage} className="w-100" />
                    <p>Learn more <a href={obj.objectURL} target="_blank" >here</a></p>
                </div>
                <div className="container-fluid p-3 col-sm-12 col-md-6">
                    <h3 className="text-center">{obj.title}</h3>
                    <p className="text-center">ID: {obj.objectID}</p>
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <td>Higlight</td>
                                <td>{String(obj.isHighlight)}</td>
                            </tr>
                            <tr>
                                <td>Public Domain</td>
                                <td>{String(obj.isPublicDomain)}</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>{beginDate} - {endDate}</td>
                            </tr>
                            <tr>
                                <td>Period</td>
                                <td>{obj.period}</td>
                            </tr>
                            <tr>
                                <td>Dynasty</td>
                                <td>{obj.dynasty}</td>
                            </tr>
                            <tr>
                                <td>Reign</td>
                                <td>{obj.reign}</td>
                            </tr>
                            <tr>
                                <td>Medium</td>
                                <td>{obj.medium}</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>{location_stmt}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={onCloseButton} className="btn btn-primary">Close</button>
                </div>
            </div>
        </div>
    )
}

export default ObjectDetail;