# Asanti Shores Limited — Corporate Maritime Website

> **Premium International Maritime Services & Vessel Logistics Platform**  
> Operational Base: Kirikiri Town, Lagos, Nigeria • RC: 2018901 • Incorporated: Jan 12, 2023

---

## 1. Project Overview

This repository contains the complete, production-ready corporate website for **Asanti Shores Limited**, engineered for international shipping companies, vessel operators, marine contractors, and offshore energy procurement teams.

### Tech Stack
- **Framework:** Next.js (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4, custom maritime design tokens
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans (Headings), Inter (Body)
- **Email & Form Handling:** Next.js Server Actions / API Routes with rate limiting, honeypot anti-spam, and optional Resend/SMTP transactional dispatch

---

## 2. Seven Dedicated Service Divisions

1. **Ship & Crew Management** (`/services/ship-crew-management`): Technical husbanding, STCW crew placement, NIMASA cabotage compliance.
2. **Ship Chandling** (`/services/ship-chandling`): Fresh & frozen food provisions, bonded stores, deck & engine consumables.
3. **Marine Equipment Sales & Supply** (`/services/marine-equipment-supply`): Certified safety gear, pumps, valves, rigging, wire ropes, and spares.
4. **Bunker Supply & Fresh Water** (`/services/bunker-fresh-water-supply`): High-grade MGO/VLSFO bunkering coordination and potable water barge deliveries.
5. **Underwater Services** (`/services/underwater-services`): Class-approved in-water surveys, hull cleaning, propeller polishing, and CCTV inspections.
6. **Tugboats & Barges Hire** (`/services/tugboats-barges-hire`): Harbor & ocean towage, ramp barges, and deck cargo platforms.
7. **Service Boats Hire & Logistics** (`/services/service-boats-logistics`): Fast crew transfer boats (CTV), security escort coordination, and offshore dispatch.

---

## 3. Site Architecture & Routes

| Route | Description |
|---|---|
| `/` | Corporate homepage with cinematic hero, capability strip, about teaser, 7 service cards, benefits, capabilities, industries served, and company profile download. |
| `/about` | Corporate history, mission, vision, operational philosophy, and verified registration details. |
| `/services` | Directory of all 7 maritime services with capability highlights. |
| `/services/[slug]` | Dedicated deep-dive service pages with scope checklists, equipment standards, FAQs, customer requirements, and quote CTA. |
| `/capabilities` | Comprehensive overview of fleet charter assets, Nigerian port network, and technical personnel. |
| `/safety-compliance` | HSE policy statement, NIMASA/NPA regulatory alignment, and MARPOL environmental commitments. |
| `/request-a-quote` | Commercial procurement form with vessel info, port selection, date, technical specs, and instant feedback. |
| `/contact` | Verified contact information (Kirikiri Lagos office, 24/7 phone, email, operating hours, and general contact form). |
| `/privacy-policy` | Data protection and commercial information confidentiality policy. |
| `/terms` | Commercial engagement principles and maritime quotation terms. |
| `/sitemap.xml` | Dynamically generated search engine sitemap. |
| `/robots.txt` | Crawler directives. |

---

## 4. Local Development & Setup

### Prerequisites
- Node.js 18.18+ or 20+
- npm or pnpm

### Installation
```bash
# Clone or navigate to the project directory
cd Asanti

# Install dependencies
npm install
```

### Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your parameters:
```env
NEXT_PUBLIC_SITE_URL="https://asantishores.com"
NEXT_PUBLIC_CONTACT_EMAIL="operations@asantishores.com"
NEXT_PUBLIC_CONTACT_PHONE="+234 803 300 1234"
NEXT_PUBLIC_WHATSAPP_NUMBER="2348033001234"
CONTACT_RECIPIENT_EMAIL="operations@asantishores.com"

# Optional: Add Resend API key for automatic transactional email dispatch
RESEND_API_KEY="re_..."
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 5. Production Build & Verification

```bash
# Verify TypeScript and create production build
npm run build

# Start the production server
npm run start
```

---

## 6. Corporate Identity & Verified Details

- **Company Legal Name:** ASANTI SHORES LIMITED
- **Registration Number:** RC 2018901
- **Tax Identification Number (TIN):** 31273907-0001
- **Incorporation Date:** January 12, 2023
- **Registered Address:** Shop 04, Prowa International Shopping Complex, Opp. Kirikiri Police Station, Kirikiri Town, Lagos, Nigeria
- **Operations Contact:** `operations@asantishores.com` | `+234 (0) 803 300 1234`
- **Supported Operational Ports:** Lagos Port Complex (Apapa), Tin Can Island, Kirikiri Lighter Terminal, Onne Port & Free Zone, Port Harcourt Commercial Port, Warri Port Complex, Calabar Port, and Offshore Gulf of Guinea Terminals.
