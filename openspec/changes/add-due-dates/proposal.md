# Add optional due dates to Todo items

Summary
-------

This change introduces an optional `dueDate` property for Todo items. Due dates are stored as an ISO-8601 date (YYYY-MM-DD) and are returned by the REST API and displayed in the React UI. Existing todos without a `dueDate` remain valid and are treated as "no deadline".

Motivation
----------

Users need a lightweight way to track deadlines for tasks. A simple optional date field provides most common use cases without introducing scheduling complexity.

Scope
-----

- Backend: add `dueDate` to the domain model and DTOs, propagate through service/controller layers, and ensure JSON serialization/deserialization supports ISO-8601 date-only values.
- Frontend: display `dueDate` in the todo list and detail views; add a date input to create/edit flows.
- API: the `GET` and `POST`/`PUT` endpoints include `dueDate` in request/response payloads (nullable).
- Tests: add unit and integration tests for API serialization and UI display.
- Docs: update the API spec and `todo-management.md` to include the new field.

Non-goals
---------

- Timezone-aware timestamp handling, reminders, recurrence, or calendar sync.

Acceptance criteria
-------------------

- `dueDate` is present in API responses as an ISO-8601 date string (e.g. "2026-06-30") or `null` when not set.
- Creating or updating a todo accepts `dueDate` (optional); invalid dates return HTTP 400.
- Frontend shows `dueDate` in list items and details; empty `dueDate` shows no deadline label.
- Existing todos without `dueDate` continue to function and are treated as having no deadline.

Migration considerations
-----------------------

- For projects with a database, add a nullable `due_date` column (date type) to the `todos` table. Backfill is not required — existing rows remain valid with `NULL`.
- If the current storage is in-memory or file-based, ensure the serializer used persists `dueDate` when present and tolerates absent values on read.
- API versioning is not required for this additive, backward-compatible change, but test clients that strictly validate payloads should be verified.

Rollout and compatibility
-------------------------

- The change is additive and backward compatible: older clients that ignore unknown fields will continue to work.
- Frontend and backend should be deployed together if the frontend starts sending `dueDate` in POST/PUT payloads; however the backend must accept requests that omit `dueDate`.

Security & Validation
---------------------

- Only validate that `dueDate` is a syntactically valid date (ISO-8601 YYYY-MM-DD). Business rules (e.g., disallowing past dates) are optional and should be addressed in separate stories.

Acceptance verification
----------------------

- API contract tests demonstrating `dueDate` present/absent and invalid date handling.
- UI tests verifying display and input flow for `dueDate`.
