// import 'cypress-file-upload';
// const { Link } = require("react-router-dom")

// describe('Navigate to Property Page from Profile and go back', () => {
//   beforeEach(() => {
//     cy.visit('/login');
//     cy.get('[data-testid="email-input"]').type('test@example.com');
//     cy.get('[data-testid="password-input"]').type('password123');
//     cy.get('[data-testid="submit-button"]').click();
//   })
//   it('Navigate to Property Page from Profile', () => {
//     cy.get('[data-testid="dropdown"]').click();
//     cy.contains('Dashboard').click();
//     cy.url().should('include', '/dashboard');
//     cy.contains('Name Placeholder 1').click();
//     cy.url().should('include', '/property-page');
//     cy.get('[data-testid="dashboard-return"]').click()
//   })
// })

// describe('Navigate to Create Unit/Parking/Locker Form from Profile and go back', () => {
//   beforeEach(() => {
//     cy.visit('/login');
//     cy.get('[data-testid="email-input"]').type('test@example.com');
//     cy.get('[data-testid="password-input"]').type('password123');
//     cy.get('[data-testid="submit-button"]').click();
//   })

//   it('Navigate to Create Unit from profile', () => {
//     cy.get('[data-testid="dropdown"]').click();
//     cy.contains('Dashboard').click();
//     cy.url().should('include', '/dashboard');
//     cy.contains('Name Placeholder 2').click();
//     cy.url().should('include', '/property-page');
//     cy.get('[data-testid="create-unit-button"]').click()
//     cy.contains('Cancel').click();
//     cy.url().should('include', '/property-page')
//   })

  // only two properties
  // it('Navigate to Create Parking from profile', () => {
  //   cy.get('[data-testid="dropdown"]').click();
  //   cy.contains('Dashboard').click();
  //   cy.url().should('include', '/dashboard');
  //   cy.contains('Estate Alpha').click();
  //   cy.url().should('include', '/property-page');
  //   cy.get('[data-testid="create-parking-button"]').click()
  //   cy.contains('Cancel').click();
  //   cy.url().should('include', '/property-page')
  // })

  // it('Navigate to Create Locker from profile', () => {
  //   cy.get('[data-testid="dropdown"]').click();
  //   cy.contains('Dashboard').click();
  //   cy.url().should('include', '/dashboard');
  //   cy.contains('Estate Alpha').click();
  //   cy.url().should('include', '/property-page');
  //   cy.get('[data-testid="create-locker-button"]').click()
  //   cy.contains('Cancel').click();
  //   cy.url().should('include', '/property-page')
  // })

// })

// describe('Navigate to Create Property Form from Profile and go back', () => {
//   beforeEach(() => {
//     cy.visit('/login');
//     cy.get('[data-testid="email-input"]').type('test@example.com');
//     cy.get('[data-testid="password-input"]').type('password123');
//     cy.get('[data-testid="submit-button"]').click();
//   })
//   it('Navigate to Create Property from Profile', () => {
//     cy.get('[data-testid="dropdown"]').click();
//     cy.contains('Dashboard').click();
//     cy.url().should('include', '/dashboard');
//     cy.contains('Add Property').click();
//     cy.url().should('include', '/create-property');
//     cy.contains('Cancel').click();
//     cy.url().should('include', '/dashboard');
//   })
// })

// describe('Sign in as company and Navigate to Create property to create a property', () => {
//   before(() => {
//     cy.visit('/login');
//     cy.get('[data-testid="email-input"]').type('joud.babik@gmail.com');
//     cy.get('[data-testid="password-input"]').type('123qweasd');
//     cy.get('[data-testid="submit-button"]').click();
//   })
//   it('Navigate to Create Property from Profile', () => {
//     cy.get('[data-testid="dropdown"]').click();
//     cy.contains('Dashboard').click();
//     cy.url().should('include', '/dashboard');
//     cy.contains('Add Property').click();
//     cy.url().should('include', '/create-property');
//     cy.get('[data-testid="property-name-input"]').type('test')
//     cy.get('[data-testid="property-address-input"]').type('test')
//     cy.get('[data-testid="property-city-input"]').type('test')
//     cy.get('[data-testid="province-select-test"]').select("QC")
//     cy.get('[data-testid="property-city-input"]').type('test')
//     cy.get('[data-testid="property-postal-code-input"]').type('H3H3H3')
//     cy.get('[data-testid="submit-button"]').click()
//   })
//   it('Fill out the create unit form and submit successfully', () => {
//     cy.visit('/create-unit')
//     cy.get('[data-testid="unit-location-input"]').type('1234')
//     cy.get('[data-testid="unit-size-input"]').type('1000')
//     cy.get('[data-testid="unit-owner-input"]').type('John Doe')
//     cy.get('[data-testid="unit-info-input"]').type('random info')
//     cy.get('[data-testid="submit-button"]').click()
//   })
// })

// describe('Enter Create Parking Form', () => {
//   beforeEach(() => {
//     cy.visit('/login');
//     cy.get('[data-testid="email-input"]').type('test@example.com');
//     cy.get('[data-testid="password-input"]').type('password123');
//     cy.get('[data-testid="submit-button"]').click();
//   })
//   it('Fill out the create parking form and submit successfully', () => {
//     cy.visit('/create-parking')
//     cy.get('[data-testid="parking-location-input"]').type('123')
//     cy.get('[data-testid="parking-owner-input"]').type('100')
//     cy.get('[data-testid="parking-info-input"]').type('John Doe')
//     cy.get('[data-testid="parking-fee-input"]').type('999')
//     cy.get('[data-testid="submit-button"]').click()
//   })
// })

// describe('Enter Create Locker Form', () => {
//   beforeEach(() => {
//     cy.visit('/login');
//     cy.get('[data-testid="email-input"]').type('test@example.com');
//     cy.get('[data-testid="password-input"]').type('password123');
//     cy.get('[data-testid="submit-button"]').click();
//   })
//   it('should fill out the create locker form and submit successfully', () => {
//     cy.visit('/create-locker')
//     cy.get('[data-testid="locker-id-input"]').type('654321')
//     cy.get('[data-testid="locker-owner-input"]').type('999')
//     cy.get('[data-testid="locker-info-input"]').type('Doe John')
//     cy.get('[data-testid="locker-fee-input"]').type('100')
//     cy.get('[data-testid="submit-button"]').click()
//   })
// })

// describe('Enter Create Property Form', () => {
//   beforeEach(() => {
//     cy.visit('/login');
//     cy.get('[data-testid="email-input"]').type('test@example.com');
//     cy.get('[data-testid="password-input"]').type('password123');
//     cy.get('[data-testid="submit-button"]').click();
//   })
//   it('should fill out the create locker form and submit successfully', () => {
//     cy.visit('/create-property')
//     cy.get('[data-testid="property-name-input"]').type('Hall Building');
//     cy.get('[data-testid="property-company-input"]').type('Real Estate Company');
//     cy.get('[data-testid="property-address-input"]').type('123 Guy Street');
//     cy.get('[data-testid="property-city-input"]').type('Montreal');
//     cy.get('[data-testid="province-select"]').select('QC');
//     cy.get('[data-testid="property-postal-code-input"]').type('1A1 2B2');
//     cy.fixture('property-image.png').then(fileContent => {
//       cy.get('[data-testid="property-image-file"]').attachFile({
//         fileContent: fileContent,
//         fileName: 'property-image.png',
//         mimeType: 'image/png'
//       })
//     })
//     cy.get('[data-testid="submit-button"]').click()
//   })
// })
