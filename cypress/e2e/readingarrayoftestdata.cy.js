
describe('reading test data array',()=>{

    var testdata
    before(()=>{
        cy.fixture('credentialsarray').then((data)=>{
            testdata = data
        })
    })
    it('read test data array',()=>{

       testdata.forEach(element => {
            cy.log(element.username)
            cy.log(element.password)
       });
    })
})