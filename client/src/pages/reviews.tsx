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
  { id: 1,  name: "Wei Zhang",       avatar: "https://randomuser.me/api/portraits/men/51.jpg",   rating: 5, testimonial: "Studied on my commute for two weeks and passed with 90%. The practice tests are spot on." },
  { id: 2,  name: "Priya Nair",      avatar: "https://randomuser.me/api/portraits/women/65.jpg", rating: 5, testimonial: "Flashcards made key dates stick instantly. Passed first try with 95% — couldn't be happier!" },
  { id: 3,  name: "Rahul Patel",     avatar: "https://randomuser.me/api/portraits/men/55.jpg",   rating: 5, testimonial: "Really well-structured questions. Scored 92% on my first attempt. Highly recommend." },
  { id: 4,  name: "Emma Wilson",     avatar: "https://randomuser.me/api/portraits/women/27.jpg", rating: 5, testimonial: "Became an Aussie citizen last month. This app was the main reason I felt so prepared." },
  { id: 5,  name: "Mei Chen",        avatar: "https://randomuser.me/api/portraits/women/2.jpg",  rating: 5, testimonial: "Just 20 minutes a day for three weeks. Passed with 88% — easy and stress-free." },
  { id: 6,  name: "Ahmed Hassan",    avatar: "https://randomuser.me/api/portraits/men/80.jpg",   rating: 5, testimonial: "The wrong-answer explanations are gold. That feature alone got me from 70% to 95%." },
  { id: 7,  name: "Ananya Iyer",     avatar: "https://randomuser.me/api/portraits/women/50.jpg", rating: 5, testimonial: "Practised until I hit 85% consistently. The real test felt easy after that." },
  { id: 8,  name: "James Liang",     avatar: "https://randomuser.me/api/portraits/men/28.jpg",   rating: 5, testimonial: "Went from anxious to 95% on test day. The app genuinely works — worth every minute." },
  { id: 9,  name: "Siobhan Kelly",   avatar: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5, testimonial: "Proud dual citizen now! Flashcards made memorising dates actually fun." },
  { id: 10, name: "Vikram Singh",    avatar: "https://randomuser.me/api/portraits/men/60.jpg",   rating: 5, testimonial: "Studied during lunch breaks for two weeks. Scored 90% with no stress at all." },
  { id: 11, name: "Lin Xiao",        avatar: "https://randomuser.me/api/portraits/women/3.jpg",  rating: 5, testimonial: "The explanations taught me things I didn't even know I was missing. Passed with 93%." },
  { id: 12, name: "Carlos Mendoza",  avatar: "https://randomuser.me/api/portraits/men/39.jpg",   rating: 5, testimonial: "Three friends in my citizenship class all used this. We all passed first time." },
  { id: 13, name: "Grace Liu",       avatar: "https://randomuser.me/api/portraits/women/81.jpg", rating: 4, testimonial: "Solid coverage of all topics. Timed practice tests really built my confidence." },
  { id: 14, name: "David Kumar",     avatar: "https://randomuser.me/api/portraits/men/13.jpg",   rating: 5, testimonial: "Great study tool. Categories made it easy to focus on weak areas. Scored 96%." },
  { id: 15, name: "Preethi Nair",    avatar: "https://randomuser.me/api/portraits/women/10.jpg", rating: 5, testimonial: "From Chennai — used this app every evening. Passed with 94% after three weeks." },
  { id: 16, name: "Arjun Singh",     avatar: "https://randomuser.me/api/portraits/men/59.jpg",   rating: 5, testimonial: "Clear, well-organised practice tests. Passed first try and felt completely ready." },
  { id: 17, name: "Hana Kim",        avatar: "https://randomuser.me/api/portraits/women/31.jpg", rating: 5, testimonial: "Progress tracking kept me on schedule. Scored 93% ahead of my planned date." },
  { id: 18, name: "Marcus Zhang",    avatar: "https://randomuser.me/api/portraits/men/44.jpg",   rating: 4, testimonial: "Comprehensive and well-paced. I got 87% on my first attempt — really worth it." },
  { id: 19, name: "Kavya Reddy",     avatar: "https://randomuser.me/api/portraits/women/70.jpg", rating: 5, testimonial: "Dreamed of this for years. This app made it happen — passed with 96% first try!" },
  { id: 20, name: "Vincent Lee",     avatar: "https://randomuser.me/api/portraits/men/71.jpg",   rating: 5, testimonial: "Practice tests simulated the real exam perfectly. No surprises on test day." },
  { id: 21, name: "Michael O'Brien", avatar: "https://randomuser.me/api/portraits/men/97.jpg",   rating: 5, testimonial: "From Ireland to Australia — this app made the final step straightforward. Scored 95%." },
  { id: 22, name: "Sophie Anderson", avatar: "https://randomuser.me/api/portraits/women/37.jpg", rating: 5, testimonial: "Study guide broke down everything I needed to know. Passed easily on first attempt." },
  { id: 23, name: "Jasmine Mendoza", avatar: "https://randomuser.me/api/portraits/women/63.jpg", rating: 5, testimonial: "From the Philippines — already knew Australia well but this app filled the gaps. Scored 100%!" },
  { id: 24, name: "Thomas Mueller",  avatar: "https://randomuser.me/api/portraits/men/65.jpg",   rating: 5, testimonial: "From Germany — very impressed by the quality. Practice exams felt like the real thing. Got 91%." },
  { id: 25, name: "Grace Osei",      avatar: "https://randomuser.me/api/portraits/women/69.jpg", rating: 5, testimonial: "Used this app every morning before work for three weeks. Passed with 94% — so worth it!" },
  { id: 26, name: "Nguyen Van Duc",  avatar: "https://randomuser.me/api/portraits/men/34.jpg",   rating: 5, testimonial: "From Vietnam — studied for two weeks and scored 94%. The study guide covered everything." },
  { id: 27, name: "Fatima Ali",      avatar: "https://randomuser.me/api/portraits/women/58.jpg", rating: 5, testimonial: "This app made test prep actually enjoyable. Now I'm proudly Australian!" },
  { id: 28, name: "Liam O'Sullivan", avatar: "https://randomuser.me/api/portraits/men/8.jpg",    rating: 5, testimonial: "Loved learning about Australian history through this. Scored 97% and am now a dual citizen." },
  { id: 29, name: "Thao Nguyen",     avatar: "https://randomuser.me/api/portraits/women/53.jpg", rating: 4, testimonial: "From Vietnam — clear explanations and great flashcards. Passed with 88% on first attempt." },
  { id: 30, name: "Emmanuel Adjei",  avatar: "https://randomuser.me/api/portraits/men/6.jpg",    rating: 5, testimonial: "From Ghana — structured categories made studying alongside work manageable. Scored 92%." },
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
