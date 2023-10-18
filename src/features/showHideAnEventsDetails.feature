Feature: Show and hide event details
    Scenario: An event element is collapsed by default.
        Given the user opens the app
        When the user receives the full list of events
        Then all events will collapse by default.

    Scenario: User can expand an event to see its details
        Given the list of events loads
        When the user clicks on the Show Details Button
        Then the event element will be expanded to show the event details

    Scenario: User can collapse the event details
        Given the event details are shown
        When the user clicks on the Hide Details Button
        Then the event details will collapse and be hidden