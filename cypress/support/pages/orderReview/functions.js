import { ORDER_COMPLETE_LOCATORS, ORDER_REVIEW_LOCATORS } from "./locators";
import { ORDER_REVIEW_TEXT } from "./constants";
import {
  BE_VISIBLE,
  NOT_BE_DISABLED,
  HAVE_TEXT,
  EXIST,
  PATHS,
  EQUALS_TO,
  PRODUCTS,
  URL_PROPERTIES,
} from "../../util/constants";

export const verifyOrderDetails = () => {
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.itemQuantity).should(HAVE_TEXT, "1");
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.itemName).should(
    HAVE_TEXT,
    PRODUCTS.BACKPACK.NAME
  );
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.itemDesc).should(
    HAVE_TEXT,
    PRODUCTS.BACKPACK.DESCRIPTION
  );
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.itemPrice).should(
    HAVE_TEXT,
    PRODUCTS.BACKPACK.PRICE
  );
};

export const verifyPaymentInfo = () => {
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.paymentInfoLabel).should(
    HAVE_TEXT,
    ORDER_REVIEW_TEXT.PAYMENT_INFO.LABEL
  );
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.paymentInfoValue).should(
    HAVE_TEXT,
    ORDER_REVIEW_TEXT.PAYMENT_INFO.VALUE
  );
};

export const verifyShippingInfo = () => {
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.shippingInfoLabel).should(
    HAVE_TEXT,
    ORDER_REVIEW_TEXT.SHIPPING_INFO.LABEL
  );
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.shippingInfoValue).should(
    HAVE_TEXT,
    ORDER_REVIEW_TEXT.SHIPPING_INFO.VALUE
  );
};

export const verifyPriceCalculations = () => {
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.totalInfoLabel).should(
    HAVE_TEXT,
    ORDER_REVIEW_TEXT.TOTAL_INFO.LABEL
  );
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.subtotalLabel).should(
    HAVE_TEXT,
    ORDER_REVIEW_TEXT.TOTAL_INFO.SUBTOTAL
  );
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.taxLabel).should(
    HAVE_TEXT,
    ORDER_REVIEW_TEXT.TOTAL_INFO.TAX
  );
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.totalLabel).should(
    HAVE_TEXT,
    ORDER_REVIEW_TEXT.TOTAL_INFO.TOTAL
  );
};

export const verifyOnOrderReviewPage = () => {
  cy.location(URL_PROPERTIES.PATHNAME).should(
    EQUALS_TO,
    PATHS.CHECKOUT.STEP_TWO
  );
};

export const completeOrder = () => {
  cy.getByDataTestId(ORDER_REVIEW_LOCATORS.finishButton).click();
};

export const verifyOrderConfirmation = () => {
  cy.location(URL_PROPERTIES.PATHNAME).should(
    EQUALS_TO,
    PATHS.CHECKOUT.COMPLETE
  );
  cy.getByDataTestId(ORDER_COMPLETE_LOCATORS.completeTitle)
    .should(EXIST)
    .and(HAVE_TEXT, ORDER_REVIEW_TEXT.CHECKOUT.TITLE);
  cy.getByDataTestId(ORDER_COMPLETE_LOCATORS.completedOrderImage)
    .should(EXIST)
    .and(BE_VISIBLE);
  cy.getByDataTestId(ORDER_COMPLETE_LOCATORS.completeHeader)
    .should(EXIST)
    .and(HAVE_TEXT, ORDER_REVIEW_TEXT.COMPLETION.HEADER);
  cy.getByDataTestId(ORDER_COMPLETE_LOCATORS.completeText)
    .should(EXIST)
    .and(HAVE_TEXT, ORDER_REVIEW_TEXT.COMPLETION.MESSAGE);
};

export const returnToProducts = () => {
  cy.getByDataTestId(ORDER_COMPLETE_LOCATORS.backButton)
    .should(BE_VISIBLE)
    .and(NOT_BE_DISABLED)
    .click();
  cy.location(URL_PROPERTIES.PATHNAME).should(EQUALS_TO, PATHS.INVENTORY);
};
