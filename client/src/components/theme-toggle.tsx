import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

interface ThemeToggleProps { variant?: "light" | "dark" }

function isDarkMode(theme: string) {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/** Simple single-click sun/moon toggle — no popover, just flips light/dark. */
export function ThemeToggle({ variant = "light" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const dark = isDarkMode(theme);

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      data-testid="button-theme-toggle"
      className={`h-9 w-9 flex items-center justify-center rounded-md transition-colors ${
        variant === "dark"
          ? "text-blue-200 hover:text-white hover:bg-white/10"
          : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
      }`}
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
