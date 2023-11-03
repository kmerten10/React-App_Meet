import { useState } from 'react';
import moment from 'moment';
import Modal from './Modal';
import './Event.css';

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <div className='container'>
            <li className="event">
                <h3>{event.summary}</h3>
                <p>{moment(event.start.dateTime).format('MM/DD/YYYY')}</p>
                <p>{event.location}</p>
                <button className='details-btn'
                    onClick={() => {
                        setShowDetails(true);
                    }}
                >View Details
                </button>
            </li >

            <div className='modalIndex'>
                {showDetails && <Modal event={event} closeDetails={setShowDetails} />}
            </div>
        </div >
    );
}

export default Event;

