# EthicBasket

**Proof Over Promise. Commerce With Conscience.**

EthicBasket is a modular, ethical commerce platform built with Next.js App Router and Tailwind CSS. It empowers transparent, community-driven development across three foundational pillars: Digital, Governance, and Vital Assets.

---

## 🧱 Project Structure

```
app/
├── page.tsx                  # Landing page (brand name + slogan)
├── layout.tsx                # Global layout with Header + Footer
├── home/                     # Main overview page
│   └── three-pillars/        # Pillar-specific pages
│       ├── digital/
│       ├── governance/
│       └── vital-assets/
components/
├── Header.tsx                # Responsive nav with dropdowns
├── Footer.tsx                # Social + legal links
public/images/                # Product and overview images
styles/
└── globals.css               # Font and Tailwind setup
```

---

## 🚀 Tech Stack

- **Next.js 15+** (App Router, Turbopack)
- **Tailwind CSS** (utility-first styling)
- **Google Fonts** (`Inter`, `Playfair Display`)
- **Lucide Icons** (hamburger menu)

---

## 📦 Setup

```
npm install
npm run dev
```

App runs at `http://localhost:3000` (or fallback port if busy).

---

## 📁 Pages

- `/` — Brand landing page  
- `/home` — Pillar overview  
- `/three-pillars/digital/...` — Nexascend CLI, Nex API, etc.  
- `/three-pillars/vital-assets/...` — LifeFuel, Soléa, etc.  
- `/three-pillars/governance/...` — Constitution Kit, NexVote, etc.

---

## 📜 License

© 2025 EthicBasket. All rights reserved.

