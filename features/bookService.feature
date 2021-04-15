Feature: The users can book a service and check all the information related to the selected service
  As a User of MyTime
  I would like to see the schedule for a service
  and book it checking all the related formation
  as the price, the staff and the service 

  Scenario: The users are able to book for a service and check all the information for that service
    Given I go to MyTime custorms page
     And I search for haircut in San Francisco, California
     When I select Test - Sabre Cuts
     And I pick All Services and Master Yoda
     And I book Men's Haircut and select time