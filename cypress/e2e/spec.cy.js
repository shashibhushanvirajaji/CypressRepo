describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('title check',()=>{
    cy.visit('https://example.cypress.io')
    cy.title().contains("Cypress.io: Kitchen Sink")
  })
})