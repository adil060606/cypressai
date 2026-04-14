describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ validUser }) => {
      cy.login(validUser.username, validUser.password)
    })
  })

  it('adds a product to the cart', () => {
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  it('removes a product from the cart', () => {
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })

  it('navigates to the cart page', () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
  })

  it('shows added items in the cart', () => {
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('have.length', 1)
  })
})
