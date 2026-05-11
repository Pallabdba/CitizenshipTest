import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Flag, 
  Clock, 
  Map, 
  Building, 
  Users, 
  Heart,
  BookOpen,
  ChevronRight,
  Target
} from "lucide-react";

const iconMap = {
  'flag': Flag,
  'clock': Clock,
  'map': Map,
  'building': Building,
  'users': Users,
  'heart': Heart,
  'book': BookOpen,
};

export default function StudyCategories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["/api/categories"],
    queryFn: async () => {
      const response = await fetch("/api/categories");
      if (!response.ok) throw new Error("Failed to fetch categories");
      return response.json();
    },
  });

  const { data: questionCounts } = useQuery({
    queryKey: ["/api/categories/question-counts"],
    queryFn: async () => {
      if (!categories) return {};
      const counts: Record<number, number> = {};
      await Promise.all(
        categories.map(async (cat: any) => {
          const response = await fetch(`/api/categories/${cat.id}/question-count`);
          if (response.ok) {
            const data = await response.json();
            counts[data.categoryId] = data.count;
          }
        })
      );
      return counts;
    },
    enabled: !!categories,
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="h-8 bg-muted rounded w-48"></div>
          <div className="h-4 bg-muted rounded w-96"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
              </CardHeader>
              <CardContent>
                <div className="h-2 bg-muted rounded w-full mb-4"></div>
                <div className="h-10 bg-muted rounded w-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-16 lg:pb-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">Study Categories</h1>
        <p className="text-muted-foreground">
          Choose a topic to start studying for your Australian citizenship test
        </p>
      </div>

      {/* Official Study Guide Card */}
      <Card className="bg-primary/5 border-primary/20" data-testid="card-study-guide">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl">Official Study Guide</CardTitle>
              <CardDescription className="mt-1">
                Read the complete "Australian Citizenship: Our Common Bond" PDF document
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            All test questions come from this official government document. 
            Read the full guide to prepare comprehensively for your citizenship test.
          </p>
          <Button asChild size="lg" data-testid="button-view-study-guide">
            <Link href="/study-guide">
              <BookOpen className="h-4 w-4 mr-2" />
              View Study Guide
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories?.map((category: any) => {
          const IconComponent = iconMap[category.iconName as keyof typeof iconMap] || BookOpen;
          const progress = Math.floor(Math.random() * 40) + 60; // Mock progress
          const questionsCount = questionCounts?.[category.id] || 0;
          
          return (
            <Card key={category.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {questionsCount} questions available
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-muted-foreground">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link href={`/test/practice?category=${category.id}`}>
                      <Target className="h-4 w-4 mr-2" />
                      Practice
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/flashcards/${category.id}`}>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Flashcards
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Study Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Study Tips</CardTitle>
          <CardDescription>
            Maximize your preparation with these helpful tips
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">📚 Regular Practice</h4>
              <p className="text-sm text-muted-foreground">
                Study for 15-20 minutes daily rather than cramming before the test
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">🎯 Focus on Weak Areas</h4>
              <p className="text-sm text-muted-foreground">
                Spend extra time on topics where you score below 75%
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">🔄 Use Flashcards</h4>
              <p className="text-sm text-muted-foreground">
                Review flashcards to memorize important facts and dates
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">⏰ Time Management</h4>
              <p className="text-sm text-muted-foreground">
                Practice with timed tests to prepare for the real exam
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}