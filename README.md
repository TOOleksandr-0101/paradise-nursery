# Paradise Nursery

Paradise Nursery is a React app for an online plant shop.
Users can view plants, add them to the cart, change quantities, and see the
total price.

## Live Demo

- GitHub Pages: [https://tooleksandr-0101.github.io/paradise-nursery/](https://tooleksandr-0101.github.io/paradise-nursery/)

## Features

- Landing page with welcome hero and about section
- Product catalog categorized with interactive plant thumbnails
- Shopping cart with Redux Toolkit state management
- Real-time cart item count badge and dynamic total price calculation
- Quantity increase, decrease, and item deletion

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

### Option 1: Automatic Deployment (GitHub Actions)
1. In your GitHub repository, navigate to **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
3. Push changes to the `main` branch. The action will automatically build and deploy the site.

### Option 2: Manual Deployment (`gh-pages`)
```bash
npm run deploy
```

