import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Timer, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  AlertCircle,
  Target,
  Info
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DEMO_USER_ID = "demo-user-123";

export default function TestPage() {
  const [match, params] = useRoute("/test/:type?");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [testSession, setTestSession] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes
  const [isFinished, setIsFinished] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const testType = params?.type || "practice";
  const isTimedTest = testType === "official";

  // Get random questions for the test
  const { data: questions, isLoading: questionsLoading } = useQuery({
    queryKey: ["/api/questions/random", testType],
    queryFn: async () => {
      const limit = testType === "practice" ? 10 : 20;
      const response = await fetch(`/api/questions/random?limit=${limit}`);
      if (!response.ok) throw new Error("Failed to fetch questions");
      return response.json();
    },
    enabled: !testSession,
  });

  // Create test session
  const createSession = useMutation({
    mutationFn: async (sessionData: any) => {
      const response = await fetch("/api/test-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sessionData),
      });
      if (!response.ok) throw new Error("Failed to create test session");
      return response.json();
    },
    onSuccess: (session) => {
      setTestSession(session);
    },
  });

  // Submit test answer
  const submitAnswer = useMutation({
    mutationFn: async (answerData: any) => {
      const response = await fetch("/api/test-answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answerData),
      });
      if (!response.ok) throw new Error("Failed to submit answer");
      return response.json();
    },
  });

  // Complete test session
  const completeTest = useMutation({
    mutationFn: async (sessionId: number) => {
      const response = await fetch(`/api/test-sessions/${sessionId}/complete`, {
        method: "POST",
      });
      if (!response.ok) throw new Error("Failed to complete test");
      return response.json();
    },
    onSuccess: () => {
      setIsFinished(true);
      toast({
        title: "Test completed!",
        description: "Your results have been saved.",
      });
    },
  });

  // Initialize test session when questions are loaded
  useEffect(() => {
    if (questions && questions.length > 0 && !testSession) {
      createSession.mutate({
        userId: DEMO_USER_ID,
        testType,
        totalQuestions: questions.length,
      });
    }
  }, [questions, testSession, testType]);

  // Timer for timed tests
  useEffect(() => {
    if (isTimedTest && testSession && !isFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isTimedTest, testSession, isFinished, timeLeft]);

  const currentQuestion = questions?.[currentQuestionIndex];
  const progress = questions ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = async () => {
    if (!selectedAnswer || !currentQuestion || !testSession) return;

    // Submit the answer
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    await submitAnswer.mutateAsync({
      sessionId: testSession.id,
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
    });

    // Save answer locally
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: selectedAnswer
    }));

    // Move to next question or finish
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer("");
    } else {
      handleSubmitTest();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1] || "");
    }
  };

  const handleSubmitTest = async () => {
    if (!testSession) return;
    await completeTest.mutateAsync(testSession.id);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (questionsLoading || createSession.isPending) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg font-medium">Preparing your test...</p>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="space-y-6 text-center">
        <div className="space-y-4">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          <h1 className="text-3xl font-bold">Test Complete!</h1>
          <p className="text-muted-foreground">
            Your test has been submitted and results are being processed.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <a href="/results">View Results</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/">Back to Dashboard</a>
          </Button>
        </div>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="space-y-6 text-center">
        <AlertCircle className="h-16 w-16 text-orange-500 mx-auto" />
        <h1 className="text-2xl font-bold">No Questions Available</h1>
        <p className="text-muted-foreground">
          Please try again later or contact support.
        </p>
        <Button asChild>
          <a href="/">Back to Dashboard</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-16 lg:pb-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            {testType === "practice" ? "Practice Test" : "Official Test"}
          </h1>
          <p className="text-muted-foreground">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>
        {isTimedTest && (
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4" />
            <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
          </div>
        )}
      </div>

      {/* Passing Criteria Info */}
      {currentQuestionIndex === 0 && (
        <Alert data-testid="alert-test-criteria">
          <Info className="h-4 w-4" />
          <AlertTitle>How to Pass the Test</AlertTitle>
          <AlertDescription>
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li><strong>Score at least 75%</strong> (15 out of 20 questions for official test)</li>
              <li><strong>Answer ALL 5 Australian values questions correctly</strong> (mandatory requirement)</li>
              {isTimedTest && <li><strong>Complete within 45 minutes</strong></li>}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg leading-relaxed">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswer}
            onValueChange={handleAnswerSelect}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="A" id="option-a" />
              <Label htmlFor="option-a" className="flex-1 cursor-pointer">
                A. {currentQuestion.optionA}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="B" id="option-b" />
              <Label htmlFor="option-b" className="flex-1 cursor-pointer">
                B. {currentQuestion.optionB}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="C" id="option-c" />
              <Label htmlFor="option-c" className="flex-1 cursor-pointer">
                C. {currentQuestion.optionC}
              </Label>
            </div>
            {currentQuestion.optionD && (
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="D" id="option-d" />
                <Label htmlFor="option-d" className="flex-1 cursor-pointer">
                  D. {currentQuestion.optionD}
                </Label>
              </div>
            )}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        
        <div className="flex gap-2">
          {testType === "practice" && (
            <Button asChild variant="outline">
              <a href="/study">Study More</a>
            </Button>
          )}
          <Button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer || submitAnswer.isPending}
          >
            {currentQuestionIndex === questions.length - 1 ? "Finish Test" : "Next"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Test Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold">{questions.length}</div>
          <div className="text-sm text-muted-foreground">Total Questions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{Object.keys(answers).length}</div>
          <div className="text-sm text-muted-foreground">Answered</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">75%</div>
          <div className="text-sm text-muted-foreground">Pass Mark</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{isTimedTest ? "45" : "∞"}</div>
          <div className="text-sm text-muted-foreground">Minutes</div>
        </div>
      </div>
    </div>
  );
}