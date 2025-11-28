# CSS Refactoring Prompts

Concise, reusable prompts for AI-assisted CSS refactoring and optimization.

---

## Core Refactoring Prompt

```
Refactor my CSS to use a clean variable system:

What to avoid/fix:
• Variables mixed together in :root
• Component-specific vars in global scope  
• Duplicate/redundant color definitions
• Hard to know what affects what
• Inconsistent naming

What to achieve:
• Clean 3-tier hierarchy (Brand → Semantic → Scoped)
• Component vars scoped where used
• Zero redundancy
• Crystal clear organization
• Intuitive, semantic naming


Requirements:
1. Tier 1: Brand palette - foundation colors 
2. Tier 2: Global semantics - functional roles 
3. Tier 3: Scoped variables - within selectors 
4. Remove redundancies 
5. Consolidate duplicates
6. Use semantic names

CRITICAL: Zero visual changes. Website must look identical.
```

---

## Quick Customization Prompts

### Change Colors
```
Update brand colors:
• Primary: [current] → [new color]
• Secondary: [current] → [new color]  
• Accent: [current] → [new color]

Apply throughout, maintain contrast/accessibility.
```

### Adjust Section
```
Modify [section name] styling:
• Background: [change description]
• Text: [change description]
• [Other properties]

Keep scoped to section if possible.
```

### Component Variant
```
Create [component] variant with:
• [Property 1]: [value]
• [Property 2]: [value]

Use scoped variables, don't duplicate code.
```

---

## Analysis Prompts

### Audit
```
Audit CSS variables:
1. Find redundancies (identical values)
2. Find orphans (used once, should be scoped)
3. Find hardcoded values (should be variables)
4. Suggest consolidations

Provide: count of issues, recommended fixes.
```

### Accessibility  
```
Check color contrast (WCAG AA):
• List all text/background pairs
• Calculate ratios
• Flag failures
• Suggest fixes that maintain design

Report: pass/fail, recommendations.
```

---

## Principles

✓ **Minimal but sufficient** - Include only what's needed for clear instruction
✓ **Pattern-based** - Show before/after, not step-by-step  
✓ **General** - Works for any CSS project
✓ **Predictable** - Clear requirements = consistent results
✓ **Verifiable** - Include success criteria

---

## Usage

1. Copy relevant prompt
2. Fill in [bracketed] values if present
3. Attach CSS file or paste relevant section
4. Verify results match criteria

---

## Examples

**Bad prompt:** "Can you make my CSS better organized?"
**Good prompt:** Use Core Refactoring Prompt above

**Bad prompt:** "Change the colors to look nice"  
**Good prompt:** "Update brand colors: Primary #06b6d4 → #9333ea, maintain current usage patterns"

**Bad prompt:** "Fix my variables"
**Good prompt:** Use Audit prompt, review report, then refactor

---

*Keep it simple. Be specific. Verify results.*
