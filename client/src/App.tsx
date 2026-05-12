import { Switch, Route, Router, useSearch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Component, type ReactNode, type ErrorInfo } from "react";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout/layout";
import Dashboard from "@/pages/dashboard";
import StudyCategories from "@/pages/study-categories";
import StudyGuide from "@/pages/study-guide";
import TestPage from "@/pages/test";
import FlashcardsPage from "@/pages/flashcards";
import ResultsPage from "@/pages/results";
import ProgressPage from "@/pages/progress";
import ReviewsPage from "@/pages/reviews";
import SubscriptionPage from "@/pages/subscription";
import AboutPage from "@/pages/about";
import NotFound from "@/pages/not-found";
import { applyTheme, getStoredTheme } from "@/lib/themes";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import AuthPage from "@/components/auth/AuthPage";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("App error:", error, info);
  }
  render() {
    if (this.state.error) {
      const msg = (this.state.error as Error).message;
      return (
        <div style={{ padding: 32, fontFamily: "sans-serif", maxWidth: 600, margin: "40px auto" }}>
          <h2 style={{ color: "#CC0000" }}>Something went wrong</h2>
          <p style={{ color: "#333" }}>{msg}</p>
          <button onClick={() => { this.setState({ error: null }); window.location.reload(); }}
            style={{ marginTop: 16, padding: "8px 16px", background: "#002F6C", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}>
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const queryClient = new QueryClient();

if (typeof window !== "undefined") {
  applyTheme(getStoredTheme());
}

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

function LoginRoute() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const mode = params.get("mode") === "signup" ? "signup" : "signin";
  return <AuthPage defaultMode={mode} />;
}

function AppRouter() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  // Public routes — not logged in
  if (!user) {
    return (
      <Router base={BASE}>
        <Switch>
          <Route path="/login" component={LoginRoute} />
          <Route path="/about" component={AboutPage} />
          <Route component={AboutPage} />
        </Switch>
      </Router>
    );
  }

  // Authenticated routes
  return (
    <Router base={BASE}>
      <Layout>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/about" component={AboutPage} />
          <Route path="/study" component={StudyCategories} />
          <Route path="/study-guide" component={StudyGuide} />
          <Route path="/test/:type?" component={TestPage} />
          <Route path="/flashcards/:categoryId?" component={FlashcardsPage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/progress" component={ProgressPage} />
          <Route path="/reviews" component={ReviewsPage} />
          <Route path="/pricing" component={SubscriptionPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="citizenship-test-theme">
          <AuthProvider>
            <SubscriptionProvider>
              <AppRouter />
              <Toaster />
            </SubscriptionProvider>
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
