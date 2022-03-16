/// <reference types="Cypress" />
//Import Utility from support folder
import { Utility } from "../../support/utility.js";
import userLogin from "../../pages/login-page-object/user-login-page-objects.js";
import robiHomePage from "../../pages/home-page-page-object/home-page-page-object.js";
import addToCart from "../../pages/cart-page-object/add-to-cart-page-object.js";
//import registration from "../../pages/registration-page-object/registration-page-object.js";
import checkout from "../../pages/checkout-page-object/checkout-page-object.js";
//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();
const userLoginObject = new userLogin();
const homepage = new robiHomePage();
const addToCartObject = new addToCart();
const checkoutObject = new checkout();
//const registrationObject = new registration();


// Registration
// Login
// Add to cart
// Checkout

describe("Registration to checkout", function () {
  before(function () {
    //Visit the url
    cy.fixture("runtime-created-file/userRegistrationData.json").then(
      (data) => {
        this.email = data.email;
        this.Password = data.password;
      }
    );
  });

  it("Visit the Site", function () {
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
    addToCartObject.cartIcon().click();
    addToCartObject.cartSection().should("be.visible");
    addToCartObject
      .cartSection()
      .should("contain", "Your shopping cart is empty.");
    // addToCartObject.cartSection().should("have.length", 0);
    addToCartObject.closeCart().click();
    addToCartObject.ClickOnProduct().click();
    addToCartObject.AddToCartButton().click();
    addToCartObject.cartIcon().click();
    cy.wait(4000);
    addToCartObject
      .cartSection()
      .should("not.contain", "Your shopping cart is empty.");
  });

  it("Should not checkout without Fill up Information", function () {
    checkoutObject.checkoutButton().click();

  });

  it("Should not Proceed further with blank field", function () {
    // Button should be disabled and not clickable with blank field
  });

  it.skip("Should  checkout with valid credentials", function () {
    checkoutObject.cartIcon().click();
    checkoutObject.cartSection().should("be.visible");
    checkoutObject.cartSection().should("contain", "Your shopping cart is empty.");
    checkoutObject.cartSection().should("have.length", 0);
    checkoutObject.closeCart().click();
    checkoutObject.ClickOnProduct().click();
    checkoutObject.AddToCartButton().click();
    checkoutObject.cartIcon().click();
    cy.wait(4000);
    checkoutObject.cartSection().should("not.contain", "Your shopping cart is empty.");
    checkoutObject.checkoutButton().click();
    cy.wait(1000);
    checkoutObject.checkoutSection().should("be.visible");
    checkoutObject.checkoutSection().should("contain", "Checkout");
    checkoutObject.checkoutSection().should("contain", "Shipping");
    checkoutObject.checkoutSection().should("contain", "Payment");
    checkoutObject.checkoutSection().should("contain", "Order summary");
    checkoutObject.checkoutSection().should("contain", "I confirm my order");
    checkoutObject.checkoutSection().should("contain", "I would like to receive my order in recycled packaging");
    checkoutObject.checkoutSection().should("contain", "I would like to receive my order in recyclable packaging");
    checkoutObject.checkoutSection().should("contain", "I would like to receive my order in a recyclable container");
    checkoutObject.checkoutSection().should("contain", "I would like to receive my order in a recyclable packaging");
  })
});