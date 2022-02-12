import home from '../../support/pages/homepage'
import signup from '../../support/pages/signuppage'
import utils from '../../support/utilities'

const homepage = new home()
const signuppage = new signup()
const utilites = new utils()

describe('Miro UI Functional Tests', () => {

    beforeEach(function () {
        cy.fixture('testdata').then(function (data) { this.data = data })
        cy.visit(Cypress.env('url'))
    })

    it('verify signup success flow', function () {
        homepage.freeSignUpBtn.click()
        signuppage.getName.type(this.data.name)
        signuppage.getEmail.type(utilites.generateUniqueEmailID)
        signuppage.getPassword.type(this.data.password)
        signuppage.getAgreechkBox.click()
        signuppage.getSubmitBtn.click()
        signuppage.getSuccessPopup.contains(this.data.successMsg)
    })

    it('verify signup negative cases', function () {
        homepage.freeSignUpBtn.click()
        signuppage.getName.type(this.data.name)
        signuppage.getSubmitBtn.click()
        signuppage.getEmailErr.contains(this.data.emailErrMsg)
        signuppage.getPassErr.contains(this.data.passErrMsg)
        signuppage.getTermsErr.contains(this.data.termsErrMsg)
        signuppage.getEmail.type(utilites.generateUniqueEmailID)
        signuppage.getSubmitBtn.click()
        signuppage.getPassErr.contains(this.data.passErrMsg)
        signuppage.getTermsErr.contains(this.data.termsErrMsg)
        signuppage.getPassword.type(this.data.password)
        signuppage.getSubmitBtn.click()
        signuppage.getTermsErr.contains(this.data.termsErrMsg)
    })

    afterEach(function () {
        //delete account from UI or DB as a cleanup activity.
    })
})