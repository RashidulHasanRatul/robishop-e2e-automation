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

  it("Should add Product to Add To Cart and goto CheckOut Page", function () {
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

    checkoutObject.gotoCheckoutButton().click();
  });

  it("Should not continuate to shipping  with  Blank  Information Field", function () {
    cy.wait(2000);
    checkoutObject.firstNameInCheckoutPage().clear().type(" ");
    checkoutObject.lastNameInCheckoutPage().clear().type(" ");
    checkoutObject.emailInCheckoutPage().clear().type(" ");
    checkoutObject.continueShoppingButtonInCheckoutPage().should("be.disabled");
  });

  it("Should FillUp information and goto next Step", function () {
    let testMail = "testmail" + Math.floor(Math.random() * 100) + "@gmail.com";
    checkoutObject.firstNameInCheckoutPage().clear().type("Test");
    checkoutObject.lastNameInCheckoutPage().clear().type("User");
    checkoutObject.emailInCheckoutPage().clear().type(testMail);
    checkoutObject.continueShoppingButtonInCheckoutPage().click();
  });
  
});
