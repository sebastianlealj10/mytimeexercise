Feature: From the customer page the user are able to search for services and businesses
  As a User of MyTime
  I would like to search for different services
  and businesses in different places of USA.

  Scenario: The users are able to look for a haircut in San Francisco, Californioa
    Given I go to MyTime custorms page
     When I search for haircut in San Francisco, California
     Then I get Tailored Salon, Zip Zap Hair and Test - Sabre Cuts