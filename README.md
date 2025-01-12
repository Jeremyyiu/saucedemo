# SauceDemo Product Purchase - E2E Tests

## Overview
Automated E2E test suite for SauceDemo's product purchase flow, focused on successfully purchasing a "Sauce Labs Backpack" using Cypress.

## Test Scenarios
1. **Product Selection**
   - Verify product details and add to cart
   - Validate cart badge update

2. **Cart Review**
   - Verify product details and quantity
   - Proceed to checkout

3. **Checkout Information**
   - Complete shipping details form
   - Verify form submission

4. **Order Review & Completion**
   - Verify order summary and pricing
   - Complete purchase and confirm order

## Setup & Run
```bash
# Install dependencies
npm install

# Run tests (Interactive)
npx cypress open

# Run tests (Headless)
npx cypress run
```

## Implementation Approach
The tests are structured with the following key practices:
- Page Object Model: Each page (login, inventory, cart, checkout) has its own set of functions to interact with the UI, ensuring maintainability.
- Shared Constants & Utilities: Common values and utilities (e.g., credentials, locators) are centralized to avoid duplication.
- Custom Commands: Reusable Cypress commands for common actions (e.g., login, add product to cart).
- Clear Verification Points: Each test scenario includes assertions to validate that the expected behavior occurs at each step of the flow.

## Verification Points
### Scenario 1: Product Selection
- Verify product details: Ensure the correct product is displayed (name, price, image).
- Validate cart badge: After adding the product, check if the cart badge updates with the correct item count.

### Scenario 2: Cart Review
- Verify cart details: Ensure the correct product and quantity appear in the cart.
- Proceed to checkout: Verify the user can navigate successfully from the cart page to the checkout page.
### Scenario 3: Checkout Information
- Complete shipping form: Ensure the user can fill in and submit their shipping details (first name, last name, postal code).
- Form submission: Confirm the shipping form submission leads to the next checkout step.
### Scenario 4: Order Review and Completion
- Verify order summary: Check if the order summary correctly displays product details and pricing.
- Complete purchase: Ensure the user can complete the purchase and see an order confirmation.
- Return to products: After purchase, confirm that the user is redirected to the inventory page.

## Assumptions
- Users use an Electron browser with a screen size of 2560 x 1440
- The standard user credentials (standard_user) are valid for login.
- Shipping details particularly the post code are valid and in Australian format
- The product "Sauce Labs Backpack" is always available
- Product inventory and prices remain constant. 
- The website (https://www.saucedemo.com) is stable and accessible
- Analytics calls from events.backtrace.io are ignored to prevent interference with the test flow. 