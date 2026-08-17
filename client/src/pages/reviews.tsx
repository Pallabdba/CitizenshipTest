import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { reviews } from "@/lib/reviews-data";

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
