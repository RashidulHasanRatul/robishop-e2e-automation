/// <reference types="Cypress" />
//Import Utility from support folder
import { Utility } from "../../support/utility.js";
import userLogin from "../../pages/login-page-object/user-login-page-objects.js";
import robiHomePage from "../../pages/home-page-page-object/home-page-page-object.js";
//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();
const userLoginObject = new userLogin();
const homepage = new robiHomePage();

describe("User Login Test", function () {
  before(function () {
    //Visit the url
    cy.fixture("runtime-created-file/userRegistrationData.json").then(
      (data) => {
        this.email = data.email;
        this.Password = data.password;
      }
    );
    cy.visit(url);
    homepage.welcomeMessage().click();
    homepage.accountButton().click();
  });
  it("Should Check Base URL", () => {});

  it("Should check login Error with no input", function () {
    userLoginObject.emailAddress().clear().type("");
    userLoginObject.password().clear().type("");
    userLoginObject.loginButton().click();
    cy.wait(1000);
    userLoginObject
      .successRegistrationMessage()
      .should("contain", "Please fix the validation errors");
  });

  it("Should  not login invalid Email", function () {
    userLoginObject.emailAddress().clear().type("test");
    userLoginObject.password().clear().type(this.Password);
    userLoginObject.loginButton().click();
    cy.wait(1000);
    userLoginObject
      .successRegistrationMessage()
      .should("contain", "Please fix the validation errors");
  });

  it("Should  not login invalid Password", function () {
    userLoginObject.emailAddress().clear().type(this.email);
    userLoginObject.password().clear().type("test");
    userLoginObject.loginButton().click();
    cy.wait(1000);
    userLoginObject
      .successRegistrationMessage()
      .should(
        "contain",
        "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
      );
  });

  it("Should  login with valid credentials", function () {
    userLoginObject.emailAddress().clear().type(this.email);
    userLoginObject.password().clear().type(this.Password);
    userLoginObject.loginButton().click();
    cy.wait(1000);
    userLoginObject
      .successRegistrationMessage()
      .should("contain", "You are logged in!");
      cy.get('[data-testid="notificationAction1"]').click();
  });
  
});
