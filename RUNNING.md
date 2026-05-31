# Running the Todo App

Backend (Spring Boot 4):

Install and run from project root:

```bash
cd backend
mvn spring-boot:run
```

The backend will listen on `http://localhost:8080` and expose the REST API at `/api/todos`.

Frontend (Vite + React):

```bash
cd frontend
npm install
npm run dev
```

The frontend dev server runs on `http://localhost:3000` and talks to the backend (CORS enabled).

Notes:
- Java 17+ is recommended for Spring Boot 4.
- This scaffold uses an in-memory store for todos (no DB).
