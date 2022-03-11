/// <reference types="Cypress" />
//Import Utility from support folder
import { Utility } from "../../support/utility.js";
import userRegistration from "../../pages/registration/user-registration-page-object.js";
import robiHomePage from "../../pages/home-page-page-object/home-page-page-object.js";
//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();
const registration = new userRegistration();
const homepage = new robiHomePage();

describe("User Register Test", () => {
  before(() => {
    //Visit the url
    cy.visit(url);
    // welcomeMessage Popup	close
    homepage.welcomeMessage().click();
    homepage.accountButton().click();
    registration.clickRegisterForAnAccount();
  });
  it("Should not register with all field empty", () => {
    registration.clickRegisterForAnAccount().click();

    cy.RegistrationForm(" ", " ", " ", " ", " ", " ");
    registration.createAccountButton().should("be.disabled");
  });

  it("Should not register with invalid data", () => {});

  it("Should  register with valid data", () => {});
});
