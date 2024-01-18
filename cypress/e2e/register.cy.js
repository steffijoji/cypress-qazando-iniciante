/// <reference types="cypress" />

import home_page from "../support/pages/home_page"
import register_page from "../support/pages/register_page"

const user_data = require('../fixtures/register_data.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessar tela cadastro de usuário', () => {
        home_page.accessRegisterPage()
    })

    it('Campo nome vazio', () => {
        register_page.clickRegisterButton()
        register_page.checkErrorMessage('O campo nome deve ser prenchido')
    })

    it('Campo e-mail vazio', () => {
        register_page.fillName(user_data.validName)
        register_page.clickRegisterButton()
        register_page.checkErrorMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {
        register_page.fillName(user_data.validName)
        register_page.fillEmail(user_data.validEmail)
        register_page.clickRegisterButton()
        register_page.checkErrorMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo e-mail inválido', () => {
        register_page.fillName(user_data.validName)
        register_page.fillEmail(user_data.invalidEmail)
        register_page.fillPassword(user_data.validPassword)
        register_page.clickRegisterButton()
        register_page.checkErrorMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha inválida', () => {
        register_page.fillName(user_data.validName)
        register_page.fillEmail(user_data.validEmail)
        register_page.fillPassword(user_data.invalidPassword)
        register_page.clickRegisterButton()
        register_page.checkErrorMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it.only('Cadastro com sucesso', () => {
        register_page.fillName(user_data.validName)
        register_page.fillEmail(user_data.validEmail)
        register_page.fillPassword(user_data.validPassword)
        register_page.clickRegisterButton()
        register_page.checkSuccessMessage(user_data.validName)
    })
})
