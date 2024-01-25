/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import home_page from "../support/pages/home_page"
import login_page from "../support/pages/login_page"

describe('Login', () => {

    beforeEach('Acessar tela de login', () => {
        home_page.accessLoginPage()
    })

    it('Login com e-mail vazio', () => {    
        login_page.clickLoginButton()
        login_page.checkErrorMessage('E-mail inválido.')
    })

    it('Login com senha vazia', () => {
        login_page.fillEmail(faker.internet.email())
        login_page.clickLoginButton()
        login_page.checkErrorMessage('Senha inválida.')
    })

    it('Login com e-mail inválido', () => {
        login_page.clickLoginButton()
        login_page.fillEmail('emailinválido')
        login_page.checkErrorMessage('E-mail inválido.')
    })

    it('Login com senha inválida', () => {
        login_page.fillEmail(faker.internet.email())
        login_page.fillPassword('123')
        login_page.clickLoginButton()
        login_page.checkErrorMessage('Senha inváli.')
    })

    it('Login com sucesso', () => {
        const email = faker.internet.email()

        login_page.fillEmail(email)
        login_page.fillPassword('123456')
        login_page.clickLoginButton()
        login_page.checkSuccessMessage(email)
    })
})
