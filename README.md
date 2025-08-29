# Exercise Site 🏋️‍♀️

A simple full-stack project for browsing and exploring exercises, with a React front end and a REST API back end.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [1) Clone](#1-clone)
  - [2) Back End Setup](#2-back-end-setup)
  - [3) Front End Setup](#3-front-end-setup)
  - [4) Run Everything](#4-run-everything)
- [Configuration](#configuration)
- [API Overview](#api-overview)
- [Available Scripts](#available-scripts)
- [Development Tips](#development-tips)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Browse/search exercises  
- View details (e.g., body part, equipment, instructions)  
- Clean, responsive UI (React)  
- Separate REST API service for data  
- Clear separation between **client** and **server**

---

## Project Structure

.
├─ react/ # Front end (React SPA)
│ ├─ src/ # Components, pages, hooks, utils
│ ├─ public/
│ ├─ package.json
│ └─ ...
├─ rest-API/ # Back end (REST API service)
│ ├─ src/ or app/ # Server source code
│ ├─ package.json OR # If Node/Express
│ ├─ requirements.txt # If Python/Flask/FastAPI
│ └─ ...
├─ README.md # This file
└─ *.zip # Optional: exported bundles

markdown
Copy code

---

## Getting Started

### Prerequisites

- **Node.js** LTS (v18+ recommended) & **npm** (or **pnpm**/**yarn**) for the React app  
- One of:  
  - **Node.js** for a Node/Express API **or**  
  - **Python 3.10+** for a Flask/FastAPI API  
- **Git**

### 1) Clone

```bash
git clone https://github.com/wileyalanjones/Exercise-Site.git
cd Exercise-Site
2) Back End Setup
A) If the API is Node/Express
bash
Copy code
cd rest-API
npm install
Create a .env file in rest-API/.

Start the API (default: port 5000):

bash
Copy code
npm run dev   # or: npm start
B) If the API is Python (Flask/FastAPI)
bash
Copy code
cd rest-API
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
Create a .env file in rest-API/.

Run the API:

bash
Copy code
# Flask
flask run --port 5000

# FastAPI
uvicorn app:app --reload --port 8000
3) Front End Setup
bash
Copy code
cd ../react
npm install
Create a .env file in react/.

Start the dev server (default: port 3000):

bash
Copy code
npm run dev   # or: npm start
4) Run Everything
Start the API

Start the React app

Visit http://localhost:3000

Configuration
rest-API/.env (examples)
ini
Copy code
PORT=5000
NODE_ENV=development
EXERCISE_DB_URL=https://...
API_KEY=your_key_here
react/.env (examples)
ini
Copy code
VITE_API_BASE_URL=http://localhost:5000
# or, if CRA:
REACT_APP_API_BASE_URL=http://localhost:5000
API Overview
Health
bash
Copy code
GET /health
200 OK → { "status": "ok" }
Exercises
bash
Copy code
GET /api/exercises
GET /api/exercises/:id
GET /api/exercises?bodyPart=legs&equipment=dumbbell&search=squat
Response Example

json
Copy code
[
  {
    "id": "squat",
    "name": "Barbell Back Squat",
    "bodyPart": "legs",
    "equipment": "barbell",
    "instructions": "..."
  }
]
Available Scripts
Front End (react/)
npm run dev — Start dev server (Vite)

npm start — Start dev server (CRA)

npm run build — Production build

npm run preview — Preview build (Vite)

Back End (rest-API/)
Node.js:

npm run dev — Start with auto-reload

npm start — Start server

npm test — Run tests

Python:

flask run or uvicorn app:app --reload

pytest (if tests exist)

Development Tips
Keep API URL in front-end .env

Enable CORS on the API for local dev

Use ESLint + Prettier for consistency

Consider adding TypeScript to React

Testing
Front end: vitest/jest + @testing-library/react

Back end (Node): jest/supertest

Back end (Python): pytest

Deployment
Front End
Build and deploy to GitHub Pages, Netlify, Vercel, S3, etc.

Back End
Deploy to Render, Railway, Fly.io, AWS, Azure, GCP, etc.

Set environment variables and secrets on host

Update API_BASE_URL in front end

Contributing
Fork the repo

Create a branch: git checkout -b feat/your-feature

Commit: git commit -m "feat: add feature"

Push: git push origin feat/your-feature

Open a Pull Request
