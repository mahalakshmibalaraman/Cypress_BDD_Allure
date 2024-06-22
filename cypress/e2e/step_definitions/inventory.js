import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

const loginPage = require("../../pages/LoginPage");
const inventoryPage = require("../../pages/InventoryPage");


Given("A user has logged in successfully", () => {
    cy.visit("/");
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();
    cy.url().should("contains", "/inventory.html");
  });


  When("A user clicks on the shopping cart button", () => {
    inventoryPage.clickOnShoppingCartContainer()
  });


  Then("Shopping cart should display {string} items", (count) => {
    inventoryPage.verifyCartItems(count)
  });


  When("A user adds bellow items to cart:", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.item);
      inventoryPage.addItemToCart(row.item);
    });
  });


  When("The cart list should be displayed as bellow:", (table) => {
    table.hashes().forEach((row) => {
        cy.contains(row.item).should('be.visible')
        cy.contains(row.price).should('be.visible')
    });
  });