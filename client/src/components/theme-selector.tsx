import { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { themes, applyTheme, getStoredTheme, type ThemeKey } from "@/lib/themes";

interface ThemeSelectorProps { variant?: "light" | "dark" }

export function ThemeSelector({ variant = "light" }: ThemeSelectorProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>(getStoredTheme());
  const [open, setOpen] = useState(false);
  const [tooltip, setTooltip] = useState<string | null>(null);

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

      <PopoverContent align="end" className="w-64 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold">Choose Colour</p>
          {tooltip && (
            <span className="text-xs text-muted-foreground truncate max-w-[140px] text-right">
              {tooltip}
            </span>
          )}
        </div>

        {/* Colour board grid */}
        <div className="grid grid-cols-4 gap-2">
          {Object.entries(themes).map(([key, value]) => {
            const isActive = currentTheme === key;
            return (
              <button
                key={key}
                data-testid={`theme-option-${key}`}
                onClick={() => handleThemeChange(key as ThemeKey)}
                onMouseEnter={() => setTooltip(value.name)}
                onMouseLeave={() => setTooltip(null)}
                title={value.name}
                className={`relative flex flex-col items-center gap-1 p-2 rounded-xl border-2 transition-all
                  ${isActive
                    ? "border-foreground shadow-md scale-105"
                    : "border-transparent hover:border-muted-foreground/40 hover:scale-105"
                  }`}
              >
                {/* Primary swatch */}
                <div
                  className="w-8 h-8 rounded-full border border-black/10 shadow-sm"
                  style={{ backgroundColor: `hsl(${value.primary})` }}
                />
                {/* Secondary swatch — half-size, overlapping bottom-right */}
                <div
                  className="absolute bottom-3 right-1.5 w-4 h-4 rounded-full border-2 border-background shadow-sm"
                  style={{ backgroundColor: `hsl(${value.secondary})` }}
                />
                {/* Active tick */}
                {isActive && (
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-foreground flex items-center justify-center">
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
