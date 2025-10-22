import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search, Download } from "lucide-react";

interface HeaderProps {
  title: string;
  description?: string;
  onSearch?: (query: string) => void;
  onExport?: () => void;
  showSearch?: boolean;
  showExport?: boolean;
}

export default function Header({ 
  title, 
  description, 
  onSearch, 
  onExport,
  showSearch = true,
  showExport = true
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          {showSearch && (
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-64 pl-10"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
          )}
          
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-destructive rounded-full"></span>
          </Button>
          
          {/* Export Button */}
          {showExport && (
            <Button onClick={onExport}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
