## Context

The frontend currently uses Vite with plain JavaScript/JSX. The backend is a Spring Boot REST API. We need a safe migration path that keeps the existing todo CRUD integration intact while improving frontend type safety and maintainability.

## Goals / Non-Goals

**Goals:**
- Convert the frontend source code to TypeScript.
- Preserve the existing functionality and API contract with the backend.
- Maintain the current React component structure and styling.
- Add TypeScript build support without changing backend behavior.

**Non-Goals:**
- Migrating backend code to TypeScript.
- Redesigning the user interface.
- Adding new user-facing todo features beyond the current app.

## Decisions

- Use TypeScript with Vite and React plugin support.
- Convert `.jsx` components to `.tsx` and `.js` entry files to `.ts`.
- Keep the existing API endpoint shape at `http://localhost:8080/api/todos`.
- Introduce a shared frontend `Todo` interface to type fetched responses and component props.

## Risks / Trade-offs

- [Risk] The frontend build may fail after file extension changes.
  → Mitigation: Keep the existing component logic unchanged and update only type annotations.
- [Risk] Incorrect typing for backend JSON responses.
  → Mitigation: Define a narrow `Todo` interface and preserve the shape returned by the backend.
- [Risk] Dependency mismatch between Vite and plugin versions.
  → Mitigation: pin `vite` and `@vitejs/plugin-react` to compatible versions and validate with a fresh install.

## Migration Plan

1. Install TypeScript and type dependencies.
2. Rename React entry and component files to `.tsx`/`.ts`.
3. Add `tsconfig.json` and update `vite.config.ts` if needed.
4. Convert component props and state to typed interfaces.
5. Run `npm run build` and verify the dev server starts.
6. Test the todo app manually against the running backend.

## Open Questions

- Should the frontend keep the same runtime API URL or adopt a proxy configuration in Vite? (Current plan: keep the direct backend URL.)
