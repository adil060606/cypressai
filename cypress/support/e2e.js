// cypress/support/e2e.js
// This file is processed and loaded automatically before test files.

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('addToCart', (productName) => {
  cy.contains('.inventory_item', productName)
    .find('button')
    .click()
})
