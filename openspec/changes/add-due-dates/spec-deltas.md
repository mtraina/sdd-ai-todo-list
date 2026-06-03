# Spec deltas for "add-due-dates"

The following are the proposed deltas to the existing `todo-management` spec. These are additive changes only.

1) Model: add `dueDate` field

Before:

Fields:

* title
* description

After:

Fields:

* title
* description
* dueDate (optional): ISO-8601 date (YYYY-MM-DD). Represents a date-only deadline or `null` when not set.

2) API: include `dueDate` in request/response payloads

Before (example GET response body):

[
  {
    "id": 1,
    "title": "Buy milk",
    "description": "",
    "completed": false
  }
]

After (example GET response body):

[
  {
    "id": 1,
    "title": "Buy milk",
    "description": "",
    "completed": false,
    "dueDate": "2026-06-15"  // or null
  }
]

3) Acceptance criteria (added)

- Todos may optionally include `dueDate` (YYYY-MM-DD) or have `null`/absent values.
- API accepts and returns `dueDate` as a date-only ISO-8601 string.
- UI displays `dueDate` in lists and detail views.

4) Migration considerations

- Add nullable column `due_date` (date) to persistent storage. No backfill required; leave existing rows with `NULL`.
