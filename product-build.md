# 📦 English Academia Digital Download Build Plan

This plan outlines how to deliver paid downloadable content through GitHub Pages using PayPal and Google Drive, with a dynamic thank-you page and secure file handling.

---

## 🧠 Goal

Allow users to:

- View available products
- Purchase via PayPal
- Automatically receive a download link **after payment**
- Prevent exposing files to non-paying users

---

## ✅ Tech Overview

- **Static site**: GitHub Pages (`/English-Academia/`)
- **Payments**: PayPal "Buy Now" buttons with redirect
- **Downloads**: Google Drive (direct download links)
- **Post-payment logic**: A single `thank-you.html` page that shows the correct link using JavaScript

---

## 📁 Directory Structure

/English-Academia/
├── index.html
├── about.html
├── blog.html
├── products.html <-- [NEW] lists purchasable files
├── thank-you.html <-- [NEW] shows download after payment
├── scripts.js
├── styles.css
├── assets/
├── robots.txt
└── sitemap.xml

---

## 🪜 Build Steps

### 1. Create `products.html`

- Add product cards or sections with:
  - Product title & description
  - PayPal "Buy Now" button
  - Each button redirects to:
    ```
    https://englishacademia.github.io/English-Academia/thank-you.html?product=your-product-id
    ```

> Example:  
> `?product=grammar-kit`  
> `?product=business-pack`

---

### 2. Create Google Drive Direct Download Links

For each product:

1. Upload file to Google Drive
2. Click **Share > Anyone with the link can view**
3. Get the share link and extract the FILE ID
4. Build direct link:

Save each link with its matching product ID.

---

### 3. Build `thank-you.html`

- Use JavaScript to read the query string `?product=...`
- Match it to a dictionary of Google Drive links
- Display a download button if the product is recognized
- Show an error message if not

> Optional: delay link by 3–5 seconds for polish  
> Optional: rotate Google Drive links monthly for security

---

### 4. Update PayPal Buttons

Each button should:

- Match a product ID from your JS logic
- Redirect after payment to:

Set this under **"Advanced Settings" > "Redirect URL after purchase"** in the PayPal button creator.

---

### 5. Test Locally

Use a local server to test redirect URLs and script behavior:

```bash
# Option A: Python
python3 -m http.server 8080
# Visit: http://localhost:8080/English-Academia/products.html

# Option B: Node.js live server
live-server --mount=/English-Academia:. --open=/English-Academia/index.html
```
