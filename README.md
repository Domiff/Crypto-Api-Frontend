# Crypto Price Tracker — Frontend

A **Vue 3** single-page app for viewing cryptocurrency price data from a companion backend. **Vue Router** handles navigation between the home screen and per-asset detail pages; **Axios** calls REST endpoints for full history, the latest quote, and date-filtered series.

## Features

- **Home**: entry point with links to Bitcoin and Ethereum views.
- **Per-asset pages** (Bitcoin / Ethereum): list of stored prices, latest price, and a date-range filter (calendar + fetch) for historical slices.
- **API layer**: small modules under `src/services/api/` with shared base URL and paths.

## Tech stack

| Layer       | Technologies                         |
| ----------- | ------------------------------------ |
| UI          | Vue 3, Vue Router 5                  |
| HTTP        | Axios                                |
| Date picker | @vuepic/vue-datepicker               |
| Build       | Vite 7                               |
| Quality     | ESLint, Prettier, Husky, lint-staged |

## Application structure

### Repository tree

```text
.
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── router/
│   │   └── index.js                 # Routes: /, /bitcoin, /ethereum
│   ├── components/
│   │   ├── HomePage.vue
│   │   ├── Bitcoin.vue
│   │   ├── Ethereum.vue
│   │   ├── calendar/
│   │   │   └── Calendar.vue
│   │   └── icons/
│   │       ├── IconBitcoin.vue
│   │       └── IconEthereum.vue
│   └── services/
│       └── api/
│           ├── urls.js              # Base URL and path segments
│           ├── bitcoin.js
│           ├── ethereum.js
│           └── utils.js
├── eslint.config.js
├── vite.config.js
└── package.json
```

## Design decisions

1. **SPA with Vue Router** — switch views without full page reloads; URLs map directly to Bitcoin and Ethereum screens.
2. **Axios** — shared HTTP client for backend calls; paths and base URL live in one place (`urls.js`).
3. **Vite** — fast dev server and production builds aligned with the Vue 3 toolchain.
4. **ESLint + Prettier** — consistent style; hooks can enforce checks on commit.

## Requirements

- **Node.js** `^20.19.0` or `>=22.12.0` (see `package.json` → `engines`)
- A running **backend** that exposes the API expected by `src/services/api/urls.js` (default origin `http://127.0.0.1:8080`)

## Configuration

Point the frontend at your API by editing `src/services/api/urls.js`:

| Export / field                                  | Role                                                                       |
| ----------------------------------------------- | -------------------------------------------------------------------------- |
| `urlBase`                                       | API origin (no trailing path segment for resource roots in `utils.js`)     |
| `urlAllPrices`, `urlLastPrice`, `urlDateFilter` | Path segments appended to `urlBase` for list, latest, and filtered queries |

Keep the backend CORS settings aligned with your Vite dev origin (typically `http://localhost:5173`).

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Other scripts:

| Script  | Command           | Purpose              |
| ------- | ----------------- | -------------------- |
| Build   | `npm run build`   | Production bundle    |
| Preview | `npm run preview` | Serve built output   |
| Lint    | `npm run lint`    | ESLint with fixes    |
| Format  | `npm run format`  | Prettier for `src/*` |

Ensure the backend is reachable at the URL configured in `urls.js` before using the app.
