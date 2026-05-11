import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, ExternalLink, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function StudyGuide() {
  const pdfPath = `${import.meta.env.BASE_URL}study-guide.pdf`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'our-common-bond-testable.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="space-y-6 pb-16 lg:pb-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">Official Study Guide</h1>
        <p className="text-muted-foreground">
          Read the complete Australian Citizenship: Our Common Bond resource book
        </p>
      </div>

      {/* Passing Criteria Alert */}
      <Alert data-testid="alert-passing-criteria">
        <Info className="h-4 w-4" />
        <AlertTitle>Test Passing Criteria</AlertTitle>
        <AlertDescription className="space-y-3 mt-2">
          <p className="font-medium">To pass the Australian citizenship test, you must meet two main qualifications:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong>Achieve an overall score of at least 75%</strong></li>
            <li><strong>Answer all five of the Australian values questions correctly</strong></li>
          </ul>
          
          <div className="mt-3 pt-3 border-t">
            <p className="font-medium mb-2">Test Structure:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>The test is computer-based and consists of <strong>20 multiple-choice questions</strong></li>
              <li>You are given <strong>45 minutes</strong> to complete it</li>
              <li>Questions are based on the official resource booklet, Australian Citizenship: Our Common Bond</li>
            </ul>
          </div>

          <div className="mt-3 pt-3 border-t">
            <p className="font-medium mb-2">Key Passing Requirements:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li><strong>Overall score:</strong> A 75% score means you must answer at least 15 of the 20 questions correctly</li>
              <li><strong>Values questions:</strong> Of the 20 questions, five focus specifically on Australian values. It is mandatory to get all five of these questions right to pass the test, regardless of your overall score</li>
            </ul>
          </div>
        </AlertDescription>
      </Alert>

      {/* PDF Access Card */}
      <Card data-testid="card-pdf-viewer">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Australian Citizenship: Our Common Bond
          </CardTitle>
          <CardDescription>
            Official resource book from the Australian Government
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Access the official study guide to prepare for your citizenship test. 
            All test questions are based on this document.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={handleOpenNewTab} className="flex-1 sm:flex-none" data-testid="button-view-pdf">
              <ExternalLink className="h-4 w-4 mr-2" />
              View PDF
            </Button>
            <Button onClick={handleDownload} variant="outline" className="flex-1 sm:flex-none" data-testid="button-download-pdf-card">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> All test questions come from this official government document. 
            Make sure to read and understand Parts 1-4 (the testable sections) thoroughly.
          </p>
        </CardContent>
      </Card>

      {/* Study Sections Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Testable Sections</CardTitle>
          <CardDescription>
            Focus your study on these four parts of the guide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">📖 Part 1: Australia and its people</h4>
              <p className="text-sm text-muted-foreground">
                Aboriginal and Torres Strait Islander peoples, early settlement, Federation, states and symbols
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">⚖️ Part 2: Australia's democratic beliefs, rights and liberties</h4>
              <p className="text-sm text-muted-foreground">
                Democratic values, freedoms, rights and responsibilities
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">🏛️ Part 3: Government and the law in Australia</h4>
              <p className="text-sm text-muted-foreground">
                Three levels of government, parliamentary system, voting
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">❤️ Part 4: Australian values</h4>
              <p className="text-sm text-muted-foreground">
                Core values including respect, freedom, equality, and rule of law (5 mandatory questions)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
