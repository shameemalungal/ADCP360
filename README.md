# ADCP 360°

**Integrated Administration & Operations Platform**  
*Efficient Administration. Enhanced Animal Health Care.*

ADCP 360° is a proposed integrated administration and operations platform for the Animal Disease Control Project, Malappuram, Kerala.

## Project status

- Requirements baseline: v1.0 consolidated.
- Architecture: proposed, under review.
- UI: design exploration; dashboard prototype not yet accepted.
- Application implementation: not started.
- Hosting domain: [adcpmalappuram.in](https://adcpmalappuram.in).

## Guiding principle

> Enter information once. Reuse it everywhere. Connect every department and every transaction. Generate reports automatically.

## Repository map

- `docs/requirements/`: requirements specifications and revision history.
- `docs/architecture/`: architecture and technical design.
- `docs/workflows/`: business workflows and process definitions.
- `docs/decisions/`: architectural and product decisions.
- `branding/`: official logo, brand board and visual references.
- `prompts/`: Antigravity and UI-generation prompts.
- `project-notes/`: development guidance and project status.

Application source directories will be added after the architecture and dashboard design are approved.

## Important development principles

1. This repository is independent of NCMS and VetRx.
2. Preserve confirmed business rules and distinguish them from proposed technical choices.
3. Use versioned requirements changes as new requirements are added.
4. Build incrementally, with manual UI review after small changes.
5. Preserve existing work before experimental UI changes. Use branches for reversible experiments.
6. Run deeper tests for critical business logic, authentication, permissions, finance, inventory and DSC workflows.
7. Never commit secrets, credentials, private keys, DSC PINs, production data or sensitive personal information.

## Design identity

Use the attached ADCP 360° Brand Identity Board as the current visual reference. The alternative logo and Wayfind-inspired dashboard are experimental directions and are not approved replacements until reviewed.

## Current baseline

See:
- [Requirements Specification v1.0](docs/requirements/ADCP_360_Requirements_Specification_v1.0.docx)
- [Full UI prompt](prompts/ADCP_360_Stitch_Full_UI_Prompt.txt)
- [Antigravity dashboard prompt](prompts/ANTIGRAVITY_DISTRICT_DASHBOARD_PROMPT.md)
- [Wayfind-inspired dashboard experiment](prompts/ANTIGRAVITY_WAYFIND_DASHBOARD_EXPERIMENT.md)
- [Development workflow](docs/decisions/DEVELOPMENT_WORKFLOW.md)
- [Architecture baseline](docs/architecture/SYSTEM_ARCHITECTURE_BASELINE_v1.0.md)

