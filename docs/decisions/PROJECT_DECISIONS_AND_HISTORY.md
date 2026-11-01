# ADCP 360° Project Decisions and History

This file records key requirements and design decisions established during planning. It is a living record; future additions should be appended with dates and version references.

## Project identity
- Name: ADCP 360°.
- Descriptor: Integrated Administration & Operations Platform.
- Tagline: Efficient Administration. Enhanced Animal Health Care.
- Organisation: Animal Disease Control Project, Malappuram, Kerala.
- Final hosting domain: adcpmalappuram.in.
- Guiding principle: Enter information once. Reuse it everywhere. Connect every department and every transaction. Generate reports automatically.

## Project boundaries
- Separate repository and application from NCMS and VetRx.
- Requirements planning is being completed before implementation.
- Current requirements baseline is v1.0; new requirements can be added later through versioned revisions.
- App implementation has not started.

## Confirmed business rules
- User role-permission matrix and user counts are finalised after all modules.
- Campaign performance formulas are configured separately for each campaign.
- Completion report signature: Supervisor.
- Verification report signatures: Supervisor → Taluk Coordinator → District Coordinator.
- Taluk Coordinator independently verifies 5% of total vaccinations.
- District Coordinator independently verifies 2% of total vaccinations.
- Sequential signing on the same PDF is required.
- Cancelled cheques remain in the Cheque Issue Register.
- Cheque Issue Register columns: SL. NO.; BANK; CHQ NO.; DESCRIPTION/FOR; CHEQUE AMOUNT; CHEQUE PAYABLE DATE; REMARKS; PAYMENT STATUS.
- Cash advance is withdrawn from bank and held as cash-in-hand under Office Expenses. Cash expenses reduce the advance. The withdrawal must not be double-counted as expenditure.
- One payment can be split across multiple financial heads while retaining a single payment record.
- Bank statement extraction proposes matching; it must not automatically post transactions.
- Google Sheets for six diagnostic laboratories are owned by the user and will be uploaded manually initially.
- Population master supports panchayath/municipality species-wise Excel bulk updates, with Full Update and Partial Update modes.
- Stray dog vaccination is distinct from owned dog vaccination.
- Institution-wise stock allocation is separate from completed supply. Allocation does not deduct district stock; completion of supply deducts stock.
- Institution vaccine balance estimates are advisory and are not physical stock or stock-ledger transactions.
- Vehicle diary, external office requests, availability planning, fuel payer categories (ADCP Malappuram, DVC, RAHC Nilambur, RAHC Athavanad), maintenance expenses and statutory renewal reminders are required.
- Admin can initiate password reset, but cannot view existing passwords.
- One employee identity can hold multiple role/office assignments, including additional charge. Role switching changes active scope without logging out or creating multiple accounts.
- Profile menu: My Profile, Roles (when multiple), Account Settings, Change Password and Logout.
- NICDSign 3.0 is used on Windows and Linux. Existing DSC tokens are used; user states no additional permission is required. PIN/private key stay local.
- Hosting domain is adcpmalappuram.in.

## Technology proposal
Modular monolith initially. Proposed stack: Next.js/React/TypeScript frontend; NestJS/TypeScript backend; PostgreSQL/Drizzle; Redis/BullMQ; Python workers for document processing; private object storage; Docker Compose, Ubuntu LTS and Nginx. This remains a proposal subject to architecture review.

## Development workflow
Small builds, basic build/render check, manual user inspection, feedback, refinement. No exhaustive tests after every minor UI change. Deeper tests for authentication, permissions, inventory, finance, imports, audit integrity and DSC.

## UI design experiments
- Official ADCP brand board remains the controlling visual reference.
- Wayfind-inspired dashboard is an experiment only.
- Experimental generated logo is not approved as the final logo.
- Preserve original dashboard and brand files. Use a Git branch for reversible UI experiments.
