

const ObjectDisplay = (props) => {
    const obj = props.obj;

    let img_url = obj.primaryImageSmall;
    if (!obj.primaryImageSmall){
        img_url = "../assets/no_image.jpg";
    }

    return (
        <div className="card m-2 pb-0">
            <img className="card-img-top" src={img_url} />
            <div className="card-body">
                <h5 className="card-title">{obj.title}</h5>
                <p className="card-text">{obj.period}</p>
            </div>
        </div>
    )
}

export default ObjectDisplay