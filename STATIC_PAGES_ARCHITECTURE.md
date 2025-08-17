# Static Pages with Islands Architecture

## Overview
This architecture follows Astro's philosophy: **Ship HTML by default, JavaScript only when needed.**

## Page Structure

### Static Content (90% of page)
- Pre-rendered at build time
- Pure HTML/CSS, no JavaScript
- SEO-optimized
- Lightning fast load times

### Dynamic Islands (10% of page)
Small interactive components that load separately:
- **Live Score Island**: Real-time match scores
- **Team Roster Island**: Dynamic player stats  
- **Fixtures Island**: Upcoming matches
- **News Grid Island**: Latest articles
- **Newsletter Form Island**: Email subscription

## How It Works

```astro
---
// pages/club.astro
// This runs at BUILD TIME
const pageData = await fetch('http://localhost:3000/api/static-pages/club')
const { hero, sections } = pageData
---

<Layout>
  <!-- Static HTML -->
  <Hero {...hero} />
  
  {sections.map((section) => {
    if (section.type === 'text') {
      // Pure static HTML
      return <TextSection {...section.textContent} />
    }
    
    if (section.type === 'fixtures-island') {
      // Dynamic island - loads separately
      return <FixturesIsland client:visible teamId={section.islandConfig.teamId} />
    }
    
    // ... other section types
  })}
</Layout>
```

## Static Page Templates

### 1. Standard Page
For: About, History, Contact
- Hero section
- Text content blocks
- Image galleries
- CTAs

### 2. Landing Page  
For: Home, Club
- Hero slider
- Stats grid
- Multiple islands
- Sponsor bar

### 3. Team Hub
For: Men's Team, Women's Team
- Team hero
- Roster island
- Fixtures island
- Stats section

## Content Sections Available

### Static Sections (No JS)
- `text`: Simple text content
- `two-column`: Two column layouts
- `stats`: Static statistics grid
- `gallery`: Image galleries
- `cta`: Call to action blocks
- `sponsors`: Sponsor logos

### Dynamic Islands (Minimal JS)
- `team-roster-island`: Live player data
- `fixtures-island`: Match schedules
- `news-island`: Latest news feed
- `form-island`: Contact forms

## Benefits

1. **Performance**: Pages load instantly (static HTML)
2. **SEO**: Full content available to crawlers
3. **Flexibility**: Mix static and dynamic as needed
4. **Scalability**: Most content served from CDN
5. **Developer Experience**: Clear separation of concerns

## Data Flow

```
Build Time:
CMS → Fetch Pages → Generate Static HTML → Deploy

Runtime (Islands Only):
User Visit → Load Static HTML → Islands Fetch Data → Hydrate Components
```

## Example Page Configuration

```javascript
{
  title: "About Motherland SC",
  slug: "about",
  template: "standard",
  hero: {
    enabled: true,
    title: "Our Story",
    backgroundImage: "/hero-bg.jpg"
  },
  sections: [
    {
      type: "text",
      textContent: {
        heading: "Founded in Berlin",
        content: "Motherland SC was established..."
      }
    },
    {
      type: "stats",
      statsGrid: {
        stats: [
          { value: "500+", label: "Players" },
          { value: "15", label: "Teams" }
        ]
      }
    },
    {
      type: "fixtures-island",
      islandConfig: {
        teamId: "mens-first-team",
        limit: 5
      }
    }
  ]
}
```

## Implementation Notes

- Use `client:visible` for islands below the fold
- Use `client:load` for critical islands
- Use `client:idle` for non-critical islands
- Keep island data fetching minimal
- Cache API responses where possible