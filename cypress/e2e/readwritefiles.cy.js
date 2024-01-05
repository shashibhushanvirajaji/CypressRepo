/// <reference types="cypress"/>

describe('read and write files',()=>{

    it('reading a file using readFile method',()=>{
        cy.readFile('./cypress/fixtures/credentials.json').then((data)=>{
            cy.log(data.username)
            cy.log(data.password)
        })
    })
})