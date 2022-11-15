Feature: The Internet Guinea Pig Website; Checkboxes

  Background: 
  Given I am on the "checkboxes" page

@smoke
  Scenario: 1. As a user, I can check checkbox

    When I click on checkbox1
    Then I should see that checkbox is checked

@smoke
  Scenario: 2. As a user, I can uncheck checkbox  
   
    When I click on checkbox2
    Then I should see that checkbox is unchecked

  Scenario: 3. As a user, I can check and uncheck checkbox

    When I click on checkbox1
    And I again click on checkbox1
    Then I should see that checkbox is unchecked again

  Scenario: 4. As a user, I can uncheck and check checkbox

    When I click on checkbox2
    And I again click on checkbox2
    Then I should see that checkbox is checked again