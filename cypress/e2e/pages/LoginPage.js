
export class LoginPage {


    get usernameinput(){
        return cy.get('input[placeholder="Username"]')
    }
    get passwordinput(){
        return cy.get('input[placeholder="Password"]')
    }
    get loginbutton(){
        return  cy.get("button[type='submit']")
    }
}