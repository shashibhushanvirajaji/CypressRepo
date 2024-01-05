
describe('checking assertions',()=>{

    it('implicit assertios',()=>{
            cy.visit('https://example.cypress.io/')
            cy.contains('get').click()
            cy.get('#query-btn')
                .should('be.enabled')
            cy.get('#query-btn').focus()
                .should('be.focused')
                cy.get('#query-btn').should('have.class','query-btn btn btn-primary')

                cy.get('#query-btn').invoke('attr','class')
                .should('include','btn-primary')
    })
    it('explicit assertions',()=>{
        cy.visit('https://example.cypress.io/')
        cy.contains('children').click()
        cy.get('.badge').should('contain.text','14')
        cy.get('.badge').eq(1).should('contain.text','54')

        cy.get('.badge').eq(1).invoke('text').then((text)=>
        {
            expect(text).to.be.equal('58')
        })

        cy.get('.badge').eq(0).invoke('text').then(text=>{
            assert.equal(text,'14')
        })
    })
})