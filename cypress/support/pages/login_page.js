/// <reference types="cypress" />

const elements = {
    //
}

export default {
    clickLoginButton() {
        cy.get('#btnLogin')
            .click()
    },

    checkErrorMessage(message) {
        cy.get('.invalid_input')
            .should('have.text', message)
    },

    checkSuccessMessage(email) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Olá, ' + email)        
    },

    fillEmail(email) {
        cy.get('#user')
            .type(email)
    },

    fillPassword(password) {
        cy.get('#password')
            .type(password)
    }
}
