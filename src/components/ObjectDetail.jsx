

const ObjectDetail = (props) => {

    const obj = props.obj;
    let geoKeys = ["city", "state", "county", "country", "region", "subregion", "locale", "locus"];

    let location_stmt = "";
    geoKeys = geoKeys.map((key) => {
        console.log(key)
        console.log(obj[key])
        if (obj[key]) {
            location_stmt += (key + ": " + obj[key] + ", ");
        }
    })

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="p-3">
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
                                <td>{obj.objectDate}</td>
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
                </div>
                <div className="w-50">
                    <img src={obj.primaryImage} className="w-100"/>
                    <p>Learn more <a href={obj.objectURL} target="_blank" >here</a></p>
                </div>
            </div>
            
        </div>
    )
}

export default ObjectDetail;