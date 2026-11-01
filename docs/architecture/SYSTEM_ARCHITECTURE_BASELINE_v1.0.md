# ADCP 360° System Architecture Baseline v1.0

## Status
Proposed architecture for review. No application implementation has started. Confirmed business requirements take precedence over technical proposals.

## Recommended approach
A modular monolith with explicit domain boundaries and shared services. This keeps deployment manageable initially while allowing modules to evolve independently. Do not begin with microservices or Kubernetes.

## Proposed technology stack
- Frontend: Next.js, React, TypeScript.
- UI: Tailwind CSS, shadcn/ui, Radix UI.
- Data fetching/tables: TanStack Query and TanStack Table.
- Forms/validation: React Hook Form and Zod.
- Charts: ECharts.
- Backend: NestJS, TypeScript, REST API and OpenAPI.
- Database: PostgreSQL; Drizzle ORM, explicit SQL for complex queries.
- Background processing: Redis and BullMQ.
- Document workers: Python, Docling and OCR tools as needed.
- Object storage: private S3-compatible or persistent object storage.
- PDF: PDF.js preview and server-side PDF generation.
- Deployment: Ubuntu LTS, Docker Compose and Nginx.
- CI/CD and observability: GitHub Actions and OpenTelemetry.

These are recommendations to validate during design and proof of concept, not implementation facts.

## Logical domains
1. Identity and access: users, authentication, role assignments, permission scopes and active role context.
2. Organisation and personnel: district, taluks, local bodies, institutions, laboratories, personnel and Pashudhan IDs.
3. Inventory: item master, batches, receipts, allocations, issue notes, ledger, returns and adjustments.
4. Finance: financial heads, receipts, payments, multi-head allocations, bank ledger, cash ledger, cheque register, reconciliation and UC.
5. Operations: procurement, vehicles, staff and office administration.
6. Campaigns: campaign setup, squads, population snapshots, Pashudhan imports, attribution, performance, completion and verification.
7. Public health: vaccination, sample collection, laboratory results, outbreak and disease surveillance.
8. Documents and workflows: document store, versioning, submissions, receipt, review, approval, publication and signatures.
9. Reporting and notifications: dashboards, exports, reminders and work queues.

## Shared services
- Authentication and authorisation.
- Organisation and personnel master data.
- Configurable workflow engine.
- Document storage and PDF generation.
- Audit events.
- Notifications.
- Import/export pipeline with validation and processing history.
- Digital Signature Service.

## Key data integrity rules
- Use stable internal IDs, not names, as relational keys.
- One employee identity may have multiple role and office assignments. Active role context changes permissions and scope without creating duplicate accounts.
- Allocation is not a stock issue. Allocation does not deduct stock. District stock is deducted only when the authorised user completes supply successfully.
- Completed stock and finance transactions are not silently edited or deleted. Use auditable reversal/adjustment.
- Institutional estimated vaccine balance is advisory only and must not alter actual stock ledgers.
- Bank withdrawal to cash is a transfer, not a second expense. Cash expenses reduce cash-in-hand balance.
- One payment may have multiple financial-head allocation lines.
- Portal vaccinations and additional completion-report vaccinations remain separately sourced and must not be double-counted.
- Owned dog and stray dog vaccinations remain distinguishable.
- Campaign performance formulas are configurable per campaign.
- Every imported file must be validated, previewed, deduplicated and have processing history.
- Signed documents are versioned; corrections create a new version and applicable signatures must be repeated.

## Digital signatures
NICDSign 3.0 is the existing signing environment on Windows and Linux. DSC private keys and PINs remain local. The server receives the signed document and verifies its cryptographic signatures. Sequential signing is required for verification reports: Supervisor → Taluk Coordinator → District Coordinator. Completion report requires Supervisor signature. Validate browser-to-client integration and sequential PDF signatures on both operating systems before full implementation.

## Deployment baseline
Production domain: adcpmalappuram.in. Proposed environment: Ubuntu LTS, Nginx, Docker Compose, PostgreSQL, Redis/workers and private document storage. Separate development, test and production environments. Back up database and files, define retention and test restoration.

## Sizing assumptions
Approximately 400 registered users and 80–120 concurrent users were mentioned as preliminary planning estimates only. Validate through actual usage patterns and load testing before sizing production infrastructure.

## Development order
1. Platform foundation: authentication, role model, organisation/personnel masters, audit, document and notification services.
2. Inventory and Finance foundations.
3. Campaigns and population master.
4. Vaccination import, attribution, completion and verification.
5. DSC and reporting.
6. Samples and disease surveillance.
7. Remaining administration modules.
8. Integration, security, performance, user acceptance and deployment.
