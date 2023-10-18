Feature: Number of events update based on user input
    Scenario: Specify number of events
        Given the list of events was loaded
        When the user selects a number of events
        Then the number of events displayed will update based on the user input