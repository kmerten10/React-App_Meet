import React from "react";
import './Event.css';


const Modal = ({ closeDetails, event }) => {
    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="details">
                    <h4>Event Details</h4>
                    <p>Description: {event.description}</p>
                    <p>Event status: {event.status}</p>
                    <button onClick={() => closeDetails(false)}>Close Details</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;
