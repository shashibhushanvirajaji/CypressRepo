
export class LoginPage {


    get usernameinput(){
        return cy.get('input[placeholder="username"]')
    }
    get passwordinput(){
        return cy.get('input[placeholder="password"]')
    }
    get loginbutton(){
        return  cy.get("button[type='submit']")
    }
}