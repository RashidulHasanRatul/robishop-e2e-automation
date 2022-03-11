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
    return cy.get('[data-testid="openSearchPanel"]');
  }
  campaignSection() {
  return cy.get(".col-md-9");
  }

  topBrands() {
    return cy.get(".category-title");
  }

  searchField() {
    return cy.get(".product-listing");
  }
  modalSearchBox() {
    return cy.get("#search");
  }
  closeSearchPanel() {
    return cy.get('[data-testid="closeSearchPanel"]');
  } 
}
export default robiHomePage;
