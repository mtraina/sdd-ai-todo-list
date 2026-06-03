# AGENTS.md

## Project Overview

This repository contains a Todo List application.

Frontend:

* React
* TypeScript
* Vite

Backend:

* Java 17
* Spring Boot 4
* PostgreSQL

## Source of Truth

OpenSpec is the source of truth.

All feature work must begin from:

openspec/changes/

## Workflow

1. Find active OpenSpec change.
2. Read proposal.md.
3. Read tasks.md.
4. Select the next incomplete task.
5. Implement only that task.
6. Add tests.
7. Verify acceptance criteria.
8. Mark task complete.
9. Create summary.

## Rules

* Do not modify archived specifications.
* Do not implement requirements not listed in OpenSpec.
* Prefer small commits.
* Keep frontend and backend changes separated when possible.

## Backend Standards

* Java 17
* Spring Boot 4
* Constructor injection only
* No field injection
* REST API only
* DTOs required

## Frontend Standards

* React functional components
* TypeScript strict mode
* React Query for server communication
* No class components

## Testing

Backend:

* JUnit 5
* Spring Boot Test

Frontend:

* Vitest
* React Testing Library

All new code must include tests.

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:7510c1e2 -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

**Architecture in one line:** issues live in a local Dolt DB; sync uses `refs/dolt/data` on your git remote; `.beads/issues.jsonl` is a passive export. See https://github.com/gastownhall/beads/blob/main/docs/SYNC_CONCEPTS.md for details and anti-patterns.

## Session Completion

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
<!-- END BEADS INTEGRATION -->
