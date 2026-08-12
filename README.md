# CampusConnect Web

CampusConnect is a simple campus event manager developed for SWE 404 Module 8 using open-source frameworks.

## Features

- View upcoming campus events.
- Register attendance for an event.
- View attendee counts.
- Health endpoint for the API.
- Automated tests with Jest and Supertest.
- GitHub Actions CI on pushes and pull requests.
- React frontend served by Vite.

## Stack

- Node.js
- Express.js
- React
- Vite
- Jest + Supertest
- GitHub Actions

## Run the API

```bash
npm install
npm start
```

The API runs on `http://localhost:5000`.

## Run the web frontend

In a second terminal:

```bash
npm run web
```

Open `http://localhost:5173`.

Vite proxies `/api` requests to the Express server on port 5000.

## API endpoints

- `GET /api/health`
- `GET /api/events`
- `GET /api/events/:id`
- `POST /api/events/:id/attend` with JSON `{ "name": "Student" }`

## Test

```bash
npm test
```

## Licence

MIT. See `LICENSE`.
