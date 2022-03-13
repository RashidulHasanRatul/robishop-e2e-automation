class userLogin {
  emailAddress() {
    return cy.get('input[name="email"]');
  }
  password() {
    cy.get('input[name="password"]');
  }
  loginButton() {
    cy.get('[data-testid="loginSubmit"]');
  }

  successRegistrationMessage() {
    return cy.get('[data-testid="notificationMessage"]');
  }
}
export default userLogin;
