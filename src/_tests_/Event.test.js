import { render } from '@testing-library/react';
import Event from '../components/Event';
import { getEvents, extractLocations } from '../api';
import userEvent from '@testing-library/user-event';
import mockData from '../mock-data';

const mockEvent = mockData[0];

describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />); //why do we need event={mockeEvent}?
    })

    test('has event with "title" role', () => {
        expect(EventComponent.queryByText(mockEvent.summary)).toBeInTheDocument();
    });

    test('have event start time', () => {
        expect(EventComponent.queryByText(mockEvent.created)).toBeInTheDocument();
    });

    test('has event location', () => {
        expect(EventComponent.queryByText(mockEvent.location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        const button = EventComponent.queryByText('Show Details');
        expect(button).toBeInTheDocument();
    });
    //did not get this by myself. when do we use firstChild?
    test("by default, event's details section is hidden", () => {
        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

    test("show's event details when 'show details' button is clicked", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Show Details');
        await user.click(button);

        const eventDom = EventComponent.container.firstChild; //why event dom?
        const details = eventDom.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test('hide details after user clicks button "hide details"', async () => {
        const button = EventComponent.queryByText('Show Details');
        const eventDOM = EventComponent.container.firstChild;
        await userEvent.click(button);

        const hideButton = EventComponent.queryByText('Hide Details');
        await userEvent.click(hideButton);

        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });
});