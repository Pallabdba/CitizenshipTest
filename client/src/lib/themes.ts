export const themes = {
  none: {
    name: "Default",
    primary:        "0 0% 9%",
    secondary:      "0 0% 40%",
    background:     "0 0% 98%",
    backgroundDark: "0 0% 7%",
  },
  goldNavy: {
    name: "Gold & Navy",
    primary:        "225 73% 25%",
    secondary:      "43 96% 56%",
    background:     "225 70% 88%",
    backgroundDark: "225 60% 8%",
  },
  aquaBeige: {
    name: "Aqua & Sand",
    primary:        "180 55% 38%",
    secondary:      "35 35% 65%",
    background:     "180 55% 88%",
    backgroundDark: "180 50% 7%",
  },
  crimsonBlue: {
    name: "Crimson & Sky",
    primary:        "348 83% 47%",
    secondary:      "199 89% 48%",
    background:     "348 65% 88%",
    backgroundDark: "348 60% 7%",
  },
  mochaCream: {
    name: "Mocha & Cream",
    primary:        "25 35% 40%",
    secondary:      "40 40% 75%",
    background:     "25 50% 88%",
    backgroundDark: "25 40% 7%",
  },
  purplePink: {
    name: "Purple & Pink",
    primary:        "271 76% 53%",
    secondary:      "330 81% 60%",
    background:     "271 60% 88%",
    backgroundDark: "271 55% 7%",
  },
  blueOrange: {
    name: "Electric Blue & Orange",
    primary:        "199 90% 38%",
    secondary:      "33 100% 50%",
    background:     "199 65% 87%",
    backgroundDark: "199 60% 7%",
  },
  blackYellow: {
    name: "Black & Yellow",
    primary:        "0 0% 9%",
    secondary:      "54 100% 50%",
    background:     "54 75% 87%",
    backgroundDark: "54 30% 7%",
  },
  forestEarth: {
    name: "Forest & Earth",
    primary:        "140 50% 30%",
    secondary:      "30 35% 50%",
    background:     "140 50% 87%",
    backgroundDark: "140 45% 6%",
  },
  pinkBlue: {
    name: "Pink & Sky Blue",
    primary:        "330 70% 55%",
    secondary:      "199 53% 60%",
    background:     "330 62% 88%",
    backgroundDark: "330 55% 7%",
  },
  purpleGold: {
    name: "Eggplant & Gold",
    primary:        "270 50% 38%",
    secondary:      "43 96% 56%",
    background:     "270 52% 88%",
    backgroundDark: "270 45% 7%",
  },
};

export type ThemeKey = keyof typeof themes;

export function applyTheme(theme: ThemeKey, dark = false) {
  const root = document.documentElement;
  const c = themes[theme];

  // Change primary/secondary accent colours
  root.style.setProperty("--primary",   c.primary);
  root.style.setProperty("--secondary", c.secondary);

  // Change ONLY the body background
  root.style.setProperty("--background", dark ? c.backgroundDark : c.background);

  // Reset everything else so text, cards, borders stay at their defaults
  root.style.removeProperty("--foreground");
  root.style.removeProperty("--card");
  root.style.removeProperty("--card-foreground");
  root.style.removeProperty("--popover");
  root.style.removeProperty("--popover-foreground");
  root.style.removeProperty("--muted");
  root.style.removeProperty("--muted-foreground");
  root.style.removeProperty("--border");
  root.style.removeProperty("--input");

  localStorage.setItem("app-theme", theme);
}

export function getStoredTheme(): ThemeKey {
  const stored = localStorage.getItem("app-theme");
  return (stored && stored in themes) ? stored as ThemeKey : "none";
}
