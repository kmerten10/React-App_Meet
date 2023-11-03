import React from "react";
import './Event.css';


const Modal = ({ closeDetails, event }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button className="X" onClick={() => closeDetails(false)}>X</button>

                <div className="details">
                    <h2>Event Details</h2>
                    <h3><strong>Description:</strong></h3><p>{event.description}</p>
                    <h4><strong>Event Status:</strong></h4><p>{event.status}</p>
                    <button onClick={() => closeDetails(false)}>Close Details</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;
