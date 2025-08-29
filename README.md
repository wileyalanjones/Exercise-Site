# Exercise Site 🏋️‍♀️

A full-stack project for browsing and exploring exercises, with a React front end and a REST API back end.

---

## Features

- Browse/search exercises  
- View details (e.g., body part, equipment, instructions)  
- Clean, responsive UI (React)  
- Separate REST API service for data  
- Clear separation between **client** and **server**

---

## Project Structure

<pre lang="markdown"> ```text ├─ react/ # Front end (React SPA) │ ├─ src/ # Components, pages, hooks, utils │ ├─ public/ │ ├─ package.json │ └─ ... ├─ rest-API/ # Back end (REST API service) │ ├─ src/ or app/ # Server source code │ ├─ package.json OR # If Node/Express │ ├─ requirements.txt # If Python/Flask/FastAPI │ └─ ... ├─ README.md # This file └─ *.zip # Optional: exported bundles (can be deleted) ``` </pre>

### Prerequisites

- **Node.js** LTS (v18+ recommended) & **npm** (or **pnpm**/**yarn**) for the React app  
- One of:  
  - **Node.js** for a Node/Express API **or**  
  - **Python 3.10+** for a Flask/FastAPI API  
- **Git**

