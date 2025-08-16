# Motherland SC Berlin - CMS Seed Data

Based on available information about the real Motherland Berlin Sports Club e.V.

## Site Settings Global

```javascript
{
  siteName: "Motherland SC Berlin",
  tagline: "Purpose. Identity. Excellence.",
  seoTitle: "Motherland SC Berlin - Home of The Hive",
  seoDescription: "Motherland Berlin Sports Club promotes African heritage and talents through football in Berlin. We provide a fun and supportive club atmosphere for all ages and skill levels.",
  maintenanceMode: false
}
```

## Club Info Global

```javascript
{
  clubName: "Motherland Berlin Sports Club e.V.",
  nickname: "The Hive",
  motto: "This is Motherland. Welcome Home.",
  colors: {
    primary: "#FFD700", // Gold/Yellow
    secondary: "#000000" // Black
  },
  aboutUs: "Motherland S.C. Berlin promotes African heritage and talents through football. We provide a fun and supportive club atmosphere for all ages and skill levels. The club welcomes visitors of all backgrounds and aims to engage with all members regardless of differences.",
  vision: "To be a beacon of excellence in grassroots football, celebrating African heritage while fostering inclusivity and community development through sport.",
  mission: "To develop football talent while building a strong community that celebrates diversity, promotes African culture, and provides opportunities for youth development in Berlin.",
  values: [
    {
      title: "Purpose",
      description: "Every action we take is driven by our commitment to developing talent and building community."
    },
    {
      title: "Identity", 
      description: "We celebrate African heritage while embracing diversity and inclusion for all."
    },
    {
      title: "Excellence",
      description: "We strive for excellence both on and off the pitch, in sport and in character."
    },
    {
      title: "Community",
      description: "We are more than a club - we are a family that supports each other."
    },
    {
      title: "Youth Development",
      description: "Investing in the next generation through football and life skills."
    }
  ],
  stadium: {
    name: "Home Ground Berlin",
    city: "Berlin",
    country: "Germany",
    description: "Our home ground in Berlin where The Hive comes alive every matchday."
  },
  contact: {
    email: "info@motherlandscberlin.com",
    address: "Berlin, Germany",
    businessHours: "Monday - Friday: 9:00 - 18:00"
  }
}
```

## Navigation Global

```javascript
{
  mainMenu: [
    {
      label: "Home",
      type: "internal",
      url: "/"
    },
    {
      label: "About Us",
      type: "dropdown",
      submenu: [
        { label: "Our Story", type: "internal" },
        { label: "Mission & Vision", type: "internal" },
        { label: "The Hive", type: "internal" }
      ]
    },
    {
      label: "Teams",
      type: "dropdown",
      submenu: [
        { label: "First Team", type: "internal" },
        { label: "Youth Teams", type: "internal" },
        { label: "Motherland Youth Playday", type: "internal" }
      ]
    },
    {
      label: "News",
      type: "internal"
    },
    {
      label: "Fixtures & Results",
      type: "internal"
    },
    {
      label: "Community",
      type: "dropdown",
      submenu: [
        { label: "Youth Programs", type: "internal" },
        { label: "Events", type: "internal" },
        { label: "Join The Hive", type: "internal" }
      ]
    },
    {
      label: "Contact",
      type: "internal"
    }
  ]
}
```

## Footer Global

```javascript
{
  sections: [
    {
      title: "Club",
      links: [
        { label: "About Us", type: "internal" },
        { label: "Our Story", type: "internal" },
        { label: "The Hive", type: "internal" },
        { label: "Club Values", type: "internal" }
      ]
    },
    {
      title: "Teams",
      links: [
        { label: "First Team", type: "internal" },
        { label: "Youth Teams", type: "internal" },
        { label: "Squad", type: "internal" },
        { label: "Coaching Staff", type: "internal" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "Youth Programs", type: "internal" },
        { label: "Motherland Youth Playday", type: "internal" },
        { label: "Join Us", type: "internal" },
        { label: "Events", type: "internal" }
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "Contact Us", type: "internal" },
        { label: "Newsletter", type: "internal" },
        { label: "Partners", type: "internal" },
        { label: "FAQs", type: "internal" }
      ]
    }
  ],
  socialLinks: [
    {
      platform: "instagram",
      url: "https://www.instagram.com/motherlandberlinsc/"
    },
    {
      platform: "facebook",
      url: "https://www.facebook.com/motherlandberlinsc"
    },
    {
      platform: "twitter",
      url: "https://twitter.com/motherlandsc"
    }
  ],
  copyrightText: "© {year} Motherland Berlin Sports Club e.V. All rights reserved.",
  newsletterEnabled: true,
  newsletterTitle: "Join The Hive Newsletter",
  newsletterDescription: "Stay updated with match results, club news, and community events."
}
```

## Teams Collection Sample

```javascript
[
  {
    name: "Motherland SC First Team",
    slug: "first-team",
    type: "men",
    logo: "/motherland-logo.png",
    description: "The senior men's team competing in BFV Kreisliga C, representing Motherland SC Berlin with pride and passion.",
    league: "BFV Kreisliga C",
    colors: {
      primary: "#FFD700",
      secondary: "#000000"
    },
    socialMedia: {
      instagram: "motherlandberlinsc"
    },
    active: true
  },
  {
    name: "Motherland Youth",
    slug: "youth-team",
    type: "youth",
    ageGroup: "U12",
    description: "Our youth development program fostering the next generation of football talent.",
    active: true
  }
]
```

## Competitions Collection Sample

```javascript
[
  {
    name: "BFV Kreisliga C",
    slug: "bfv-kreisliga-c",
    type: "league",
    country: "Germany",
    level: "domestic",
    currentSeason: "2024/25"
  }
]
```

## News Articles Sample

```javascript
[
  {
    title: "Motherland Youth Playday - Building Community Through Football",
    excerpt: "Our free youth program continues to grow, bringing together young players from across Berlin's African community.",
    content: "Motherland Youth Playday is a special football event designed for young children from 3 years old within the African community. These youth initiatives are free and aim to create a fun, inclusive, and engaging environment where kids can develop their love for football, learn basic skills, and enjoy the spirit of teamwork.",
    category: "Youth Development",
    featured: true,
    status: "published"
  },
  {
    title: "Welcome to The Hive - New Season, New Ambitions",
    excerpt: "As we start the new season in BFV Kreisliga C, we welcome all supporters to join us on this journey.",
    content: "The new season brings new opportunities for Motherland SC Berlin. With our commitment to Purpose, Identity, and Excellence, we're ready to make our mark in the league while continuing to build our community.",
    category: "Club News",
    featured: true,
    status: "published"
  },
  {
    title: "Join Motherland SC - Open Trials Announced",
    excerpt: "We're looking for talented players who share our values and want to be part of something special.",
    content: "Motherland SC Berlin is hosting open trials for players interested in joining The Hive. We welcome players of all backgrounds who are committed to excellence and want to be part of our growing community.",
    category: "Announcements",
    status: "published"
  }
]
```

## Pages Collection Sample

```javascript
[
  {
    title: "Join The Hive",
    slug: "join-the-hive",
    content: "Motherland SC Berlin welcomes new members of all backgrounds. Whether you're a player, volunteer, or supporter, there's a place for you in The Hive. We believe in creating a supportive environment where everyone can thrive.",
    status: "published"
  },
  {
    title: "Youth Programs",
    slug: "youth-programs",
    content: "Our youth programs are designed to develop not just football skills, but character and community values. Through programs like Motherland Youth Playday, we provide free opportunities for young people to engage with sport and build lasting friendships.",
    status: "published"
  },
  {
    title: "Our Heritage",
    slug: "our-heritage",
    content: "Motherland SC Berlin proudly celebrates African heritage while embracing diversity. We are a club that brings together people from all walks of life, united by our love for football and commitment to community.",
    status: "published"
  }
]
```

## FAQs Sample

```javascript
[
  {
    question: "How can I join Motherland SC Berlin?",
    answer: "We welcome new players through our open trials and training sessions. Contact us via email or social media to learn about upcoming opportunities.",
    category: "membership"
  },
  {
    question: "What league does Motherland SC play in?",
    answer: "Our first team currently competes in the BFV Kreisliga C, which is part of the Berlin football league system.",
    category: "general"
  },
  {
    question: "Is the Motherland Youth Playday free?",
    answer: "Yes! Our youth programs, including the Motherland Youth Playday, are completely free and open to children from age 3 onwards.",
    category: "youth"
  },
  {
    question: "What are the club colors?",
    answer: "Motherland SC Berlin proudly wears yellow (gold) and black, representing The Hive.",
    category: "general"
  }
]
```

## Key Hashtags Used

- #MotherlandSC
- #TheHive
- #PurposeIdentityExcellence
- #MotherlandBerlin
- #BerlinFootball
- #AfricanHeritage
- #CommunityClub
- #YouthDevelopment
- #WelcomeHome
- #HomeOfTheHive

## Notes for Implementation

1. **Colors**: The club uses yellow/gold (#FFD700) and black (#000000) as their primary colors
2. **League**: They play in BFV Kreisliga C (Berlin regional league)
3. **Focus**: Strong emphasis on youth development and African heritage
4. **Community**: Open to all backgrounds, not exclusive to African community
5. **Programs**: Free youth programs including Motherland Youth Playday
6. **Values**: Purpose, Identity, Excellence are core values
7. **Branding**: "The Hive" is their nickname, "Welcome Home" is their welcoming message

This data can be used to populate your CMS with authentic content that reflects the real Motherland SC Berlin club.