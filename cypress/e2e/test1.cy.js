describe('first suite',()=>{
    it('test 1',()=>{
        cy.visit('https://www.google.com')
        cy.log(  Cypress.currentTest.title)
        cy.log(  Cypress.currentTest.titlePath)
        cy.log(cy.title())
        cy.get('#APjFqb').type('automation step by step{enter}')
        cy.contains('Images').click()
    })
})