import { useState, useEffect } from 'react';
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (
        <div className="my_backdrop"></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className="my_modal">
            <div className="my_modal_content">
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay className="align-middle">{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal;