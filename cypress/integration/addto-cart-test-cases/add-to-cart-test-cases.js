/// <reference types="Cypress" />
//Import Utility from support folder
import { Utility } from "../../support/utility.js";
import userLogin from "../../pages/login-page-object/user-login-page-objects.js";
import robiHomePage from "../../pages/home-page-page-object/home-page-page-object.js";
import addToCart from "../../pages/cart-page-object/add-to-cart-page-object.js";
//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();
const userLoginObject = new userLogin();
const homepage = new robiHomePage();
const addToCartObject = new addToCart();
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
  });

  it("Should  login with valid credentials", function () {
    cy.wait(1000);
    homepage.accountButton().click();
    userLoginObject.emailAddress().clear().type(this.email);
    userLoginObject.password().clear().type(this.Password);
    userLoginObject.loginButton().click();
    cy.wait(1000);
    userLoginObject
      .successRegistrationMessage()
      .should("contain", "You are logged in!");
  });

  it("Should add Product to Add To Cart", function () {
    cy.wait(2000);
    //addToCartObject.ClickOnProduct().click();
    //addToCartObject.AddToCartButton().click();
  });

  it("Should  checkout with valid credentials", function () {});
});
