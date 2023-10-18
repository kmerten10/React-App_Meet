import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');


defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {

        let AppComponent;
        given('the user opens the app', async () => {
            AppComponent = render(<App />);
        });

        when('the user receives the full list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems =
                    within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(15);
            });
        });

        then('all events will collapse by default.', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppComponent;
        given('the list of events loads', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });

        when('the user clicks on the Show Details Button', async () => {
            const button = AppComponent.queryAllByText('Show Details')[0];

            await userEvent.click(button);
        });

        then('the event element will be expanded to show the event details', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });
    });

    test('User can collapse the event details', ({ given, when, then }) => {
        let AppComponent;
        let button;
        given('the event details are shown', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });

            button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });

        when('the user clicks on the Hide Details Button', async () => {
            await userEvent.click(button);
        });

        then('the event details will collapse and be hidden', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });
});