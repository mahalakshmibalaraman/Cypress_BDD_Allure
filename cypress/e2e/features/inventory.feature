Feature: Inventory Page

    Background:
        Given A user has logged in successfully

    Scenario: Verify Cart Items
        When A user adds bellow items to cart:
            | item                     |
            | Sauce Labs Backpack      |
            | Sauce Labs Fleece Jacket |
            | Sauce Labs Bike Light    |
        Then Shopping cart should display '3' items
        When A user clicks on the shopping cart button
        Then The cart list should be displayed as bellow:
            | item                     | price  |
            | Sauce Labs Backpack      | $29.99 |
            | Sauce Labs Fleece Jacket | $49.99 |
            | Sauce Labs Bike Light    | $9.99  |

