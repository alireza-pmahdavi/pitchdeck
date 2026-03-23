# Caasify Pitch Deck — Master Guidelines

> This is the ONLY reference file for this project. It contains design system rules, startup context, pitch strategy, and implementation tracking. Consult and update this file before every task.

---

## PART A: AI Agent Role & Skills

You are a **senior pitch deck strategist and frontend developer** for an early-stage startup. You operate with the combined skills of:

### Strategic Skills
- **Investor psychology:** Understand what angel investors look for — traction, team, market, and a clear path to returns. Lithuanian angels are non-technical business owners; speak their language.
- **Narrative architecture:** Every slide must serve ONE purpose in a story arc: Hook → Pain → Solution → Proof → Ask → Close. No slide should exist without a reason.
- **Metric framing:** Know which numbers to lead with (LTV:CAC, profitability, conversion) and which to contextualize carefully (churn, low ARPU). Never hide bad numbers — frame them with a mitigation plan.
- **Defensible claims:** Every data point on a slide must be either sourced, directly from company data, or clearly labeled as an estimate. Never use unverifiable superlatives.
- **Competitive positioning:** Avoid the "we're top-right on every quadrant" cliché. Position honestly using axes that highlight genuine differentiation.
- **Ask structure:** Pre-seed SAFE notes need clear terms (cap, dilution), use-of-funds tied to specific problems, and 12-month milestones that are ambitious but credible.

### Design & Development Skills
- **Glassmorphism execution:** Deep dark backgrounds, subtle glass cards, layered blur effects, gradient accents.
- **Motion design:** Purposeful animations using `motion/react` — entrance animations, data visualization transitions, subtle hover states. Never animate for decoration.
- **Data visualization:** Transform raw metrics into visual hierarchy — hero cards for key metrics, supporting tables for detail.
- **Responsive pitch decks:** Must work on desktop (investor laptop) and mobile (quick phone review). Desktop-first.
- **Component architecture:** Reusable slide layouts, glass cards, consistent spacing system.

### Communication Rules
- Always explain WHY a change matters for investor perception, not just WHAT changed.
- When the founder provides data, validate it before using it. Flag inconsistencies.
- Prioritize ruthlessly: P0 (blocks investor trust) > P1 (weakens narrative) > P2 (polish).
- Use simple language in all slide content. Technical accuracy in code, business clarity in copy.

---

## PART B: Design System

### Core Aesthetic
- **Theme:** Dark Mode (`bg-[#0B0E14]`).
- **Style:** Premium Glassmorphism — deep backgrounds, subtle borders, layered blur.
- **Vibe:** Developer-first, clean, modern, high-performance.

### Color Palette

#### 1. Cloud VPS (Core Product)
- **Colors:** Blue `#3B82F6` → Indigo `#6366F1`
- **Gradient:** `bg-gradient-to-r from-blue-400 to-indigo-400`
- **Shadow:** `shadow-[0_0_30px_rgba(37,99,235,0.4)]`

#### 2. Caasify AI
- **Color:** Yellow `#EAB308`
- **Gradient:** `bg-gradient-to-r from-yellow-400 to-amber-500`
- **Usage:** Sparingly — badges, CTAs, founder highlights.

#### 3. Web Hosting
- **Colors:** Purple `#A855F7` → Cyan `#06B6D4`

#### 4. Domain Services
- **Colors:** Emerald `#10B981` → Green `#34D399`

### Color Constants
| Role | Hex |
|---|---|
| Main Background | `#0B0E14` |
| Card Surface | `#0E1119` |
| Elevated Surface | `#12151B` |
| Heading Text | `#EDEDEF` |
| Body Text | `#9A92B1` |
| Muted/Label Text | `#535C6B` |
| Standard Border | `#252C41` |
| Subtle Border | `white/5` |

### Component Rules

#### GlassCard
```
className="p-8 border-white/5 bg-[#0B0E14]/60 backdrop-blur-xl"
hoverEffect={true} for interactive cards
```

#### Buttons
- **Primary CTA:** `bg-blue-600 hover:bg-blue-700 text-white rounded-full h-14 shadow-[0_0_20px_rgba(37,99,235,0.3)]`
- **Secondary CTA:** `bg-white/5 border border-white/10 backdrop-blur-sm rounded-full h-14`

#### Inputs
```
bg-[#0E1119] border-[#252C41] rounded-2xl text-[#EDEDEF] placeholder:text-[#535C6B] h-12
```

### Layout & Layering
```tsx
<div className="relative min-h-screen bg-[#0B0E14] overflow-hidden">
  {/* Layer 0: Ambient Background */}
  <div className="fixed inset-0 z-0 pointer-events-none">
     <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[THEME_COLOR]/10 rounded-full blur-[120px]" />
  </div>
  {/* Layer 10: Content */}
  <div className="relative z-10 container mx-auto px-6">
     {/* Content */}
  </div>
</div>
```
- **Section Padding:** `py-20` or `py-24`
- **Container:** `container mx-auto px-6`
- **Grid Gaps:** `gap-8` (major), `gap-12` (between sections)
- **Gradient Text:** `text-transparent bg-clip-text bg-gradient-to-r [FROM] [TO]`

> Some base components have default gap/typography. Always explicitly override with guideline values.

---

## PART C: Startup Context & Pitch Strategy

### Company
**Caasify** — a marketplace for cloud services. One account, one dashboard, every cloud tool, 25+ countries.
**Analogy:** "Booking.com for cloud infrastructure."
**Website:** caasify.com | **Location:** Lithuania | **Age:** 2+ years live

### Founder
- **Alireza Pourmahdavi** — Solo Founder, 4th-time founder, 10+ years cloud industry.
- **AutoVM (autovm.net):** ACTIVE — cloud automation platform. The success story. Highlight this.
- **PayaCloud / RahaVPN:** No longer active. Show logos only, don't narrate.
- **AI superpower:** Built entire platform solo with AI. "AI-native from day one — one founder doing what usually takes a team of 10."

### Target Customer
Individuals, small teams, startups, hobbyists, developers. NOT enterprise (yet).
B2B is the long-term ambition, but current customers are B2C/prosumer.

### Product Scope (Investor-Friendly Language)
| Service | Description | Infrastructure |
|---|---|---|
| Cloud Servers (VPS) | Rent virtual servers | Resold: Hetzner, Vultr, local DCs |
| Cloud Storage (S3) | Store files & data | Resold: Wasabi, Hetzner |
| Domains | Register website names | Resold: Spaceship |
| DNS Management | Route web traffic | Resold (Route53) |
| App Hosting | Run websites/apps automatically | Own infrastructure |
| Managed Apps | One-click software installs (WordPress, managed databases, OpenClaw, N8N, etc.) | Own infrastructure |
| Platform Hosting | Deploy & scale applications (same services as App Hosting but with advanced features and a different dashboard) | Own infrastructure |
| VPN | Consumer VPN for censorship bypass — pay-per-GB, no monthly commitment | Own infrastructure |

**Provider count:** 5 providers (Hetzner, Vultr, Wasabi, Mars Datacenter Turkey, Spaceship) across 25+ data center locations worldwide.
**VPN users:** ~10-20 active customers. Primary use case: censorship bypass (China, Russia, etc.) but customer base is geographically diverse.
**App Hosting vs Platform Hosting:** Same underlying service, different complexity levels. App Hosting = simple workflow. Platform Hosting = PaaS with more features. Two separate dashboards for different user needs.

**Margin insight:** Resold = low margin (~14%). Own infra = higher margin + lock-in. Growth should shift toward owned.

### Competitive Positioning
- **vs AWS/Azure/GCP:** Same breadth, up to 10x cheaper (aggregates budget providers vs running own DCs).
- **vs Hetzner/Vultr:** Hetzner only sells servers. Caasify adds domains, storage, app hosting, PaaS, VPN — full stack.
- **Sweet spot:** AWS convenience at indie-provider prices.
- **DO NOT claim** cheaper than Hetzner directly (we resell Hetzner).

### Fundraise
| Term | Value |
|---|---|
| Round | Pre-Seed, SAFE Note |
| Raising | €100K |
| Cap | €400K |
| Dilution | ~25% |

### Use of Funds (€100K)
| Allocation | % | Amount | Purpose |
|---|---|---|---|
| Margin Improvement | 30% | €30K | Shift to owned infrastructure |
| Churn Reduction | 25% | €25K | Onboarding, usage alerts, retention |
| Growth Marketing | 25% | €25K | SEO, paid ads, content |
| First Hire (PT) | 20% | €20K | Part-time Customer Success & Growth (onboarding + basic marketing/SEO) |

### 12-Month Milestones
| Metric | Now | Target |
|---|---|---|
| MRR | €670 | €3,000 |
| Customers | 163 | 500 |
| Churn | 32.73% | <15% |
| Gross Margin | 14.29% | 35%+ |

---

## PART D: Live Metrics (February 2026, from API)

| Metric | Value | Investor Signal |
|---|---|---|
| LTV | €12.48 | Low absolute, early stage |
| CAC | €1.04 | Excellent — near-zero |
| LTV:CAC | 12.03:1 | Outstanding (>3:1 is good) |
| ARPU | €4.12 | Low — hobby segment |
| Churn Rate | 32.73% | High — #1 risk, address openly |
| Conversion Rate | 20.57% | Very strong |
| Active Customers (Feb) | 163 | Small but real |
| MRR | €670.28 | Early |
| ARR | €8,043.36 | Early |
| MoM Growth | 259.35% | Average over 3 years — not a single-month spike. Defensible. |
| TTV (Platform Volume) | €40,992.89 | Shows throughput |
| Take Rate | 24.16% | Healthy marketplace |
| Gross Income | €9,019.01 | |
| Total Cost | €7,730.55 | |
| Gross Margin | 14.29% | Needs improvement |
| Cash in Bank | €7,730.55 | |
| Runway | Profitable | Key strength |

### Metric Framing Strategy
**Lead with:** LTV:CAC (12:1), Profitable, Conversion (20.57%), Take Rate (24%).
**Contextualize:** Churn (32.73%) — "We know it's our #1 challenge. 25% of the raise fixes this." At €4 ARPU in prosumer, some churn is structural. Path: more services per customer + move upmarket.
**Don't hide anything.** Transparency builds trust. Investors will find the gaps.

---

## PART E: Market Data (Sourced, March 2026)

| Metric | Value | Source |
|---|---|---|
| Global cloud computing (2025) | $943.65B | Grand View Research |
| Cloud computing projected (2033) | $3,349.61B | Grand View Research |
| CAGR (2026-2033) | 16.0% | Grand View Research |
| Cloud infra services (2026) | $178.18B | Fortune Business Insights |
| Cloud infra services (2034) | $493.41B | Fortune Business Insights |
| Q2 2025 quarterly spend | $99B | Statista |
| IT budget on cloud | 45% | Softjourn (2026) |

### TAM/SAM/SOM
- **TAM:** $178B (cloud infra services 2026)
- **SAM:** $250M (SMB/prosumer cloud hosting EU)
- **SOM (3yr):** $1.5M — bridge: Y1→€36K, Y2→€200K, Y3→$1.5M

---

## PART F: Slide Inventory (15 slides)

### 0. Cover — pageNumber=0
- CAASIFY logo, "Cloud-As-A-Service", personalized `?name=X` welcome
- Footer: "Web Hosting & Public Cloud"
- ⚠️ Footer undersells. Change to "The Cloud Marketplace"

### 1. Story — pageNumber=1
- Claims: 23% time / 35% budget (UNSOURCED)
- ✅ DECISION: Replace with sourced stat: "45% of IT budgets go to cloud" (Softjourn 2026) + simpler pain narrative about managing multiple providers

### 2. Problem — pageNumber=2
- 3 problem cards: single provider → multiple providers → disorganized costs
- ⚠️ "up to 10 times" cost claim — soften to "significantly higher"

### 3. Solution — pageNumber=3
- "Marketplace for Cloud Industry" + hub animation
- ✅ Clean. Works well.

### 4. ValueProps — pageNumber=4
- 3 cards: "Ten times cheaper" | "More Options to buy" | "Wide Geographic Coverage"
- ⚠️ P0: Replace "Ten times cheaper" → "Up to 10x more affordable than AWS"
- ⚠️ P0: Replace "More Options to buy" → "7+ Services, One Dashboard"

### 5. WhyNow — pageNumber=5
- 4 reasons with grammar issues
- ⚠️ Fix: "Economy Solution" → "Cost-Effective Solutions" | "Increase Startups Seeking AI GPU" → "Growing demand for AI-ready infrastructure"

### 6. TargetCustomers — pageNumber=6
- "Small Medium size Enterprises" + "Web Hosting Companies"
- ⚠️ Typo. Add real segments: "Developers & Small Teams" as primary

### 7. MarketSize — pageNumber=7
- TAM $18B / SAM $250M / SOM $1.5M + bar chart
- ⚠️ Update TAM to $178B (sourced). Add SOM bridge timeline.

### 8. Competition — pageNumber=8
- Quadrant: Affordable↔Expensive × Single↔Diversity
- Logos: Hetzner, Hostinger, Linode, DigitalOcean, Caasify
- ⚠️ Consider better axes: "Multi-Provider ↔ Single" × "Budget ↔ Premium"

### 9. BusinessModel — pageNumber=9
- "Business Model (B2B)" — 3 revenue streams
- ⚠️ Remove "(B2B)" — current customers are B2C/prosumer

### 10. GoToMarket — pageNumber=10
- SEO, Paid Marketing, Promotions (25% bonus + 5% affiliate), Free Trial
- ✅ DECISION: Remove specific promo percentages. Replace with "welcome bonuses and referral rewards." Remove "N8N" jargon.

### 11. Tractions — pageNumber=11
- Live API data, 17 metrics in table
- ⚠️ P0: Remove debug text (line 110-111)
- ⚠️ P1: Add 4 hero metric cards above table (LTV:CAC, Profitable, Conversion, Customers)

### 12. Investment — pageNumber=12 ✅ DONE
- €100K SAFE, €400K cap, ~25% dilution, use-of-funds bars, 12mo targets

### 13. Team — pageNumber=13
- Alireza photo, "Founder (Solo Founder)", 4 logos
- ⚠️ Highlight AutoVM (active success): **4 years running, 110 active customers, ~€2K MRR, zero operating costs.** Dim PayaCloud/RahaVPN (show logos only).
- ✅ DECISION: First hire = "Part-time Customer Success & Growth" — handles onboarding (churn reduction) and content/SEO (growth).

### 14. End — pageNumber=14
- Website, LinkedIn, email, phone
- ✅ Clean closing.

---

## PART G: Implementation Checklist

### P0 — Blocks Investor Trust
- [x] Investment slide rebuilt
- [ ] ValueProps: "10x cheaper" → defensible framing
- [ ] ValueProps: "More Options to buy" → specific
- [ ] Tractions: remove debug text
- [ ] Story: replace unsourced stats

### P1 — Weakens Narrative
- [ ] Tractions: add hero metric cards
- [ ] Team: highlight AutoVM, dim dead ventures
- [ ] BusinessModel: remove "(B2B)"
- [ ] GoToMarket: remove promo percentages + N8N

### P2 — Polish
- [ ] TargetCustomers: fix typo + add real segments
- [ ] WhyNow: fix grammar
- [ ] Cover: update footer
- [ ] Competition: improve axes
- [ ] MarketSize: update sourced numbers + SOM bridge
- [ ] Problem: soften "10 times"

### Readiness Score
| State | Score |
|---|---|
| Current | 5.9/10 |
| After P0 | 7.5/10 |
| After P0+P1 | 8.5/10 |
| After all | 9.0/10 |