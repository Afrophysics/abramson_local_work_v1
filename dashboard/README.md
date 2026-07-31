# Matter Metrics Dashboard

Simple client-side dashboard for retainer and settlement metrics.

## Stack

- **JavaScript** — page skeleton (`src/skeleton.js`)
- **TypeScript** — metric cards and delete buttons
- **CSS** — layout and motion (`styles/dashboard.css`)

## Features

Three rows of three metric cards (each with a top-right delete button):

1. WC Retainers Signed · Settled out of Court · Settlement Accepted
2. Move to Litigation Decision · Total Amount Recieved From Retainers · Case Completed by Intake
3. Calls Made Today · Reasons clients are unable to sign · Approved Mediation Brief by Attorney

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
