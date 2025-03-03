import Modal from "./Modal";
import ObjectDetail from "./ObjectDetail";
import { useState } from "react";


const ObjectDisplay = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }
    const hideModal = () => {
        setIsOpen(false);
    }

    const obj = props.obj;
    let img_url = obj.primaryImageSmall;
    if (!obj.primaryImageSmall){
        img_url = "src/assets/no_image.png";
    }

    return (
        <div>
            {isOpen && <Modal>
                <ObjectDetail obj={props.obj} onCloseButton={hideModal} />
            </Modal>}
            <div onClick={showModal} className="card m-2 pb-0">
                <img className="card-img-top" src={img_url} />
                <div className="card-body">
                    <h5 className="card-title">{obj.title}</h5>
                </div>
            </div>
        </div>
    )
}

export default ObjectDisplay