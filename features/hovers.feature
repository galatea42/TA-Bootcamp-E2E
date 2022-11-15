Feature: The Internet Guinea Pig Website; Hovers

  Background: 
  Given I am on the "hovers" page

@smoke
  Scenario Outline: 1. As a user, I can place the cursor on hover

    When Place the cursor on hover <number>
    Then I should see "<name>" on hover <number>

    Examples:
        | number |name          | 
        | 1      |name: user1   | 
        | 2      |name: user2   | 
        | 3      |name: user3   | 

@smoke
  Scenario Outline: 2. As a user, I can click on View profile, when I place the cursor on hover

    When I place the cursor on hover <number2> and click on View Profile
    Then I should see Not Found on the new page

    Examples:
        | number2 |
        | 1       |
        | 2       |
        | 3       |