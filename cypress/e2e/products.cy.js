describe('Products', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ validUser }) => {
      cy.login(validUser.username, validUser.password)
    })
  })

  it('displays the products page after login', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })

  it('shows at least one product', () => {
    cy.get('.inventory_item').should('have.length.at.least', 1)
  })

  it('displays product name, price, and add-to-cart button', () => {
    cy.get('.inventory_item').first().within(() => {
      cy.get('.inventory_item_name').should('be.visible')
      cy.get('.inventory_item_price').should('be.visible')
      cy.get('button').should('be.visible')
    })
  })

  it('can sort products by price (low to high)', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi')
    cy.get('.inventory_item_price').then(($prices) => {
      const prices = [...$prices].map((el) =>
        parseFloat(el.innerText.replace('$', ''))
      )
      const sorted = [...prices].sort((a, b) => a - b)
      expect(prices).to.deep.equal(sorted)
    })
  })

  it('can navigate to a product detail page', () => {
    cy.get('.inventory_item_name').first().click()
    cy.url().should('include', '/inventory-item.html')
    cy.get('.inventory_details_name').should('be.visible')
  })
})
