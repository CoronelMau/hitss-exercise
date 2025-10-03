# PlayStation 5 Price Scraper (MercadoLibre)

This project uses [Playwright](https://playwright.dev/) with **JavaScript** to search for the **top 5 most expensive PlayStation 5 listings** on [MercadoLibre Mexico](https://mercadolibre.com/), applying specific filters such as **"New" condition** and **"Local Shipping"**.

The script automates a browser to perform the search, apply filters, and extract product titles and prices. Finally, it displays the results in a table format in the console.

---

## 🚀 Features

- Opens **MercadoLibre Mexico** automatically.
- Searches for **PlayStation 5**.
- Applies filters:
  - ✅ New products only.
  - ✅ Local shipping.
  - ✅ Sort by **highest price**.
- Extracts the **title** and **price** of the **top 5 results**.
- Prints results in a **formatted console table**.

---

## 🛠️ Technologies

- **Playwright**
- **JavaScript**

---

## 📦 Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/CoronelMau/hitss-exercise.git
   cd hitss-exercise
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Ensure Playwright is installed correctly:
   ```bash
   npx playwright install
   ```

---

## ▶️ Usage

Run the script with:

```bash
npm run test
```

The browser will open, execute the automated steps, and log the **top 5 most expensive PlayStation 5 listings** in the console as a table.

---

## 📋 Example Output

```text
┌─────────┬─────────────────────────────────────────────┬────────────┐
│ (index) │                    title                    │   price    │
├─────────┼─────────────────────────────────────────────┼────────────┤
│    0    │ 'PlayStation 5 Console - Standard Edition'   │ '$ 18,999' │
│    1    │ 'PlayStation 5 + DualSense Controller'       │ '$ 17,500' │
│    2    │ 'Sony PS5 Bundle with Games'                 │ '$ 17,200' │
│    3    │ 'PlayStation 5 Digital Edition'              │ '$ 16,800' │
│    4    │ 'PlayStation 5 + Horizon Forbidden West'     │ '$ 16,500' │
└─────────┴─────────────────────────────────────────────┴────────────┘
```

_(Example only — actual results depend on MercadoLibre’s current listings.)_

---

## ⚠️ Notes

- The script runs in **non-headless mode** with a small delay (`slowMo: 1000`) for better visualization.
- You can change this behavior in the code by modifying:
  ```js
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  ```
- Works for **MercadoLibre Mexico** (`mercadolibre.com`).

---

## 📜 License

It scrapes public product data from MercadoLibre for demonstration.
