// Write tests below
describe('App', () => {
    // start with fresh state by refreshing the page
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })
    // Helpers to centralize our selectors
    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosBox = () => cy.get('input[name=tos]');
    const submitBtn = () => cy.get('button[name=submit');

    // first test
    it('does this work', () => {
        expect(1 + 1).to.equal(2);
    })





})
