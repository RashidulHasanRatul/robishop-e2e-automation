class wishlist {
  wishlist() {
    return cy.get('button[aria-label="Open wishlist"]');
  }
  verifyItemAddedToWishlist() {
    cy.get(".wishlist-item").should("have.length", 1);
  }

  notificationMessage() {
    return cy.get('[data-testid="notificationMessage"]');
  }

  wishlistProduct() {
    return cy.get(".products");
  }

  clearWishlist() {
    return cy.get(".clearcart-btn");
  }
}
export default wishlist;

//Product iPhone 12 Pro Max 256GB has been added to wishlist!

//Product iPhone 12 Pro Max 256GB has been removed from wishlist!

//Product iPhone 12 Pro Max 256GB has been added to wishlist!
