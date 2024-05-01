describe('As a Company employee Navigate to Property Page from Profile and go back', () => {
    beforeEach(() => {
        cy.login('test@example.com', 'password123');
    })
    it('Navigate to Property Page from Profile', () => {
        cy.contains('Profile').click();
        cy.contains('Submit Key').click();
        cy.contains('Become Part of Our Family!')
        cy.get('[data-testid="registration-key"]').type('709272c247f0440ad74a619d29dd4883fe024eacdeb2b472d3f7a0032b0ee4ae')
        cy.contains('Save Key').click();

    })
})