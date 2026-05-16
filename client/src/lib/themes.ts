export const themes = {
  none: {
    name: "Default (Black & White)",
    description: "Clean and minimal",
    primary:    "0 0% 9%",
    secondary:  "0 0% 40%",
    background: "0 0% 98%",
    foreground: "0 0% 9%",
    mutedFg:    "0 0% 45%",
    muted:      "0 0% 96%",
    border:     "0 0% 88%",
  },
  goldNavy: {
    name: "Gold & Navy",
    description: "Luxury and sophistication",
    primary:    "225 73% 25%",
    secondary:  "43 96% 56%",
    background: "225 60% 97%",
    foreground: "225 65% 14%",
    mutedFg:    "225 30% 45%",
    muted:      "225 50% 95%",
    border:     "225 40% 88%",
  },
  aquaBeige: {
    name: "Aqua & Sand",
    description: "Calm and refined",
    primary:    "180 65% 55%",
    secondary:  "35 35% 75%",
    background: "180 50% 97%",
    foreground: "180 55% 16%",
    mutedFg:    "180 25% 42%",
    muted:      "180 40% 95%",
    border:     "180 30% 87%",
  },
  crimsonBlue: {
    name: "Crimson & Sky",
    description: "High-energy and modern",
    primary:    "348 83% 47%",
    secondary:  "199 89% 48%",
    background: "348 60% 97%",
    foreground: "348 70% 18%",
    mutedFg:    "348 30% 44%",
    muted:      "348 50% 95%",
    border:     "348 35% 88%",
  },
  mochaCream: {
    name: "Mocha & Cream",
    description: "Warm and trustworthy",
    primary:    "25 25% 45%",
    secondary:  "40 40% 85%",
    background: "25 40% 97%",
    foreground: "25 30% 20%",
    mutedFg:    "25 18% 44%",
    muted:      "25 35% 95%",
    border:     "25 25% 88%",
  },
  purplePink: {
    name: "Purple & Pink",
    description: "Bold and creative",
    primary:    "271 76% 53%",
    secondary:  "330 81% 60%",
    background: "271 55% 97%",
    foreground: "271 65% 18%",
    mutedFg:    "271 28% 44%",
    muted:      "271 45% 95%",
    border:     "271 35% 88%",
  },
  blueOrange: {
    name: "Electric Blue & Orange",
    description: "Energetic and vibrant",
    primary:    "199 98% 48%",
    secondary:  "33 100% 50%",
    background: "199 60% 97%",
    foreground: "199 80% 14%",
    mutedFg:    "199 35% 42%",
    muted:      "199 50% 95%",
    border:     "199 35% 87%",
  },
  blackYellow: {
    name: "Black & Yellow",
    description: "Bold and attention-grabbing",
    primary:    "0 0% 9%",
    secondary:  "54 100% 50%",
    background: "54 55% 97%",
    foreground: "54 20% 10%",
    mutedFg:    "54 12% 42%",
    muted:      "54 45% 95%",
    border:     "54 35% 87%",
  },
  forestEarth: {
    name: "Forest & Earth",
    description: "Natural and grounding",
    primary:    "140 50% 35%",
    secondary:  "30 35% 50%",
    background: "140 45% 97%",
    foreground: "140 45% 14%",
    mutedFg:    "140 20% 42%",
    muted:      "140 35% 95%",
    border:     "140 25% 87%",
  },
  pinkBlue: {
    name: "Pink & Sky Blue",
    description: "Playful and friendly",
    primary:    "330 81% 65%",
    secondary:  "199 53% 70%",
    background: "330 55% 97%",
    foreground: "330 65% 20%",
    mutedFg:    "330 28% 44%",
    muted:      "330 45% 95%",
    border:     "330 35% 88%",
  },
  purpleGold: {
    name: "Eggplant & Gold",
    description: "Elegant and luxurious",
    primary:    "270 50% 40%",
    secondary:  "43 96% 56%",
    background: "270 45% 97%",
    foreground: "270 48% 16%",
    mutedFg:    "270 22% 44%",
    muted:      "270 35% 95%",
    border:     "270 25% 88%",
  },
};

export type ThemeKey = keyof typeof themes;

export function applyTheme(theme: ThemeKey) {
  const root = document.documentElement;
  const c = themes[theme];

  root.style.setProperty("--primary", c.primary);
  root.style.setProperty("--secondary", c.secondary);
  root.style.setProperty("--background", c.background);
  root.style.setProperty("--foreground", c.foreground);
  root.style.setProperty("--muted-foreground", c.mutedFg);
  root.style.setProperty("--muted", c.muted);
  root.style.setProperty("--border", c.border);
  root.style.setProperty("--input", c.border);
  // Cards stay white with the theme foreground colour so text is readable
  root.style.setProperty("--card", "0 0% 100%");
  root.style.setProperty("--card-foreground", c.foreground);
  root.style.setProperty("--popover", "0 0% 100%");
  root.style.setProperty("--popover-foreground", c.foreground);

  localStorage.setItem("app-theme", theme);
}

export function getStoredTheme(): ThemeKey {
  const stored = localStorage.getItem("app-theme");
  return (stored && stored in themes) ? stored as ThemeKey : "none";
}
