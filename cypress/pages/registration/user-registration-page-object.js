class userRegistration {
 
    clickRegisterForAnAccount() {
        return cy.contains("or register for an account");
    }
    createAccountButton() {
        return cy.get('[data-testid="subscribeSubmit"]');
    }

}
export default userRegistration;
