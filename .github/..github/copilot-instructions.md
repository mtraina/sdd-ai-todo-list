# GitHub Copilot Instructions

This repository follows OpenSpec.

Before generating code:

* Read AGENTS.md.
* Read relevant OpenSpec documents.
* Follow acceptance criteria exactly.

Backend:

* Java 17
* Spring Boot 4
* Constructor injection
* Use records for DTOs where appropriate
* Use service layer between controller and repository

Frontend:

* React
* TypeScript
* Functional components only
* Use hooks
* Use React Query

Testing:

* Add tests for all new functionality.
* Maintain test coverage.

Do not:

* Introduce unnecessary frameworks.
* Add functionality not specified in OpenSpec.
* Modify archived specifications.