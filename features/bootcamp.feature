Feature: Bootcamp E2E

Background:
    Given I am on the online shop homepage
    * I close the promo banner if it appears

Scenario Outline: Search bar

    When I enter <word> in the search bar
    * I click the search button
    Then I can see that at least one item appears

    Examples:
        | word   |
        | Windows|

Scenario: Internet shop logo button

    When I open Today's Best Deals tab
    * I click on the Internet shop logo 
    Then I can see that the main page opened