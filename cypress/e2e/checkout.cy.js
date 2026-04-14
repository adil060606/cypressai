describe('Checkout', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ validUser }) => {
      cy.login(validUser.username, validUser.password)
      cy.addToCart('Sauce Labs Backpack')
      cy.get('.shopping_cart_link').click()
    })
  })

  it('proceeds to checkout from the cart', () => {
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')
  })

  it('completes checkout with valid information', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('Doe')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('[data-test="finish"]').click()
    cy.url().should('include', '/checkout-complete.html')
    cy.get('.complete-header').should('contain', 'Thank you')
  })

  it('shows error when checkout info is missing', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})
