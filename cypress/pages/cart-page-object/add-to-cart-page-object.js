class addToCart {
  ClickOnProduct() {
    return cy.get(".product-carousal").eq(0).find(".product").eq(2);
  }

  AddToCartButton(){
      return cy.get('[data-testid="addToCart"]');
  }
  cartIcon(){
   return cy.get('[data-testid="openMicrocart"]')
  }

  cartSection(){
   return cy.get('[data-testid="microcart"]');
  }

  closeCart(){
    return cy.get('[data-testid="closeMicrocart"] ');
  }
} export default addToCart;