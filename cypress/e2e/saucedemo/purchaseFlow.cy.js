import { LOGIN_CREDENTIALS } from "../../support/pages/login/constants";
import { login } from "../../support/pages/login/functions";
import {
  addBackpackToCart,
  verifyCartBadge,
} from "../../support/pages/inventory/functions";
import {
  verifyOnCartPage,
  verifyProductDetails,
  verifyQuantity,
} from "../../support/pages/cart/functions";
import { fillCheckoutForm } from "../../support/pages/checkout/functions";
import {
  verifyOrderDetails,
  verifyPriceCalculations,
  completeOrder,
  verifyOrderConfirmation,
  returnToProducts,
} from "../../support/pages/orderReview/functions";
import { CUSTOMER_INFO } from "../../support/util/constants";
import { PATHS, EQUALS_TO, URL_PROPERTIES } from "../../support/util/constants";
import { SHOPPING_CART_LINK } from "../../support/util/sharedLocators";
import { CART_LOCATORS } from "../../support/pages/cart/locators";
import { CHECKOUT_LOCATORS } from "../../support/pages/checkout/locators";

describe("Product Purchase Flow", () => {
  beforeEach(() => {
    // Intercept and block all network requests to events.backtrace.io by responding with an empty object
    cy.intercept("**/events.backtrace.io/**", {}).as("blockBacktrace");

    cy.visit(PATHS.LOGIN, { failOnStatusCode: false });
    login(
      LOGIN_CREDENTIALS.STANDARD_USER.username,
      LOGIN_CREDENTIALS.STANDARD_USER.password
    );
    cy.location(URL_PROPERTIES.PATHNAME).should(EQUALS_TO, PATHS.INVENTORY);
  });

  // Scenario 1: Product Selection
  it("should successfully add product to cart", () => {
    addBackpackToCart();
    verifyCartBadge(1);
  });

  // Scenario 2: Cart Review
  it("should verify cart details before checkout", () => {
    addBackpackToCart();
    cy.getByDataTestId(SHOPPING_CART_LINK).click();
    verifyOnCartPage();
    verifyProductDetails();
    verifyQuantity();
  });

  // Scenario 3: Checkout Information
  it("should complete checkout information step", () => {
    addBackpackToCart();
    cy.getByDataTestId(SHOPPING_CART_LINK).click();
    cy.getByDataTestId(CART_LOCATORS.checkoutButton).click();
    cy.location(URL_PROPERTIES.PATHNAME).should(
      EQUALS_TO,
      PATHS.CHECKOUT.STEP_ONE
    );

    fillCheckoutForm(
      CUSTOMER_INFO.STANDARD.firstName,
      CUSTOMER_INFO.STANDARD.lastName,
      CUSTOMER_INFO.STANDARD.postalCode
    );
    cy.getByDataTestId(CHECKOUT_LOCATORS.continue).click();
    cy.location(URL_PROPERTIES.PATHNAME).should(
      EQUALS_TO,
      PATHS.CHECKOUT.STEP_TWO
    );
  });

  // Scenario 4: Order Review and Completion
  it("should complete purchase successfully", () => {
    // Setup steps
    addBackpackToCart();
    cy.getByDataTestId(SHOPPING_CART_LINK).click();
    cy.getByDataTestId(CART_LOCATORS.checkoutButton).click();

    fillCheckoutForm(
      CUSTOMER_INFO.STANDARD.firstName,
      CUSTOMER_INFO.STANDARD.lastName,
      CUSTOMER_INFO.STANDARD.postalCode
    );
    cy.getByDataTestId(CHECKOUT_LOCATORS.continue).click();

    // Verify order summary and complete purchase
    verifyOrderDetails();
    verifyPriceCalculations();
    completeOrder();
    verifyOrderConfirmation();
    returnToProducts();
    cy.location(URL_PROPERTIES.PATHNAME).should(EQUALS_TO, PATHS.INVENTORY);
  });
});
