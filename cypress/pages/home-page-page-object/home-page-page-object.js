class robiHomePage {
  welcomeMessage() {
    return cy.get('[data-testid="closeModalButton"]');
  }
  logo() {
    return cy.get(".logoId");
  }
  menuButton() {
    return cy.get('[data-testid="menuButton"]');
  }
  accountButton() {
    return cy.get('[data-testid="accountButton"]');
  }

  searchBox() {
    return cy.get('input[placeholder="Search in Robishop"]');
  }
  campaignSection() {
    return cy.get(".mobileCategory > .mobileCategory-title");
  }

  topBrands() { 
    return cy.get(".category-title");
  }
}
export default robiHomePage;
