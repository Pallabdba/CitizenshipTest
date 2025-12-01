import { ReactNode } from "react";
import { useLocation } from "wouter";
import { 
  Home, 
  BookOpen, 
  FileText, 
  CreditCard, 
  TrendingUp, 
  Settings,
  Menu,
  X,
  MessageSquareHeart,
  Crown,
  ExternalLink,
  Mail,
  Shield
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSelector } from "@/components/theme-selector";

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Study', href: '/study', icon: BookOpen },
  { name: 'Test', href: '/test', icon: FileText },
  { name: 'Flashcards', href: '/flashcards', icon: CreditCard },
  { name: 'Progress', href: '/progress', icon: TrendingUp },
  { name: 'Results', href: '/results', icon: Settings },
  { name: 'Reviews', href: '/reviews', icon: MessageSquareHeart },
  { name: 'Pricing', href: '/pricing', icon: Crown },
];

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile header */}
      <header className="lg:hidden sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground safe-area-top">
        <div className="container flex h-14 items-center">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base text-primary-foreground hover:bg-primary/80 focus-visible:bg-primary/80 focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
          <div className="mr-4 flex flex-1">
            <h1 className="text-lg font-semibold">Australian Citizenship Test</h1>
          </div>
          <ThemeSelector />
        </div>
      </header>

      <div className="flex">
        {/* Desktop sidebar */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-primary px-6">
            <div className="flex h-16 shrink-0 items-center justify-between">
              <h1 className="text-xl font-bold text-primary-foreground">Australian Citizenship Test</h1>
              <ThemeSelector />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => {
                      const isActive = location === item.href;
                      return (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                              isActive
                                ? 'bg-white/20 text-primary-foreground'
                                : 'text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/10'
                            }`}
                          >
                            <item.icon className="h-6 w-6 shrink-0" />
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:pl-72 flex flex-col min-h-screen">
          <main className="py-6 px-4 sm:px-6 lg:px-8 flex-1">
            {children}
          </main>
          
          {/* Footer - Desktop and Mobile (hidden behind mobile nav on mobile) */}
          <footer className="bg-muted/50 border-t mt-auto pb-20 lg:pb-0">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-foreground">Australian Citizenship Test Prep</h3>
                  <p className="text-sm text-muted-foreground">
                    Prepare for your Australian citizenship test with our comprehensive study materials, 
                    practice tests, and flashcards based on the official "Our Common Bond" guide.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Content aligned with official {new Date().getFullYear()} edition</span>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-foreground">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/study" className="text-muted-foreground hover:text-primary transition-colors">
                        Study Guide
                      </a>
                    </li>
                    <li>
                      <a href="/test" className="text-muted-foreground hover:text-primary transition-colors">
                        Practice Tests
                      </a>
                    </li>
                    <li>
                      <a href="/flashcards" className="text-muted-foreground hover:text-primary transition-colors">
                        Flashcards
                      </a>
                    </li>
                    <li>
                      <a href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Official Resources */}
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-foreground">Official Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a 
                        href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/prepare-for-test" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        Department of Home Affairs
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        Our Common Bond (Official PDF)
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/book-a-test" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        Book Your Test
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <a 
                      href="mailto:support@citizenshiptest.com.au" 
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
                    >
                      <Mail className="h-4 w-4" />
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t mt-8 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                  <p>&copy; {new Date().getFullYear()} Australian Citizenship Test Prep. All rights reserved.</p>
                  <p className="text-xs text-center md:text-right">
                    Disclaimer: This app is an independent study tool and is not affiliated with the Australian Government.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-white/10 safe-area-bottom">
        <div className="grid grid-cols-4 gap-1 py-2">
          {navigation.slice(0, 4).map((item) => {
            const isActive = location === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center py-2 px-3 text-xs ${
                  isActive
                    ? 'text-primary-foreground'
                    : 'text-primary-foreground/60 hover:text-primary-foreground'
                }`}
              >
                <item.icon className="h-5 w-5 mb-1" />
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileNav() {
  const [location] = useLocation();

  return (
    <div className="flex flex-col space-y-3">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-2 text-lg font-semibold text-primary">Australian Citizenship Test</h2>
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = location === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-primary/10 text-foreground'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}