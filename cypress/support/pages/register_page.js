/// <reference types="cypress" />

const elements = {
    //
}


export default {
    clickRegisterButton() {
        cy.get('#btnRegister')
            .click()
    },

    checkErrorMessage(message) {
        cy.get('#errorMessageFirstName')
            .should('have.text', message)
    },

    fillName(username) {
        cy.get('#user')
            .should('be.visible')
            .type(username)
    },

    fillEmail(email) {
        cy.get('#email')
            .should('be.visible')
            .type(email)
    },

    fillPassword(password) {
        cy.get('#password')
            .should('be.visible')
            .type(password)
    },

    checkSuccessMessage(username) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Bem-vindo ' + username)
    }
}
