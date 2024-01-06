
import { LoginPage } from "./pages/LoginPage"
import { WelcomePage } from "./pages/WelcomePage"

describe.skip('login test suite', () => {
    const loginpage = new LoginPage()
    const welcomePage = new WelcomePage()

    var testdata
    before(() => {
        cy.fixture('invalidcredentials').then((data) => {
            testdata = data
        })
    })
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('check login with valid date', () => {


        loginpage.usernameinput.type('admin')
        loginpage.passwordinput.type('admin123')
        loginpage.loginbutton.click()
        welcomePage.dashboardtext.should('exist')
    })

    it('check login with in-valid date', () => {



        loginpage.usernameinput.type(testdata.username)
        loginpage.passwordinput.type(testdata.password)

        loginpage.loginbutton.click()
        welcomePage.invalidcredentialstext.should('exist')
    })

})