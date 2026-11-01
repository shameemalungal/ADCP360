# Antigravity Prompt: ADCP 360° District Coordinator Dashboard

You are a senior product designer and frontend engineer. Build ONLY the District Coordinator Dashboard for ADCP 360°, an integrated administration and operations platform for the Animal Disease Control Project, Malappuram, Kerala. Study both visual references: the official ADCP 360° Brand Identity Board and the Wayfind-inspired dashboard reference. The official ADCP identity remains controlling; Wayfind contributes layout inspiration only.

## First inspect the repository
Inspect the existing project, stack, current dashboard and uncommitted changes. Do not overwrite existing files or discard work. If this is a fresh repository, use React, TypeScript, Vite, Tailwind CSS, Lucide icons and Recharts unless the project already specifies a different stack. Keep this work limited to the dashboard.

## Reversible workflow
Use branch `ui-experiment/wayfind-inspired-dashboard`. Preserve original dashboard. If the branch exists, inspect it before writing. Do not force-push or reset. Do not modify unrelated modules.

## Brand identity
Use Plus Jakarta Sans and this palette: deep teal #0E7D7A; turquoise #14B8A6; green #84D46B; blue #3B82F6; orange #F59E0B; yellow #FCD34D; background #F0F9FF; surface #E2E8F0; text #475569. Primary gradient #14B8A6→#84D46B; secondary gradient #3B82F6→#06B6D4. Prefer bright light surfaces, tasteful colour panels, subtle borders/shadows, strong type hierarchy and disciplined whitespace. Use the supplied ADCP logo asset without distortion. Do not invent or use Wayfind branding.

## Application shell
Create a polished desktop shell with collapsible left navigation, top bar, global search, notification menu and profile dropdown. Sidebar modules: Dashboard, Stock & Inventory, Finance & UC, Purchase & Procurement, Staff Management, Vehicle Management, Office Administration, Document Management, Field Reporting, Campaign Management, Sample Collection, Disease Surveillance, Vaccination Reports, Reporting Centre. Bottom: User Management, Settings, Help. Profile menu: My Profile, role switcher (only if multiple assignments), Account Settings, Change Password, Logout. Logout confirms before ending session. Role switching keeps the same employee session and changes active role/scope; do not model multiple roles as separate accounts.

## Dashboard content
Header title “District Overview”; subtitle “An integrated overview of ADCP Malappuram operations”; date and financial-year selector.

KPI cards: Active Campaigns (2); Total Vaccinations (1,24,850); Pending Completion Reports (8); Verification Pending (14); Vaccine Stock Alerts (3); Near Expiry Items (5). Clearly mark figures as illustrative demo data.

Campaign section: campaign selector, progress-over-time chart, target, completed vaccinations and achievement indicator. Include vaccination-by-species doughnut chart. Do not claim a final universal achievement formula; calculations remain campaign-configurable.

Operational sections: report submission status (expected/received/pending/returned); verification workflow (Supervisor → Taluk Coordinator → District Coordinator with pending counts); disease surveillance (new outbreaks, pending lab confirmation, confirmed outbreaks, samples awaiting results).

Finance: funds available, FY expenditure, bank balance, cash in hand, UC status and expenditure by financial head, formatted in INR.

Inventory: low-stock and near-expiry vaccine/logistics alerts. Clearly distinguish district actual stock from institution advisory balances.

Vehicle operations: today's allocations, available vehicles, insurance/tax/permit/pollution renewal reminders and maintenance reminders.

My Work Queue: tasks awaiting report receipt, verification, signature, UC reconciliation, stock supply completion or vehicle renewal. Recent Activity: stock supply completion, report receipt, DSC signature, bank reconciliation and lab import.

## UI quality
Avoid generic template styling, oversized hero panels, unnecessary illustrations, huge empty charts, excessive rounding and too many gradients. It is a working administrative dashboard, not a marketing site. Optimise for 1440px desktop, then tablet/mobile. Tables and operational lists must remain readable. Use realistic sample Malappuram place names but no real personal data.

## Functional prototype
Implement collapsible sidebar, active navigation, filters/selectors, global search UI, notification dropdown, profile dropdown, role switcher demo if multi-role sample is present, clickable work queue and responsive navigation. Placeholder navigation destinations are acceptable; do not build other module pages.

## Incremental build policy
For this small build, perform only basic compile/build and render checks. Do not run a comprehensive test suite. After implementation, tell me exactly what to inspect manually: brand fidelity, layout, KPI arrangement, charts, information density, top navigation/profile menu and responsive overflow. State what changed and any known limitations. Do not claim full testing if only basic checks were done. Wait for feedback.