Sauce Demo – Playwright Automation (JavaScript)

This project contains an automated test script using Playwright + JavaScript for the public demo website https://www.saucedemo.com/
.
Test Scenario Automated:

A user:
1. Logs in with valid credentials
2. Adds one product to the cart
3. Verifies the product name in the cart
4. Logs out successfully


📁 Project Structure
sauce-playwright/
│
├── tests/
│   └── sauceTest.spec.js         # Main test automation script
│
├── package.json                   # Project dependencies & scripts
├── package-lock.json
├── playwright.config.js           # Playwright configuration (auto-generated)
└── README.md                      # Project documentation

🚀 How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/TaniaRahmanKhan99/sauce-playwright-automation.git
cd sauce-playwright-automation
2️⃣ Install Dependencies
npm install
3️⃣ Install Playwright Browsers
npx playwright install
4️⃣ Run the Test
npx playwright test

You should see output like:
Running 1 test using 1 worker
✓ Sauce Demo - Add product to cart and verify (3s)

🧪 Test Covered
The script validates:
1. Successful login
2. Adding an item to cart
3. Matching product names in cart and product page
4. Successful user logout

📌 Tools & Technologies
* Playwright
* JavaScript (Node.js)
* Visual Studio Code
* Git/GitHub
