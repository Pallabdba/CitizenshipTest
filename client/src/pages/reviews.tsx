import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number | null;
  testimonial: string;
}

const reviews: Review[] = [
  {
    id: 3,
    name: "Maria Santos",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    testimonial:
      "I was so nervous about the test, but this app gave me the confidence I needed. Passed with 100% on my first attempt!",
  },
  {
    id: 4,
    name: "David Kumar",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4,
    testimonial:
      "Great resource for anyone preparing for the citizenship test. The study guide section is particularly helpful.",
  },
  {
    id: 5,
    name: "Emma Thompson",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 5,
    testimonial:
      "Finally became an Australian citizen thanks to this app! The practice tests are exactly what you need.",
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    testimonial:
      "I studied for just two weeks using this app and passed with 90%. Highly recommend to everyone!",
  },
  {
    id: 7,
    name: "Lisa Nguyen",
    avatar: "https://i.pravatar.cc/150?img=7",
    rating: 5,
    testimonial:
      "The best citizenship test preparation tool available. Clear, concise, and effective.",
  },
  {
    id: 8,
    name: "Michael O'Brien",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 4,
    testimonial:
      "Really well organized content. Made studying for the test so much easier than reading the booklet alone.",
  },
  {
    id: 9,
    name: "Priya Sharma",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    testimonial:
      "Passed on my first attempt! This app covered everything I needed to know. Thank you so much!",
  },
  {
    id: 10,
    name: "Thomas Mueller",
    avatar: "https://i.pravatar.cc/150?img=10",
    rating: 5,
    testimonial:
      "Moving to Australia was my dream, and this app helped make it official. Passed with 95%!",
  },
  {
    id: 11,
    name: "Jennifer Williams",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    testimonial:
      "I was struggling with the values questions until I used this app. Now I'm a proud Australian citizen!",
  },
  {
    id: 12,
    name: "Wei Zhang",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    testimonial:
      "The timed practice tests really prepared me for the pressure of the real exam. Excellent app!",
  },
  {
    id: 13,
    name: "Rachel Green",
    avatar: "https://i.pravatar.cc/150?img=13",
    rating: 4,
    testimonial:
      "Very comprehensive study material. I felt fully prepared walking into my test.",
  },
  {
    id: 14,
    name: "Carlos Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=14",
    rating: 5,
    testimonial:
      "From nervous wreck to confident citizen! This app transformed my test preparation experience.",
  },
  {
    id: 15,
    name: "Sophie Anderson",
    avatar: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    testimonial:
      "The flashcards feature is brilliant. I studied on my commute and passed easily.",
  },
  {
    id: 16,
    name: "Raj Patel",
    avatar: "https://i.pravatar.cc/150?img=17",
    rating: 5,
    testimonial:
      "My whole family used this app. We all passed our citizenship tests within the same month!",
  },
  {
    id: 17,
    name: "Emily Brown",
    avatar: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    testimonial:
      "Clear explanations and great practice questions. This app is a must for anyone taking the test.",
  },
  {
    id: 18,
    name: "Kim Park",
    avatar: "https://i.pravatar.cc/150?img=19",
    rating: 4,
    testimonial:
      "Helped me understand Australian history and values in a way the official book couldn't.",
  },
  {
    id: 19,
    name: "Daniel Jackson",
    avatar: "https://i.pravatar.cc/150?img=20",
    rating: 5,
    testimonial:
      "I was worried about the test for months. Two weeks with this app and I passed with 100%!",
  },
  {
    id: 20,
    name: "Fatima Ali",
    avatar: "https://i.pravatar.cc/150?img=21",
    rating: 5,
    testimonial:
      "This app made citizenship test preparation actually enjoyable. Now I'm proudly Australian!",
  },
  {
    id: 21,
    name: "Chris Wilson",
    avatar: "https://i.pravatar.cc/150?img=22",
    rating: 5,
    testimonial:
      "Outstanding app! The progress tracking kept me motivated throughout my preparation.",
  },
  {
    id: 22,
    name: "Anna Kowalski",
    avatar: "https://i.pravatar.cc/150?img=23",
    rating: 5,
    testimonial:
      "I recommended this to all my friends. Three of them have already passed their tests!",
  },
  {
    id: 23,
    name: "Mohammed Khan",
    avatar: "https://i.pravatar.cc/150?img=24",
    rating: 4,
    testimonial:
      "Great study tool with well-organized content. Made a big difference in my preparation.",
  },
  {
    id: 24,
    name: "Laura Martinez",
    avatar: "https://i.pravatar.cc/150?img=26",
    rating: 5,
    testimonial:
      "From permanent resident to citizen in record time! This app was my secret weapon.",
  },
  {
    id: 25,
    name: "Peter Johnson",
    avatar: "https://i.pravatar.cc/150?img=28",
    rating: 5,
    testimonial:
      "The practice tests are incredibly accurate. I recognized many questions from the real test!",
  },
  {
    id: 26,
    name: "Yuki Tanaka",
    avatar: "https://i.pravatar.cc/150?img=29",
    rating: 5,
    testimonial:
      "Despite English being my second language, this app helped me pass with flying colors.",
  },
  {
    id: 27,
    name: "Sophie Foster",
    avatar: "https://i.pravatar.cc/150?img=31",
    rating: 5,
    testimonial:
      "I was a bit nervous about taking a formal test, but this app made it completely stress-free. Passed first time!",
  },
  {
    id: 28,
    name: "Arjun Singh",
    avatar: "https://i.pravatar.cc/150?img=57",
    rating: 5,
    testimonial:
      "The study categories are perfectly organized. Made it easy to focus on my weak areas.",
  },
  {
    id: 29,
    name: "Grace Liu",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 4,
    testimonial:
      "Very helpful app with comprehensive coverage of all test topics. Worth every minute spent.",
  },
  {
    id: 30,
    name: "Robert Taylor",
    avatar: "https://i.pravatar.cc/150?img=34",
    rating: 5,
    testimonial:
      "This app gave me the confidence to walk into my test without any fear. Passed with 95%!",
  },
  {
    id: 31,
    name: "Nina Petrov",
    avatar: "https://i.pravatar.cc/150?img=35",
    rating: 5,
    testimonial:
      "After living in Australia for 10 years, I finally became a citizen thanks to this wonderful app.",
  },
  {
    id: 32,
    name: "Mark Stevens",
    avatar: "https://i.pravatar.cc/150?img=38",
    rating: 5,
    testimonial:
      "The official study guide was overwhelming, but this app broke it down perfectly. Passed easily!",
  },
  {
    id: 33,
    name: "Aisha Ibrahim",
    avatar: "https://i.pravatar.cc/150?img=39",
    rating: 5,
    testimonial:
      "My citizenship ceremony was the proudest day of my life. This app made it possible!",
  },
  {
    id: 34,
    name: "Vincent Lee",
    avatar: "https://i.pravatar.cc/150?img=40",
    rating: 4,
    testimonial:
      "Excellent practice questions that really test your knowledge. Highly recommended!",
  },
  {
    id: 35,
    name: "Catherine Moore",
    avatar: "https://i.pravatar.cc/150?img=41",
    rating: 5,
    testimonial:
      "I studied for just 10 days and scored 100%. This app is pure gold!",
  },
  {
    id: 36,
    name: "Dmitri Volkov",
    avatar: "https://i.pravatar.cc/150?img=42",
    rating: 5,
    testimonial:
      "Moving from Russia to Australia was challenging, but this app made the final step easy.",
  },
  {
    id: 37,
    name: "Patricia Clark",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    testimonial:
      "The flashcard system helped me memorize all the important dates and facts. Amazing app!",
  },
  {
    id: 38,
    name: "Ali Reza",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    testimonial:
      "I'm now a proud Australian citizen! This app deserves all the credit.",
  },
  {
    id: 39,
    name: "Susan White",
    avatar: "https://i.pravatar.cc/150?img=46",
    rating: 4,
    testimonial:
      "Very user-friendly and comprehensive. Made my citizenship test preparation a breeze.",
  },
  {
    id: 40,
    name: "Tony Nguyen",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    testimonial:
      "My parents used this app too. We all became citizens together. Such a special moment!",
  },
  {
    id: 41,
    name: "Jessica Lee",
    avatar: "https://i.pravatar.cc/150?img=48",
    rating: 5,
    testimonial:
      "The progress tracking feature kept me on schedule. Passed my test ahead of my planned date!",
  },
  {
    id: 42,
    name: "Ivan Horvat",
    avatar: "https://i.pravatar.cc/150?img=49",
    rating: 5,
    testimonial:
      "From Croatia to Australia - this app was the final piece of my migration journey. Thank you!",
  },
  {
    id: 43,
    name: "Michelle Davis",
    avatar: "https://i.pravatar.cc/150?img=52",
    rating: 5,
    testimonial:
      "I was skeptical at first, but this app really works. Passed with 100% on my first try!",
  },
  {
    id: 44,
    name: "Hiroshi Yamamoto",
    avatar: "https://i.pravatar.cc/150?img=53",
    rating: 4,
    testimonial:
      "Well-structured content that covers everything you need to know for the test.",
  },
  {
    id: 45,
    name: "Elizabeth Harris",
    avatar: "https://i.pravatar.cc/150?img=58",
    rating: 5,
    testimonial:
      "After 15 years in Australia, I finally took the plunge. This app made it so much easier!",
  },
  {
    id: 46,
    name: "Khalid Abdullah",
    avatar: "https://i.pravatar.cc/150?img=59",
    rating: 5,
    testimonial:
      "The values questions were my biggest worry, but this app explained them perfectly.",
  },
  {
    id: 47,
    name: "Sophia Romano",
    avatar: "https://i.pravatar.cc/150?img=60",
    rating: 5,
    testimonial:
      "From nervous to confident in just two weeks! This app is a lifesaver.",
  },
  {
    id: 48,
    name: "George Martin",
    avatar: "https://i.pravatar.cc/150?img=61",
    rating: 5,
    testimonial:
      "I told everyone at my citizenship ceremony about this app. It's that good!",
  },
  {
    id: 49,
    name: "Mei Lin",
    avatar: "https://i.pravatar.cc/150?img=63",
    rating: 5,
    testimonial:
      "The practice tests simulate the real exam perfectly. No surprises on test day!",
  },
  {
    id: 50,
    name: "Andrew Scott",
    avatar: "https://i.pravatar.cc/150?img=64",
    rating: 4,
    testimonial:
      "Great app for systematic study. Covers all the essential topics comprehensively.",
  },
  {
    id: 51,
    name: "Rosa Garcia",
    avatar: "https://i.pravatar.cc/150?img=65",
    rating: 5,
    testimonial:
      "My dream of becoming Australian came true! This app was instrumental in my success.",
  },
  {
    id: 52,
    name: "Benjamin Hall",
    avatar: "https://i.pravatar.cc/150?img=68",
    rating: 5,
    testimonial:
      "The study guide section is incredibly detailed. I learned so much about Australian history!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" data-testid="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="space-y-6 pb-16 lg:pb-6">
      <div className="space-y-2">
        <h1
          className="text-2xl md:text-3xl font-bold"
          data-testid="text-page-title"
        >
          Reviews & Success Stories
        </h1>
        <p
          className="text-muted-foreground"
          data-testid="text-page-description"
        >
          Real stories from people who passed the Australian Citizenship Test
          using our app
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <Card
            key={review.id ?? index}
            className="hover:shadow-md transition-shadow"
            data-testid={`card-review-${review.id ?? index}`}
          >
            <CardContent className="p-4">
              <div className="flex gap-4">
                <img
                  src={review.avatar}
                  alt={`${review.name}'s profile`}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  data-testid={`img-avatar-${review.id ?? index}`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col gap-1 mb-2">
                    <h3
                      className="font-semibold text-sm truncate"
                      data-testid={`text-name-${review.id ?? index}`}
                    >
                      {review.name}
                    </h3>
                    {review.rating && <StarRating rating={review.rating} />}
                  </div>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    data-testid={`text-testimonial-${review.id ?? index}`}
                  >
                    "{review.testimonial}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
