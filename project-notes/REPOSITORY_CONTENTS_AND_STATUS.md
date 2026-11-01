# Repository Contents and Status

## Repository
- **GitHub:** https://github.com/shameemalungal/ADCP360
- **Default branch:** `main`
- **Visibility:** Public (review visibility before adding confidential source code or operational data).
- **Application source code:** ✅ Synchronised (React 18 + TypeScript + Vite + Tailwind CSS).

## Current Status (November 2026)
- **District Coordinator Dashboard UI:** Complete and verified across desktop (1440px), tablet (768px), and mobile (375px) viewports.
- **Multi-Role Dropdown & Context Switching:** Complete with `District Coordinator` (primary), `Taluk Coordinator` (additional charge), and `Supervisor` (additional charge) scopes. Permitted modules and KPI data dynamically re-scope on role selection.
- **Session Management:** Functional authentication state with logout confirmation dialog, branded login page, and mock profile resumption.
- **Binary Brand & Requirement Assets:** Included in `branding/` (`ADCP_360_Official_Brand_Identity_Board.png`, `logo_emblem_perfect.png`) and `docs/requirements/` (`ADCP_360_Requirements_Specification_v1.0.docx`).
- **Testing & Verification Scripts:** Relocated to `scripts/` (`take_screenshots.js`, `test_role_switch.js`, `test_account_modals.js`, `capture_dropdown.js`).
- **Environment Template:** Added safe `.env.example` placeholder template.

## Synchronisation Notes
- Preserved both local and remote Git histories using non-destructive merge (`--allow-unrelated-histories`).
- Renamed local branch `master` to `main` matching GitHub default branch.
- No confidential credentials, API keys, private keys, DSC PINs, or production records are committed.
