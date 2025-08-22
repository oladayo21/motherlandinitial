# UI Component Library

## Overview
This directory contains reusable UI primitives that ensure design consistency across the Motherland SC website. All components follow a consistent API pattern and share common design tokens.

## Components

### Button
Primary component for all button interactions.

**Props:**
- `variant`: "primary" | "secondary" | "outline" | "ghost" (default: "primary")
- `size`: "small" | "medium" | "large" (default: "medium")
- `href?`: string (renders as link if provided)
- `type?`: "button" | "submit" | "reset" (default: "button")
- `fullWidth?`: boolean (default: false)

**Usage:**
```astro
<Button variant="primary" size="medium" href="/news">
  View All News
</Button>
```

### LinkButton
Text links with optional arrow animations.

**Props:**
- `href`: string (required)
- `variant`: "default" | "with-arrow" | "underline" (default: "default")
- `size`: "small" | "medium" | "large" (default: "medium")
- `external?`: boolean (default: false)

**Usage:**
```astro
<LinkButton href="/gallery" variant="with-arrow">
  View Gallery
</LinkButton>
```

### ArticleCard
Specialized card component for news and blog articles.

**Props:**
- `title`: string (required)
- `description?`: string
- `image`: string (required)
- `category?`: string
- `date?`: string
- `href`: string (required)
- `featured?`: boolean (default: false)
- `variant`: "default" | "horizontal" | "compact" | "overlay" (default: "default")
- `numberBadge?`: number (for overlay variant)

**Variants:**
- `default`: Standard card with image on top, content below
- `horizontal`: Image on left, content on right
- `compact`: Smaller card with reduced spacing
- `overlay`: Text overlaid on image (magazine style)

**Usage:**
```astro
<ArticleCard
  title="Historic Victory"
  description="Team wins championship"
  image="/images/victory.jpg"
  category="News"
  date="2 hours ago"
  href="/article/historic-victory"
  variant="overlay"
  featured
/>
```

### IconButton
Button component for icon-only interactions (social media, actions).

**Props:**
- `variant`: "solid" | "ghost" | "outline" (default: "ghost")
- `size`: "small" | "medium" | "large" (default: "medium")
- `ariaLabel`: string (required for accessibility)
- `href?`: string

**Usage:**
```astro
<IconButton variant="ghost" size="small" ariaLabel="Share on Twitter">
  <svg>...</svg>
</IconButton>
```

### Badge
Component for categories, tags, and status indicators.

**Props:**
- `variant`: "primary" | "secondary" | "outline" | "success" | "warning" (default: "primary")
- `size`: "small" | "medium" | "large" (default: "medium")
- `animated?`: boolean (default: false)

**Usage:**
```astro
<Badge variant="primary" size="small">
  Breaking News
</Badge>
```

### ImageContainer
Consistent image wrapper with hover effects and overlays.

**Props:**
- `src`: string (required)
- `alt`: string (required)
- `scaleOnHover`: 105 | 110 | false (default: 105)
- `overlay`: "none" | "gradient" | "dark" | "light" (default: "none")
- `duration`: 300 | 500 | 700 (default: 700)
- `loading`: "eager" | "lazy" (default: "lazy")

**Usage:**
```astro
<ImageContainer
  src="/images/team.jpg"
  alt="Team photo"
  scaleOnHover={110}
  overlay="gradient"
/>
```

### Card
Base card component with multiple variants.

**Props:**
- `variant`: "default" | "bordered" | "elevated" | "dark" | "article" | "product" (default: "default")
- `hover?`: boolean (default: true)
- `lift?`: boolean (default: false)
- `animate?`: boolean (default: false)

**Usage:**
```astro
<Card variant="article" lift>
  <!-- Card content -->
</Card>
```

## Design Tokens

The design system uses CSS custom properties defined in `src/styles/design-tokens.css`:

- **Transitions**: `--transition-fast` (300ms), `--transition-medium` (500ms), `--transition-slow` (700ms)
- **Scales**: `--scale-subtle` (1.05), `--scale-dramatic` (1.1)
- **Lifts**: `--lift-subtle` (-0.25rem), `--lift-medium` (-0.5rem)
- **Shadows**: From `--shadow-sm` to `--shadow-2xl`
- **Colors**: Brand colors including `--color-yellow`, `--color-red`, `--color-black` variants

## Consistency Guidelines

1. **Hover States**:
   - Yellow elements: Use `hover:bg-yellow-400` or `hover:text-yellow-400`
   - Cards: Apply `hover:-translate-y-1` for lift effect
   - Images: Use `group-hover:scale-105` for subtle, `group-hover:scale-110` for dramatic

2. **Transitions**:
   - UI elements: 300ms
   - Images: 700ms
   - Complex animations: 500ms

3. **Button Sizing**:
   - Standard: `px-6 py-3`
   - Hero CTAs: `px-8 py-4`
   - Small: `px-4 py-2`

4. **Typography**:
   - Headers: `font-display`
   - Body text: `font-body`
   - Always uppercase for buttons and labels

## Best Practices

1. **Always use the appropriate component** instead of inline classes
2. **Maintain semantic HTML** - use button for actions, links for navigation
3. **Include accessibility attributes** - aria-labels for icon buttons
4. **Follow the variant patterns** - primary for main actions, ghost for subtle
5. **Test hover states** across all interactive elements
6. **Use design tokens** for consistent spacing and colors