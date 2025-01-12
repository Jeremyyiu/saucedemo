// PATHS
export const PATHS = {
  LOGIN: "/",
  INVENTORY: "/inventory.html",
  CART: "/cart.html",
  CHECKOUT: {
    STEP_ONE: "/checkout-step-one.html",
    STEP_TWO: "/checkout-step-two.html",
    COMPLETE: "/checkout-complete.html",
  },
};

// URL PROPERTIES
export const URL_PROPERTIES = {
  PATHNAME: "pathname",
};

// VALIDATIONS
export const BE_VISIBLE = "be.visible";
export const NOT_BE_VISIBLE = "not.be.visible";
export const BE_DISABLED = "be.disabled";
export const NOT_BE_DISABLED = "not.be.disabled";
export const EXIST = "exist";
export const NOT_EXIST = "not.exist";
export const HAVE_TEXT = "have.text";
export const NOT_HAVE_TEXT = "not.have.text";
export const CONTAIN = "contain";
export const NOT_CONTAIN = "not.contain";
export const HAVE_ATTR = "have.attr";
export const EQUALS_TO = "eq";
export const NOT_BE_CHECKED = "not.be.checked";
export const BE_CHECKED = "be.checked";

// GET TYPES
export const DATA_TEST = "data-test";
export const ARIA_LABEL = "aria-label";
export const CLASS_NAME = "class";
export const CONTENT = "content";

// PRODUCT INFO
export const PRODUCTS = {
  BACKPACK: {
    NAME: "Sauce Labs Backpack",
    DESCRIPTION:
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
    PRICE: "$29.99",
  },
  // Future products can be added here
};

export const TAX_RATE = 0.08; // 8% tax

export const CUSTOMER_INFO = {
  STANDARD: {
    firstName: "Jeremy",
    lastName: "Yiu",
    postalCode: "2000",
  },
};
