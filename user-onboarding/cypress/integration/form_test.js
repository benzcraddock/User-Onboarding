// Write tests below
describe('App', () => {
    // start with fresh state by refreshing the page
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })
    // Helpers to centralize our selectors
    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosBox = () => cy.get('input[name=tos]');
    const submitBtn = () => cy.get('input[name=submit]');

    // first test
    it('does this work', () => {
        expect(1 + 1).to.equal(2);
    })

    it('the proper elements are showing', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosBox().should('exist');
        submitBtn().should('exist');

        // check if quote is included
        cy.contains('Create a user').should('exist');
    })

    // type name in Name, email and password input and use an assertion to check if text inputted contains name you provided
    describe('Filling out the inputs', () => {
        it('can type in the name input', () => {
            nameInput().should('have.value', '').type('Benye Sama').should('have.value', 'Benye Sama');
            emailInput().should('have.value', '').type('bencodes@coding.com').should('have.value', 'bencodes@coding.com');
            passwordInput().should('have.value', '').type('123456').should('have.value', '123456');
        })
    })

    // set up a test that will check to see if a user can check the terms of service box
    describe('Check in the terms of service box', () => {
        it('can check the box', () => {
            tosBox().check();
        })
    })

    // check to see if user can submit form data
    describe('Submit the form data', () => {
        it('can submit form', () => {
            nameInput().type('Benye');
            emailInput().type('codecodecode@coding.com');
            passwordInput().type('000000');
            tosBox().check();
            submitBtn().click();
        })
    })

    // check for form validation if an input is left empty
    describe('Form validation if input is empty', () => {
        it('can check for form validation', () => {
            nameInput().should('have.value', '');
            emailInput().should('have.value', '');
            passwordInput().should('have.value', '');
        })
    })
            
})
