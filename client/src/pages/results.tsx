import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Target, 
  CheckCircle, 
  XCircle, 
  Clock,
  BookOpen,
  AlertTriangle
} from "lucide-react";

const DEMO_USER_ID = "demo-user-123";

export default function ResultsPage() {
  const { data: results, isLoading } = useQuery({
    queryKey: ["/api/dashboard/results"],
    queryFn: async () => {
      const response = await fetch(`/api/dashboard/results?userId=${DEMO_USER_ID}`);
      if (!response.ok) throw new Error("Failed to fetch results");
      return response.json();
    },
  });

  const { data: stats } = useQuery({
    queryKey: ["/api/dashboard/stats"],
    queryFn: async () => {
      const response = await fetch(`/api/dashboard/stats?userId=${DEMO_USER_ID}`);
      if (!response.ok) throw new Error("Failed to fetch stats");
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="h-8 bg-muted rounded w-48"></div>
          <div className="h-4 bg-muted rounded w-96"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </CardHeader>
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
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div className="space-y-6 pb-16 lg:pb-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">Test Results</h1>
        <p className="text-muted-foreground">
          Review your performance and track your progress
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Score</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.averageScore || 0}%</div>
            <p className="text-xs text-muted-foreground">
              {stats?.averageScore >= 75 ? "Above pass mark" : "Below pass mark"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tests Passed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats?.passedTests || 0}/{stats?.totalTests || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              {stats?.totalTests > 0 ? Math.round(((stats?.passedTests || 0) / stats.totalTests) * 100) : 0}% pass rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.accuracy || 0}%</div>
            <p className="text-xs text-muted-foreground">
              {stats?.correctAnswers || 0} correct answers
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Results */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Test Results</CardTitle>
          <CardDescription>
            Your latest test performances
          </CardDescription>
        </CardHeader>
        <CardContent>
          {results && results.length > 0 ? (
            <div className="space-y-4">
              {results.map((result: any) => (
                <div key={result.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${result.isPassed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {result.isPassed ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <XCircle className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{result.category} Test</h4>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(result.completedAt)}
                        </p>
                      </div>
                    </div>
                    <Badge variant={result.isPassed ? "default" : "destructive"}>
                      {result.score}%
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Score</div>
                      <div className="font-medium">{result.score}%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Correct</div>
                      <div className="font-medium">{result.correctAnswers}/{result.totalQuestions}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Duration</div>
                      <div className="font-medium">{formatDuration(result.timeSpent)}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Status</div>
                      <div className={`font-medium ${result.isPassed ? 'text-green-600' : 'text-red-600'}`}>
                        {result.isPassed ? 'Passed' : 'Failed'}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{result.score}%</span>
                    </div>
                    <Progress value={result.score} className="h-2" />
                  </div>

                  {result.incorrectQuestions && result.incorrectQuestions.length > 0 && (
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-medium">Areas for Improvement</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        {result.incorrectQuestions.slice(0, 3).map((incorrect: any, index: number) => (
                          <div key={index} className="border-l-2 border-orange-500 pl-3">
                            <p className="font-medium">{incorrect.question}</p>
                            <p className="text-muted-foreground">
                              Your answer: {incorrect.selectedAnswer} | 
                              Correct: {incorrect.correctAnswer}
                            </p>
                          </div>
                        ))}
                        {result.incorrectQuestions.length > 3 && (
                          <p className="text-muted-foreground">
                            +{result.incorrectQuestions.length - 3} more questions to review
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">No test results yet</p>
              <p className="text-sm mb-4">Take your first practice test to see results here</p>
              <Button asChild>
                <a href="/test/practice">Start Practice Test</a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button asChild>
          <a href="/test/practice">Take Practice Test</a>
        </Button>
        <Button asChild variant="outline">
          <a href="/study">Study More</a>
        </Button>
      </div>
    </div>
  );
}