import { CART_LOCATORS } from "./locators";
import {
  PRODUCTS,
  PATHS,
  HAVE_TEXT,
  EQUALS_TO,
  URL_PROPERTIES,
} from "../../util/constants";

export const verifyProductDetails = () => {
  cy.getByDataTestId(CART_LOCATORS.itemName).should(
    HAVE_TEXT,
    PRODUCTS.BACKPACK.NAME
  );
  cy.getByDataTestId(CART_LOCATORS.itemPrice).should(
    HAVE_TEXT,
    PRODUCTS.BACKPACK.PRICE
  );
};

export const verifyOnCartPage = () => {
  cy.location(URL_PROPERTIES.PATHNAME).should(EQUALS_TO, PATHS.CART);
};

export const proceedToCheckout = () => {
  cy.getByDataTestId(CART_LOCATORS.checkoutButton).click();
};

export const verifyQuantity = (quantity = "1") => {
  cy.getByDataTestId(CART_LOCATORS.itemQuantity).should(HAVE_TEXT, quantity);
};
