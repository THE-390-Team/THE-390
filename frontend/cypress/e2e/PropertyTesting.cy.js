const { Link } = require("react-router-dom")

describe('Header Navigation', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should navigate to login page', () => {
      cy.contains('LOGIN').click();
      cy.url().should('include', '/login');
    });
  });

describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should fill out the form and submit successfully', () => {
    cy.get('[data-testid="email-input"]').type('test@example.com')
    cy.get('[data-testid="password-input"]').type('password123')
    cy.get('[data-testid="submit-button"]').click()
  })
})

describe('Navigate to Create Unit Form', () => {
    it('start', () => {
        cy.visit('/profile');
    })
    it('Navigate to Create Unit from profile', () => {
        cy.get('[data-testid="dropdown"]').click();
        cy.contains('Dashboard').click();
        cy.url().should('include', '/dashboard');
        cy.contains('Estate Alpha').click();
        cy.url().should('include', '/property-page');
        cy.contains('+').click();
        cy.url().should('include', '/create-unit');
        cy.contains('Cancel')
    })
  })
describe('Navigate to Create Unit Form And Cancel', () => {
    beforeEach(() => {
        cy.visit('/create-unit') 
      });
    it('should fill out the create unit form and submit successfully', () => {
        
        cy.get('[data-testid="unit-id-input"]').type('123456')
        cy.get('[data-testid="unit-size-input"]').type('1000')
        cy.get('[data-testid="unit-owner-input"]').type('John Doe')
        cy.get('[data-testid="unit-info-input"]').type('random info')
        cy.get('[data-testid="submit-button"]').click()
    })
})

describe('Create Parking Form', () => {
    beforeEach(() => {
        cy.visit('/parking')
    })
    it('should fill out the create parking form and submit successfully', () => {
        cy.get('[data-testid="parking-id-input"]').type('123456')
        cy.get('[data-testid="parking-owner-input"]').type('100')
        cy.get('[data-testid="parking-info-input"]').type('John Doe')
        cy.get('[data-testid="parking-fee-input"]').type('999')
        cy.get('[data-testid="submit-button"]').click()
    })
})

describe('Create Locker Form', () => {
    beforeEach(() => {
        cy.visit('/locker')
    })
    it('should fill out the create locker form and submit successfully', () => {
        cy.get('[data-testid="locker-id-input"]').type('654321')
        cy.get('[data-testid="locker-owner-input"]').type('999')
        cy.get('[data-testid="locker-info-input"]').type('Doe John')
        cy.get('[data-testid="locker-fee-input"]').type('100')
        cy.get('[data-testid="submit-button"]').click()
    })
})