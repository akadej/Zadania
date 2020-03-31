Feature: Create new address

  Scenario: Create new address after log in
    Given User open browser with sign in page
    When Mail word has been written into the input field
    And Password has been written into the input field and submit
    And Click on Addresses
    And Click on Create New Address

    Scenario Outline:
    Given <addresses> has been written into the input field
    When <zip> has been written into the input field
    And <city> has been written into the input field
    And <country> has been chosen The United Kingdom

    Examples:
    | addresses             |     zip | city      | country        |
    | Jana Kazimierza 53a   | 01-267  | Warszawa  | United Kingdom |





