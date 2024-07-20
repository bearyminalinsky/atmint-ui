describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="form"]').should("exist")

    cy.get('input#email')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your email')
      .type('admin@store.com').should('have.value', 'admin@store.com')

    cy.get('input#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your password')
      .type('123456').should('have.value', '123456')

    cy.get('[data-testid="submit"]').click()

    cy.get('div.home')
      .should('be.visible')
    
    cy.get('div.sidebar')
      .should('be.visible') 
    
    cy.get('[data-testid="categories"]').click()
    
    cy.url().should('include', '/categories')
    
    cy.get('div.mydatatableTitle').contains('CATEGORIES')

    cy.get('[data-testid="addNew"]').click()

    cy.get('div.new')
      .should('be.visible')

    cy.get('input#title')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Cookie Run')
      .type('Appetizer').should('have.value', 'Appetizer')

      cy.get('[data-testid="submit"]').click()

  })
})