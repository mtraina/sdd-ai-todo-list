## Why

The frontend is currently written in plain JavaScript, which makes it harder to catch type and prop errors early, increases maintenance cost, and reduces IDE support for React code. Converting the frontend to TypeScript now improves developer productivity and makes future React enhancements safer.

## What Changes

- Convert the Vite + React frontend source files from JavaScript (`.js`/`.jsx`) to TypeScript (`.ts`/`.tsx`).
- Add TypeScript compiler configuration and React type dependencies.
- Ensure the existing todo CRUD flow continues to work with the Spring Boot backend.
- Update Vite configuration and package scripts as needed for TypeScript support.

## Capabilities

### New Capabilities
- `frontend-typescript`: Migrate the frontend build and source code to TypeScript, enabling typed props, typed API models, and compile-time checks.

### Modified Capabilities
- `api-integration`: Existing frontend/backend integration behavior remains the same, but the frontend code now has typed API request and response models.

## Impact

- Affected code: `frontend/src/**/*`, `frontend/package.json`, `frontend/vite.config.js`, `frontend/tsconfig.json`
- Dependencies: Add `typescript`, `@types/react`, `@types/react-dom`, and optionally `@types/node`.
- Systems: Vite dev/build pipeline for the frontend.

## Non-goals

- No changes to the Spring Boot backend implementation.
- No introduction of a new UI design beyond the current todo app.
- No migration of backend code to TypeScript.

## Rollback Plan

If the TypeScript migration causes issues, revert the frontend files to the previous `.jsx` implementation and restore `package.json`/`tsconfig.json` changes from Git history.
