const { Link } = require("react-router-dom")
describe('Header Navigation', () => {
  beforeEach(() => {
    cy.visit('/') // Assuming your homepage is served at '/'
  })

  it('should navigate to login page when "LOGIN" link is clicked', () => {
    cy.get('nav').contains('LOGIN').click()
    cy.url().should('include', '/login')
  })

  it('should navigate to properties page when "Properties" link is clicked', () => {
    cy.get('nav').contains('Properties').click()
    cy.url().should('include', '/properties')
  })

  it('should display dropdown menu when dropdown toggle is clicked', () => {
    cy.get('nav').contains('Dropdown').click()
    cy.get('nav').contains('Action').should('be.visible')
    cy.get('nav').contains('Another action').should('be.visible')
    cy.get('nav').contains('Something').should('be.visible')
    cy.get('nav').contains('Separated link').should('be.visible')
  })

  it('should navigate to a specific dropdown item when clicked', () => {
    cy.get('nav').contains('Dropdown').click()
    cy.get('nav').contains('Action').click()
  })

})

describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/login') 
  })

  it('should fill out the form and submit successfully', () => {
    cy.get('[data-testid="email-input"]').type('test@example.com')
    cy.get('[data-testid="password-input"]').type('password123')
    // cy.get('[data-testid="submit-button"]').click()
  })
})

describe('Sign Up Form', () => {
  beforeEach(() => {
    cy.visit('/signup') // Assuming your sign-up page is served at '/signup'
  })

  it('should fill out the sign-up form and submit successfully', () => {
    cy.get('[data-testid="first-name-input"]').type('John')
    cy.get('[data-testid="last-name-input"]').type('Doe')
    cy.get('[data-testid="phone-number-input"]').type('1234567890')
    cy.get('[data-testid="registration-key-input"]').type('exampleKey')
    cy.get('[data-testid="email-input"]').type('test@example.com')
    cy.get('[data-testid="password-input"]').type('password123')
    cy.get('[data-testid="confirm-password-input"]').type('password123')
    cy.get('[data-testid="address-input"]').type('123 Main St')
    cy.get('[data-testid="city-input"]').type('Anytown')
    cy.get('[data-testid="province-select"]').select('Choose...')
    cy.get('[data-testid="postal-code-input"]').type('12345')

    // cy.get('[data-testid="submit-button"]').click()
  })

})
