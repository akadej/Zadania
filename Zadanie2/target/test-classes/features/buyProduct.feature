Feature: Pick and buy products

  Scenario:
    Given User open browser with sign in page
    When Mail word has been written into the input field
    And Password has been written into the input field and submit
    And Click in my store
    Then Click in Hummingbird Printed Sweater
    And Pick size M
    And Pick 5 pieces
    And Add to cart
    And Click in Proceed to Checkout

