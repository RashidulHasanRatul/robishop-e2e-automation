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
  });

  it("Should verify Account button is visible or not", () => {
    homepage.accountButton().should("exist");
  });

  it("Should verify Search box is visible or not", () => {
    homepage.searchBox().should("exist");
  });

  it("Should verify Hot Deals is present", () => { 
    homepage.campaignSection().contains("Hot Deals").should("exist");
  })

  it("Should verify Trending Accessories is present", () => {  
    homepage.campaignSection().contains("Trending Accessories").should("exist");
  })

  it("Should verify Top Brands is present", () => {  
    homepage.topBrands().contains("Top Brands").should("exist");
  })

  it("Should verify Trending Mobile Phones is present", () => {
    homepage
      .campaignSection()
      .contains("Trending Mobile Phones")
      .should("exist");
  });

});
