describe('As a Company employee Navigate to Property Page from Profile and go back', () => {
  beforeEach(() => {
    cy.login('joud.babik@gmail.com', '123qweasd');
  })
  it('Navigate to Property Page from Profile', () => {
    cy.goToProperty3();
    cy.get('[data-testid="dashboard-return"]').click()
  })
})

describe('Navigate to Create Unit/Parking/Locker Form from Profile and go back', () => {
  beforeEach(() => {
    cy.login('joud.babik@gmail.com', '123qweasd');
  })

  it('Navigate to Create Unit from profile', () => {
    cy.goToProperty3();
    cy.get('[data-testid="create-condo-unit-button"]').click()
    cy.contains('Cancel').click();
    cy.url().should('include', '/property-page')
  })
})

describe('Navigate to Create Property Form from Profile and go back', () => {
  beforeEach(() => {
    cy.login('joud.babik@gmail.com', '123qweasd');
  })
  it('Navigate to Create Property from Profile', () => {
    cy.goToProperty3();
    cy.contains('Dashboard').click();
    cy.url().should('include', '/dashboard');
  })
})

describe('Sign in as company and Navigate to Create property and create condo unit', () => {
  beforeEach(() => {
    cy.login('joud.babik@gmail.com', '123qweasd');
  })
  it('Navigate to Create Property from Profile', () => {
    cy.contains('Dashboard').click();
    cy.contains('Profile').click();
    cy.contains('Dashboard').click();
    cy.get('[data-testid="create-property-button"]').click();
    cy.url().should('include', '/create-property');
    cy.get('[data-testid="property-name-input"]').type('test')
    cy.get('[data-testid="property-address-input"]').type('test')
    cy.get('[data-testid="property-city-input"]').type('test')
    cy.get('[data-testid="province-select-test"]').select("QC")
    cy.get('[data-testid="property-city-input"]').type('test')
    cy.get('[data-testid="property-postal-code-input"]').type('H3H3H3')
    cy.get('[data-testid="submit-button"]').click()
  })
  it('Navigate to create condo unit from property page and creates a condo unit', () => {
    cy.goToProperty3();
    cy.get('[data-testid="create-condo-unit-button"]').click()
    cy.get('[data-testid="unit-location-input"]').type('1234')
    cy.get('[data-testid="unit-size-input"]').type('1000')
    cy.get('[data-testid="unit_purchase_price-input"]').type('1000')
    cy.get('[data-testid="unit_rental_price-input"]').type('1000')
    cy.get('[data-testid="unit-info-input"]').type('random info')
    cy.get('[data-testid="submit-button"]').click()
    cy.url().should('include', '/property-page')
  })
})

describe('Sign in as company and Navigate to create a parking unit', () => {
  before(() => {
    cy.login('joud.babik@gmail.com', '123qweasd');
  })
  it('Navigate to create parking unit from property page', () => {
    cy.goToProperty3();
    cy.get('[data-testid="create-parking-unit-button"]').click()
    cy.get('[data-testid="parking-location-input"]').type('1234')
    cy.get('[data-testid="parking-size-input"]').type('1000')
    cy.get('[data-testid="parking-purchase_price-input"]').type('1000')
    cy.get('[data-testid="parking-rent_price-input"]').type('1000')
    cy.get('[data-testid="parking-extra_information-input"]').type('random info')
    cy.get('[data-testid="submit-button"]').click()
    cy.url().should('include', '/property-page')
  })
})

describe('Sign in as company and Navigate to create a storage unit', () => {
  before(() => {
    cy.login('joud.babik@gmail.com', '123qweasd');
  })
  it('Navigate to create parking unit from property page', () => {
    cy.goToProperty3();
    cy.get('[data-testid="create-storage-unit-button"]').click()
    cy.get('[data-testid="locker-location-input"]').type('1234')
    cy.get('[data-testid="locker-size-input"]').type('1000')
    cy.get('[data-testid="locker-purchase_price-input"]').type('1000')
    cy.get('[data-testid="locker-rent_price-input"]').type('1000')
    cy.get('[data-testid="locker-extra_information-input"]').type('random info')
    cy.get('[data-testid="submit-button"]').click()
    cy.url().should('include', '/property-page')
  })
})

