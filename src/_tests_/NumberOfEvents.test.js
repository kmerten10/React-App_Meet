import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />
        ); //why do we need event={mockeEvent}?
    });

    test("has an element with role of 'textbox'", () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    test("default value of textbox field is'32'", () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toHaveValue('32');
    });

    test("value of NumberOfEvents component textbox updates according to user input", async () => {
        const user = userEvent.setup();
        const input = NumberOfEventsComponent.queryByRole('textbox');

        await user.type(input, '{backspace}{backspace}10'); //is backspace just recongized as a character?
        expect(input).toHaveValue('10');
    });
});


