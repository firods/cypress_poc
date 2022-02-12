class home {
    get freeSignUpBtn() {
        return cy.get('[class*="ListItem"] a[href="/signup/"]').contains('Sign up free')
    }
}
export default home