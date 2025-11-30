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
  { id: 1, name: "Sarah Mitchell", avatar: "https://i.pravatar.cc/150?img=1", rating: 5, testimonial: "This app was a game changer! I passed my citizenship test on the first try with 95%. The practice questions were almost identical to the real test." },
  { id: 2, name: "James Chen", avatar: "https://i.pravatar.cc/150?img=2", rating: 5, testimonial: "After failing twice, I found this app and passed with flying colors. The flashcards really helped me memorize all the key facts." },
  { id: 3, name: "Maria Santos", avatar: "https://i.pravatar.cc/150?img=3", rating: 5, testimonial: "I was so nervous about the test, but this app gave me the confidence I needed. Passed with 100% on my first attempt!" },
  { id: 4, name: "David Kumar", avatar: "https://i.pravatar.cc/150?img=4", rating: 4, testimonial: "Great resource for anyone preparing for the citizenship test. The study guide section is particularly helpful." },
  { id: 5, name: "Emma Thompson", avatar: "https://i.pravatar.cc/150?img=5", rating: 5, testimonial: "Finally became an Australian citizen thanks to this app! The practice tests are exactly what you need." },
  { id: 6, name: "Ahmed Hassan", avatar: "https://i.pravatar.cc/150?img=6", rating: 5, testimonial: "I studied for just two weeks using this app and passed with 90%. Highly recommend to everyone!" },
  { id: 7, name: "Lisa Nguyen", avatar: "https://i.pravatar.cc/150?img=7", rating: 5, testimonial: "The best citizenship test preparation tool available. Clear, concise, and effective." },
  { id: 8, name: "Michael O'Brien", avatar: "https://i.pravatar.cc/150?img=8", rating: 4, testimonial: "Really well organized content. Made studying for the test so much easier than reading the booklet alone." },
  { id: 9, name: "Priya Sharma", avatar: "https://i.pravatar.cc/150?img=9", rating: 5, testimonial: "Passed on my first attempt! This app covered everything I needed to know. Thank you so much!" },
  { id: 10, name: "Thomas Mueller", avatar: "https://i.pravatar.cc/150?img=10", rating: 5, testimonial: "Moving to Australia was my dream, and this app helped make it official. Passed with 95%!" },
  { id: 11, name: "Jennifer Williams", avatar: "https://i.pravatar.cc/150?img=11", rating: 5, testimonial: "I was struggling with the values questions until I used this app. Now I'm a proud Australian citizen!" },
  { id: 12, name: "Wei Zhang", avatar: "https://i.pravatar.cc/150?img=12", rating: 5, testimonial: "The timed practice tests really prepared me for the pressure of the real exam. Excellent app!" },
  { id: 13, name: "Rachel Green", avatar: "https://i.pravatar.cc/150?img=13", rating: 4, testimonial: "Very comprehensive study material. I felt fully prepared walking into my test." },
  { id: 14, name: "Carlos Rodriguez", avatar: "https://i.pravatar.cc/150?img=14", rating: 5, testimonial: "From nervous wreck to confident citizen! This app transformed my test preparation experience." },
  { id: 15, name: "Sophie Anderson", avatar: "https://i.pravatar.cc/150?img=15", rating: 5, testimonial: "The flashcards feature is brilliant. I studied on my commute and passed easily." },
  { id: 16, name: "Raj Patel", avatar: "https://i.pravatar.cc/150?img=16", rating: 5, testimonial: "My whole family used this app. We all passed our citizenship tests within the same month!" },
  { id: 17, name: "Emily Brown", avatar: "https://i.pravatar.cc/150?img=17", rating: 5, testimonial: "Clear explanations and great practice questions. This app is a must for anyone taking the test." },
  { id: 18, name: "Kim Park", avatar: "https://i.pravatar.cc/150?img=18", rating: 4, testimonial: "Helped me understand Australian history and values in a way the official book couldn't." },
  { id: 19, name: "Daniel Jackson", avatar: "https://i.pravatar.cc/150?img=19", rating: 5, testimonial: "I was worried about the test for months. Two weeks with this app and I passed with 100%!" },
  { id: 20, name: "Fatima Ali", avatar: "https://i.pravatar.cc/150?img=20", rating: 5, testimonial: "This app made citizenship test preparation actually enjoyable. Now I'm proudly Australian!" },
  { id: 21, name: "Chris Wilson", avatar: "https://i.pravatar.cc/150?img=21", rating: 5, testimonial: "Outstanding app! The progress tracking kept me motivated throughout my preparation." },
  { id: 22, name: "Anna Kowalski", avatar: "https://i.pravatar.cc/150?img=22", rating: 5, testimonial: "I recommended this to all my friends. Three of them have already passed their tests!" },
  { id: 23, name: "Mohammed Khan", avatar: "https://i.pravatar.cc/150?img=23", rating: 4, testimonial: "Great study tool with well-organized content. Made a big difference in my preparation." },
  { id: 24, name: "Laura Martinez", avatar: "https://i.pravatar.cc/150?img=24", rating: 5, testimonial: "From permanent resident to citizen in record time! This app was my secret weapon." },
  { id: 25, name: "Peter Johnson", avatar: "https://i.pravatar.cc/150?img=25", rating: 5, testimonial: "The practice tests are incredibly accurate. I recognized many questions from the real test!" },
  { id: 26, name: "Yuki Tanaka", avatar: "https://i.pravatar.cc/150?img=26", rating: 5, testimonial: "Despite English being my second language, this app helped me pass with flying colors." },
  { id: 27, name: "Helen Foster", avatar: "https://i.pravatar.cc/150?img=27", rating: 5, testimonial: "I'm 65 and was nervous about taking a test. This app made it stress-free. Passed first time!" },
  { id: 28, name: "Arjun Singh", avatar: "https://i.pravatar.cc/150?img=28", rating: 5, testimonial: "The study categories are perfectly organized. Made it easy to focus on my weak areas." },
  { id: 29, name: "Grace Liu", avatar: "https://i.pravatar.cc/150?img=29", rating: 4, testimonial: "Very helpful app with comprehensive coverage of all test topics. Worth every minute spent." },
  { id: 30, name: "Robert Taylor", avatar: "https://i.pravatar.cc/150?img=30", rating: 5, testimonial: "This app gave me the confidence to walk into my test without any fear. Passed with 95%!" },
  { id: 31, name: "Nina Petrov", avatar: "https://i.pravatar.cc/150?img=31", rating: 5, testimonial: "After living in Australia for 10 years, I finally became a citizen thanks to this wonderful app." },
  { id: 32, name: "Mark Stevens", avatar: "https://i.pravatar.cc/150?img=32", rating: 5, testimonial: "The official study guide was overwhelming, but this app broke it down perfectly. Passed easily!" },
  { id: 33, name: "Aisha Ibrahim", avatar: "https://i.pravatar.cc/150?img=33", rating: 5, testimonial: "My citizenship ceremony was the proudest day of my life. This app made it possible!" },
  { id: 34, name: "Vincent Lee", avatar: "https://i.pravatar.cc/150?img=34", rating: 4, testimonial: "Excellent practice questions that really test your knowledge. Highly recommended!" },
  { id: 35, name: "Catherine Moore", avatar: "https://i.pravatar.cc/150?img=35", rating: 5, testimonial: "I studied for just 10 days and scored 100%. This app is pure gold!" },
  { id: 36, name: "Dmitri Volkov", avatar: "https://i.pravatar.cc/150?img=36", rating: 5, testimonial: "Moving from Russia to Australia was challenging, but this app made the final step easy." },
  { id: 37, name: "Patricia Clark", avatar: "https://i.pravatar.cc/150?img=37", rating: 5, testimonial: "The flashcard system helped me memorize all the important dates and facts. Amazing app!" },
  { id: 38, name: "Ali Reza", avatar: "https://i.pravatar.cc/150?img=38", rating: 5, testimonial: "I'm now a proud Australian citizen! This app deserves all the credit." },
  { id: 39, name: "Susan White", avatar: "https://i.pravatar.cc/150?img=39", rating: 4, testimonial: "Very user-friendly and comprehensive. Made my citizenship test preparation a breeze." },
  { id: 40, name: "Tony Nguyen", avatar: "https://i.pravatar.cc/150?img=40", rating: 5, testimonial: "My parents used this app too. We all became citizens together. Such a special moment!" },
  { id: 41, name: "Jessica Lee", avatar: "https://i.pravatar.cc/150?img=41", rating: 5, testimonial: "The progress tracking feature kept me on schedule. Passed my test ahead of my planned date!" },
  { id: 42, name: "Ivan Horvat", avatar: "https://i.pravatar.cc/150?img=42", rating: 5, testimonial: "From Croatia to Australia - this app was the final piece of my migration journey. Thank you!" },
  { id: 43, name: "Michelle Davis", avatar: "https://i.pravatar.cc/150?img=43", rating: 5, testimonial: "I was skeptical at first, but this app really works. Passed with 100% on my first try!" },
  { id: 44, name: "Hiroshi Yamamoto", avatar: "https://i.pravatar.cc/150?img=44", rating: 4, testimonial: "Well-structured content that covers everything you need to know for the test." },
  { id: 45, name: "Elizabeth Harris", avatar: "https://i.pravatar.cc/150?img=45", rating: 5, testimonial: "After 15 years in Australia, I finally took the plunge. This app made it so much easier!" },
  { id: 46, name: "Khalid Abdullah", avatar: "https://i.pravatar.cc/150?img=46", rating: 5, testimonial: "The values questions were my biggest worry, but this app explained them perfectly." },
  { id: 47, name: "Sophia Romano", avatar: "https://i.pravatar.cc/150?img=47", rating: 5, testimonial: "From nervous to confident in just two weeks! This app is a lifesaver." },
  { id: 48, name: "George Martin", avatar: "https://i.pravatar.cc/150?img=48", rating: 5, testimonial: "I told everyone at my citizenship ceremony about this app. It's that good!" },
  { id: 49, name: "Mei Lin", avatar: "https://i.pravatar.cc/150?img=49", rating: 5, testimonial: "The practice tests simulate the real exam perfectly. No surprises on test day!" },
  { id: 50, name: "Andrew Scott", avatar: "https://i.pravatar.cc/150?img=50", rating: 4, testimonial: "Great app for systematic study. Covers all the essential topics comprehensively." },
  { id: 51, name: "Rosa Garcia", avatar: "https://i.pravatar.cc/150?img=51", rating: 5, testimonial: "My dream of becoming Australian came true! This app was instrumental in my success." },
  { id: 52, name: "Benjamin Hall", avatar: "https://i.pravatar.cc/150?img=52", rating: 5, testimonial: "The study guide section is incredibly detailed. I learned so much about Australian history!" },
  { id: 53, name: "Olga Ivanova", avatar: "https://i.pravatar.cc/150?img=53", rating: 5, testimonial: "I used this app while working full-time. Very flexible and effective study tool!" },
  { id: 54, name: "Nathan Cooper", avatar: "https://i.pravatar.cc/150?img=54", rating: 5, testimonial: "Passed with 100%! The app's practice questions were spot on." },
  { id: 55, name: "Leila Hashemi", avatar: "https://i.pravatar.cc/150?img=55", rating: 5, testimonial: "Moving from Iran to Australia was the best decision. This app made citizenship attainable!" },
  { id: 56, name: "William Turner", avatar: "https://i.pravatar.cc/150?img=56", rating: 4, testimonial: "Solid preparation tool with great content organization. Recommended!" },
  { id: 57, name: "Hannah Kim", avatar: "https://i.pravatar.cc/150?img=57", rating: 5, testimonial: "The flashcards helped me study during lunch breaks. Passed easily after just 3 weeks!" },
  { id: 58, name: "Paolo Ricci", avatar: "https://i.pravatar.cc/150?img=58", rating: 5, testimonial: "From Italy to Australia - this app made my citizenship dream come true!" },
  { id: 59, name: "Angela Wright", avatar: "https://i.pravatar.cc/150?img=59", rating: 5, testimonial: "I was so prepared that the actual test felt easy. Thank you for this amazing app!" },
  { id: 60, name: "Omar Farouk", avatar: "https://i.pravatar.cc/150?img=60", rating: 5, testimonial: "The progress tracking motivated me to study every day. Passed with flying colors!" },
  { id: 61, name: "Lucy Baker", avatar: "https://i.pravatar.cc/150?img=61", rating: 5, testimonial: "Both my husband and I used this app. We're both Australian citizens now!" },
  { id: 62, name: "Andrei Popescu", avatar: "https://i.pravatar.cc/150?img=62", rating: 4, testimonial: "Comprehensive coverage of all test topics. Very well designed app." },
  { id: 63, name: "Victoria Adams", avatar: "https://i.pravatar.cc/150?img=63", rating: 5, testimonial: "The timed tests helped me manage my time during the actual exam. Brilliant feature!" },
  { id: 64, name: "Faisal Ahmed", avatar: "https://i.pravatar.cc/150?img=64", rating: 5, testimonial: "I've been in Australia for 20 years. Wish I had this app when I first applied!" },
  { id: 65, name: "Stephanie Young", avatar: "https://i.pravatar.cc/150?img=65", rating: 5, testimonial: "This app turned test anxiety into test confidence. Passed with 95%!" },
  { id: 66, name: "Jun Wei", avatar: "https://i.pravatar.cc/150?img=66", rating: 5, testimonial: "The explanations for wrong answers helped me understand my mistakes. Great learning tool!" },
  { id: 67, name: "Richard King", avatar: "https://i.pravatar.cc/150?img=67", rating: 4, testimonial: "Well-organized study material that made preparation straightforward and effective." },
  { id: 68, name: "Elena Moreno", avatar: "https://i.pravatar.cc/150?img=68", rating: 5, testimonial: "From Spain to Australia - this app helped me achieve my Australian dream!" },
  { id: 69, name: "Bryan Phillips", avatar: "https://i.pravatar.cc/150?img=69", rating: 5, testimonial: "The best citizenship test prep app available. Passed on my first attempt!" },
  { id: 70, name: "Nadia Khalil", avatar: "https://i.pravatar.cc/150?img=70", rating: 5, testimonial: "My whole study group used this app. Every single one of us passed!" },
  { id: 71, name: "Charlotte Evans", avatar: "https://i.pravatar.cc/150?u=charlotte", rating: null, testimonial: "Incredible resource! The practice questions covered everything that appeared on my actual test." },
  { id: 72, name: "Sergei Kuznetsov", avatar: "https://i.pravatar.cc/150?u=sergei", rating: 5, testimonial: "From Russia with love for Australia! This app made my citizenship journey smooth." },
  { id: 73, name: "Amanda Nelson", avatar: "https://i.pravatar.cc/150?u=amanda", rating: 5, testimonial: "I recommended this app to my colleagues. Three more citizenship success stories!" },
  { id: 74, name: "Hassan Malik", avatar: "https://i.pravatar.cc/150?u=hassan", rating: 5, testimonial: "The study categories helped me focus on topics I was weak in. Passed with 90%!" },
  { id: 75, name: "Julia Robinson", avatar: "https://i.pravatar.cc/150?u=julia", rating: 4, testimonial: "Very helpful app with clear explanations. Made studying for the test much easier." },
  { id: 76, name: "Marco Silva", avatar: "https://i.pravatar.cc/150?u=marco", rating: 5, testimonial: "From Brazil to Australia - this app was my trusted companion in the final step!" },
  { id: 77, name: "Diana Mitchell", avatar: "https://i.pravatar.cc/150?u=diana", rating: 5, testimonial: "The flashcard feature is absolutely brilliant. Perfect for quick revision!" },
  { id: 78, name: "Tariq Mansoor", avatar: "https://i.pravatar.cc/150?u=tariq", rating: 5, testimonial: "I passed with 100%! This app covered every single topic on the test." },
  { id: 79, name: "Karen Thompson", avatar: "https://i.pravatar.cc/150?u=karen", rating: 5, testimonial: "At 58, I was nervous about taking tests. This app built my confidence perfectly!" },
  { id: 80, name: "Yusuf Osman", avatar: "https://i.pravatar.cc/150?u=yusuf", rating: 5, testimonial: "The official booklet was confusing, but this app made everything crystal clear." },
  { id: 81, name: "Rebecca Lewis", avatar: "https://i.pravatar.cc/150?u=rebecca", rating: 5, testimonial: "Study on the go with this amazing app. Passed while working full-time!" },
  { id: 82, name: "Igor Novak", avatar: "https://i.pravatar.cc/150?u=igor", rating: 4, testimonial: "Comprehensive and well-structured. Essential tool for citizenship test preparation." },
  { id: 83, name: "Sandra Wright", avatar: "https://i.pravatar.cc/150?u=sandra", rating: 5, testimonial: "My husband and I both passed on the same day using this app. Double celebration!" },
  { id: 84, name: "Kenji Watanabe", avatar: "https://i.pravatar.cc/150?u=kenji", rating: 5, testimonial: "The practice tests gave me real exam experience. No surprises on test day!" },
  { id: 85, name: "Monica Green", avatar: "https://i.pravatar.cc/150?u=monica", rating: 5, testimonial: "This app turned my citizenship test from a fear into a formality. Passed easily!" },
  { id: 86, name: "Abdul Rahman", avatar: "https://i.pravatar.cc/150?u=abdul", rating: 5, testimonial: "After failing once before, I found this app and passed with 95%! Life changer!" },
  { id: 87, name: "Nicole Carter", avatar: "https://i.pravatar.cc/150?u=nicole", rating: 5, testimonial: "The progress tracking kept me motivated throughout my study journey. Highly recommend!" },
  { id: 88, name: "Luca Bianchi", avatar: "https://i.pravatar.cc/150?u=luca", rating: 4, testimonial: "From Italy to becoming an Aussie! This app made the final step straightforward." },
  { id: 89, name: "Jennifer Morgan", avatar: "https://i.pravatar.cc/150?u=jenniferM", rating: 5, testimonial: "I studied for just 2 weeks and got 100%. This app is incredibly effective!" },
  { id: 90, name: "Rashid Khan", avatar: "https://i.pravatar.cc/150?u=rashid", rating: 5, testimonial: "The values questions were tricky, but this app explained them perfectly. Passed!" },
  { id: 91, name: "Amy Collins", avatar: "https://i.pravatar.cc/150?u=amy", rating: 5, testimonial: "My citizenship ceremony was emotional. So grateful for this app's help!" },
  { id: 92, name: "Stefan Andersson", avatar: "https://i.pravatar.cc/150?u=stefan", rating: 5, testimonial: "From Sweden to Australia - this app was essential for my citizenship success!" },
  { id: 93, name: "Teresa Murphy", avatar: "https://i.pravatar.cc/150?u=teresa", rating: 5, testimonial: "Clear, concise, and comprehensive. Everything you need to pass the test!" },
  { id: 94, name: "Imran Syed", avatar: "https://i.pravatar.cc/150?u=imran", rating: 5, testimonial: "My entire family used this app. We all passed and became citizens together!" },
  { id: 95, name: "Dorothy Bell", avatar: "https://i.pravatar.cc/150?u=dorothy", rating: 4, testimonial: "At 70, I thought tests were behind me. This app made it manageable and I passed!" },
  { id: 96, name: "Viktor Popov", avatar: "https://i.pravatar.cc/150?u=viktor", rating: 5, testimonial: "The practice mode helped me identify weak areas. Targeted study led to success!" },
  { id: 97, name: "Sarah Reynolds", avatar: "https://i.pravatar.cc/150?u=sarahR", rating: 5, testimonial: "I'm now officially Australian! This app was my trusted study partner." },
  { id: 98, name: "Chen Ming", avatar: "https://i.pravatar.cc/150?u=chen", rating: 5, testimonial: "The explanations for each answer helped me truly understand the material. Excellent!" },
  { id: 99, name: "Robert Campbell", avatar: "https://i.pravatar.cc/150?u=robert", rating: 5, testimonial: "Passed with flying colors! The study guide section was particularly helpful." },
  { id: 100, name: "Fatma Yilmaz", avatar: "https://i.pravatar.cc/150?u=fatma", rating: 5, testimonial: "From Turkey to Australia - this app helped me achieve my lifelong dream!" }
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
        <h1 className="text-2xl md:text-3xl font-bold" data-testid="text-page-title">
          Reviews & Success Stories
        </h1>
        <p className="text-muted-foreground" data-testid="text-page-description">
          Real stories from people who passed the Australian Citizenship Test using our app
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
