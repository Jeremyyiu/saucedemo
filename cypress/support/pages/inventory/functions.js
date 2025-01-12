import { HAVE_TEXT } from "../../util/constants";
import { CART_LOCATORS } from "../cart/locators";
import { INVENTORY_LOCATORS } from "./locators";

export const addBackpackToCart = () => {
  cy.getByDataTestId(INVENTORY_LOCATORS.addToCartBackpack).click();
};

export const goToCart = () => {
  cy.getByDataTestId(CART_LOCATORS.cartLink).click();
};

export const verifyCartBadge = (count) => {
  cy.getByDataTestId(CART_LOCATORS.cartBadge).should(
    HAVE_TEXT,
    count.toString()
  );
};
