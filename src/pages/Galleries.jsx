import { useState, useEffect } from "react";
import data from '../data/egyptian_art.json';
import ObjectDisplay from "../components/search/ObjectDisplay";
import gallery_list from "../data/gallery_data.json";

const Galleries = () => {
    const [galleryObjects, setGalleryObjects] = useState(null);
    const [gallery, setGallery] = useState(gallery_list[0])

    const clickLeft = () => {
        if (gallery.number <= 100) {
            return;
        }
        setGallery(gallery_list[gallery.number - 101]);
        console.log(gallery.number);
    }
    const clickRight = () => {
        if (gallery.number >= 138) {
            return;
        }
        setGallery(gallery_list[gallery.number - 99]);
        console.log(gallery.number);
    }
    
    useEffect(() => {
        const filteredObjects = [];
        data.map(obj => {
            if (obj["GalleryNumber"] === (gallery.number) && obj["primaryImage"]) {
                for (let i = 0; i < filteredObjects.length; i++) {
                    if (obj["title"] === filteredObjects[i]["title"]) {
                        return;
                    }
                }
                filteredObjects.push(obj);
            }
        })
        setGalleryObjects(filteredObjects);
    }, [gallery])

    return (
        <div className="p-5">
            <h1 className="text-center text-primary">{gallery.name}</h1>
            <p className="px-5 py-2">{gallery["description"]}</p>
            <div className="d-flex justify-content-between">
                <button onClick={clickLeft} className="btn btn-primary">Previous Gallery</button>
                <div className="d-flex flex-row p-2">
                    <label htmlFor="gallery">Choose a gallery:</label>
                    <select id="gallery" name="gallery"
                        className="form-control border-primary border-2 mx-2"
                        onChange={e => {
                            const galleryName = e.target.value;
                            gallery_list.map(gallery => {
                                if (galleryName == gallery.name) {
                                    setGallery(gallery);
                                }
                            }) 

                        }}>
                        {gallery_list.map(gallery => {
                            return (
                                <option key={gallery.number}>{gallery.name}</option>
                            )
                        })}  
                    </select>
                </div>
                <button onClick={clickRight} className="btn btn-primary">Next Gallery</button>
            </div>
            <div className="d-flex flex-wrap justify-content-around p-3">
                {galleryObjects?.map(obj => {
                    return (
                        <ObjectDisplay obj={obj} key={obj.objectID} />
                    )
                })}
            </div>
        </div>
    )
}

export default Galleries;