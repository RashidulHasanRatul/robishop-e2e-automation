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
    userLoginObject.emailAddress().type("");
    userLoginObject.password().type("");
    userLoginObject.loginButton().click();
    cy.wait(1000);
    userLoginObject
      .successRegistrationMessage()
      .should("contain", "Please fix the validation errors");
  });

  it("Should  not login invalid Email", () => {
    userLoginObject.emailAddress().type("test");
    userLoginObject.password().type(this.Password);
    userLoginObject.loginButton().click();
    cy.wait(1000);
    userLoginObject
      .successRegistrationMessage()
      .should("contain", "Please fix the validation errors");
  });

  it("Should  not login invalid Password", () => {
    userLoginObject.emailAddress().type(this.email);
    userLoginObject.password().type("test");
    userLoginObject.loginButton().click();
    cy.wait(1000);
    userLoginObject
      .successRegistrationMessage()
      .should(
        "contain",
        "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
      );
  });

  it("Should  login with valid credentials", () => {
    userLoginObject.emailAddress().type(this.email);
    userLoginObject.password().type(this.Password);
    userLoginObject.loginButton().click();
    cy.wait(1000);
    userLoginObject
      .successRegistrationMessage()
      .should("contain", "You are logged in!");
  });
});
