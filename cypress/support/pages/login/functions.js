import { LOGIN_LOCATORS } from "./locators";

export const login = (username, password) => {
  cy.getByDataTestId(LOGIN_LOCATORS.username).type(username);
  cy.getByDataTestId(LOGIN_LOCATORS.password).type(password);
  cy.getByDataTestId(LOGIN_LOCATORS.loginButton).click();
};
