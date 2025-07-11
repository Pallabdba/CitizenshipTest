import { useState } from "react";
import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen,
  Eye,
  EyeOff
} from "lucide-react";

export default function FlashcardsPage() {
  const [match, params] = useRoute("/flashcards/:categoryId?");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());

  const categoryId = params?.categoryId ? parseInt(params.categoryId) : undefined;

  const { data: flashcards, isLoading } = useQuery({
    queryKey: ["/api/flashcards", categoryId],
    queryFn: async () => {
      const url = categoryId ? `/api/flashcards?categoryId=${categoryId}` : "/api/flashcards";
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch flashcards");
      return response.json();
    },
  });

  const { data: categories } = useQuery({
    queryKey: ["/api/categories"],
    queryFn: async () => {
      const response = await fetch("/api/categories");
      if (!response.ok) throw new Error("Failed to fetch categories");
      return response.json();
    },
  });

  const currentCard = flashcards?.[currentIndex];
  const progress = flashcards ? ((currentIndex + 1) / flashcards.length) * 100 : 0;

  const handleFlip = () => {
    setShowBack(!showBack);
    if (!showBack) {
      setStudiedCards(prev => new Set(prev.add(currentIndex)));
    }
  };

  const handleNext = () => {
    if (flashcards && currentIndex < flashcards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowBack(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowBack(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setShowBack(false);
    setStudiedCards(new Set());
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="h-8 bg-muted rounded w-48"></div>
          <div className="h-4 bg-muted rounded w-96"></div>
        </div>
        <div className="flex justify-center">
          <Card className="w-full max-w-2xl animate-pulse">
            <CardHeader>
              <div className="h-6 bg-muted rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-muted rounded"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="space-y-6 text-center">
        <BookOpen className="h-16 w-16 text-muted-foreground mx-auto" />
        <h1 className="text-2xl font-bold">No Flashcards Available</h1>
        <p className="text-muted-foreground">
          {categoryId 
            ? "No flashcards found for this category."
            : "No flashcards available at the moment."
          }
        </p>
        <Button asChild>
          <a href="/study">Browse Study Categories</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-16 lg:pb-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">Flashcards</h1>
        <p className="text-muted-foreground">
          Study key facts and concepts for your citizenship test
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          asChild
          variant={!categoryId ? "default" : "outline"}
          size="sm"
        >
          <a href="/flashcards">All Categories</a>
        </Button>
        {categories?.map((category: any) => (
          <Button
            key={category.id}
            asChild
            variant={categoryId === category.id ? "default" : "outline"}
            size="sm"
          >
            <a href={`/flashcards/${category.id}`}>{category.name}</a>
          </Button>
        ))}
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Card {currentIndex + 1} of {flashcards.length}</span>
          <span>{studiedCards.size} studied</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="flex justify-center">
        <Card 
          className={`w-full max-w-2xl min-h-[300px] cursor-pointer transition-all duration-300 ${
            showBack ? 'bg-primary/5 border-primary' : ''
          }`}
          onClick={handleFlip}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                {showBack ? 'Answer' : 'Question'}
              </CardTitle>
              <Badge variant={showBack ? "default" : "secondary"}>
                {showBack ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center min-h-[200px]">
              <p className="text-center text-lg leading-relaxed">
                {showBack ? currentCard.back : currentCard.front}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        
        <Button onClick={handleFlip}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Flip Card
        </Button>
        
        <Button
          variant="outline"
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <Button variant="outline" onClick={handleReset}>
          Reset Progress
        </Button>
        <Button asChild>
          <a href="/test/practice">Take Practice Test</a>
        </Button>
      </div>

      {/* Study Tips */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use Flashcards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>Read the question carefully and try to answer it before flipping the card</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>Review cards you found difficult multiple times</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>Use flashcards regularly to improve long-term retention</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>Combine flashcard study with practice tests for best results</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}