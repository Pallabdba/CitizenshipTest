import { useState } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen,
  Eye,
  EyeOff,
  ArrowRight,
  Layers
} from "lucide-react";

export default function FlashcardsPage() {
  const [match, params] = useRoute("/flashcards/:setId?");
  const [, navigate] = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());

  const setId = params?.setId ? parseInt(params.setId) : undefined;

  // Fetch flashcard sets
  const { data: flashcardSets, isLoading: setsLoading } = useQuery<any[]>({
    queryKey: ["/api/flashcard-sets"],
    queryFn: async () => {
      const response = await fetch("/api/flashcard-sets");
      if (!response.ok) throw new Error("Failed to fetch flashcard sets");
      return response.json();
    },
    enabled: !setId,
  });

  // Fetch selected flashcard set with cards
  const { data: selectedSet, isLoading: cardsLoading } = useQuery<any>({
    queryKey: ["/api/flashcard-sets", setId],
    queryFn: async () => {
      const response = await fetch(`/api/flashcard-sets/${setId}`);
      if (!response.ok) throw new Error("Failed to fetch flashcard set");
      return response.json();
    },
    enabled: !!setId,
  });

  const flashcards = selectedSet?.flashcards;
  const currentCard = flashcards?.[currentIndex];
  const progress = flashcards ? ((studiedCards.size) / flashcards.length) * 100 : 0;

  const handleFlip = () => {
    setShowBack(!showBack);
    if (!showBack && currentCard) {
      setStudiedCards(prev => new Set(prev.add(currentCard.id)));
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

  // Flashcard Set Selection View
  if (!setId) {
    if (setsLoading) {
      return (
        <div className="space-y-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-lg font-medium">Loading flashcard sets...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6 pb-16 lg:pb-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">Flashcard Sets</h1>
          <p className="text-muted-foreground">
            Choose a flashcard set to study. Each set contains curated cards covering key citizenship concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flashcardSets?.map((set: any) => (
            <Card 
              key={set.id} 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/flashcards/${set.id}`)}
              data-testid={`flashcard-set-${set.id}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Layers className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{set.name}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {set.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{set.flashcardIds?.length || 20}</div>
                      <div className="text-xs text-muted-foreground">Cards</div>
                    </div>
                    {set.categoryId && (
                      <Badge variant="secondary">Part {set.categoryId}</Badge>
                    )}
                  </div>
                  <Button data-testid={`button-study-${set.id}`}>
                    Study
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Loading state for flashcards
  if (cardsLoading) {
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

  // No flashcards error
  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="space-y-6 text-center">
        <BookOpen className="h-16 w-16 text-muted-foreground mx-auto" />
        <h1 className="text-2xl font-bold">No Flashcards Available</h1>
        <p className="text-muted-foreground">
          No flashcards found for this set.
        </p>
        <Button asChild>
          <Link href="/flashcards">Back to Flashcard Sets</Link>
        </Button>
      </div>
    );
  }

  // Flashcard Study View
  return (
    <div className="space-y-6 pb-16 lg:pb-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            data-testid="button-back-to-sets"
          >
            <Link href="/flashcards">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Sets
            </Link>
          </Button>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">{selectedSet?.name || "Flashcards"}</h1>
        <p className="text-muted-foreground">
          Card {currentIndex + 1} of {flashcards.length}
        </p>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Cards Studied</span>
          <span>{studiedCards.size} / {flashcards.length}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Flashcard */}
      <div className="flex justify-center">
        <Card 
          className="w-full max-w-2xl cursor-pointer hover:shadow-lg transition-shadow"
          onClick={handleFlip}
          data-testid="card-flashcard"
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                {currentCard.categoryName}
              </CardTitle>
              <Badge variant={showBack ? "default" : "outline"}>
                {showBack ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="min-h-[200px] flex items-center justify-center p-6">
              <p className="text-xl text-center leading-relaxed">
                {showBack ? currentCard.back : currentCard.front}
              </p>
            </div>
            <div className="text-center text-sm text-muted-foreground mt-4">
              Click card to flip
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          data-testid="button-previous-card"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        <Button
          variant="outline"
          onClick={handleReset}
          data-testid="button-reset-cards"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>

        <Button
          variant="outline"
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          data-testid="button-next-card"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold">{flashcards.length}</div>
          <div className="text-sm text-muted-foreground">Total Cards</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{studiedCards.size}</div>
          <div className="text-sm text-muted-foreground">Studied</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{flashcards.length - studiedCards.size}</div>
          <div className="text-sm text-muted-foreground">Remaining</div>
        </div>
      </div>
    </div>
  );
}
