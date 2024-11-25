describe('My First Test', () => {
    it('Visits the Cypress website', () => {
        cy.visit('https://www.cypress.io');
        cy.contains('Test. Automate. Accelerate.');
    });
});
