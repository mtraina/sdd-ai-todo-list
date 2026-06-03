## Implementation Tasks (Beads)

Break work into small, testable beads suitable for individual PRs.

Backend

- [ ] Add `dueDate` field to domain `Todo` model (nullable, date-only) and JSON serialization annotations.
- [ ] Add `dueDate` to API DTOs (request/response) and mapping logic.
- [ ] Add validation for `dueDate` on incoming requests (valid ISO-8601 date or absent/null).
- [ ] Add unit tests for model ↔ DTO mapping and validation.

API / Integration

- [ ] Update API documentation and examples to include `dueDate` (responses and requests).
- [ ] Add integration test(s) for create/update/get flows that include `dueDate` present and absent.

Frontend

- [ ] Add date input to the Create Todo form; wire to API client (accept empty value).
- [ ] Display `dueDate` in todo list rows (compact format) and detail view (readable label).
- [ ] Add UI tests for create/edit with `dueDate` and for list/detail display.

Migration & Ops

- [ ] (If using DB) Add a nullable `due_date` column migration script and a short rollout note.

Docs & Release

- [ ] Update `openspec/specs/todo-management.md` with the `dueDate` field and acceptance criteria.
- [ ] Add changelog entry and release notes describing the additive change.

Notes

- Keep each bead small: model change + unit tests; then DTO + mapping; then API docs + integration tests; then frontend UI + UI tests; finally migration script if needed.
