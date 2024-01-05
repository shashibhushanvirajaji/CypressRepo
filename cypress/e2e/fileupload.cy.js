
describe('file upload and download',()=>{

    it.skip('uploading a file',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        //cy.get('#file-upload').attachFile('credentials.json')

        cy.get('#drag-drop-upload').attachFile('credentials.json', { subjectType: 'drag-n-drop' });
    })

    it('downloading file',()=>{
        cy.downloadFile('https://the-internet.herokuapp.com/download','mydownloads','SampleFile.txt')
    })
})