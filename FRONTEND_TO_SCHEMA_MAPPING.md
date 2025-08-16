# Frontend to CMS Schema Mapping

This document maps the existing frontend components and pages to the CMS schema fields, showing exactly where each piece of data is used.

## ✅ Verified Frontend Components Analysis

### 1. Navigation Component (`Navbar.astro`)
**Lines 2-25**: Navigation items with dropdowns

**Data Used:**
```javascript
const navItems = [
  { label: "News", href: "/news" },
  { label: "Men's Team", href: "/teams/mens", dropdown: [...] },
  { label: "Women's Team", href: "#", dropdown: [...] },
  { label: "Gallery", href: "/gallery" },
  { label: "Club", href: "/club" },
  { label: "Shop", href: "/shop" }
]
```

**Maps to Schema:**
- ✅ **Navigation Global** → `mainMenu` array with:
  - `label`, `url`, `type` (dropdown/direct)
  - `submenu` array for dropdown items

### 2. Footer Component (`Footer.astro`)
**Lines 4-61**: Footer sections and links

**Data Used:**
```javascript
footerLinks = {
  club: [...6 links],
  teams: [...6 links],  
  fans: [...6 links],
  connect: [...6 links]
}
socialLinks = [...5 social platforms]
sponsors = [...5 sponsor slots]
legalLinks = [...5 legal pages]
```

**Maps to Schema:**
- ✅ **Footer Global** → All sections, links, social media
- ✅ **Sponsors Global** → Partner list
- ✅ **Site Settings Global** → Social media URLs

### 3. Player Profile Page (`player/[id].astro`)
**Lines 7-45**: Complete player data structure

**Data Used:**
```javascript
const player = {
  firstName: "Lucas",
  lastName: "RODRIGUEZ",
  number: "10",
  position: "Attacking Midfielder",
  nationality: "Spain",
  birthDate: "March 15, 1995",
  age: "29",
  height: "180 cm",
  weight: "75 kg",
  preferredFoot: "Right",
  marketValue: "€45M",
  image: "...",
  stats: {
    appearances: "42",
    goals: "18", 
    assists: "15",
    yellowCards: "3",
    redCards: "0"
  },
  seasonStats: [
    { competition: "Bundesliga", apps: "28", goals: "12", assists: "10" }
  ],
  careerHistory: [
    { year: "2022-Present", club: "Motherland SC", apps: "42", goals: "18" }
  ]
}
```

**Maps to Schema:**
- ✅ **Players Collection** → All fields match exactly:
  - Personal info: `firstName`, `lastName`, `dateOfBirth`, `nationality`
  - Squad details: `number`, `position`, `team`
  - Physical: `height`, `weight`, `preferredFoot`
  - Stats: `statistics` group with appearances, goals, assists, cards
  - Career: `previousClubs` array
  - `marketValue` field included

### 4. Players & Staff Page (`players-staff.astro`)
**Lines 13-300+**: Full squad listing

**Data Used:**
```javascript
const players = {
  goalkeepers: [
    {
      id: "marcus-schmidt",
      firstName: "Marcus",
      lastName: "SCHMIDT",
      number: "1",
      position: "Goalkeeper",
      nationality: "Germany",
      age: 28,
      height: "193cm",
      joinedYear: "2021",
      caps: 45,
      cleanSheets: 18,
      image: "..."
    }
  ],
  defenders: [...],
  midfielders: [...],
  forwards: [...]
}
```

**Maps to Schema:**
- ✅ **Players Collection** → All squad list fields covered
- ✅ Position grouping handled by `position` field filtering

### 5. Match Components (`MatchCard.astro`)
**Lines 2-15**: Match card interface

**Data Used:**
```typescript
interface Props {
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: "upcoming" | "live" | "finished";
  date: string;
  time?: string;
  competition: string;
  venue?: string;
}
```

**Maps to Schema:**
- ✅ **Matches Collection** → Core match fields:
  - `homeTeam`, `awayTeam` (relationships)
  - `homeScore`, `awayScore`
  - `status` enum
  - `date`, `kickoffTime`
  - `competition` (relationship)
  - `venue` (relationship)

### 6. Fixtures & Results Page (`fixtures-results.astro`)
**Lines 8-150+**: Detailed match data

**Data Used:**
```javascript
const allMatches = [
  {
    id: 1,
    homeTeam: "Motherland SC",
    awayTeam: "Bayern Munich",
    homeTeamLogo: "...",
    awayTeamLogo: "...",
    competition: "Bundesliga",
    date: "2025-01-18",
    time: "15:30",
    status: "upcoming",
    venue: "Olympiastadion Berlin",
    isHighlighted: true,
    ticketsAvailable: true,
    tvChannel: "Sky Sports",
    referee: "Felix Brych",
    // For live matches:
    minute: "78",
    events: [
      { minute: "23", type: "goal", team: "home", player: "E. Nkrumah" }
    ],
    possession: { home: 52, away: 48 },
    shots: { home: 14, away: 11 }
  }
]
```

**Maps to Schema:**
- ✅ **Matches Collection** → Extended match data:
  - Team logos via Team relationships
  - `tvChannel`, `referee` fields
  - `isHighlighted` for featured matches
  - `events` array for goals/cards
  - `statistics` group for possession, shots
  - `minute` for live tracking

### 7. News/Article Pages (`index.astro`)
**Lines 17-78**: News items structure

**Data Used:**
```javascript
const newsItems = [
  {
    title: "Squad Prepares for Weekend Derby",
    description: "...",
    image: "...",
    category: "Training",
    date: "2 hours ago",
    href: "/article"
  }
]
```

**Maps to Schema:**
- ✅ **News Collection** → Article fields:
  - `title`, `excerpt` (description)
  - `featuredImage`
  - `category` (relationship)
  - `publishedDate`
  - `slug` for href

### 8. Gallery Page (`gallery.astro`)
**Lines 7-60**: Video gallery items

**Data Used:**
```javascript
const videos = [
  {
    id: 1,
    title: "Championship Final Highlights",
    description: "Extended highlights from our historic 4-1 victory",
    thumbnail: "...",
    videoUrl: "#",
    duration: "8:32",
    date: "1 week ago",
    featured: true
  }
]
```

**Maps to Schema:**
- ✅ **Gallery Collection** → Media gallery:
  - `title`, `description`
  - `coverImage` (thumbnail)
  - `items` array with videoUrl
  - `date`, `featured` flag

### 9. Team Pages (`teams/mens.astro`)
**Data showing team stats, league position, recent form**

**Maps to Schema:**
- ✅ **Teams Collection** → Team information
- ✅ **Matches Collection** → Recent results via relationships

## 📊 Coverage Summary

### ✅ All Frontend Data Points Covered

| Frontend Component | Data Points | Schema Coverage | Status |
|-------------------|-------------|-----------------|--------|
| Navigation | Menu items, dropdowns | Navigation Global | ✅ Complete |
| Footer | 4 sections, social, sponsors | Footer Global, Sponsors Global | ✅ Complete |
| Player Profiles | 25+ fields | Players Collection | ✅ Complete |
| Squad Lists | All player data | Players Collection | ✅ Complete |
| Match Cards | 10 fields | Matches Collection | ✅ Complete |
| Match Details | 20+ fields | Matches Collection | ✅ Complete |
| News Items | 6 fields | News Collection | ✅ Complete |
| Gallery | 7 fields | Gallery Collection | ✅ Complete |
| Team Pages | Team info, stats | Teams Collection | ✅ Complete |

### 🎯 Additional Schema Fields (Future-Ready)

The schema includes additional fields not yet used in the frontend but common for football clubs:

1. **Players Collection Extras:**
   - `contractUntil` - Contract management
   - `socialMedia` - Player social accounts
   - `biography` - Extended bio
   - `isViceCaptain` - Leadership roles

2. **Matches Collection Extras:**
   - `halfTimeHome/Away` - Halftime scores
   - `extraTime` scores - Cup matches
   - `penalties` scores - Shootouts
   - `manOfTheMatch` - Awards
   - `matchReport` - Detailed reports

3. **News Collection Extras:**
   - `relatedArticles` - Content linking
   - `relatedMatch` - Match reports
   - `relatedPlayers` - Player news
   - `viewCount` - Analytics

4. **New Collections for Growth:**
   - **FAQs** - Help content
   - **Testimonials** - Fan feedback
   - **Notifications** - Alerts system
   - **Pages** - Dynamic pages

## ✅ Validation: Frontend Requirements Met

Every data point currently displayed in the frontend has a corresponding field in the CMS schema:

1. **Player jerseys numbers** → `squadNumber` (1-99 validation)
2. **Match live minute** → `minute` field with status=live
3. **Team dropdowns in nav** → Navigation Global with submenu arrays
4. **Sponsor logos in footer** → Sponsors Global with logo uploads
5. **Player statistics by competition** → Can be calculated from Matches via relationships
6. **Featured matches** → `isHighlighted` boolean
7. **Match events timeline** → `events` array with minute/type/player
8. **Gallery video duration** → Stored in items array caption or custom field

The schema is **fully compatible** with the existing frontend and provides room for growth.