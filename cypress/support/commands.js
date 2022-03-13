// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {});

Cypress.Commands.add(
  "RegistrationForm",
  (email, firstName, lasName, password, repeatPassword, MobileNO) => {
    cy.get('input[name="email"]').clear().type(email);

    cy.get('input[placeholder="First name *"]').clear().type(firstName);
    cy.get('input[name="last-name"]').clear().type(lasName);
    cy.get('input[name="password"]').clear().type(password);
    cy.get('input[name="password-confirm"]').clear().type(repeatPassword);
    cy.get('input[name="mobileNumber"]').clear().type(MobileNO);
    //cy.get("#terms").click({ force: true });
    cy.wait(2000);

    cy.get('button[type="submit"]');
  }
);

Cypress.Commands.add("acceptTermsAndCondition", () => {
  cy.get("#terms").click({ force: true });
});

Cypress.Commands.add("addItemToWishlist", () => {
  cy.get(".product-carousal").eq(0).find(".product").eq(0).click();
  cy.get('button[data-testid="addToWishlist"]').click();
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
