export const themes = {
  ocean: {
    name: "Ocean Blue",
    description: "Calm ocean blues and teals",
    primary: "200 85% 45%", // Ocean blue
    secondary: "180 65% 55%", // Teal
  },
  forest: {
    name: "Forest Green",
    description: "Soothing forest greens",
    primary: "140 50% 40%", // Forest green
    secondary: "100 45% 50%", // Light green
  },
  sunset: {
    name: "Sunset Orange",
    description: "Warm sunset colors",
    primary: "25 95% 53%", // Orange
    secondary: "45 93% 47%", // Gold
  },
  lavender: {
    name: "Lavender Purple",
    description: "Gentle lavender and purple",
    primary: "260 60% 65%", // Lavender
    secondary: "280 55% 60%", // Light purple
  },
  sage: {
    name: "Sage & Mint",
    description: "Soft sage and mint greens",
    primary: "150 25% 50%", // Sage
    secondary: "160 35% 60%", // Mint
  },
  coral: {
    name: "Coral & Peach",
    description: "Soft coral and peach tones",
    primary: "15 80% 65%", // Coral
    secondary: "30 85% 70%", // Peach
  },
  slate: {
    name: "Slate & Sky",
    description: "Cool slate and sky blues",
    primary: "215 20% 45%", // Slate
    secondary: "210 50% 60%", // Sky blue
  },
  rose: {
    name: "Rose & Blush",
    description: "Gentle rose and blush pinks",
    primary: "340 65% 55%", // Rose
    secondary: "350 70% 70%", // Blush
  },
  default: {
    name: "Default",
    description: "Classic default theme",
    primary: "222.2 47.4% 11.2%",
    secondary: "210 40% 96.1%",
  },
};

export type ThemeKey = keyof typeof themes;

export function applyTheme(theme: ThemeKey) {
  const root = document.documentElement;
  const colors = themes[theme];
  
  root.style.setProperty("--primary", colors.primary);
  root.style.setProperty("--secondary", colors.secondary);
  
  // Store in localStorage
  localStorage.setItem("app-theme", theme);
}

export function getStoredTheme(): ThemeKey {
  const stored = localStorage.getItem("app-theme");
  return (stored && stored in themes) ? stored as ThemeKey : "ocean";
}
