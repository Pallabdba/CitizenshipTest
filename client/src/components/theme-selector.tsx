import { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { themes, applyTheme, getStoredTheme, type ThemeKey } from "@/lib/themes";

interface ThemeSelectorProps { variant?: "light" | "dark" }

export function ThemeSelector({ variant = "light" }: ThemeSelectorProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>(getStoredTheme());
  const [open, setOpen] = useState(false);

  useEffect(() => { applyTheme(currentTheme); }, [currentTheme]);

  const handleThemeChange = (theme: ThemeKey) => {
    setCurrentTheme(theme);
    applyTheme(theme);
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

      <PopoverContent align="end" className="w-56 p-4">
        <p className="text-sm font-semibold mb-3">Choose Colour</p>

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
      </PopoverContent>
    </Popover>
  );
}
