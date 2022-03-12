class userRegistration {
 
    clickRegisterForAnAccount() {
        return cy.contains("or register for an account");
    }
    createAccountButton() {
        return cy.get('[data-testid="subscribeSubmit"]');
    }
    successRegistrationMessage() {
        return cy.get('[data-testid="notificationMessage"]');
    }

}
export default userRegistration;
