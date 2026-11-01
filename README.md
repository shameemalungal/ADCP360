# ADCP 360°

**Integrated Administration & Operations Platform**  
*Efficient Administration. Enhanced Animal Health Care.*

ADCP 360° is an integrated administration and operations platform being planned for the Animal Disease Control Project, Malappuram, Kerala.

## Project status

- Requirements Specification v1.0: consolidated.
- System architecture: proposed, under review.
- UI: dashboard design experiments; final direction not yet approved.
- Application source code: not started.
- Hosting domain: [adcpmalappuram.in](https://adcpmalappuram.in).

## Guiding principle

> Enter information once. Reuse it everywhere. Connect every department and every transaction. Generate reports automatically.

## Repository map

- `docs/requirements/`: requirements specifications.
- `docs/architecture/`: architecture and technical design.
- `docs/decisions/`: project decisions and development workflow.
- `branding/`: brand references and asset approval notes.
- `prompts/`: Stitch and Antigravity prompts.
- `project-notes/`: project status and repository notes.

## Key references

- [Requirements Specification v1.0 (Markdown)](docs/requirements/ADCP_360_Requirements_Specification_v1.0.md)
- [System Architecture Baseline v1.0](docs/architecture/SYSTEM_ARCHITECTURE_BASELINE_v1.0.md)
- [Project Decisions and History](docs/decisions/PROJECT_DECISIONS_AND_HISTORY.md)
- [Development Workflow](docs/decisions/DEVELOPMENT_WORKFLOW.md)
- [Full Stitch UI Prompt](prompts/ADCP_360_Stitch_Full_UI_Prompt.txt)
- [Antigravity District Dashboard Prompt](prompts/ANTIGRAVITY_DISTRICT_DASHBOARD_PROMPT.md)
- [Wayfind-Inspired Dashboard Experiment](prompts/ANTIGRAVITY_WAYFIND_DASHBOARD_EXPERIMENT.md)
- [Logo Redesign Experiment](prompts/ADCP_360_LOGO_REDESIGN_EXPERIMENT.md)
- [Repository Contents and Status](project-notes/REPOSITORY_CONTENTS_AND_STATUS.md)

## Development principles

1. This repository is independent of NCMS and VetRx.
2. Confirmed business rules must be distinguished from proposed technical decisions.
3. New requirements are added through versioned revisions.
4. Work in small builds and use manual UI review after each small change.
5. Preserve existing work before experiments; use branches for reversible UI exploration.
6. Run deeper tests for critical business logic, authentication, permissions, finance, inventory, imports and DSC workflows.
7. Never commit secrets, credentials, private keys, DSC PINs, production data or sensitive personal information.

## Design identity

The official ADCP 360° Brand Identity Board is the current controlling reference. The alternate logo and Wayfind-inspired dashboard are experiments only and are not approved replacements until reviewed.

## Important repository visibility note

The repository is currently **Public**. Review its visibility before adding confidential source code, real operational records, employee information, credentials or other sensitive data.
