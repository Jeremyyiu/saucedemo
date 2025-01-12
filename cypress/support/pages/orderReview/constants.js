import { PRODUCTS } from "../../util/constants";
import { pricing } from "../../util/sharedFunctions";

export const ORDER_REVIEW_TEXT = {
  PAYMENT_INFO: {
    LABEL: "Payment Information:",
    VALUE: "SauceCard #31337",
  },
  SHIPPING_INFO: {
    LABEL: "Shipping Information:",
    VALUE: "Free Pony Express Delivery!",
  },
  TOTAL_INFO: {
    LABEL: "Price Total",
    get SUBTOTAL() {
      return pricing.getSubtotal(PRODUCTS.BACKPACK.PRICE);
    },
    get TAX() {
      return pricing.getTax(PRODUCTS.BACKPACK.PRICE);
    },
    get TOTAL() {
      return pricing.getTotal(PRODUCTS.BACKPACK.PRICE);
    },
  },
  CHECKOUT: {
    TITLE: "Checkout: Complete!",
  },
  COMPLETION: {
    HEADER: "Thank you for your order!",
    MESSAGE:
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!",
  },
};
