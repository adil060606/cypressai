describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the login page', () => {
    cy.get('[data-test="username"]').should('be.visible')
    cy.get('[data-test="password"]').should('be.visible')
    cy.get('[data-test="login-button"]').should('be.visible')
  })

  it('logs in with valid credentials', () => {
    cy.fixture('users').then(({ validUser }) => {
      cy.get('[data-test="username"]').type(validUser.username)
      cy.get('[data-test="password"]').type(validUser.password)
      cy.get('[data-test="login-button"]').click()
      cy.url().should('include', '/inventory.html')
    })
  })

  it('shows error for locked out user', () => {
    cy.fixture('users').then(({ lockedUser }) => {
      cy.get('[data-test="username"]').type(lockedUser.username)
      cy.get('[data-test="password"]').type(lockedUser.password)
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('contain', 'locked out')
    })
  })

  it('shows error for invalid credentials', () => {
    cy.get('[data-test="username"]').type('wrong_user')
    cy.get('[data-test="password"]').type('wrong_password')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})
