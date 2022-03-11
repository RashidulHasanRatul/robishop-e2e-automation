/// <reference types="Cypress" />
//Import Utility from support folder
import { Utility } from "../../support/utility.js";
import userLogin from "../../pages/login/user-login-page-object.js";
//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();
const userLogin = new userRegistration();

describe("User Login Test", () => {
  before(() => {
    //Visit the url
    cy.visit(url);
    // welcomeMessage Popup	close
    homepage.welcomeMessage().click();
  });
  it("Should Check Base URL", () => {});

  it("Should check login Error with no input", () => {});

  it("Should  not login invalid Email", () => {});

    it("Should  not login invalid Password", () => {});

    it ("Should  login with valid credentials", () => {});

});
