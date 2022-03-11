/// <reference types="Cypress" />
//Import Utility from support folder
import { Utility } from "../../support/utility.js";
import robiHomePage from "../../pages/home-page-page-object/home-page-page-object.js";
//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();
const homepage = new robiHomePage();

describe("Homepage Test", () => {
  before(() => {
    //Visit the url
    cy.visit(url);
    // welcomeMessage Popup	close
    homepage.welcomeMessage().click();
  });
  it("Should verify Logo is visible or not", () => {
    homepage.logo().should("be.visible");
  });

  it("Should verify Menu button is visible or not", () => {
    homepage.menuButton().should("exist");
    homepage.menuButton().click();
    cy.wait(1000);
    homepage
      .menuButton()
      .should("have.class", ".sidebar-menu__container");
         homepage.menuButton().click();
  });

  it("Should verify Account button is visible or not", () => {
    homepage.accountButton().should("exist");
  });

  it("Should verify Search box is visible and Functionality is visible and works or not", () => {
    homepage.searchBox().should("exist");
    homepage.searchBox().click();
    cy.wait(1000);
    homepage.modalSearchBox().type("Mobile");
    cy.wait(2000);
    homepage.searchField().should("have.length", 1);
    homepage.searchField().should("contain", "Mobile");
    cy.contains("Mobile");
    homepage.modalSearchBox().clear();
    homepage.closeSearchPanel().click();
  });

  it("Should verify Hot Deals is present", () => {
    homepage.campaignSection().contains("Hot Deals").should("exist");
  });

  it("Should verify Trending Accessories is present", () => {
    homepage.campaignSection().contains("Trending Accessories").should("exist");
  });

  it("Should verify Trending Mobile Phones is present", () => {
    homepage.campaignSection().contains("Trending Mobile Phones").should(
      "exist"
    );    
  });

  it("Should verify Category of the Day is present", () => {
    homepage.campaignSection().contains("Category of the Day").should("exist");
  });

  it("Should verify Trending Mobile Phones is present", () => {
    homepage
      .campaignSection()
      .contains("Trending Mobile Phones")
      .should("exist");
  });

  
});
