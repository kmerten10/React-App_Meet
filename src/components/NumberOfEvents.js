const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;

        if (isNaN(value) || value > 50 || value <= 0) {
            setErrorAlert('value must be a number between 0 and 50');
        } else {
            setErrorAlert('');
            setCurrentNOE(value);
        }
    };
    return (
        <div id="events-count">
            <input
                type="text"
                defaultValue="32"
                onChange={handleInputChanged}
                data-testid="events-count"
            />
        </div>
    );
    ;
}

export default NumberOfEvents;