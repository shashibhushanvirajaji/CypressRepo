
export class WelcomePage {

    get dashboardtext() {
        return cy.contains('Dashboard')
    }
    get invalidcredentialstext() {
        return cy.contains('Invalid credentials')
    }
    
}