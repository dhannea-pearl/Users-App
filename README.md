# Users App

A single-page application built with React and TypeScript that fetches and displays user data from an external REST API. Built as an individual project for the React course (30 YH credits).

## Features

- Fetches users from the REST API and presents them in a clear, readable layout
- Multiple pages with client-side routing (React Router)
- Handles loading, error and empty states in the UI
- Data caching with TanStack Query to minimise API calls
- Modular, reusable components with strictly typed props

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for development and building
- [TanStack Query](https://tanstack.com/query) (`useQuery`) for data fetching and caching
- [React Router](https://reactrouter.com/) (`react-router-dom`) for routing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm

### Installation

```bash
git clone https://github.com/YOUR-USERNAME/users-app.git
cd users-app
npm install
```

### Environment variables

The API key is not hardcoded in the source. Create a `.env` file in the project root:

```
VITE_API_KEY=your-api-key-here
```

The `.env` file is listed in `.gitignore` and must not be committed.

### Run the app

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### Other scripts

| Command | Description |
|---|---|
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## API

Users are fetched from:

```
GET https://api-userapi.onrender.com/api/users/getUsers
```

Every request includes the `x-api-key` header, with the value read from `VITE_API_KEY`.

### Rate limit handling

The API allows a maximum of **100 requests per day**. To stay well within this limit, the app uses TanStack Query caching:

- A long `staleTime`, so cached data is reused instead of refetched
- `refetchOnWindowFocus` disabled, so switching tabs doesn't trigger new requests
- `retry` limited, since retries count as extra requests
- A single shared query (`useUsers`), so navigating between pages reuses the same cached data

Note: in development, React StrictMode may cause duplicate requests. This does not happen in a production build.

## Project Structure

```
src/
├── api/          # API functions (fetch calls)
├── components/   # Reusable UI components
├── hooks/        # Custom hooks (e.g. useUsers)
├── pages/        # Page-level components (one per route)
├── types/        # TypeScript interfaces and types
├── App.tsx       # Routes
└── main.tsx      # Entry point, QueryClientProvider and Router
```

The code follows separation of concerns: data fetching lives in `api/` and `hooks/`, while components focus on presentation.

## Author

Dhannea Pearl Pettersson – React course, 2026