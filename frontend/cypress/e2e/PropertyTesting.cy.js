const { Link } = require("react-router-dom")

describe('Navigate to Create Unit Form from Profile and go back', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="email-input"]').type('test@example.com');
    cy.get('[data-testid="password-input"]').type('password123');
    cy.get('[data-testid="submit-button"]').click();
  })

  it('Navigate to Create Unit from profile', () => {
    cy.get('[data-testid="dropdown"]').click();
    cy.contains('Dashboard').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Estate Alpha').click();
    cy.url().should('include', '/property-page');
    cy.get('[data-testid="create-unit-button"]').click()
    cy.contains('Cancel').click();
    cy.url().should('include', '/property-page')
  })
})


describe('Enter Create Unit Form', () => {
  beforeEach(() => {
    cy.visit('/create-unit') 
  })
  it('Fill out the create unit form and submit successfully', () => {
    cy.get('[data-testid="unit-id-input"]').type('123456')
    cy.get('[data-testid="unit-size-input"]').type('1000')
    cy.get('[data-testid="unit-owner-input"]').type('John Doe')
    cy.get('[data-testid="unit-info-input"]').type('random info')
    cy.get('[data-testid="submit-button"]').click()
  })
})

describe('Navigate to Create Parking Form from Profile and go back', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="email-input"]').type('test@example.com');
    cy.get('[data-testid="password-input"]').type('password123');
    cy.get('[data-testid="submit-button"]').click();
  })
  it('Navigate to Create Parking from profile', () => {
    cy.get('[data-testid="dropdown"]').click();
    cy.contains('Dashboard').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Estate Alpha').click();
    cy.url().should('include', '/property-page');
    cy.get('[data-testid="create-parking-button"]').click()
    cy.contains('Cancel').click();
    cy.url().should('include', '/property-page')
  })
})

describe('Enter Create Parking Form', () => {
  beforeEach(() => {
    cy.visit('/create-parking')
  })
  it('Fill out the create parking form and submit successfully', () => {
    cy.get('[data-testid="parking-id-input"]').type('123456')
    cy.get('[data-testid="parking-owner-input"]').type('100')
    cy.get('[data-testid="parking-info-input"]').type('John Doe')
    cy.get('[data-testid="parking-fee-input"]').type('999')
    cy.get('[data-testid="submit-button"]').click()
  })
})

describe('Navigate to Create Locker Form from Profile and go back', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="email-input"]').type('test@example.com');
    cy.get('[data-testid="password-input"]').type('password123');
    cy.get('[data-testid="submit-button"]').click();
  })
  it('Navigate to Create Locker from profile', () => {
    cy.get('[data-testid="dropdown"]').click();
    cy.contains('Dashboard').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Estate Alpha').click();
    cy.url().should('include', '/property-page');
    cy.get('[data-testid="create-locker-button"]').click()
    cy.contains('Cancel').click();
    cy.url().should('include', '/property-page')
  })
})

describe('Create Locker Form', () => {
  beforeEach(() => {
    cy.visit('/create-locker')
  })
  it('should fill out the create locker form and submit successfully', () => {
    cy.get('[data-testid="locker-id-input"]').type('654321')
    cy.get('[data-testid="locker-owner-input"]').type('999')
    cy.get('[data-testid="locker-info-input"]').type('Doe John')
    cy.get('[data-testid="locker-fee-input"]').type('100')
    cy.get('[data-testid="submit-button"]').click()
  })
})