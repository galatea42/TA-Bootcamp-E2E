Feature: The Internet Guinea Pig Website; Key presses

  @smoke
  Scenario Outline: As a user, I can enter different keys from keyboard

    Given I am on the "key_presses" page
    When I enter "<key>"
    Then I should see a message saying You entered: "<message>"

    Examples:
      | key     | message | 
      | a       |  A      | 
      | ,       |  COMMA  | 
      | 2       |  2      | 
      | Space   |  SPACE  | 
