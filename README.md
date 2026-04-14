# cypressai

End-to-end Cypress tests for [saucedemo.com](https://www.saucedemo.com).

## Setup

```bash
npm install
```

## Running Tests

Run all tests headlessly:

```bash
npm test
```

Open the Cypress Test Runner (interactive mode):

```bash
npm run test:open
```

## Test Suites

| File | Description |
|------|-------------|
| `cypress/e2e/login.cy.js` | Login page validation and authentication flows |
| `cypress/e2e/products.cy.js` | Product listing, sorting, and detail page navigation |
| `cypress/e2e/cart.cy.js` | Add/remove items and cart page navigation |
| `cypress/e2e/checkout.cy.js` | Full checkout flow and form validation |

## Test Credentials

The tests use the following saucedemo users (defined in `cypress/fixtures/users.json`):

- **standard_user** / `secret_sauce` — standard account used for most tests
- **locked_out_user** / `secret_sauce` — used to verify the locked-out error message
- **performance_glitch_user** / `secret_sauce` — slow-performing account