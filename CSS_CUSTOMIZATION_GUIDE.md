# CSS Color System - Quick Reference Guide

## 🎨 Overview

Your CSS now uses a **three-tier architecture**:
1. **Brand Palette** - Your foundation colors (lines 1-24 in style.css)
2. **Global Semantics** - Functional roles used everywhere (lines 26-58)
3. **Scoped Components** - Section/component-specific variables (scattered throughout)

---

## 🚀 Common Customizations

### 1️⃣ Change Entire Color Scheme

**Location:** `:root` section (top of style.css, lines 7-20)

```css
/* Primary brand colors */
--brand-cyan: #9333ea;        /* Changes ALL cyan accents to purple */
--brand-slate: #1e293b;       /* Changes headings to darker slate */
--brand-coral: #f97316;       /* Changes CTAs/emphasis to orange */
--brand-purple: #a855f7;      /* Used in team avatars */
--brand-teal: #14b8a6;        /* Used in tour gradients */
```

**What this affects:**
- Navigation hover states
- Button backgrounds
- Service icons
- Section highlights
- Glow effects
- Tour gradients

---

### 2️⃣ Section Title Colors (Two Words)

#### Light Sections (Services, Team, FAQ, Location)

**Location:** `.light-section` (around line 212)

```css
.light-section {
  --heading-default: var(--brand-slate);     /* First word: "Our", "Meet The" */
  --heading-highlight: var(--brand-cyan);    /* Second word: "Services", "Experts" */
}
```

**Examples:**
```css
/* Make both words the same color */
--heading-default: #06b6d4;
--heading-highlight: #06b6d4;

/* Make first word red, second word blue */
--heading-default: #dc2626;
--heading-highlight: #2563eb;

/* Make first word gray, second word pop */
--heading-default: #64748b;
--heading-highlight: var(--brand-coral);
```

#### Dark Sections (Testimonials, Tour, Contact)

**Location:** `.dark-section` (around line 256)

```css
.dark-section {
  --heading-default: var(--neutral-50);      /* First word: "Patient", "Office" */
  --heading-highlight: var(--brand-cyan);    /* Second word: "Stories", "Tour" */
}
```

**Examples:**
```css
/* Make highlights orange/coral */
--heading-highlight: var(--brand-coral);

/* Make first word bright white */
--heading-default: white;

/* Make second word purple */
--heading-highlight: #9333ea;
```

---

### 3️⃣ Dark Section Background & Overlay

**Location:** `.dark-section` (around line 256)

```css
.dark-section {
  --section-bg: black;           /* Background color behind image */
  --section-text: black;         /* Text color (usually black for contrast) */
  --overlay-opacity: 0.2;        /* 0 = fully visible, 1 = fully hidden */
  --overlay-blur: 8px;           /* Amount of blur on background */
}
```

**Examples:**
```css
/* More visible background image */
--overlay-opacity: 0.4;
--overlay-blur: 4px;

/* Less visible background (darker) */
--overlay-opacity: 0.1;
--overlay-blur: 12px;

/* Different background color */
--section-bg: #1a1a1a;
```

---

### 4️⃣ Navigation Bar Styling

**Location:** `.glass-nav` (around line 321)

```css
.glass-nav {
  --nav-bg: rgba(15, 23, 42, 0.85);          /* Background color */
  --nav-bg-hover: rgba(15, 23, 42, 0.95);    /* Background on hover */
  --nav-border: rgba(255, 255, 255, 0.1);    /* Border color */
  --nav-border-hover: rgba(255, 255, 255, 0.2);
  --nav-shadow: var(--shadow-lg);
  --nav-shadow-hover: var(--shadow-xl);
}
```

**Examples:**
```css
/* Light/frosted glass effect */
--nav-bg: rgba(255, 255, 255, 0.1);
--nav-border: rgba(255, 255, 255, 0.3);

/* Darker, more opaque */
--nav-bg: rgba(0, 0, 0, 0.9);
--nav-bg-hover: rgba(0, 0, 0, 0.95);

/* More visible border */
--nav-border: rgba(255, 255, 255, 0.3);
--nav-border-hover: rgba(255, 255, 255, 0.5);
```

---

### 5️⃣ Button Colors

**Location:** Various button classes throughout CSS

#### Primary Button (Hero "Book Appointment")
```css
.btn-primary {
  background: var(--accent-primary);      /* Uses brand cyan */
  color: white;
  box-shadow: 0 10px 30px var(--glow-primary);
}

.btn-primary:hover {
  background: var(--accent-emphasis);     /* Changes to coral on hover */
  box-shadow: 0 15px 40px var(--glow-emphasis);
}
```

**Change it:**
```css
/* Make primary button purple */
.btn-primary {
  background: #9333ea;
}

/* Different hover color */
.btn-primary:hover {
  background: #7c3aed;
}
```

#### CTA Button (Header "Book")
```css
.cta-button {
  background: var(--accent-primary);
  color: white;
  box-shadow: 0 4px 15px var(--glow-primary);
}

.cta-button:hover {
  background: var(--accent-emphasis);
  box-shadow: 0 8px 25px var(--glow-emphasis);
}
```

---

### 6️⃣ Tour Section Gradients

**Location:** `#tour` section (around line 914)

```css
#tour {
  --tour-gradient-cyan-start: var(--brand-cyan);
  --tour-gradient-cyan-end: var(--brand-cyan-dark);
  --tour-gradient-teal-start: var(--brand-cyan-dark);
  --tour-gradient-teal-end: var(--brand-cyan-darker);
  --tour-gradient-emerald-start: var(--brand-teal);
  --tour-gradient-emerald-end: var(--brand-teal-dark);
}
```

**Examples:**
```css
/* Make first card purple gradient */
--tour-gradient-cyan-start: #9333ea;
--tour-gradient-cyan-end: #7c3aed;

/* Make second card orange gradient */
--tour-gradient-teal-start: #f97316;
--tour-gradient-teal-end: #ea580c;

/* Make third card green gradient */
--tour-gradient-emerald-start: #10b981;
--tour-gradient-emerald-end: #059669;
```

---

### 7️⃣ Team Member Avatar Colors

**Location:** `.member-avatar` section (around line 761)

```css
/* Each team member can have different overlay color */
.member-avatar[data-initials="LF"] {
  --overlay-color: rgba(6, 182, 212, 0.15);    /* Cyan overlay */
}

.member-avatar[data-initials="PS"] {
  --overlay-color: rgba(252, 110, 85, 0.15);   /* Coral overlay */
}

.member-avatar[data-initials="PB"] {
  --overlay-color: rgba(168, 85, 247, 0.15);   /* Purple overlay */
}
```

**Change overlay colors:**
```css
/* Make LF green */
.member-avatar[data-initials="LF"] {
  --overlay-color: rgba(16, 185, 129, 0.15);
}

/* Make PS blue */
.member-avatar[data-initials="PS"] {
  --overlay-color: rgba(59, 130, 246, 0.15);
}
```

**Change initials color:**
```css
.member-avatar {
  --avatar-text-color: #dc2626;  /* Red initials instead of slate */
}
```

---

### 8️⃣ Text Colors (Global)

**Location:** `:root` section (lines 33-36)

```css
--text-primary: var(--neutral-900);      /* Main body text - dark */
--text-secondary: var(--neutral-500);    /* Muted/secondary text - gray */
--text-inverse: var(--neutral-200);      /* Light text on dark backgrounds */
```

**Examples:**
```css
/* Darker text */
--text-primary: #000000;

/* Lighter secondary text */
--text-secondary: #9ca3af;

/* Brighter inverse text */
--text-inverse: white;
```

---

### 9️⃣ Shadows

**Location:** `:root` section (lines 48-51)

```css
--shadow-sm: 0 10px 40px -10px rgba(0, 0, 0, 0.05);
--shadow-md: 0 25px 50px -12px rgba(6, 182, 212, 0.25);
--shadow-lg: 0 10px 40px -10px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
```

**Examples:**
```css
/* More dramatic shadows */
--shadow-sm: 0 10px 40px -10px rgba(0, 0, 0, 0.15);
--shadow-md: 0 25px 50px -12px rgba(6, 182, 212, 0.5);

/* Softer shadows */
--shadow-lg: 0 10px 40px -10px rgba(0, 0, 0, 0.2);
```

---

### 🔟 Glow Effects

**Location:** `:root` section (lines 43-44)

```css
--glow-primary: rgba(6, 182, 212, 0.3);     /* Cyan glow */
--glow-emphasis: rgba(252, 110, 85, 0.4);   /* Coral glow */
```

**Examples:**
```css
/* Purple glow */
--glow-primary: rgba(147, 51, 234, 0.3);

/* Stronger glow */
--glow-emphasis: rgba(252, 110, 85, 0.6);

/* Subtle glow */
--glow-primary: rgba(6, 182, 212, 0.15);
```

---

## 📝 Quick Tips

### ✅ DO:
- Change brand colors to rebrand the entire site quickly
- Use scoped variables for section-specific customizations
- Test changes by refreshing browser (hot reload is enabled)
- Keep opacity values between 0 and 1
- Use rgba() for colors that need transparency

### ❌ DON'T:
- Edit multiple places for the same color - use variables!
- Use direct hex colors - reference brand palette instead
- Forget to check both light and dark sections
- Set overlay-opacity to 0 (makes background invisible)

---

## 🎯 Most Common Tasks

### Change Primary Brand Color Everywhere
```css
:root {
  --brand-cyan: #your-new-color;
}
```

### Make Dark Section Titles Orange
```css
.dark-section {
  --heading-highlight: #f97316;
}
```

### Lighten Dark Sections
```css
.dark-section {
  --overlay-opacity: 0.5;
  --overlay-blur: 4px;
}
```

### Change All Buttons to Purple
```css
:root {
  --accent-primary: #9333ea;
  --accent-emphasis: #7c3aed;
}
```

---

## 🔍 Where To Find Things

| Element | Location in style.css |
|---------|----------------------|
| Brand colors | `:root`, lines 7-20 |
| Global semantics | `:root`, lines 26-58 |
| Light section titles | `.light-section`, ~line 212 |
| Dark section titles | `.dark-section`, ~line 256 |
| Navigation | `.glass-nav`, ~line 321 |
| Hero buttons | `.btn-primary`, ~line 541 |
| Tour gradients | `#tour`, ~line 914 |
| Team avatars | `.member-avatar`, ~line 761 |
| Testimonials | `.testimonial-card`, ~line 848 |

---

## 💡 Pro Tips

1. **Always edit brand palette first** - it cascades everywhere
2. **Use browser DevTools** to preview changes before making them permanent
3. **Keep a backup** of working color schemes you like
4. **Be consistent** - stick to your brand colors across the site
5. **Test in both light and dark** sections after color changes

---

**Need help?** All variables are clearly labeled with comments explaining what they do!
