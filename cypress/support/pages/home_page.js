/// <reference types="cypress" />

export default {
    accessRegisterPage() {
        cy.visit('/')
            .get('.top_header_left')
            .should('be.visible')

        cy.get('.fa.fa-lock')
            .click()

        cy.get('.account_form > h3')
            .should('have.text', 'Cadastro de usuário')
    },

    accessLoginPage() {
        cy.visit('/')
            .get('.top_header_left')
            .should('be.visible')

        cy.get('.fa.fa-user')
            .click()

        cy.get('.account_form > h3')
            .should('have.text', 'Login')
    }
}
