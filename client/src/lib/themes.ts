export const themes = {
  goldNavy: {
    name: "Gold & Navy",
    description: "Luxury and sophistication",
    primary: "225 73% 25%", // Navy blue
    secondary: "43 96% 56%", // Gold
  },
  aquaBeige: {
    name: "Aqua & Sand",
    description: "Calm and refined",
    primary: "180 65% 55%", // Aqua
    secondary: "35 35% 75%", // Sand/Beige
  },
  crimsonBlue: {
    name: "Crimson & Sky",
    description: "High-energy and modern",
    primary: "348 83% 47%", // Crimson red
    secondary: "199 89% 48%", // Light blue
  },
  mochaCream: {
    name: "Mocha & Cream",
    description: "Warm and trustworthy",
    primary: "25 25% 45%", // Mocha
    secondary: "40 40% 85%", // Cream
  },
  purplePink: {
    name: "Purple & Pink",
    description: "Bold and creative",
    primary: "271 76% 53%", // Purple
    secondary: "330 81% 60%", // Pink
  },
  blueOrange: {
    name: "Electric Blue & Orange",
    description: "Energetic and vibrant",
    primary: "199 98% 48%", // Electric blue
    secondary: "33 100% 50%", // Orange
  },
  blackYellow: {
    name: "Black & Yellow",
    description: "Bold and attention-grabbing",
    primary: "0 0% 9%", // Black
    secondary: "54 100% 50%", // Yellow
  },
  forestEarth: {
    name: "Forest & Earth",
    description: "Natural and grounding",
    primary: "140 50% 35%", // Forest green
    secondary: "30 35% 50%", // Earth brown
  },
  pinkBlue: {
    name: "Pink & Sky Blue",
    description: "Playful and friendly",
    primary: "330 81% 65%", // Pink
    secondary: "199 53% 70%", // Sky blue
  },
  purpleGold: {
    name: "Eggplant & Gold",
    description: "Elegant and luxurious",
    primary: "270 50% 40%", // Deep purple/Eggplant
    secondary: "43 96% 56%", // Gold
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
  return (stored && stored in themes) ? stored as ThemeKey : "goldNavy";
}
