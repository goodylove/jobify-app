# Fullstack Mern Project

Jobify is a fullstack app that helps users efficiently manage their job search by organizing applications, tracking statuses, and monitoring progress in one place

## 🛠 Tech Stack

Frontend: React, React Router, Axios
Backend: Node.js, Express, MongoDB (with Mongoose)
Dev Tools: Vite, Nodemon, Postman, concurrently

````

## Getting Started

### 1. Clone the repo

```bash
git https://github.com/goodylove/jobify-app.git
cd jobify-app
````

### 2. Install dependencies

#### Backend:

```bash
npm install
```

#### Frontend:

```bash
cd client
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root folder:

```env
PORT=5100
MONGO_URI=your_mongodb_connection_string
```

## 💻 Running the App

From the root directory, run:

```bash
npm run dev
```

> This will start both the frontend and backend concurrently using `concurrently`.

Make sure your `package.json` scripts look like this:

```json
"scripts": {
  "client": "cd client  &&  npm run dev",
  "server": "nodemon server",
  "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
}
```

## API Routes (Sample)

- `GET /api/users`
- `POST /api/auth/login`
- `GET /api/jobs`

## Testing

You can test backend routes using **Postman** or **Thunder Client**.

## Notes

- Backend runs on `http://localhost:5100`
- Frontend (React) is served via Vite on `http://localhost:5173`
- The frontend uses a **proxy** to call `/api` routes and forward them to the backend.

```

```
