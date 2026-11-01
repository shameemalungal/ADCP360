# ADCP 360°

**Integrated Administration & Operations Platform**  
*Efficient Administration. Enhanced Animal Health Care.*  
Animal Disease Control Project, Malappuram, Kerala, India.

---

## 1. Project Overview

ADCP 360° is a centralised, web-first administration and operations platform for the Animal Disease Control Project (ADCP), Department of Animal Husbandry, Malappuram, Kerala. It connects operational, financial, inventory, campaign, vaccination, surveillance, sample-management, document, and administrative workflows through shared master data and a common audit trail.

**Production Hosting Domain:** [adcpmalappuram.in](https://adcpmalappuram.in)  
**Guiding Principle:**
> Enter information once. Reuse it everywhere. Connect every department and every transaction. Generate reports automatically.

---

## 2. Current Implementation Status

| Component | Status | Details |
|---|---|---|
| **District Coordinator Dashboard** | ✅ **Implemented** | Core desktop application shell with live KPI metrics, campaign performance area chart, species distribution donut chart, statutory verification workflow, disease surveillance indicators, financial outlay, cold-chain inventory alerts, vehicle allocations, priority work queue, and administrative activity timeline. |
| **Multi-Role Dropdown & Context Switching** | ✅ **Implemented** | User identity display (name, designation, primary office, PEN ID) and seamless switching between primary role (*District Coordinator*) and additional charges (*Taluk Coordinator*, *Supervisor*). Sidebar navigation and dashboard data automatically re-scope to the active role. |
| **Authentication & Session Lifecycle** | ✅ **Implemented** | Functional authentication context with session termination confirmation dialog (*"Are you sure you want to log out?"*), branded login screen, and mock profile resumption. |
| **Account Option Dialogs** | ✅ **Implemented** | Popups for *Employee Profile Details*, *Account Settings* (DSC token status), and *Change Password*. |
| **Subsequent Departmental Modules** | ⏳ **Planned** | Stock & Inventory, Finance & UC, Purchase & Procurement, Staff Management, Vehicle Management, Office Administration, Document Management, Field Reporting, Campaign Management, Sample Collection, Disease Surveillance, Vaccination Reports, Reporting Centre. |

---

## 3. Technology Stack

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with official ADCP 360° brand color palette
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts:** [Recharts 2](https://recharts.org/) (Area Chart, Donut/Pie Chart, Stacked Progress Bars)
- **Typography:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts

### Official Brand Colour Palette

| Role | Colour | Hex Code |
|---|---|---|
| Primary Deep Teal | Trust, Professional, Stability | `#0E7D7A` |
| Primary Turquoise | Growth, Health, Reliability | `#14B8A6` |
| Nature Green | Nature, Wellbeing, Progress | `#84D46B` |
| Information Blue | Actions, Digital, Verification | `#3B82F6` |
| Alert Orange | Warnings, Buffer Thresholds | `#F59E0B` |
| Highlight Yellow | Near Expiry Notices | `#FCD34D` |
| Background | Ice Clean Background | `#F0F9FF` |
| Surface | Hairline Borders & Dividers | `#E2E8F0` |

---

## 4. Getting Started & Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) v20+ 
- [npm](https://www.npmjs.com/) v10+

### Installation
```bash
# Clone the repository
git clone https://github.com/shameemalungal/ADCP360.git
cd ADCP360

# Install dependencies
npm install

# Setup environment variables (optional for local mock mode)
cp .env.example .env
```

### Running Locally
```bash
# Start local development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally (http://localhost:4173)
npm run preview
```

---

## 5. Repository Structure

```
ADCP360/
├── branding/                     # Official brand identity board and emblem assets
│   ├── ADCP_360_Official_Brand_Identity_Board.png
│   ├── logo_emblem_perfect.png
│   └── README.md
├── docs/
│   ├── architecture/             # System architecture baseline v1.0
│   │   └── SYSTEM_ARCHITECTURE_BASELINE_v1.0.md
│   ├── decisions/                # Project decisions, history & development workflow
│   │   ├── DEVELOPMENT_WORKFLOW.md
│   │   └── PROJECT_DECISIONS_AND_HISTORY.md
│   └── requirements/             # Consolidated functional requirements specification
│       ├── ADCP_360_Requirements_Specification_v1.0.md
│       └── ADCP_360_Requirements_Specification_v1.0.docx
├── project-notes/                # Repository status and synchronization records
│   └── REPOSITORY_CONTENTS_AND_STATUS.md
├── prompts/                      # UI specifications & prompt archives
│   ├── ADCP_360_LOGO_REDESIGN_EXPERIMENT.md
│   ├── ADCP_360_Stitch_Full_UI_Prompt.txt
│   ├── ANTIGRAVITY_DISTRICT_DASHBOARD_PROMPT.md
│   └── ANTIGRAVITY_WAYFIND_DASHBOARD_EXPERIMENT.md
├── public/                       # Static public assets (adcp-logo.png)
│   └── adcp-logo.png
├── scripts/                      # Automated browser verification scripts
│   ├── capture_dropdown.js
│   ├── take_screenshots.js
│   ├── test_account_modals.js
│   └── test_role_switch.js
├── src/                          # Application source code
│   ├── components/
│   │   ├── auth/                 # Authentication & login screens
│   │   ├── common/               # Reusable Card, Badge components
│   │   ├── dashboard/            # District Coordinator Dashboard sections A-H
│   │   └── layout/               # Topbar, Sidebar, MainLayout, Modals
│   ├── context/                  # AuthContext with multi-role switching & audit logging
│   ├── data/                     # Mock operational datasets for Malappuram
│   ├── types/                    # TypeScript interfaces for auth & dashboard
│   ├── App.tsx                   # Main application container
│   ├── index.css                 # Global styles & scrollbars
│   └── main.tsx                  # React entrypoint
├── .env.example                  # Environment configuration template
├── .gitignore                    # Git exclusion rules
├── package.json                  # NPM dependencies & scripts
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite build configuration
```

---

## 6. Development Workflow & Git Guidelines

1. **Default Branch:** `main` holds the latest verified and stable codebase.
2. **Branch Naming:**
   - Feature branches: `feature/*`
   - Bug fixes: `fix/*`
   - UI design experiments: `ui-experiment/*`
3. **Commit Convention:** Structured Conventional Commits (`feat(...)`, `fix(...)`, `docs(...)`, `chore(...)`).
4. **Data Security Policy:** Never commit real operational data, sensitive veterinary records, passwords, private keys, or DSC tokens.
