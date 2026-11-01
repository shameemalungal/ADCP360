# ADCP 360° Requirements Specification v1.0

**Integrated Administration & Operations Platform**  
*Efficient Administration. Enhanced Animal Health Care.*

Organisation: Animal Disease Control Project, Malappuram, Kerala  
Domain: adcpmalappuram.in  
Status: Consolidated planning baseline; implementation not started.

## 1. Purpose and vision

ADCP 360° is a centralised, web-first administration and operations platform for the Animal Disease Control Project, Malappuram. It connects administration, finance, inventory, campaigns, vaccination, disease surveillance, sample management, documents and reporting through shared master data and common audit controls.

> Enter information once. Reuse it everywhere. Connect every department and every transaction. Generate reports automatically.

Objectives: reduce repetitive data entry; maintain traceable records; automate recurring departmental reports; support district, taluk, institution and field personnel with scoped access; provide one integrated source of operational data.

## 2. Scope and assumptions

- Web-first responsive application with installable PWA support.
- Not required to be offline-first. Some field work may use a separate application.
- Separate from NCMS and VetRx.
- Approximately 400 registered users and 80–120 concurrent users are preliminary planning estimates only.
- Final role-permission matrix and group sizes will be decided after all modules are finalised.
- Campaign achievement and day-wise performance formulas will be configured separately per campaign. No campaign is presently running; the next campaign is expected around December.
- Requirements may be added later through versioned revisions.

## 3. Brand identity

The official ADCP 360° Brand Identity Board in the branding directory is the controlling reference. Use the supplied logo variants, palette, gradients, typography, icon style and imagery direction.

| Token | Colour | Use |
|---|---|---|
| Deep teal | #0E7D7A | Primary identity and actions |
| Turquoise | #14B8A6 | Growth, health and accents |
| Nature green | #84D46B | Positive status and progress |
| Blue | #3B82F6 | Information and secondary actions |
| Orange | #F59E0B | Warnings |
| Yellow | #FCD34D | Highlight |
| Background | #F0F9FF | Bright page background |
| Surface | #E2E8F0 | Soft surfaces |
| Text | #475569 | Body text |

Primary gradient: #14B8A6 → #84D46B. Secondary gradient: #3B82F6 → #06B6D4. Typography: Plus Jakarta Sans. Prefer light backgrounds, subtle shadows, disciplined rounding and clean spacing. Avoid dark-navy dominance. Do not distort, crop, recolour or redraw the official logo. The alternate logo is experimental, not yet approved as a permanent replacement.

## 4. Modules

1. Dashboard
2. Stock & Inventory
3. Finance & Utilisation Certificate
4. Purchase & Procurement
5. Staff Management
6. Vehicle Management
7. Office Administration
8. Document Management
9. Field Reporting & Form Builder
10. Campaign Management
11. Sample Collection Management
12. Disease Surveillance
13. Vaccination Reporting & Analysis
14. Reporting Centre
15. User & Access Management
16. Settings & Master Data
17. Digital Signature Service

## 5. Shared master data

### Organisation Master
Maintain district, taluks, panchayaths, municipalities, veterinary institutions, participating offices and diagnostic laboratories. Use permanent internal IDs so name changes do not break historical records.

### Personnel Master
Maintain employee name, designation, office/institution, contact details, active/employment status and identifiers. Store Pashudhan ID where applicable and enforce relevant uniqueness. Avoid duplicate employee records.

### Campaign Assignment Master
Link personnel to campaign, squad, local body, role and effective period. One person may have multiple assignments, including in different local bodies. Do not permanently bind an employee to one institution or panchayath.

### Species and population master
Maintain species reference data and species-wise population for each panchayath/municipality. Support history by year/effective date, campaign-specific snapshots and Excel bulk updates.

## 6. Stock & Inventory

### Structure and sources
Central district store at ADCP Malappuram. Receipts may originate from State allocation, district purchase, inter-district transfer, government manufacturers, private suppliers, returns, donations and other sources. District supplies may be direct to institutions or through taluks. No taluk/institution acknowledgement workflow is required in the current scope.

### Receipts, issue and ledger
- Goods receipt notes capture source/supplier, date, item, batch, quantity, unit, expiry where applicable and attachments.
- Pending/draft issue notes do not deduct stock.
- Stock is deducted only when the authorised user selects **Completed Supply Successfully**.
- Completed transactions cannot be silently edited or deleted. Correct using authorised reversal/adjustment with reason and audit history.
- Maintain a permanent batch-aware stock ledger.

### Institution-wise allocation
- Authorised ADCP Malappuram officials can divide available quantities among multiple institutions according to district decisions.
- Record decision-maker, date, item/batch, total quantity and institution-wise quantities.
- Allocation is distinct from completed supply and does not deduct stock.
- Validate that total allocations do not exceed allocatable stock.
- Allow authorised revision before completion and retain history.
- Generate institution-wise issue notes from an allocation where appropriate.

### Vaccine and logistics monitoring
- Batch-wise stock, configurable units and conversions such as vial-to-dose, FEFO suggestions, expiry, recall and quarantine support.
- Near-expiry alerts apply to vaccines and logistics, default 90 days. Suggested severity: >60 days upcoming; 31–60 attention; 30 or fewer urgent.
- Each vaccine has a configurable minimum stock threshold and low-stock alerts.
- Reports include current stock, source-wise receipts, supplier-wise receipts, batch stock, expiry, ledger, receipt/issue/rejection register and physical verification.

### Institutional advisory vaccine balance
Maintain four separate values: actual district stock; cumulative quantity supplied to institution; estimated institutional balance from supply less reported consumption; and institution-reported physical stock. The estimate is advisory only and must never alter the district stock ledger or create stock transactions. Support cumulative supplies. Initially use configurable conversion, with 1 vaccination = 1 dose unless campaign/item configuration specifies otherwise. Flag negative estimates and discrepancies for review.

## 7. Finance & Utilisation Certificate

The finance module supports the ADCP bank-account-based fund and expenditure process. It is an operational fund-tracking/UC tool, not a replacement for the Government's statutory accounting system.

### Financial records
- Maintain financial heads and opening balances.
- Record receipts, expenditure, interest, bank charges/deductions, refunds and adjustments.
- Each head has a ledger with opening balance, receipts, expenditure and running balance.
- One payment may be allocated across multiple heads while retaining one payment record and multiple allocation lines.

### Transaction fields
Date, financial head(s), transaction type, amount, description, proceedings number/date, cheque number/date, encashment date, bank reference and attachments. Distinguish entered, authorised, issued, encashed and reconciled states where applicable.

### Cheque Issue Register
Use the supplied official reference image as the layout authority. Columns, in order: SL. NO.; BANK; CHQ NO.; DESCRIPTION/FOR; CHEQUE AMOUNT; CHEQUE PAYABLE DATE; REMARKS; PAYMENT STATUS. The sample shows PASSED. Support sequential serial numbering, search/filter, print and Excel/PDF export. Link entries to finance payments. Cancelled cheques remain in the register and are not deleted.

### Cash advance and cash-in-hand
A bank withdrawal is a transfer from bank to cash/advance, not a second expense. Maintain cash-in-hand balance under Office Expenses. Example: withdraw ₹5,000, then record individual cash expenses against that advance, reducing the remaining cash balance. Retain bills and include cash-in-hand in UC. Avoid double counting the withdrawal and cash expenses.

### Bank reconciliation and UC
Upload bank statement PDFs and extract date, narration, debit, credit and balance for user review. Suggest matches and show unmatched/mismatched entries. Never automatically post extracted bank transactions. Generate the existing departmental UC layout and preserve exact financial-head labels/serials once the editable template is supplied. Calculations: total available = opening balance + receipts; closing balance = total available − expenditure. Include cash in hand and bank balance. Monthly close includes transaction verification, bank reconciliation, ledger review, UC generation and authorised closure.

Pending: treatment of issued but unencashed cheques and exact editable UC format/verified head labels.

## 8. Vehicle Management

### Vehicle diary and allocation planner
Date-wise diary with vehicle, date/period, place, purpose, requesting/allotted office, officer, driver and remarks. Receive requests from other offices with requested date, destination, purpose and contact/remarks. Check availability and warn about overlapping allocation for the same vehicle. Record authorised decision and final allocation.

### Fuel and expenses
Record fuel date, vehicle, quantity, amount, fuel station, payer and bill. Payer categories: ADCP Malappuram, DVC, RAHC Nilambur and RAHC Athavanad. Reports by vehicle, month and payer. Record maintenance/repair details, date, amount, payment date and attachments.

### Renewal reminders
Maintain insurance, tax, permit and pollution certificate renewal dates; configurable advance reminders, expiry alerts and renewal history.

## 9. Campaign Management

### Campaign setup and squads
Campaign records include name/type, dates, objectives, targets, orders/instructions, participating areas and sample schedules.

Normal squad: one Supervisor, one Vaccinator and one Helper. Alternative: one Supervisor, two Vaccinators and no Helper. Capture supervisor name/designation; Vaccinator 1 name/designation/Pashudhan ID; optional Vaccinator 2; optional Helper; campaign, taluk, Taluk Coordinator, local body, squad number, days allotted and assigned population.

A local body may have multiple squads. The same vaccinator may have multiple time-/area-specific campaign assignments.

### Publication and amendments
Workflow: draft squad formation → Epidemiologist verification → circulation to Taluk Coordinators/Supervisors for suggestions → incorporation of approved changes → final publication. Export final list to Excel/PDF. Published amendments must be versioned and retain old/new composition, reason, requester, approver, timestamp and effective date. Maintain District and Taluk Crisis Management Committee members with role, contact, validity and appointment order.

### Population and performance
- Panchayath/municipality species-wise population.
- Excel template download and bulk upload.
- Full Update and Partial Update modes.
- Validate local bodies/species/numeric values, preview added/updated/error rows, detect duplicates, confirm import and retain import history.
- Full Update replaces the selected year's data only after explicit confirmation.
- Partial Update changes only supplied species/local-body values.
- Preserve earlier yearly population values and campaign snapshots.
- Campaign achievement and day-wise formulas are configured per campaign, not hard-coded globally.

### Bharath Pashudhan import
Upload raw Excel; validate structure, map fields, identify duplicates, retain original file and import history. Attribute using campaign + vaccinator Pashudhan ID + village → mapped local body → squad assignment. Ambiguous records go to an Unallocated Vaccination Records queue for manual resolution. Attribute each record only once.

### Completion and verification
- Every participating panchayath/municipality submits a completion report. District staff may mark it received when arriving by email. Record date, receiver, source mode, uploaded copy and remarks.
- Completion report captures additional vaccinations physically performed but not uploaded to Bharath Pashudhan. Keep separate from portal records and prevent double counting.
- Completion report requires Supervisor signature.
- Verification report signature sequence: Supervisor → Taluk Coordinator → District Coordinator.
- Taluk Coordinator verifies 5% of total vaccinations.
- District Coordinator independently verifies 2% of total vaccinations.
- Record campaign, local body/squad, total considered, sample size, selected records, actual verified count, date, officer, findings, discrepancies and outcome.
- 5% and 2% checks are separate. Sampling and rounding method remains to be finalised.
- Receipt, review, approval and digital signature are distinct workflow events. Retain report versions and correction history.

## 10. Vaccination Reporting & Analysis

Support Bharath Pashudhan imports and additional vaccinations captured in completion reports without duplication. Distinguish owned dog and stray dog vaccination.

Stray dog entry fields: date, panchayath/municipality, institution, vaccinator/squad where applicable, count of stray dogs vaccinated, vaccine, quantity used, available record reference and remarks.

Monthly vaccination categories: LSD (Goat Pox), Anthrax, H.S. Oil Adjuvant, BQ, Swine Fever, RDF, RDVK & R2B, PPR, Fowl Pox, Duck Pasteurella, Duck Plague, Enterotoxemia, FMD Ring Vaccination, Rabies (Canine), Rabies (Others), Avian Influenza.

Reports: monthly, vaccine-wise, campaign-wise, panchayath/municipality-wise, owned-vs-stray comparison; Excel/PDF and month-to-month comparisons.

## 11. Sample Collection Management

Works within campaigns and independently for disease investigations. Configure 0th-day and other campaign collection dates. Record targets, responsibility, sample ID/type, date, animal, institution, panchayath and campaign. Record dispatch, laboratory, consignment reference and supporting documents. Upload test reports. Track collection → dispatch → laboratory result. Generate collection, dispatch, pending dispatch, lab result and campaign summary registers.

## 12. Disease Surveillance

Field outbreak reports include institution/location, suspected disease, species, affected population, investigation and status. Link multiple samples and lab reports to an outbreak.

Six diagnostic laboratories provide monthly Google Sheets. The user owns the sheets and will upload data; automatic Google account synchronisation is not required initially. Validate/map district, panchayath, species, disease, month/year, laboratory and sample/report reference. Preserve source file/history.

Keep field-reported and laboratory-confirmed records distinguishable and avoid double-counting one outbreak. Monthly Panchayath-wise report fields: district, panchayath, species affected, year/month, disease, outbreaks, susceptible, attacked, deaths, test used and laboratory confirmation. Monthly Animal Disease Surveillance report additionally supports serotype, new outbreaks, official vaccination, cases, deaths, animals destroyed/slaughtered, outbreak-response vaccination and preventive/control measures. Epidemiologist review precedes final report.

## 13. Field Reporting & Form Builder

Authorised users can create forms without code changes. Field types: text, number, date, dropdown, checkbox, repeatable table/section and file upload. Configure mandatory fields, validation, assignments, campaign/institution/person scope, due dates and reminders. Track draft, submitted, incomplete, pending, returned and accepted states. Export Excel/PDF and allow controlled Google Sheets integration. ADCP 360° database remains authoritative.

## 14. Digital Signature Service

Confirmed environment: NICDSign 3.0 on Windows and Linux using existing DSC tokens. User states no additional permission is required for the existing setup. Generate/freeze PDF version, initiate local signing, keep PIN/private key local, return signed PDF and verify cryptographic signatures server-side. Support sequential signing. Record certificate/signing/document version/hash/validation details where available. Corrections after signing create a new version and require applicable signatures again. Proof of concept must test browser-to-client communication, PDF signing, sequential signing and verification on Windows and Linux.

Confirmed signatories: completion report — Supervisor; verification report — Supervisor → Taluk Coordinator → District Coordinator.

## 15. Other administration modules

**Purchase & Procurement:** suppliers, purchase records/proceedings, purchase orders where used, invoices, received goods and attachments. Connect purchased stock to Inventory via goods receipt.

**Staff Management:** personnel records, designations, office mapping and assignments using Personnel Master as authoritative data.

**Office Administration:** administrative records, proceedings, correspondence and related documents. Detailed workflows may be added later.

**Document Management:** central searchable repository with title, category, reference/date, linked module/record, file, version, uploader/date, access permissions and signature status.

## 16. Dashboard and Reporting Centre

Role- and scope-aware dashboard. Show campaign progress, vaccination achievement, squad performance, pending reports/verification, disease/outbreak summaries, samples/lab results, stock/expiry/low-stock alerts, financial balances, bank reconciliation, UC status, vehicle allocations/renewals, pending approvals/signatures and notifications. Reporting filters include date/FY, campaign, taluk, local body, institution, species, vaccine, financial head and vehicle. Export Excel/PDF and preserve official report formats.

## 17. User management and authentication

- Email OTP verification.
- Password login and email-based password reset.
- Google authentication/login.
- Admin-initiated password reset; administrator cannot view an existing password. Force password change at next login where configured.
- Google identity alone does not grant access unless the account is authorised.
- Final role-permission matrix and group sizes decided after modules are finalised.
- Permission actions: view, create, edit, submit, receive, verify, approve, publish, export, delete and manage.
- Scope restrictions: district, taluk, institution, campaign, squad and assigned responsibilities.
- Administrator does not automatically bypass all sensitive controls.

One employee identity may have multiple role/office assignments, including additional charge. User profile menu includes My Profile, Roles (when multiple), Account Settings, Change Password and Logout. Role switch updates dashboard, module visibility and data scope without logging out or creating separate accounts. Audit role switches. If only one role exists, omit unnecessary role-switch UI.

Initial groups: District Coordinator (1); District Epidemiologist (1); Livestock Inspector 1 (1); Livestock Inspector 2 (1); Livestock Inspector 3 (1); Technical Assistant (1); Clerk (1); Driver (1); Attendant (1); Taluk Coordinators (count pending); Veterinary Surgeons/Senior Veterinary Surgeons as Supervisors (approximately 110); Livestock Inspectors/AFOs as Vaccinators (count pending); Attendants/PTS as Helpers (count pending); Admin (as required).

## 18. Notifications and workflows

Common configurable notifications for pending submissions, report receipt, verification, corrections, low stock, expiry, UC/reconciliation, vehicle renewals, maintenance/payment dates, campaign deadlines, sample schedules and DSC signing. Use in-app and email delivery where configured. Deliver only to relevant users.

## 19. Security, audit and integrity

HTTPS; secure authentication/session management; role- and scope-based access; stronger authentication as appropriate; audit important create/edit/submit/receive/verify/approve/publish/export/reversal/account-security events; private document storage; no silent edits/deletes to completed transactions; signed document version history; server-side business-rule validation; scheduled backup, retention and restoration testing. Record actor, timestamp and before/after state for important actions.

## 20. Proposed technical architecture

Recommended, subject to review: Next.js/React/TypeScript; Tailwind/shadcn/Radix; TanStack Query/Table; React Hook Form/Zod; ECharts; NestJS/TypeScript REST/OpenAPI; PostgreSQL/Drizzle; Redis/BullMQ; Python document workers/Docling/OCR; private S3-compatible object storage; PDF.js and server-side PDF generation; Ubuntu LTS, Docker Compose and Nginx; GitHub Actions and OpenTelemetry.

Use a modular monolith initially. Microservices and Kubernetes are not required initially. Native Android may be considered later only if specific native capabilities justify it.

## 21. Deployment and integrations

Final domain: adcpmalappuram.in. Proposed production: Ubuntu LTS, Nginx, Docker Compose, PostgreSQL, Redis/workers and private file storage. Separate development/test/production, secure secrets, scheduled database and document backups, retention and restoration testing.

Integrations/imports: Bharath Pashudhan Excel, six laboratory sheet uploads, population Excel, bank statement PDF extraction, email OTP/notifications and NICDSign 3.0. All imports require validation, preview, duplicate detection, error reports, source retention and processing history.

## 22. Development sequence

1. Platform foundation: authentication, role model, organisation/personnel master, audit, documents and notifications.
2. Inventory and Finance.
3. Campaign and population master.
4. Vaccination import/attribution, completion and verification.
5. DSC and reporting.
6. Samples and disease surveillance.
7. Remaining administration modules.
8. Integration, security, performance, user acceptance and deployment.

## 23. Open decisions

- Final role-permission matrix and user counts.
- Per-campaign performance formulas and thresholds.
- Sampling and rounding method for 5% and 2% checks.
- Exact editable UC template and verified financial-head labels.
- Treatment of issued but unencashed cheques.
- Further vehicle request approval rules and reminder lead times.
- Further completion report signatory/attachment rules, if any.
- NICDSign compatibility proof on Windows/Linux.
- Hosting provider, server sizing, backup retention and operational ownership.
- Detailed sub-workflows for procurement, office administration and staff administration.

## 24. Acceptance principles

- Users cannot act outside authorised scope.
- Completed stock/finance transactions remain traceable and are corrected only through authorised workflows.
- Real-world people/institutions/items/campaigns are not duplicated.
- Imports are validated and previewed before commit.
- Reports reconcile to source records and identify data provenance.
- Signed documents retain valid signatures and version history.
- Dashboard/report data respects access scope.
- UI is usable on desktop/mobile and follows approved brand identity.
- Backups are restore-tested, not merely generated.
