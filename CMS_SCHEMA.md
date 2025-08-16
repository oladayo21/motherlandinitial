# Motherland SC - CMS Schema Documentation

## Overview
This document defines all collections and globals (singletons) for the Motherland SC Payload CMS, including field types, relationships, and validation rules.

---

## 🌍 GLOBALS (Singletons)

### 1. Site Settings Global
**Purpose**: General site configuration and metadata

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| siteName | text | Yes | Website name |
| tagline | text | No | Site tagline/slogan |
| logo | upload (Media) | Yes | Main site logo |
| favicon | upload (Media) | No | Browser favicon |
| seoTitle | text | No | Default SEO title |
| seoDescription | textarea | No | Default meta description |
| seoImage | upload (Media) | No | Default OG image |
| googleAnalyticsId | text | No | GA tracking ID |
| maintenanceMode | checkbox | No | Enable maintenance mode |
| maintenanceMessage | richText | No | Maintenance mode message |

### 2. Navigation Global
**Purpose**: Main navigation menu structure

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| mainMenu | array | Yes | Main navigation items |
| └─ label | text | Yes | Menu item label |
| └─ url | text | No | Direct URL (if no submenu) |
| └─ type | select | Yes | internal/external/dropdown |
| └─ page | relationship (Pages) | No | Link to internal page |
| └─ submenu | array | No | Dropdown items |
| └──── label | text | Yes | Submenu item label |
| └──── url | text | No | Submenu item URL |
| └──── page | relationship (Pages) | No | Link to internal page |
| quickLinks | array | No | Header quick links |
| └─ label | text | Yes | Link label |
| └─ url | text | Yes | Link URL |
| └─ icon | text | No | Icon class |

### 3. Footer Global
**Purpose**: Footer content and structure

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| sections | array | Yes | Footer column sections |
| └─ title | text | Yes | Section title |
| └─ links | array | Yes | Section links |
| └──── label | text | Yes | Link label |
| └──── url | text | No | External URL |
| └──── page | relationship (Pages) | No | Internal page |
| copyrightText | text | Yes | Copyright notice |
| socialLinks | array | Yes | Social media links |
| └─ platform | select | Yes | facebook/twitter/instagram/youtube/tiktok |
| └─ url | text | Yes | Social media URL |
| └─ icon | text | No | Icon class |
| newsletterEnabled | checkbox | No | Show newsletter signup |
| newsletterTitle | text | No | Newsletter section title |
| newsletterDescription | textarea | No | Newsletter description |
| appLinks | group | No | Mobile app links |
| └─ iosUrl | text | No | iOS app store URL |
| └─ androidUrl | text | No | Google Play URL |

### 4. Club Info Global
**Purpose**: Club information and history

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| clubName | text | Yes | Official club name |
| founded | number | Yes | Year founded |
| nickname | text | No | Club nickname |
| motto | text | No | Club motto |
| aboutUs | richText | Yes | About the club |
| history | richText | No | Club history |
| vision | textarea | No | Vision statement |
| mission | textarea | No | Mission statement |
| values | array | No | Core values |
| └─ title | text | Yes | Value title |
| └─ description | textarea | Yes | Value description |
| achievements | array | No | Major achievements |
| └─ year | number | Yes | Achievement year |
| └─ title | text | Yes | Achievement title |
| └─ description | textarea | No | Achievement details |
| stadium | group | Yes | Stadium information |
| └─ name | text | Yes | Stadium name |
| └─ capacity | number | Yes | Stadium capacity |
| └─ address | textarea | Yes | Full address |
| └─ coordinates | point | No | GPS coordinates |
| └─ image | upload (Media) | No | Stadium photo |
| └─ description | richText | No | Stadium description |
| contact | group | Yes | Contact information |
| └─ email | email | Yes | Contact email |
| └─ phone | text | Yes | Contact phone |
| └─ address | textarea | Yes | Office address |
| └─ businessHours | text | No | Office hours |

### 5. Sponsors Global
**Purpose**: Partner and sponsor management

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| mainSponsor | group | No | Primary sponsor |
| └─ name | text | Yes | Sponsor name |
| └─ logo | upload (Media) | Yes | Sponsor logo |
| └─ website | text | No | Sponsor website |
| └─ since | number | No | Partnership year |
| kitSponsor | group | No | Kit sponsor |
| └─ name | text | Yes | Sponsor name |
| └─ logo | upload (Media) | Yes | Sponsor logo |
| └─ website | text | No | Sponsor website |
| officialPartners | array | No | Other partners |
| └─ name | text | Yes | Partner name |
| └─ logo | upload (Media) | Yes | Partner logo |
| └─ website | text | No | Partner website |
| └─ category | text | No | Partnership type |
| └─ order | number | No | Display order |

---

## 📦 COLLECTIONS

### 1. Teams Collection
**Purpose**: Manage all team entities (Men's, Women's, Academy, etc.)

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| name | text | Yes | Team name | Unique |
| slug | text | Yes | URL slug | Auto-generated, unique |
| type | select | Yes | men/women/academy/youth/legends | |
| ageGroup | text | No | Age group (e.g., U18, U21) | Required if type=youth |
| logo | upload (Media) | No | Team logo | |
| coverImage | upload (Media) | No | Team hero image | |
| description | richText | No | Team description | |
| league | relationship (Competitions) | No | Primary competition | |
| manager | relationship (Staff) | No | Team manager | |
| captain | relationship (Players) | No | Team captain | |
| homeVenue | relationship (Venues) | Yes | Home stadium | |
| founded | number | No | Year established | |
| colors | group | No | Team colors | |
| └─ primary | text | No | Primary color | Hex code |
| └─ secondary | text | No | Secondary color | Hex code |
| socialMedia | group | No | Team social accounts | |
| └─ twitter | text | No | Twitter handle | |
| └─ instagram | text | No | Instagram handle | |
| └─ facebook | text | No | Facebook page | |
| active | checkbox | Yes | Is team active | Default: true |
| displayOrder | number | No | Order in listings | |

### 2. Players Collection
**Purpose**: Player profiles and statistics

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| firstName | text | Yes | First name | |
| lastName | text | Yes | Last name | |
| slug | text | Yes | URL slug | Auto-generated from name |
| displayName | text | No | Jersey name | |
| dateOfBirth | date | Yes | Birth date | |
| nationality | select | Yes | Country | Country list |
| secondNationality | select | No | Dual nationality | Country list |
| profileImage | upload (Media) | Yes | Main photo | |
| actionImage | upload (Media) | No | Action shot | |
| gallery | array | No | Photo gallery | |
| └─ image | upload (Media) | Yes | Gallery image | |
| └─ caption | text | No | Image caption | |
| team | relationship (Teams) | Yes | Current team | |
| squadNumber | number | Yes | Jersey number | 1-99 |
| position | select | Yes | Playing position | See position list below |
| preferredFoot | select | No | left/right/both | |
| height | number | No | Height in cm | |
| weight | number | No | Weight in kg | |
| joinedDate | date | Yes | Date joined club | |
| contractUntil | date | No | Contract end date | |
| previousClubs | array | No | Career history | |
| └─ clubName | text | Yes | Club name | |
| └─ from | date | Yes | Join date | |
| └─ to | date | Yes | Leave date | |
| └─ appearances | number | No | Matches played | |
| └─ goals | number | No | Goals scored | |
| statistics | group | Yes | Career stats | |
| └─ appearances | number | No | Total appearances | Default: 0 |
| └─ goals | number | No | Goals scored | Default: 0 |
| └─ assists | number | No | Assists | Default: 0 |
| └─ yellowCards | number | No | Yellow cards | Default: 0 |
| └─ redCards | number | No | Red cards | Default: 0 |
| └─ cleanSheets | number | No | Clean sheets | For goalkeepers |
| └─ saves | number | No | Saves made | For goalkeepers |
| biography | richText | No | Player bio | |
| socialMedia | group | No | Social accounts | |
| └─ instagram | text | No | Instagram handle | |
| └─ twitter | text | No | Twitter handle | |
| └─ facebook | text | No | Facebook profile | |
| isCaptain | checkbox | No | Team captain | Default: false |
| isViceCaptain | checkbox | No | Vice captain | Default: false |
| status | select | Yes | active/injured/suspended/loan | Default: active |
| injuryDetails | text | No | Injury description | Show if status=injured |
| marketValue | number | No | Market value (EUR) | |
| featured | checkbox | No | Featured player | |

**Position Options**:
- Goalkeeper: Goalkeeper
- Defenders: Right Back, Left Back, Centre Back, Wing Back
- Midfielders: Defensive Midfielder, Central Midfielder, Attacking Midfielder, Right Midfielder, Left Midfielder
- Forwards: Striker, Winger, Centre Forward

### 3. Staff Collection
**Purpose**: Coaching and support staff

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| firstName | text | Yes | First name | |
| lastName | text | Yes | Last name | |
| slug | text | Yes | URL slug | Auto-generated |
| role | select | Yes | Staff role | See roles below |
| customRole | text | No | Custom role title | |
| team | relationship (Teams) | Yes | Assigned team | |
| photo | upload (Media) | No | Profile photo | |
| nationality | select | No | Country | |
| dateOfBirth | date | No | Birth date | |
| joinedDate | date | Yes | Date joined | |
| contractUntil | date | No | Contract end | |
| biography | richText | No | Bio/background | |
| qualifications | array | No | Certifications | |
| └─ title | text | Yes | Qualification | |
| └─ year | number | No | Year obtained | |
| └─ institution | text | No | Issuing body | |
| previousClubs | array | No | Career history | |
| └─ clubName | text | Yes | Club name | |
| └─ role | text | Yes | Position held | |
| └─ from | date | Yes | Start date | |
| └─ to | date | Yes | End date | |
| displayOrder | number | No | Display order | |

**Role Options**:
- Manager/Head Coach
- Assistant Manager
- Goalkeeping Coach
- Fitness Coach
- Physiotherapist
- Team Doctor
- Performance Analyst
- Scout
- Kit Manager
- Other (use customRole)

### 4. Matches Collection
**Purpose**: Fixtures, results, and match details

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| homeTeam | relationship (Teams) | Yes | Home team | |
| awayTeam | relationship (Teams) | Yes | Away team | |
| competition | relationship (Competitions) | Yes | Competition | |
| round | text | No | Round/Matchday | e.g., "Matchday 15" |
| season | text | Yes | Season | e.g., "2024/25" |
| date | date | Yes | Match date | |
| kickoffTime | text | Yes | Kickoff time | 24hr format |
| venue | relationship (Venues) | Yes | Match venue | |
| status | select | Yes | upcoming/live/finished/postponed/cancelled | |
| minute | number | No | Current minute | For live matches |
| homeScore | number | No | Home goals | Required if finished |
| awayScore | number | No | Away goals | Required if finished |
| halfTimeHome | number | No | HT home score | |
| halfTimeAway | number | No | HT away score | |
| extraTimeHome | number | No | ET home score | |
| extraTimeAway | number | No | ET away score | |
| penaltiesHome | number | No | Penalty home score | |
| penaltiesAway | number | No | Penalty away score | |
| attendance | number | No | Match attendance | |
| referee | text | No | Main referee | |
| assistantReferees | array | No | Assistant refs | |
| └─ name | text | Yes | Referee name | |
| events | array | No | Match events | |
| └─ minute | number | Yes | Event minute | |
| └─ type | select | Yes | goal/assist/yellow/red/substitution/penalty/own-goal | |
| └─ team | select | Yes | home/away | |
| └─ player | relationship (Players) | No | Player involved | |
| └─ assistPlayer | relationship (Players) | No | Assist provider | |
| └─ playerOut | relationship (Players) | No | Subbed player | |
| └─ playerIn | relationship (Players) | No | Substitute | |
| └─ description | text | No | Event details | |
| lineup | group | No | Starting lineups | |
| └─ home | relationship (Players) | No | Home XI | Multiple |
| └─ away | relationship (Players) | No | Away XI | Multiple |
| substitutes | group | No | Bench players | |
| └─ home | relationship (Players) | No | Home subs | Multiple |
| └─ away | relationship (Players) | No | Away subs | Multiple |
| statistics | group | No | Match stats | |
| └─ possession | group | No | Ball possession | |
| └──── home | number | No | Home % | 0-100 |
| └──── away | number | No | Away % | 0-100 |
| └─ shots | group | No | Total shots | |
| └──── home | number | No | Home shots | |
| └──── away | number | No | Away shots | |
| └─ shotsOnTarget | group | No | Shots on target | |
| └──── home | number | No | Home on target | |
| └──── away | number | No | Away on target | |
| └─ corners | group | No | Corner kicks | |
| └──── home | number | No | Home corners | |
| └──── away | number | No | Away corners | |
| └─ fouls | group | No | Fouls committed | |
| └──── home | number | No | Home fouls | |
| └──── away | number | No | Away fouls | |
| └─ yellowCards | group | No | Yellow cards | |
| └──── home | number | No | Home yellows | |
| └──── away | number | No | Away yellows | |
| └─ redCards | group | No | Red cards | |
| └──── home | number | No | Home reds | |
| └──── away | number | No | Away reds | |
| matchReport | richText | No | Match report | |
| highlights | group | No | Media highlights | |
| └─ videoUrl | text | No | Highlights video | |
| └─ thumbnailImage | upload (Media) | No | Video thumbnail | |
| tvChannel | text | No | TV broadcaster | |
| ticketUrl | text | No | Ticket link | |
| isHighlighted | checkbox | No | Featured match | |
| manOfTheMatch | relationship (Players) | No | MOTM | |

### 5. Competitions Collection
**Purpose**: Leagues, cups, and tournaments

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| name | text | Yes | Competition name | |
| slug | text | Yes | URL slug | Auto-generated |
| type | select | Yes | league/cup/tournament/friendly | |
| logo | upload (Media) | No | Competition logo | |
| country | select | No | Country | |
| level | select | No | domestic/continental/international | |
| currentSeason | text | No | Current season | e.g., "2024/25" |
| website | text | No | Official website | |
| displayOrder | number | No | Display priority | |

### 6. Venues Collection
**Purpose**: Stadiums and training grounds

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| name | text | Yes | Venue name | |
| slug | text | Yes | URL slug | Auto-generated |
| type | select | Yes | stadium/training-ground/neutral | |
| capacity | number | No | Seating capacity | |
| city | text | Yes | City | |
| country | select | Yes | Country | |
| address | textarea | No | Full address | |
| coordinates | point | No | GPS location | |
| image | upload (Media) | No | Venue photo | |
| description | richText | No | Venue details | |
| isHomeGround | checkbox | No | Our home venue | |
| team | relationship (Teams) | No | Home team | If isHomeGround |

### 7. News Collection
**Purpose**: Articles, updates, and announcements

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| title | text | Yes | Article title | |
| slug | text | Yes | URL slug | Auto-generated |
| excerpt | textarea | Yes | Short summary | Max 200 chars |
| content | richText | Yes | Article content | Lexical editor |
| featuredImage | upload (Media) | Yes | Main image | |
| thumbnailImage | upload (Media) | No | List thumbnail | |
| category | relationship (Categories) | Yes | Article category | |
| tags | relationship (Tags) | No | Article tags | Multiple |
| author | relationship (Users) | Yes | Article author | |
| publishedDate | date | Yes | Publish date | |
| updatedDate | date | No | Last updated | Auto-updated |
| status | select | Yes | draft/published/archived | |
| featured | checkbox | No | Featured article | |
| sticky | checkbox | No | Pin to top | |
| relatedArticles | relationship (News) | No | Related news | Multiple, max 3 |
| relatedMatch | relationship (Matches) | No | Related match | |
| relatedPlayers | relationship (Players) | No | Tagged players | Multiple |
| allowComments | checkbox | No | Enable comments | Default: true |
| viewCount | number | No | Page views | Auto-increment |
| seo | group | No | SEO overrides | |
| └─ title | text | No | Meta title | |
| └─ description | textarea | No | Meta description | |
| └─ image | upload (Media) | No | OG image | |

### 8. Categories Collection
**Purpose**: Content categorization

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| name | text | Yes | Category name | |
| slug | text | Yes | URL slug | Auto-generated |
| description | textarea | No | Category description | |
| color | text | No | Category color | Hex code |
| icon | text | No | Icon class | |
| parent | relationship (Categories) | No | Parent category | Self-reference |
| displayOrder | number | No | Sort order | |

### 9. Tags Collection
**Purpose**: Content tagging

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| name | text | Yes | Tag name | |
| slug | text | Yes | URL slug | Auto-generated |

### 10. Gallery Collection
**Purpose**: Photo and video galleries

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| title | text | Yes | Gallery title | |
| slug | text | Yes | URL slug | Auto-generated |
| description | textarea | No | Gallery description | |
| type | select | Yes | photo/video/mixed | |
| coverImage | upload (Media) | Yes | Cover image | |
| items | array | Yes | Gallery items | |
| └─ type | select | Yes | photo/video | |
| └─ image | upload (Media) | No | Photo item | If type=photo |
| └─ videoUrl | text | No | Video URL | If type=video |
| └─ thumbnail | upload (Media) | No | Video thumbnail | If type=video |
| └─ caption | text | No | Item caption | |
| └─ credit | text | No | Photographer credit | |
| date | date | Yes | Gallery date | |
| event | text | No | Event name | |
| relatedMatch | relationship (Matches) | No | Related match | |
| tags | relationship (Tags) | No | Gallery tags | Multiple |
| featured | checkbox | No | Featured gallery | |
| publishedDate | date | Yes | Publish date | |
| status | select | Yes | draft/published | |

### 11. Pages Collection
**Purpose**: Static and dynamic pages

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| title | text | Yes | Page title | |
| slug | text | Yes | URL slug | Unique |
| content | richText | Yes | Page content | |
| template | select | No | Page template | default/landing/contact |
| parent | relationship (Pages) | No | Parent page | Self-reference |
| featuredImage | upload (Media) | No | Hero image | |
| status | select | Yes | draft/published | |
| showInMenu | checkbox | No | Show in navigation | |
| menuOrder | number | No | Menu position | |
| seo | group | No | SEO settings | |
| └─ title | text | No | Meta title | |
| └─ description | textarea | No | Meta description | |
| └─ keywords | text | No | Meta keywords | |
| └─ image | upload (Media) | No | OG image | |
| └─ noIndex | checkbox | No | Prevent indexing | |

### 12. FAQs Collection
**Purpose**: Frequently asked questions

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| question | text | Yes | Question text | |
| answer | richText | Yes | Answer content | |
| category | select | Yes | tickets/membership/general/stadium | |
| order | number | No | Display order | |
| featured | checkbox | No | Featured FAQ | |

### 13. Testimonials Collection
**Purpose**: Quotes and testimonials

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| content | textarea | Yes | Testimonial text | |
| author | text | Yes | Author name | |
| role | text | No | Author title/role | |
| authorImage | upload (Media) | No | Author photo | |
| rating | number | No | Star rating | 1-5 |
| featured | checkbox | No | Featured testimonial | |
| date | date | No | Testimonial date | |

### 14. Notifications Collection
**Purpose**: Site-wide alerts and announcements

| Field Name | Type | Required | Description | Validation/Notes |
|------------|------|----------|-------------|-----------------|
| title | text | Yes | Notification title | |
| message | textarea | Yes | Notification text | |
| type | select | Yes | info/warning/error/success | |
| link | text | No | Related link | |
| linkText | text | No | Link button text | |
| startDate | date | Yes | Display from | |
| endDate | date | Yes | Display until | |
| dismissible | checkbox | No | Can be closed | Default: true |
| active | checkbox | Yes | Is active | |

---

## 🔗 Relationship Matrix

### Primary Relationships
- **Players** → **Teams** (Many-to-One)
- **Staff** → **Teams** (Many-to-One)
- **Matches** → **Teams** (Two Many-to-One: home/away)
- **Matches** → **Venues** (Many-to-One)
- **Matches** → **Competitions** (Many-to-One)
- **News** → **Categories** (Many-to-One)
- **News** → **Users** (Many-to-One: author)
- **Gallery** → **Matches** (Optional Many-to-One)

### Secondary Relationships
- **Teams** → **Players** (One-to-Many via join field)
- **Teams** → **Staff** (One-to-Many: manager)
- **Teams** → **Venues** (Many-to-One: home venue)
- **Matches** → **Players** (Many-to-Many: lineups, events)
- **News** → **Players** (Many-to-Many: tagged players)
- **News** → **Matches** (Optional Many-to-One)
- **Pages** → **Pages** (Self-reference: parent/child)
- **Categories** → **Categories** (Self-reference: parent/child)

---

## 🎯 Implementation Notes

### Field Types Reference
- **text**: Short text input
- **textarea**: Multi-line text
- **richText**: Lexical editor for formatted content
- **number**: Numeric input
- **date**: Date picker
- **select**: Dropdown selection
- **checkbox**: Boolean toggle
- **email**: Email validation
- **upload**: Media relationship
- **relationship**: Reference to other collections
- **array**: Repeatable field group
- **group**: Nested field group
- **point**: Geographic coordinates

### Validation Rules
1. **Slugs**: Auto-generate from name/title, ensure uniqueness
2. **Required fields**: Enforce at database level
3. **Number ranges**: Squad numbers (1-99), ratings (1-5), percentages (0-100)
4. **Date logic**: Contract end > joined date, match date validation
5. **Conditional fields**: Show/hide based on other field values

### Access Control Suggestions
- **Public**: Read access to published content
- **Members**: Authenticated users can comment
- **Editors**: Create/edit content, cannot publish
- **Admins**: Full access including publish/delete

### Hooks to Implement
1. **beforeChange**: Auto-generate slugs, validate data
2. **afterChange**: Clear cache, trigger notifications
3. **beforeDelete**: Check dependencies
4. **afterRead**: Increment view counts

### Admin UI Grouping
```
Content Management
├── News
├── Pages
├── Gallery
└── Notifications

Football
├── Teams
├── Players
├── Staff
├── Matches
├── Competitions
└── Venues

Settings
├── Site Settings
├── Navigation
├── Footer
├── Club Info
└── Sponsors

Taxonomy
├── Categories
├── Tags
└── FAQs
```

### Performance Considerations
1. **Indexes**: Create on slug, status, date fields
2. **Pagination**: Limit array fields (gallery items max 100)
3. **Image optimization**: Auto-resize on upload
4. **Caching**: Cache frequently accessed globals
5. **Lazy loading**: Relationship fields should not auto-populate

---

## 📋 Migration Strategy

### Phase 1: Core Structure
1. Site Settings, Navigation, Footer globals
2. Teams, Players, Staff collections
3. Basic relationships

### Phase 2: Content
1. News, Categories, Pages
2. Media handling setup
3. SEO configuration

### Phase 3: Match Data
1. Competitions, Venues
2. Matches with full statistics
3. Live match updates

### Phase 4: Enhancement
1. Gallery, Testimonials
2. FAQs, Notifications
3. Advanced features (versioning, drafts)

---

## 🔄 Version Control
- Enable versioning on: News, Pages, Players, Teams
- Draft/Publish workflow on: News, Pages, Gallery
- Audit log on: All collections

This schema provides a complete content management foundation for a professional football club website with room for future expansion.