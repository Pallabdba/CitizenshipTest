import { useState, useEffect } from "react";
import { Palette, Check, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { themes, applyTheme, getStoredTheme, type ThemeKey } from "@/lib/themes";
import { useTheme } from "@/components/theme-provider";

interface ThemeSelectorProps { variant?: "light" | "dark" }

export function ThemeSelector({ variant = "light" }: ThemeSelectorProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>(getStoredTheme());
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => { applyTheme(currentTheme); }, [currentTheme]);

  const handleThemeChange = (t: ThemeKey) => {
    setCurrentTheme(t);
    applyTheme(t);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={variant === "dark"
            ? "text-blue-200 hover:text-white hover:bg-white/10"
            : "text-muted-foreground hover:text-foreground hover:bg-accent/10"}
          data-testid="button-theme-selector"
        >
          <Palette className="h-5 w-5" />
          <span className="sr-only">Select theme</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-60 p-4 space-y-4">

        {/* Light / Dark toggle */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Background</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setTheme("light")}
              className={`flex items-center justify-center gap-2 py-2 rounded-xl border-2 text-sm font-medium transition-all
                ${!isDark
                  ? "border-foreground bg-white text-slate-900 shadow-md"
                  : "border-transparent bg-slate-100 text-slate-500 hover:border-muted-foreground/40"
                }`}
            >
              <Sun className="w-4 h-4" />
              White
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`flex items-center justify-center gap-2 py-2 rounded-xl border-2 text-sm font-medium transition-all
                ${isDark
                  ? "border-foreground bg-slate-900 text-white shadow-md"
                  : "border-transparent bg-slate-800 text-slate-300 hover:border-muted-foreground/40"
                }`}
            >
              <Moon className="w-4 h-4" />
              Black
            </button>
          </div>
        </div>

        {/* Colour swatches */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Colour</p>
          <div className="grid grid-cols-4 gap-2">
            {Object.entries(themes).map(([key, value]) => {
              const isActive = currentTheme === key;
              return (
                <button
                  key={key}
                  data-testid={`theme-option-${key}`}
                  onClick={() => handleThemeChange(key as ThemeKey)}
                  className={`relative flex items-center justify-center p-2 rounded-xl border-2 transition-all
                    ${isActive
                      ? "border-foreground shadow-md scale-105"
                      : "border-transparent hover:border-muted-foreground/40 hover:scale-105"
                    }`}
                >
                  <div
                    className="w-8 h-8 rounded-full border border-black/10 shadow-sm"
                    style={{ backgroundColor: `hsl(${value.primary})` }}
                  />
                  <div
                    className="absolute bottom-2 right-1 w-3.5 h-3.5 rounded-full border-2 border-background shadow-sm"
                    style={{ backgroundColor: `hsl(${value.secondary})` }}
                  />
                  {isActive && (
                    <div className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-foreground flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-background stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </PopoverContent>
    </Popover>
  );
}
