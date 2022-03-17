class checkout {
  gotoCheckoutButton() {
    return cy.get('[data-testid="subscribeSubmit"]');
  }

  firstNameInCheckoutPage() {
    return cy.get('input[placeholder="First name *"]');
  }
  lastNameInCheckoutPage() {
    return cy.get('input[name="last-name"]');
  }
  emailInCheckoutPage() {
    return cy.get('input[name="email-address"]');
  }
  continueShoppingButtonInCheckoutPage() {
    return cy.get('[data-testid="personalDetailsSubmit"]');
  }
  gotoCheckoutButtonInCheckoutPage() {
    return cy.get('[data-testid="personalDetailsSubmit"]');
  }

  streetAddressInCheckoutPage() {
      return cy.get('name="street[0]"');
  }
  districtInCheckoutPage() {
      return cy.get('name="region_id"');
  }
  thanaInCheckoutPage() {
      return cy.get('name="thana_id"');
  }
  ZipCodeInCheckoutPage() {
      return cy.get('name="postcode"');
  }

  phoneNumberInCheckoutPage() {
      return cy.get('name="telephone"');
  }
  proceedToPaymentInCheckoutPage() {
        return cy.get('data-testid="subscribeSubmit"');
    }
}
export default checkout;
