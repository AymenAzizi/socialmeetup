# Meetly — Social Meetup App

Meetly is a full-stack social meetup platform where users can discover events, send join requests, chat with participants, and manage profiles.

## Tech Stack

### Frontend
- React + TypeScript
- Vite
- React Router
- Tailwind CSS / Radix UI components

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- Socket.IO (real-time chat + notifications)
- Cloudinary (image uploads)

## Repository Structure

```text
social-meetup-app-main/
├── frontend/      # React client
├── backend/       # Express API + Socket.IO server
└── reports/       # Security/pentest reports and docs
```

## Prerequisites

- Node.js 18+
- npm 9+
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

## Environment Variables

### Backend
Copy and edit:

```bash
cp backend/.env.example backend/.env
```

Minimum required values:
- `NODE_ENV`
- `PORT`
- `CLIENT_URL`
- `MONGODB_URI`
- `JWT_SECRET`
- `JWT_EXPIRE`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

### Frontend
Copy and edit:

```bash
cp frontend/.env.example frontend/.env
```

Minimum required values:
- `VITE_API_URL` (default example: `http://localhost:5000/api`)
- `VITE_APP_NAME`
- `VITE_APP_URL`

## Installation

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Running Locally

### 1) Start backend

```bash
cd backend
npm run dev
```

Backend default URL: `http://localhost:5000`

### 2) Start frontend

```bash
cd frontend
npm run dev
```

Frontend default URL (Vite): usually `http://localhost:5173`

## Available Scripts

### Backend (`backend/package.json`)
- `npm run dev` — start with nodemon
- `npm start` — start production server
- `npm run seed:events` — seed sample events

### Frontend (`frontend/package.json`)
- `npm run dev` — start Vite dev server
- `npm run build` — production build

## Core Features

- User registration and login
- Email verification / password reset flow
- Event browsing and event management
- Join request approval/rejection
- Real-time event chat (Socket.IO)
- Notifications
- Profile settings and GDPR-related user actions

## Security Notes

This project includes security middleware such as Helmet, CSRF protection, rate limiting, mongo-sanitize, xss-clean, and HPP. See the `reports/` folder for security assessment notes.

## Troubleshooting

- If auth requests fail, verify `VITE_API_URL` and backend `CLIENT_URL`.
- If uploads fail, verify Cloudinary credentials.
- If CORS errors appear, ensure frontend URL is included in backend `CLIENT_URL`.
- If Mongo connection fails, verify `MONGODB_URI` and database access rules.

## License

MIT (see `backend/package.json`).
