import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themes, applyTheme, getStoredTheme, type ThemeKey } from "@/lib/themes";

interface ThemeSelectorProps { variant?: "light" | "dark" }

export function ThemeSelector({ variant = "light" }: ThemeSelectorProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>(getStoredTheme());

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (theme: ThemeKey) => {
    setCurrentTheme(theme);
    applyTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon"
          className={variant === "dark"
            ? "text-blue-200 hover:text-white hover:bg-white/10"
            : "text-muted-foreground hover:text-foreground hover:bg-accent/10"}
          data-testid="button-theme-selector">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Select theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 max-h-[70vh] overflow-y-auto">
        <DropdownMenuLabel className="sticky top-0 bg-popover z-10">Choose Color Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.entries(themes).map(([key, value]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleThemeChange(key as ThemeKey)}
            className="cursor-pointer"
            data-testid={`theme-option-${key}`}
          >
            <div className="flex items-center gap-3 w-full">
              <div className="flex gap-1">
                <div
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: `hsl(${value.primary})` }}
                />
                <div
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: `hsl(${value.secondary})` }}
                />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">{value.name}</div>
                <div className="text-xs text-muted-foreground">{value.description}</div>
              </div>
              {currentTheme === key && (
                <div className="w-2 h-2 rounded-full bg-primary" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
