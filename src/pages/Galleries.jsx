import { useState, useEffect } from "react";
import data from '../data/egyptian_art.json';
import ObjectDisplay from "../components/search/ObjectDisplay";

const Galleries = () => {
    const [galleryObjects, setGalleryObjects] = useState(null);
    const [gallery, setGallery] = useState(100)

    useEffect(() => {
        const filteredObjects = [];
        data.map(obj => {
            if (obj["GalleryNumber"] === gallery) {
                filteredObjects.push(obj);
            }
        })
        setGalleryObjects(filteredObjects);
    }, [])

    return (
        <>
            <h1>Gallery 100</h1>
            <div className="d-flex flex-wrap justify-content-around p-3">
                {galleryObjects?.map(obj => {
                    return (
                        <ObjectDisplay obj={obj} key={obj.objectID} />
                    )
                })}
            </div>
        </>
    )
}

export default Galleries;