class addToCart {
  ClickOnProduct() {
    return cy.get(".product-carousal").eq(0).find(".product").eq(0);
  }

  AddToCartButton(){
      return 
  }
} export default addToCart;