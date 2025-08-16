// Match day detection and data utilities

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  kickoffTime: string;
  venue: string;
  competition: string;
  isLive?: boolean;
  liveStreamUrl?: string;
  status: "upcoming" | "live" | "finished";
}

// Mock match schedule - in production this would come from an API
export const upcomingMatches: Match[] = [
  {
    id: "1",
    homeTeam: "Motherland SC",
    awayTeam: "City United",
    kickoffTime: "2024-01-20T15:00:00Z", // Adjust this date for testing
    venue: "National Stadium",
    competition: "Premier League",
    status: "upcoming",
    liveStreamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "2",
    homeTeam: "Motherland SC", 
    awayTeam: "Royal FC",
    kickoffTime: "2024-01-27T17:30:00Z",
    venue: "National Stadium",
    competition: "Premier League",
    status: "upcoming"
  }
];

/**
 * Check if today is a match day
 * Returns true if there's a match within 2 hours before or after kickoff
 */
export function isMatchDay(matches: Match[] = upcomingMatches): boolean {
  const now = new Date();
  
  return matches.some(match => {
    const kickoffTime = new Date(match.kickoffTime);
    const timeDiff = kickoffTime.getTime() - now.getTime();
    
    // Within 2 hours before or 2 hours after kickoff
    return timeDiff > -7200000 && timeDiff < 7200000;
  });
}

/**
 * Get the current or next match for match day display
 */
export function getMatchDayMatch(matches: Match[] = upcomingMatches): Match | null {
  const now = new Date();
  
  // First check for live matches
  const liveMatch = matches.find(match => {
    const kickoffTime = new Date(match.kickoffTime);
    const timeDiff = now.getTime() - kickoffTime.getTime();
    
    // Match is live if it started within the last 2 hours
    return timeDiff > 0 && timeDiff < 7200000;
  });
  
  if (liveMatch) {
    return { ...liveMatch, isLive: true, status: "live" };
  }
  
  // Then check for upcoming matches within 2 hours
  const upcomingMatch = matches.find(match => {
    const kickoffTime = new Date(match.kickoffTime);
    const timeDiff = kickoffTime.getTime() - now.getTime();
    
    // Match is upcoming if it starts within the next 2 hours
    return timeDiff > 0 && timeDiff < 7200000;
  });
  
  if (upcomingMatch) {
    return { ...upcomingMatch, isLive: false };
  }
  
  return null;
}

/**
 * Get time until kickoff in human readable format
 */
export function getTimeUntilKickoff(kickoffTime: string): {
  hours: number;
  minutes: number;
  total: number;
} {
  const now = new Date();
  const kickoff = new Date(kickoffTime);
  const diff = kickoff.getTime() - now.getTime();
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  return {
    hours: Math.max(0, hours),
    minutes: Math.max(0, minutes),
    total: diff
  };
}

/**
 * For testing - set a match to be happening "now"
 * Adjust the first match to be in 30 minutes for testing
 */
export function getTestMatchDay(): Match {
  const testKickoff = new Date();
  testKickoff.setMinutes(testKickoff.getMinutes() + 30); // 30 minutes from now
  
  return {
    id: "test",
    homeTeam: "Motherland SC",
    awayTeam: "City United", 
    kickoffTime: testKickoff.toISOString(),
    venue: "National Stadium",
    competition: "Premier League",
    status: "upcoming",
    liveStreamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  };
}