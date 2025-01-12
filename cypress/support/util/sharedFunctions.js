import { TAX_RATE } from "./constants";

export const pricing = {
  formatPrice: (price) => `$${price.toFixed(2)}`,
  getSubtotal: (price) => `Item total: ${price}`,
  getTax: (price) =>
    `Tax: $${(parseFloat(price.replace("$", "")) * TAX_RATE).toFixed(2)}`,
  getTotal: (price) => {
    const basePrice = parseFloat(price.replace("$", ""));
    const tax = basePrice * TAX_RATE;
    return `Total: $${(basePrice + tax).toFixed(2)}`;
  },
};
