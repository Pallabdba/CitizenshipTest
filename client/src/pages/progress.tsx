import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award, 
  BookOpen,
  Clock,
  CheckCircle
} from "lucide-react";

export default function ProgressPage() {
  const { data: progress = [], isLoading, isError } = useQuery({
    queryKey: ["/api/progress"],
    queryFn: async () => {
      const response = await fetch("/api/progress");
      if (!response.ok) throw new Error("Failed to fetch progress");
      return response.json();
    },
  });

  const { data: stats } = useQuery({
    queryKey: ["/api/dashboard/stats"],
    queryFn: async () => {
      const response = await fetch("/api/dashboard/stats");
      if (!response.ok) throw new Error("Failed to fetch stats");
      return response.json();
    },
  });

  if (isLoading || isError) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="h-8 bg-muted rounded w-48"></div>
          <div className="h-4 bg-muted rounded w-96"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-2 bg-muted rounded w-full mb-4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6 pb-16 lg:pb-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">Your Progress</h1>
        <p className="text-muted-foreground">
          Track your citizenship test preparation journey
        </p>
      </div>

      {/* Overall Progress */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.currentStreak || 0}</div>
            <p className="text-xs text-muted-foreground">days in a row</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tests</CardTitle>
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
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.floor((stats?.studyTime || 0) / 60)}h</div>
            <p className="text-xs text-muted-foreground">total time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.accuracy || 0}%</div>
            <p className="text-xs text-muted-foreground">correct answers</p>
          </CardContent>
        </Card>
      </div>

      {/* Category Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Progress by Category</CardTitle>
          <CardDescription>
            Your performance across different topics
          </CardDescription>
        </CardHeader>
        <CardContent>
          {progress && progress.length > 0 ? (
            <div className="space-y-4">
              {progress.map((item: any) => (
                <div key={item.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.category?.name || 'General'}</h4>
                        <p className="text-sm text-muted-foreground">
                          Last studied: {item.lastStudied ? formatDate(item.lastStudied) : 'Never'}
                        </p>
                      </div>
                    </div>
                    <Badge variant={item.accuracy >= 75 ? "default" : "secondary"}>
                      {item.accuracy}%
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Questions</div>
                      <div className="font-medium">{item.totalQuestions || 0}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Correct</div>
                      <div className="font-medium">{item.correctAnswers || 0}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Accuracy</div>
                      <div className="font-medium">{item.accuracy || 0}%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Streak</div>
                      <div className="font-medium">{item.streakDays || 0} days</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{item.accuracy}%</span>
                    </div>
                    <Progress value={item.accuracy} className="h-2" />
                  </div>

                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/test/practice?category=${item.categoryId}`}>Practice</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/flashcards/${item.categoryId}`}>Flashcards</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">No progress data yet</p>
              <p className="text-sm mb-4">Start studying to track your progress here</p>
              <Button asChild>
                <Link href="/study">Start Studying</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Study Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Study Recommendations</CardTitle>
          <CardDescription>
            Areas to focus on for better results
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {(progress.filter((item: any) => item.accuracy < 75)).length > 0 ? (
              <>
                <div className="space-y-2">
                  <h4 className="font-medium text-orange-600">Focus Areas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(progress as any[])
                      .filter((item: any) => item.accuracy < 75)
                      .map((item: any) => (
                        <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{item.category?.name || 'General'}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.accuracy}% accuracy
                            </p>
                          </div>
                          <Button asChild size="sm">
                            <a href={`/test/practice?category=${item.categoryId}`}>
                              Practice
                            </a>
                          </Button>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-4">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <p className="font-medium text-green-600">Great job!</p>
                <p className="text-sm text-muted-foreground">
                  You're performing well across all categories. Keep up the good work!
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
              <div className="space-y-2">
                <h4 className="font-medium">Study Tips</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Study for 15-20 minutes daily</li>
                  <li>• Focus on areas below 75% accuracy</li>
                  <li>• Use flashcards for memorization</li>
                  <li>• Take regular practice tests</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Test Day Tips</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Arrive early and bring ID</li>
                  <li>• Read questions carefully</li>
                  <li>• Manage your time wisely</li>
                  <li>• Stay calm and confident</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}