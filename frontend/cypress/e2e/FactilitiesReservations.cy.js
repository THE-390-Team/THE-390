describe('As a company user sign in and create a factility for one property', () => {
    beforeEach(() => {
        cy.login('joud.babik@gmail.com', '123qweasd');
    })
    it('Navigate to Property Page from Profile and create a test Facility', () => {
        cy.goToTajMahal();
        cy.contains('Facilities').click();
        cy.contains('Create Common Facilities').click();
        cy.get('[data-testid="facility-name"]').type('test')
        cy.get('[data-testid="type-select-test"]').select('Gym')
        cy.get('[data-testid="facility-description"]').type('test')
        cy.get('[data-testid="facility-capacity"]').type('20')
        cy.get('[data-testid="facility-reservation"]').type('00:00:00')
        cy.get('[data-testid="facility-reservation_end"]').type('01:00:00')
        cy.contains('Submit').click();
        cy.contains('test')
        cy.contains('20 People')
        cy.contains('00:00:00')
        cy.contains('01:00:00')
    })
})
describe('As a public user sign in and see make a reservation', () => {
    beforeEach(() => {
        cy.login('test@example.com', 'password123');
    })
    it('Navigate to Unit page and Selects times', () => {
        const unitLocation = 198
        cy.contains('Dashboard').click();
        cy.get(`[data-testid="reservation-button-${unitLocation}"]`).click();
        cy.contains('Select a Facility').click();
        cy.contains('Cancel').click();
        cy.get(`[data-testid="reservation-button-${unitLocation}"]`).click();
        cy.contains('Start Time').click();
        cy.contains('13').click();
        cy.contains('3:30 PM').click();
        cy.get(`[data-testid="calender-confirm-button"]`).click();
        cy.contains('End Time').click();
        cy.contains('14').click();
        cy.contains('4:30 PM').click();
        cy.get(`[data-testid="calender-confirm-button"]`).click();
        cy.contains('2024-05-13T15:30:00')
        cy.contains('2024-05-14T16:30:00')
        cy.contains('Status')
        cy.contains('pending')
    })
})

