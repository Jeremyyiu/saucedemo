Cypress.Commands.add(
  "getByDataTestId",
  { prevSubject: "optional" },
  (subject, testId, extendedTimeOut) => {
    const selector = `[data-test="${testId}"]`;
    if (subject) {
      return cy.wrap(subject).find(selector);
    }
    if (extendedTimeOut) {
      return cy.get(selector, { timeout: extendedTimeOut });
    }
    return cy.get(selector);
  }
);
