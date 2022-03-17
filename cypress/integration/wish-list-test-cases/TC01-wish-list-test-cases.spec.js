/// <reference types="Cypress" />
//Import Utility from support folder
import { Utility } from "../../support/utility.js";
import robiHomePage from "../../pages/home-page-page-object/home-page-page-object.js";
import wishlist from "../../pages/wish-list-page-object/wishlist-page-object.js";

//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();
const homepage = new robiHomePage();
const wishlistObject = new wishlist();
describe("User Register Test", () => {
  beforeEach(() => {
    cy.visit(url);
    //Call method to login
    homepage.welcomeMessage().click();
  });

  it("User should successfully add item to wishlist", () => {
    //Call method to add item to wishlist
    cy.addItemToWishlist();
    wishlistObject.wishlist().click({ force: true });
    wishlistObject.wishlistProduct().should("have.length", 1);

    //wishlistObject.verifyItemAddedToWishlist();
  });

  it("User should successfully remove item from wishlist", () => {
     cy.get('[data-testid="notificationAction1"]').click();
     cy.wait(2000);
    cy.contains("Remove").click();
    cy.wait(2000);
    cy.contains(" Your wishlist is empty.");
  });
});
