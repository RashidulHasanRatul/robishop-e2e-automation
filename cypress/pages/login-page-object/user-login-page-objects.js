class userLogin {
  emailAddress() {
    return cy.get('input[placeholder="E-mail address *"]');
  }
  password() {
   return cy.get('input[placeholder="Password *"]');
  }
  loginButton() {
   return cy.get('button[data-testid="loginSubmit"]');
  }

  successRegistrationMessage() {
    return cy.get('[data-testid="notificationMessage"]');
  }
}
export default userLogin;
