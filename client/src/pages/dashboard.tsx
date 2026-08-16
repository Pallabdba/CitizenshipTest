import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  Target,
  Award,
  BookOpen,
  PlayCircle,
  CheckCircle,
  XCircle,
  FlaskConical,
  Sparkles,
  ChevronRight,
  Timer,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { dbApi } from "@/lib/supabaseStorage";
import { useState } from "react";
import { LUCKY_OFFER, discountedPrice, daysLeftInMonth } from "@/lib/promo";

export default function Dashboard() {
  const { user } = useAuth();
  const { isPremium } = useSubscription();
  const userId = user?.id ?? "";
  const displayName = user?.email?.split("@")[0] ?? "there";
  const queryClient = useQueryClient();
  const [seeding, setSeeding] = useState(false);

  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["/api/dashboard/stats", userId],
    enabled: !!userId,
    queryFn: async () => {
      const response = await fetch("/api/dashboard/stats");
      if (!response.ok) throw new Error("Failed to fetch stats");
      return response.json();
    },
  });

  const { data: activity, isLoading: activityLoading } = useQuery({
    queryKey: ["/api/dashboard/activity", userId],
    enabled: !!userId,
    queryFn: async () => {
      const response = await fetch("/api/dashboard/activity");
      if (!response.ok) throw new Error("Failed to fetch activity");
      return response.json();
    },
  });

  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["/api/categories"],
    queryFn: async () => {
      const response = await fetch("/api/categories");
      if (!response.ok) throw new Error("Failed to fetch categories");
      return response.json();
    },
  });

  const { data: progress, isLoading: progressLoading } = useQuery({
    queryKey: ["/api/user-progress", userId],
    enabled: !!userId,
    queryFn: async () => {
      const response = await fetch("/api/user-progress");
      if (!response.ok) throw new Error("Failed to fetch progress");
      return response.json();
    },
  });

  const progressMap: Record<number, number> = {};
  if (Array.isArray(progress)) {
    for (const p of progress) {
      progressMap[p.categoryId] = p.accuracy ?? 0;
    }
  }

  if (statsLoading || activityLoading || categoriesLoading || progressLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="pb-2">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-6 bg-muted rounded w-1/2"></div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  async function loadSampleData() {
    setSeeding(true);
    try {
      await dbApi.seedDummyData();
      await queryClient.invalidateQueries();
    } finally {
      setSeeding(false);
    }
  }

  const hasActivity = Array.isArray(activity) && activity.length > 0;
  const passRate = stats?.totalTests > 0
    ? Math.round((stats.passedTests / stats.totalTests) * 100)
    : 0;

  return (
    <div className="space-y-6 pb-16 lg:pb-6">
      {/* Welcome */}
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold">Welcome back, {displayName}!</h1>
        <p className="text-muted-foreground text-sm">
          {stats?.totalTests > 0
            ? `You've completed ${stats.totalTests} test${stats.totalTests !== 1 ? "s" : ""} — keep going!`
            : "Start a practice test to track your progress."}
        </p>
      </div>

      {/* Lucky Offer card — free users only */}
      {LUCKY_OFFER.active && !isPremium && (
        <div
          className="rounded-xl p-[2px] shadow-md"
          style={{ background: "linear-gradient(135deg, #F5A200, #FFD700, #FF8C00)" }}
        >
          <div
            className="rounded-[10px] px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            style={{ background: "linear-gradient(135deg, #fffbeb, #fef3c7)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #F5A200, #FFD700)" }}
            >
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-amber-900 text-sm leading-snug">
                {new Date().toLocaleString("default", { month: "long" })} Lucky Offer — {LUCKY_OFFER.discountPct}% off your first subscription
              </p>
              <p className="text-amber-700 text-xs mt-0.5">
                Weekly from <strong>{discountedPrice(3.99)}</strong> · Monthly from <strong>{discountedPrice(9.99)}</strong>
                {" "}· Use code{" "}
                <span className="font-mono font-bold bg-white/60 rounded px-1">{LUCKY_OFFER.code}</span>
                {" "}
                <span className="inline-flex items-center gap-0.5 text-amber-600">
                  <Timer className="h-3 w-3" />
                  {daysLeftInMonth() === 0 ? "Last day!" : `${daysLeftInMonth()}d left`}
                </span>
              </p>
            </div>
            <Link href="/pricing">
              <Button
                size="sm"
                className="shrink-0 font-semibold border-0 gap-1"
                style={{ background: "#F5A200", color: "#002F6C" }}
              >
                Claim offer <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tests Completed</CardTitle>
            <Target className="h-4 w-4 text-[#002F6C]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalTests ?? 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.passedTests ?? 0} passed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-[#F5A200]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.averageScore ?? 0}%</div>
            <p className="text-xs text-muted-foreground">Pass mark: 75%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
            <Award className="h-4 w-4 text-[#F5A200]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{passRate}%</div>
            <p className="text-xs text-muted-foreground">
              {stats?.totalTests > 0 ? `${stats.passedTests}/${stats.totalTests} tests` : "No tests yet"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
            <Target className="h-4 w-4 text-[#002F6C]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.accuracy ?? 0}%</div>
            <p className="text-xs text-muted-foreground">
              {stats?.correctAnswers ?? 0} correct answers
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlayCircle className="h-5 w-5" />
              Practice Test
            </CardTitle>
            <CardDescription>2 sets free · 20 questions · 45 min · Pass at 75%</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/test/practice">Start Practice Test</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Flashcards
            </CardTitle>
            <CardDescription>2 sets free · 243 cards across all 4 topics</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/flashcards">Study Flashcards</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Study Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Progress by Topic</CardTitle>
          <CardDescription>Accuracy per category based on your answered questions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {categories?.slice(0, 4).map((category: any) => {
            const acc = progressMap[category.id] ?? 0;
            const answered = progress?.find((p: any) => p.categoryId === category.id)?.totalQuestions ?? 0;
            return (
              <div key={category.id} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {answered > 0 ? `${acc}% (${answered} answered)` : "Not started"}
                  </span>
                </div>
                <Progress value={acc} className="h-2" />
              </div>
            );
          })}
          {(!progress || progress.length === 0) && (
            <p className="text-sm text-muted-foreground text-center py-2">
              Take a practice test to see your progress per topic.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest test sessions</CardDescription>
        </CardHeader>
        <CardContent>
          {hasActivity ? (
            <div className="space-y-3">
              {activity.map((item: any) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${item.iconColor}`}>
                      {item.score >= 75
                        ? <CheckCircle className="h-4 w-4" />
                        : <XCircle className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <Badge variant={item.score >= 75 ? "default" : "secondary"}>
                    {item.score}%
                  </Badge>
                </div>
              ))}
              <div className="pt-1">
                <Link href="/results">
                  <Button variant="ghost" size="sm" className="w-full text-muted-foreground">
                    View all results →
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground space-y-3">
              <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm">No test results yet</p>
              <p className="text-xs">Complete a practice test to see your results here.</p>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 mt-2"
                onClick={loadSampleData}
                disabled={seeding}
              >
                <FlaskConical className="h-4 w-4" />
                {seeding ? "Loading sample data…" : "Load Sample Test Data"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
