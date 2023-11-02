import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventsGenresChart';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { useEffect, useState } from 'react';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import dev from '../src/assets/dev.jpg';

import './App.css';


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState();
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");


  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("You are using this app offline. Event details may no longer be up to date.");
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ? allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }
  return (
    <div className="App">
      <div className='header'>
        <img src={dev} alt="Logo" />
        <div className='header-container'>
          <div className='text-container'>
            <h1>Find Your Next Dev Event!</h1>
            <div >
              {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
              {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
              {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
            </div>
            <div className='search'>
              <CitySearch
                allLocations={allLocations}
                setCurrentCity={setCurrentCity}
                setInfoAlert={setInfoAlert} />
              <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
            </div>
          </div>
        </div>
      </div>
      <div className='events-container'>
        <EventList events={events} />
      </div>

      <div className='charts-container'>
        <EventGenresChart events={events} />

        <CityEventsChart allLocations={allLocations} events={events} />
      </div>

    </div >
  );
}

export default App;
