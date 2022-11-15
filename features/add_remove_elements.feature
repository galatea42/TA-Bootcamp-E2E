Feature: The Internet Guinea Pig Website; Add and Remove elements
  Background: 
    Given I am on the "add_remove_elements/" page

@smoke
  Scenario: 1. As a user, I can add element
    When I click AddElement button
    Then I can see Delete button
@smoke
  Scenario: 2. As a user, I can add and delete element
    When I click AddElement button
    And I can see Delete button and I click on it
    Then I can see that Delete button is gone

  Scenario Outline: 3. As a user, I can add <number> Delete buttons
    When I click AddElement button <number> times
    Then I can see <number> Delete buttons
  Examples:
    | number | 
    | 2      | 
    | 7      |
    | 10     |
    | 17     |

    
