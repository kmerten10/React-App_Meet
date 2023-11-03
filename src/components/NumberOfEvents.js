import './NumberOfEvents.css';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;

        let infoText;
        if (isNaN(value) || value > 300 || value <= 0) {
            infoText = 'Please enter a number between 0 and 50';
            setErrorAlert(infoText);
        } else {
            infoText = '';
            setCurrentNOE(value);
            setErrorAlert(infoText);
        }
    };

    return (
        <div id="events-count">
            <p>Enter a Number</p>
            <input
                type="text"
                defaultValue="32"
                onChange={handleInputChanged}
                data-testid="events-count"
            />
        </div>
    )
}

export default NumberOfEvents;