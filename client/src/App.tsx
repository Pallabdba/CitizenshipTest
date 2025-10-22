import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/study" component={StudyCategories} />
        <Route path="/study-guide" component={StudyGuide} />
        <Route path="/test/:type?" component={TestPage} />
        <Route path="/flashcards/:categoryId?" component={FlashcardsPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/progress" component={ProgressPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="citizenship-test-theme">
        <Router />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;