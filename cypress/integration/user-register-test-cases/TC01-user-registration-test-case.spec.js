/// <reference types="Cypress" />
//Import Utility from support folder
import { Utility } from "../../support/utility.js";
import userRegistration from "../../pages/registration-page-object/user-registration-page-object.js";
import robiHomePage from "../../pages/home-page-page-object/home-page-page-object.js";
//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();
const registration = new userRegistration();
const homepage = new robiHomePage();

describe("User Register Test", () => {
  context("Validate With Multiple Assertion for User Registration", () => {
    let email = "test" + Math.random() + "@gmail.com";
    let firstName = "test";
    let lastName = "test";
    let password = "RA123456";
    let repeatPassword = "RA123456";
    let mobileNo = "01234567890";
    before(() => {
      //Visit the url
      cy.visit(url);
      // welcomeMessage Popup	close
      homepage.welcomeMessage().click();
      homepage.accountButton().click();
      //registration.clickRegisterForAnAccount();
    });

    it("test", () => {
      cy.wait(2000);
      registration.clickRegisterForAnAccount().click();
      cy.acceptTermsAndCondition();
    });

    it("Should not register with all field empty", () => {
      cy.RegistrationForm(" ", " ", " ", " ", " ", " ");

      registration.createAccountButton().should("be.disabled");
    });

    it("Should not register with invalid data", () => {
      cy.RegistrationForm(" trtrt", " trtr", "trtr", " trt", "rtr", " rtr");

      registration.createAccountButton().should("be.disabled");
    });

    it("Should  register with valid data", () => {
      cy.RegistrationForm(
        email,
        firstName,
        lastName,
        password,
        repeatPassword,
        mobileNo
      );
      cy.writeFile(
        "cypress/fixtures/runtime-created-file/userRegistrationData.json",
        {
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
          repeatPassword: repeatPassword,
          mobileNumber: mobileNo,
        }
      );

      registration.createAccountButton().click();
      registration
        .successRegistrationMessage()
        .should("contain", "You are logged in!");
    });
  });

  context("Duplicate User Create Or Not Validation", () => {
    before(function () {
      cy.fixture("runtime-created-file/userRegistrationData.json").then(
        (data) => {
          this.email = data.email;
          this.firstName = data.firstName;
          this.lastName = data.lastName;
          this.password = data.password;
          this.repeatPassword = data.repeatPassword;
          this.mobileNumber = data.mobileNumber;
        }
      );

      //Visit the url
      cy.visit(url);
      // welcomeMessage Popup	close
      homepage.welcomeMessage().click();
      homepage.accountButton().click();
     
    });
    it("Accept Terms and condition", () => {
       registration.clickRegisterForAnAccount().click();
      cy.acceptTermsAndCondition();
    });
    it("Should not register with Already Registered User Information", function () {
      cy.log(this.email);
      console.log(this.email);
      cy.RegistrationForm(
        this.email,
        this.firstName,
        this.lastName,
        this.password,
        this.repeatPassword,
        this.mobileNumber
      );
      registration.createAccountButton().click();
      registration
        .successRegistrationMessage()
        .should(
          "contain",
          "A customer with the same email address already exists in an associated website."
        );
    });
  });
});
