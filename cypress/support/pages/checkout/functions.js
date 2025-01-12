import { CHECKOUT_LOCATORS } from './locators'

export const fillCheckoutForm = (firstName, lastName, postalCode) => {
    cy.getByDataTestId(CHECKOUT_LOCATORS.firstName).type(firstName)
    cy.getByDataTestId(CHECKOUT_LOCATORS.lastName).type(lastName)
    cy.getByDataTestId(CHECKOUT_LOCATORS.postalCode).type(postalCode)
}