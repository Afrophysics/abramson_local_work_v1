# Matter Metrics Dashboard

Simple client-side dashboard for retainer and settlement metrics.

## Stack

- **JavaScript** — page skeleton (`src/skeleton.js`)
- **TypeScript** — metric cards, delete buttons, accordion, and pivot table
- **CSS** — layout and motion (`styles/dashboard.css`)

## Features

- Metric cards:
  - **WC Retainers Signed** (integer)
  - **Settled out of Court** (USD currency)
- Pivot table **Matter Metrics Measured** with columns:
  - Action title
  - Case State
  - Retainer signed at
  - litigator
- Accordion collapse/expand on the pivot table
- Delete buttons on metric cards, pivot table, and individual rows

## Setup

```bash
cd dashboard
npm install
npm run build
```

Open `index.html` in a browser, or serve the folder:

```bash
npm run serve
```
