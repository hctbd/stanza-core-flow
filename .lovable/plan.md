

## Complete ABDM-Native Website Pivot Implementation

This plan combines all changes: Hero section updates, new Data Flow Diagram section, and Footer updates while keeping Features and Population Insights sections unchanged.

---

### Summary of All Changes

| Section | Current State | New State |
|---------|---------------|-----------|
| Hero Badge | None | "Currently in MVP Development" pill badge |
| Hero Headline | "Stanza Health: India's ABDM Compliant Data Backbone" | "ABDM Native Data Analytics" |
| Hero Subheadline | Current ABDM text | Full integration messaging |
| Hero CTA | "Join Waitlist" | "Join Pilot Program" |
| Hero Check Items | Learning curve, friction, burnout | ABDM Compliant, DHIS Ready, Analytics |
| New Section | None | Data Flow Diagram (before Features) |
| Features | Keep as-is | Keep as-is |
| Population Insights | Keep as-is | Keep as-is |
| Footer Heading | "Talk to Stanza" | "Join the Pilot Program" |
| Footer CTA | "Join Waitlist" | "Join Pilot Program" |
| SEO/Meta | AI Agentic Platform | ABDM Data Analytics |

---

### 1. Hero Section Updates

**File:** `src/components/sections/Hero.tsx`

**Changes:**

**a) Add MVP Status Badge (above headline):**
```tsx
<span className="inline-block bg-secondary text-secondary-foreground border rounded-full px-4 py-1.5 text-sm font-medium mb-6">
  Currently in MVP Development
</span>
```

**b) Update Headline (line 12-13):**
- From: "Stanza Health: India's ABDM Compliant Data Backbone"
- To: "ABDM Native Data Analytics"

**c) Update Subheadline (line 15-16):**
- From: "Your Data, Unified. Your Revenue, Unlocked..."
- To: "Stanza Health integrates unstructured medical data with your EHR to unify patient histories, enable cross-institution analytics, and unlock Government ABDM DHIS incentives."

**d) Update CTA Button (line 21):**
- From: "Join Waitlist"
- To: "Join Pilot Program"
- Change icon from `PlayCircle` to `Rocket`

**e) Update Check Items (lines 26-28):**
- "ABDM Compliant"
- "DHIS Incentives Ready"
- "Cross-Institution Analytics"

---

### 2. Create New Data Flow Diagram Component

**File:** `src/components/sections/DataFlowDiagram.tsx` (new)

**Structure:**

```text
Section Header:
- Title: "Deep Data Integration"
- Subtitle: "From fragmented records to unified patient histories and government incentives."

Three-Column Flow:
+-------------------+     +-------------------+     +-------------------+
|  FRAGMENTED DATA  | --> |   STANZA ENGINE   | --> |  STRUCTURED VALUE |
+-------------------+     +-------------------+     +-------------------+
| FileText Notes    |     | Brain AI Models   |     | History Records   |
| Database EHRs     |     | Network ABDM APIs |     | IndianRupee DHIS  |
| FileSpreadsheet   |     |                   |     |                   |
+-------------------+     +-------------------+     +-------------------+
```

**Component Details:**
- Uses existing `Card`, `CardHeader`, `CardTitle`, `CardContent` components
- Icons from lucide-react: `FileText`, `Database`, `FileSpreadsheet`, `Brain`, `Network`, `History`, `IndianRupee`, `ArrowRight`, `ArrowDown`
- Middle card has gradient accent: `<div className="h-10 w-10 rounded-md bg-gradient-primary shadow-glow mb-4" />`
- Responsive: `flex-col md:flex-row` layout
- Arrow connectors: `ArrowRight` for desktop (`hidden md:block`), `ArrowDown` for mobile (`block md:hidden`)
- Cards use `hover-scale` and `shadow-elegant` classes
- Section uses `py-16` (matching other sections)

---

### 3. Update Index.tsx

**File:** `src/pages/Index.tsx`

**Changes:**

**a) Add import (after line 3):**
```tsx
import DataFlowDiagram from "@/components/sections/DataFlowDiagram";
```

**b) Insert component between Hero and Features (after line 42):**
```tsx
<Hero />
<DataFlowDiagram />  {/* NEW */}
<Features />
```

**c) Update SEO metadata (lines 12-13):**
- Title: "Stanza Health - ABDM Native Data Analytics for Indian Healthcare"
- Description: "Stanza Health integrates unstructured medical data with your EHR to unify patient histories, enable cross-institution analytics, and unlock Government ABDM DHIS incentives."

**d) Update JSON-LD schema (lines 25-27):**
- Remove "Stanza Scribe" department reference
- Update application name to "ABDM Data Analytics Platform"

---

### 4. Update Footer

**File:** `src/components/SiteFooter.tsx`

**Changes:**

**a) Update heading (line 80):**
- From: "Talk to Stanza"
- To: "Join the Pilot Program"

**b) Update description (lines 81-83):**
- From: "Ready to see how Stanza Health can reduce administrative burden..."
- To: "Be among the first to integrate with India's ABDM ecosystem. Early access partners get hands-on onboarding and dedicated support."

**c) Update form type (line 21):**
- From: `type: 'waitlist'`
- To: `type: 'pilot'`

**d) Update button text (line 94):**
- From: "Join Waitlist"
- To: "Join Pilot Program"

---

### File Changes Summary

| File | Action | Lines Changed |
|------|--------|---------------|
| `src/components/sections/Hero.tsx` | Modify | Badge, headline, subheadline, CTA, check items |
| `src/components/sections/DataFlowDiagram.tsx` | Create | New component (~80 lines) |
| `src/pages/Index.tsx` | Modify | Import, render order, SEO metadata |
| `src/components/SiteFooter.tsx` | Modify | Heading, description, button text |

---

### Technical Notes

- All changes use existing Tailwind classes and CSS variables from `index.css`
- No changes to fonts, colors, border-radius, or component base styles
- Features section remains completely unchanged
- Population Insights section remains completely unchanged
- Badge uses existing design tokens: `bg-secondary text-secondary-foreground`
- DataFlowDiagram follows same Card styling patterns as Features
- Mobile responsive with vertical stacking and arrow direction changes
- `IndianRupee` icon used for DHIS payout references (available in lucide-react)

