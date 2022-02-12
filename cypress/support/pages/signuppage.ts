class signup {
    get getName() {
        return cy.get('input[id="name"]')
    }
    get getEmail() {
        return cy.get('input[id="email"]')
    }
    get getPassword() {
        return cy.get('input[id="password"]')
    }
    get getAgreechkBox() {
        return cy.get('[class*="checkbox-1"] [for="signup-terms"]')
    }
    get getSubmitBtn() {
        return cy.get('button[class="signup__submit"]')
    }
    get getSuccessPopup() {
        return cy.get('[class="signup__title-form"]')
    }
    get getEmailErr() {
        return cy.get('[id="emailError"]')
    }
    get getPassErr() {
        return cy.get('[id="signup-form-password"]')
    }
    get getTermsErr() {
        return cy.get('[id="termsError"]')
    }
}
export default signup