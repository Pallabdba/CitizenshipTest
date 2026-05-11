import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Target, 
  Clock, 
  Award, 
  BookOpen, 
  PlayCircle,
  ChevronRight
} from "lucide-react";

// Mock user ID for demo
const DEMO_USER_ID = "demo-user-123";

export default function Dashboard() {
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["/api/dashboard/stats"],
    queryFn: async () => {
      const response = await fetch(`/api/dashboard/stats?userId=${DEMO_USER_ID}`);
      if (!response.ok) throw new Error("Failed to fetch stats");
      return response.json();
    },
  });

  const { data: activity, isLoading: activityLoading } = useQuery({
    queryKey: ["/api/dashboard/activity"],
    queryFn: async () => {
      const response = await fetch(`/api/dashboard/activity?userId=${DEMO_USER_ID}`);
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

  if (statsLoading || activityLoading || categoriesLoading) {
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

  return (
    <div className="space-y-6 pb-16 lg:pb-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">Welcome back!</h1>
        <p className="text-muted-foreground">
          Continue your Australian citizenship test preparation journey
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tests Completed</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalTests || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.passedTests || 0} passed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.averageScore || 0}%</div>
            <p className="text-xs text-muted-foreground">
              Pass mark: 75%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.currentStreak || 0}</div>
            <p className="text-xs text-muted-foreground">
              days in a row
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.accuracy || 0}%</div>
            <p className="text-xs text-muted-foreground">
              {stats?.correctAnswers || 0} correct
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
              Quick Practice
            </CardTitle>
            <CardDescription>
              Take a quick 10-question practice test
            </CardDescription>
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
              Study Categories
            </CardTitle>
            <CardDescription>
              Review topics and use flashcards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/study">Browse Topics</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Study Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Study Progress</CardTitle>
          <CardDescription>
            Your progress across different topics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {categories?.slice(0, 4).map((category: any) => (
            <div key={category.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-sm text-muted-foreground">
                  {Math.floor(Math.random() * 40) + 60}%
                </span>
              </div>
              <Progress 
                value={Math.floor(Math.random() * 40) + 60} 
                className="h-2"
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Your latest test sessions and achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          {activity?.length > 0 ? (
            <div className="space-y-4">
              {activity.map((item: any) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${item.iconColor}`}>
                      {item.type === 'test_completed' ? (
                        <Target className="h-4 w-4" />
                      ) : (
                        <BookOpen className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {item.score && (
                      <Badge variant={item.score >= 75 ? "default" : "secondary"}>
                        {item.score}%
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-muted-foreground">
              <BookOpen className="h-8 w-8 mx-auto mb-2" />
              <p>No recent activity yet</p>
              <p className="text-sm">Start studying to see your progress here!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}