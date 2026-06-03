## ADDED Requirements

### Requirement: Frontend codebase is written in TypeScript
The frontend source code SHALL be written in TypeScript using `.ts` and `.tsx` file extensions.

#### Scenario: React component files are converted to TypeScript
- **WHEN** a developer opens a frontend component file
- **THEN** the file uses `.tsx` extension and valid TypeScript syntax

### Requirement: Type definitions exist for todo API data
The frontend SHALL define a `Todo` type or interface that matches the backend todo JSON shape.

#### Scenario: API response is typed
- **WHEN** the frontend fetches todos from `/api/todos`
- **THEN** the response is assigned to a typed array of `Todo` objects

### Requirement: Frontend build supports TypeScript
The frontend build pipeline SHALL compile TypeScript successfully with Vite and the React plugin.

#### Scenario: Build succeeds
- **WHEN** `npm run build` is executed in the frontend directory
- **THEN** Vite compiles the project without TypeScript errors
