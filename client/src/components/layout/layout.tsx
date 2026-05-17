import { ReactNode, useState } from "react";
import { useLocation, Link } from "wouter";
import {
  Home, BookOpen, FileText, CreditCard, TrendingUp,
  Settings, Menu, MessageSquareHeart, Crown, ExternalLink,
  Shield, LogOut, Info, HelpCircle, MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSelector } from "@/components/theme-selector";
import { SupportChat, openJoyChat } from "@/components/support-chat";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";

interface LayoutProps { children: ReactNode }

const navigation = [
  { name: "Dashboard",  href: "/",          icon: Home },
  { name: "Study",      href: "/study",      icon: BookOpen },
  { name: "Test",       href: "/test",       icon: FileText },
  { name: "Flashcards", href: "/flashcards", icon: CreditCard },
  { name: "Progress",   href: "/progress",   icon: TrendingUp },
  { name: "Results",    href: "/results",    icon: Settings },
  { name: "Reviews",    href: "/reviews",    icon: MessageSquareHeart },
  { name: "Upgrade",    href: "/pricing",    icon: Crown },
  { name: "About",      href: "/about",      icon: Info },
  { name: "Help",       href: "/help",       icon: HelpCircle },
];

const mobileNav = navigation.slice(0, 4);

// Australian flag navy
const NAVY = "#002F6C";

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { tier, isPremium } = useSubscription();

  return (
    <div className="min-h-screen bg-background">

      {/* ── Mobile top bar ─────────────────────────────────────────────────── */}
      <header className="lg:hidden sticky top-0 z-50 border-b border-[#001F4E] safe-area-top"
              style={{ background: NAVY }}>
        <div className="flex h-14 items-center px-4 gap-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"
                className="text-blue-200 hover:text-white hover:bg-white/10 shrink-0">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72 border-[#001F4E]"
                          style={{ background: NAVY }}>
              <SidebarContent location={location} user={user} tier={tier}
                isPremium={isPremium} signOut={signOut} onNav={() => setOpen(false)} />
            </SheetContent>
          </Sheet>

          {/* Flag-inspired logo strip */}
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <div className="flex items-center gap-0.5 shrink-0">
              <div className="w-1 h-6 bg-[#F5A200] rounded-full" />
              <div className="w-1 h-6 bg-white/80 rounded-full mx-0.5" />
              <div className="w-1 h-6 bg-[#F5A200] rounded-full" />
            </div>
            <BookOpen className="h-4 w-4 text-[#F5A200] shrink-0" />
            <span className="font-bold text-sm text-white truncate">
              Australian Citizenship Pro
            </span>
          </div>

          <ThemeSelector variant="dark" />
        </div>
      </header>

      <div className="flex">
        {/* ── Desktop sidebar ─────────────────────────────────────────────── */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
          <div className="flex grow flex-col overflow-y-auto border-r border-[#001F4E]"
               style={{ background: NAVY }}>
            <SidebarContent location={location} user={user} tier={tier}
              isPremium={isPremium} signOut={signOut} />
          </div>
        </div>

        {/* ── Content ─────────────────────────────────────────────────────── */}
        <div className="lg:pl-64 flex flex-col min-h-screen w-full">
          {/* Desktop top bar — theme selector pinned to right */}
          <div className="hidden lg:flex items-center justify-end px-8 py-2 border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-30">
            <ThemeSelector />
          </div>
          <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">{children}</main>
          <PageFooter />
        </div>
      </div>

      {/* ── Global chat widget ──────────────────────────────────────────────── */}
      <SupportChat />

      {/* ── Mobile bottom bar ───────────────────────────────────────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-[#001F4E] safe-area-bottom"
           style={{ background: NAVY }}>
        <div className="grid grid-cols-4">
          {mobileNav.map(item => {
            const active = location === item.href;
            return (
              <Link key={item.name} href={item.href}
                className={`flex flex-col items-center justify-center py-2.5 text-xs font-medium transition-colors gap-1 ${
                  active ? "text-[#F5A200]" : "text-blue-200 hover:text-white"
                }`}>
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Sidebar ───────────────────────────────────────────────────────────────── */
function SidebarContent({ location, user, tier, isPremium, signOut, onNav }: {
  location: string; user: any; tier: string;
  isPremium: boolean; signOut: () => void; onNav?: () => void;
}) {
  return (
    <div className="flex flex-col h-full px-4 py-5">

      {/* Brand */}
      <div className="flex items-center gap-3 px-2 pb-5 mb-2 border-b border-white/10">
        {/* Miniature flag stripe accent */}
        <div className="flex flex-col gap-0.5 shrink-0">
          <div className="w-5 h-1.5 bg-[#F5A200] rounded-sm" />
          <div className="w-5 h-1.5 bg-white/70 rounded-sm" />
          <div className="w-5 h-1.5 bg-[#F5A200] rounded-sm" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-white leading-tight">Australian Citizenship</div>
          <div className="text-xs text-blue-300 leading-tight">Test Preparation</div>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 space-y-0.5">
        {navigation.map(item => {
          const active = location === item.href;
          const isUpgrade = item.href === "/pricing";
          return (
            <Link key={item.name} href={item.href} onClick={onNav}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                transition-all duration-150 group
                ${active
                  ? "bg-[#F5A200]/15 text-[#F5A200]"
                  : isUpgrade
                  ? "text-[#F5A200]/80 hover:text-[#F5A200] hover:bg-[#F5A200]/10"
                  : "text-blue-100 hover:text-white hover:bg-white/10"
                }`}>
              <item.icon className={`h-4 w-4 shrink-0 transition-transform group-hover:scale-110 ${
                active ? "text-[#F5A200]" : ""
              }`} />
              <span className="flex-1">{item.name}</span>
              {active && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#F5A200]" />
              )}
              {isUpgrade && !isPremium && (
                <span className="text-[10px] bg-[#F5A200] text-[#002F6C] px-1.5 py-0.5
                  rounded-full font-bold leading-none">PRO</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer — user + sign out */}
      <div className="border-t border-white/10 pt-4 mt-2 space-y-2">
        {isPremium && (
          <div className="px-3 py-2 bg-[#F5A200]/15 rounded-lg flex items-center gap-2">
            <Crown className="h-3.5 w-3.5 text-[#F5A200]" />
            <span className="text-xs text-[#F5A200] font-semibold capitalize">{tier} Plan</span>
          </div>
        )}
        <div className="px-3 py-1">
          <p className="text-xs text-blue-300 truncate">{user?.email}</p>
        </div>
        <button onClick={signOut}
          className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm
            text-blue-200 hover:text-white hover:bg-white/10 transition-colors">
          <LogOut className="h-4 w-4 shrink-0" />
          Sign Out
        </button>
      </div>
    </div>
  );
}

/* ── Footer ────────────────────────────────────────────────────────────────── */
function PageFooter() {
  return (
    <footer className="mt-auto pb-20 lg:pb-0 border-t" style={{ backgroundColor: '#EBF3FF' }}>
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              {/* Mini flag stripe */}
              <div className="flex flex-col gap-0.5">
                <div className="w-4 h-1 bg-[#F5A200] rounded-sm" />
                <div className="w-4 h-1 bg-[#002F6C] rounded-sm" />
                <div className="w-4 h-1 bg-[#F5A200] rounded-sm" />
              </div>
              <span className="font-semibold text-sm">Australian Citizenship Pro</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comprehensive preparation for the Australian citizenship test, built around
              the official "Our Common Bond" study guide.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-[#002F6C]" />
              <span>Content aligned with the {new Date().getFullYear()} official edition</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Official Resources</p>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Department of Home Affairs", href: "https://immi.homeaffairs.gov.au/citizenship/test-and-interview/prepare-for-test" },
                { label: "Our Common Bond (Official PDF)", href: "https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond" },
                { label: "Test & Interview Info", href: "https://immi.homeaffairs.gov.au/citizenship/test-and-interview" },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#002F6C] dark:hover:text-blue-300 flex items-center gap-1.5 transition-colors">
                    {l.label} <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={openJoyChat}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#002F6C] dark:hover:text-blue-300 transition-colors mt-2"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Contact Support
            </button>
          </div>
        </div>

        {/* Bottom bar — tiny flag stripe accent */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px flex-1 bg-[#002F6C]/20" />
            <div className="flex gap-1">
              <div className="w-4 h-0.5 bg-[#F5A200] rounded" />
              <div className="w-4 h-0.5 bg-[#002F6C] rounded" />
              <div className="w-4 h-0.5 bg-[#F5A200] rounded" />
            </div>
            <div className="h-px flex-1 bg-[#002F6C]/20" />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Australian Citizenship Pro. All rights reserved.</p>
            <p>Independent study tool — not affiliated with the Australian Government.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
