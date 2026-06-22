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
    id: 2,
    name: "James Chen",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    testimonial:
      "After failing twice, I found this app and passed with flying colors. The flashcards really helped me memorize all the key facts.",
  },
  {
    id: 3,
    name: "Maria Santos",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    testimonial:
      "I was so nervous about the test, but this app gave me the confidence I needed. Passed with 100% on my first attempt!",
  },
  {
    id: 4,
    name: "David Kumar",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 4,
    testimonial:
      "Great resource for anyone preparing for the citizenship test. The study guide section is particularly helpful.",
  },
  {
    id: 5,
    name: "Emma Thompson",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    testimonial:
      "Finally became an Australian citizen thanks to this app! The practice tests are exactly what you need.",
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    avatar: "https://i.pravatar.cc/150?img=6",
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
    avatar: "https://i.pravatar.cc/150?img=16",
    rating: 5,
    testimonial:
      "My whole family used this app. We all passed our citizenship tests within the same month!",
  },
  {
    id: 17,
    name: "Emily Brown",
    avatar: "https://i.pravatar.cc/150?img=17",
    rating: 5,
    testimonial:
      "Clear explanations and great practice questions. This app is a must for anyone taking the test.",
  },
  {
    id: 18,
    name: "Kim Park",
    avatar: "https://i.pravatar.cc/150?img=18",
    rating: 4,
    testimonial:
      "Helped me understand Australian history and values in a way the official book couldn't.",
  },
  {
    id: 19,
    name: "Daniel Jackson",
    avatar: "https://i.pravatar.cc/150?img=19",
    rating: 5,
    testimonial:
      "I was worried about the test for months. Two weeks with this app and I passed with 100%!",
  },
  {
    id: 20,
    name: "Fatima Ali",
    avatar: "https://i.pravatar.cc/150?img=20",
    rating: 5,
    testimonial:
      "This app made citizenship test preparation actually enjoyable. Now I'm proudly Australian!",
  },
  {
    id: 21,
    name: "Chris Wilson",
    avatar: "https://i.pravatar.cc/150?img=21",
    rating: 5,
    testimonial:
      "Outstanding app! The progress tracking kept me motivated throughout my preparation.",
  },
  {
    id: 22,
    name: "Anna Kowalski",
    avatar: "https://i.pravatar.cc/150?img=22",
    rating: 5,
    testimonial:
      "I recommended this to all my friends. Three of them have already passed their tests!",
  },
  {
    id: 23,
    name: "Mohammed Khan",
    avatar: "https://i.pravatar.cc/150?img=23",
    rating: 4,
    testimonial:
      "Great study tool with well-organized content. Made a big difference in my preparation.",
  },
  {
    id: 24,
    name: "Laura Martinez",
    avatar: "https://i.pravatar.cc/150?img=24",
    rating: 5,
    testimonial:
      "From permanent resident to citizen in record time! This app was my secret weapon.",
  },
  {
    id: 25,
    name: "Peter Johnson",
    avatar: "https://i.pravatar.cc/150?img=25",
    rating: 5,
    testimonial:
      "The practice tests are incredibly accurate. I recognized many questions from the real test!",
  },
  {
    id: 26,
    name: "Yuki Tanaka",
    avatar: "https://i.pravatar.cc/150?img=26",
    rating: 5,
    testimonial:
      "Despite English being my second language, this app helped me pass with flying colors.",
  },
  {
    id: 27,
    name: "Helen Foster",
    avatar: "https://i.pravatar.cc/150?img=27",
    rating: 5,
    testimonial:
      "I'm 65 and was nervous about taking a test. This app made it stress-free. Passed first time!",
  },
  {
    id: 28,
    name: "Arjun Singh",
    avatar: "https://i.pravatar.cc/150?img=28",
    rating: 5,
    testimonial:
      "The study categories are perfectly organized. Made it easy to focus on my weak areas.",
  },
  {
    id: 29,
    name: "Grace Liu",
    avatar: "https://i.pravatar.cc/150?img=29",
    rating: 4,
    testimonial:
      "Very helpful app with comprehensive coverage of all test topics. Worth every minute spent.",
  },
  {
    id: 30,
    name: "Robert Taylor",
    avatar: "https://i.pravatar.cc/150?img=30",
    rating: 5,
    testimonial:
      "This app gave me the confidence to walk into my test without any fear. Passed with 95%!",
  },
  {
    id: 31,
    name: "Nina Petrov",
    avatar: "https://i.pravatar.cc/150?img=31",
    rating: 5,
    testimonial:
      "After living in Australia for 10 years, I finally became a citizen thanks to this wonderful app.",
  },
  {
    id: 32,
    name: "Mark Stevens",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    testimonial:
      "The official study guide was overwhelming, but this app broke it down perfectly. Passed easily!",
  },
  {
    id: 33,
    name: "Aisha Ibrahim",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    testimonial:
      "My citizenship ceremony was the proudest day of my life. This app made it possible!",
  },
  {
    id: 34,
    name: "Vincent Lee",
    avatar: "https://i.pravatar.cc/150?img=34",
    rating: 4,
    testimonial:
      "Excellent practice questions that really test your knowledge. Highly recommended!",
  },
  {
    id: 35,
    name: "Catherine Moore",
    avatar: "https://i.pravatar.cc/150?img=35",
    rating: 5,
    testimonial:
      "I studied for just 10 days and scored 100%. This app is pure gold!",
  },
  {
    id: 36,
    name: "Dmitri Volkov",
    avatar: "https://i.pravatar.cc/150?img=36",
    rating: 5,
    testimonial:
      "Moving from Russia to Australia was challenging, but this app made the final step easy.",
  },
  {
    id: 37,
    name: "Patricia Clark",
    avatar: "https://i.pravatar.cc/150?img=37",
    rating: 5,
    testimonial:
      "The flashcard system helped me memorize all the important dates and facts. Amazing app!",
  },
  {
    id: 38,
    name: "Ali Reza",
    avatar: "https://i.pravatar.cc/150?img=38",
    rating: 5,
    testimonial:
      "I'm now a proud Australian citizen! This app deserves all the credit.",
  },
  {
    id: 39,
    name: "Susan White",
    avatar: "https://i.pravatar.cc/150?img=39",
    rating: 4,
    testimonial:
      "Very user-friendly and comprehensive. Made my citizenship test preparation a breeze.",
  },
  {
    id: 40,
    name: "Tony Nguyen",
    avatar: "https://i.pravatar.cc/150?img=40",
    rating: 5,
    testimonial:
      "My parents used this app too. We all became citizens together. Such a special moment!",
  },
  {
    id: 41,
    name: "Jessica Lee",
    avatar: "https://i.pravatar.cc/150?img=41",
    rating: 5,
    testimonial:
      "The progress tracking feature kept me on schedule. Passed my test ahead of my planned date!",
  },
  {
    id: 42,
    name: "Ivan Horvat",
    avatar: "https://i.pravatar.cc/150?img=42",
    rating: 5,
    testimonial:
      "From Croatia to Australia - this app was the final piece of my migration journey. Thank you!",
  },
  {
    id: 43,
    name: "Michelle Davis",
    avatar: "https://i.pravatar.cc/150?img=43",
    rating: 5,
    testimonial:
      "I was skeptical at first, but this app really works. Passed with 100% on my first try!",
  },
  {
    id: 44,
    name: "Hiroshi Yamamoto",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 4,
    testimonial:
      "Well-structured content that covers everything you need to know for the test.",
  },
  {
    id: 45,
    name: "Elizabeth Harris",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    testimonial:
      "After 15 years in Australia, I finally took the plunge. This app made it so much easier!",
  },
  {
    id: 46,
    name: "Khalid Abdullah",
    avatar: "https://i.pravatar.cc/150?img=46",
    rating: 5,
    testimonial:
      "The values questions were my biggest worry, but this app explained them perfectly.",
  },
  {
    id: 47,
    name: "Sophia Romano",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    testimonial:
      "From nervous to confident in just two weeks! This app is a lifesaver.",
  },
  {
    id: 48,
    name: "George Martin",
    avatar: "https://i.pravatar.cc/150?img=48",
    rating: 5,
    testimonial:
      "I told everyone at my citizenship ceremony about this app. It's that good!",
  },
  {
    id: 49,
    name: "Mei Lin",
    avatar: "https://i.pravatar.cc/150?img=49",
    rating: 5,
    testimonial:
      "The practice tests simulate the real exam perfectly. No surprises on test day!",
  },
  {
    id: 50,
    name: "Andrew Scott",
    avatar: "https://i.pravatar.cc/150?img=50",
    rating: 4,
    testimonial:
      "Great app for systematic study. Covers all the essential topics comprehensively.",
  },
  {
    id: 51,
    name: "Rosa Garcia",
    avatar: "https://i.pravatar.cc/150?img=51",
    rating: 5,
    testimonial:
      "My dream of becoming Australian came true! This app was instrumental in my success.",
  },
  {
    id: 52,
    name: "Benjamin Hall",
    avatar: "https://i.pravatar.cc/150?img=52",
    rating: 5,
    testimonial:
      "The study guide section is incredibly detailed. I learned so much about Australian history!",
  },
  {
    id: 53,
    name: "Olga Ivanova",
    avatar: "https://i.pravatar.cc/150?img=53",
    rating: 5,
    testimonial:
      "I used this app while working full-time. Very flexible and effective study tool!",
  },
  {
    id: 54,
    name: "Nathan Cooper",
    avatar: "https://i.pravatar.cc/150?img=54",
    rating: 5,
    testimonial: "Passed with 100%! The app's practice questions were spot on.",
  },
  {
    id: 55,
    name: "Leila Hashemi",
    avatar: "https://i.pravatar.cc/150?img=55",
    rating: 5,
    testimonial:
      "Moving from Iran to Australia was the best decision. This app made citizenship attainable!",
  },
  {
    id: 56,
    name: "William Turner",
    avatar: "https://i.pravatar.cc/150?img=56",
    rating: 4,
    testimonial:
      "Solid preparation tool with great content organization. Recommended!",
  },
  {
    id: 57,
    name: "Hannah Kim",
    avatar: "https://i.pravatar.cc/150?img=57",
    rating: 5,
    testimonial:
      "The flashcards helped me study during lunch breaks. Passed easily after just 3 weeks!",
  },
  {
    id: 58,
    name: "Paolo Ricci",
    avatar: "https://i.pravatar.cc/150?img=58",
    rating: 5,
    testimonial:
      "From Italy to Australia - this app made my citizenship dream come true!",
  },
  {
    id: 59,
    name: "Angela Wright",
    avatar: "https://i.pravatar.cc/150?img=59",
    rating: 5,
    testimonial:
      "I was so prepared that the actual test felt easy. Thank you for this amazing app!",
  },
  {
    id: 60,
    name: "Omar Farouk",
    avatar: "https://i.pravatar.cc/150?img=60",
    rating: 5,
    testimonial:
      "The progress tracking motivated me to study every day. Passed with flying colors!",
  },
  {
    id: 61,
    name: "Lucy Baker",
    avatar: "https://i.pravatar.cc/150?img=61",
    rating: 5,
    testimonial:
      "Both my husband and I used this app. We're both Australian citizens now!",
  },
  {
    id: 62,
    name: "Andrei Popescu",
    avatar: "https://i.pravatar.cc/150?img=62",
    rating: 4,
    testimonial:
      "Comprehensive coverage of all test topics. Very well designed app.",
  },
  {
    id: 63,
    name: "Victoria Adams",
    avatar: "https://i.pravatar.cc/150?img=63",
    rating: 5,
    testimonial:
      "The timed tests helped me manage my time during the actual exam. Brilliant feature!",
  },
  {
    id: 64,
    name: "Faisal Ahmed",
    avatar: "https://i.pravatar.cc/150?img=64",
    rating: 5,
    testimonial:
      "I've been in Australia for 20 years. Wish I had this app when I first applied!",
  },
  {
    id: 65,
    name: "Stephanie Young",
    avatar: "https://i.pravatar.cc/150?img=65",
    rating: 5,
    testimonial:
      "This app turned test anxiety into test confidence. Passed with 95%!",
  },
  {
    id: 66,
    name: "Jun Wei",
    avatar: "https://i.pravatar.cc/150?img=66",
    rating: 5,
    testimonial:
      "The explanations for wrong answers helped me understand my mistakes. Great learning tool!",
  },
  {
    id: 67,
    name: "Richard King",
    avatar: "https://i.pravatar.cc/150?img=67",
    rating: 4,
    testimonial:
      "Well-organized study material that made preparation straightforward and effective.",
  },
  {
    id: 68,
    name: "Elena Moreno",
    avatar: "https://i.pravatar.cc/150?img=68",
    rating: 5,
    testimonial:
      "From Spain to Australia - this app helped me achieve my Australian dream!",
  },
  {
    id: 69,
    name: "Bryan Phillips",
    avatar: "https://i.pravatar.cc/150?img=69",
    rating: 5,
    testimonial:
      "The best citizenship test prep app available. Passed on my first attempt!",
  },
  {
    id: 70,
    name: "Nadia Khalil",
    avatar: "https://i.pravatar.cc/150?img=70",
    rating: 5,
    testimonial:
      "My whole study group used this app. Every single one of us passed!",
  },
  {
    id: 71,
    name: "Charlotte Evans",
    avatar: "https://i.pravatar.cc/150?u=charlotte",
    rating: null,
    testimonial:
      "Incredible resource! The practice questions covered everything that appeared on my actual test.",
  },
  {
    id: 72,
    name: "Sergei Kuznetsov",
    avatar: "https://i.pravatar.cc/150?u=sergei",
    rating: 5,
    testimonial:
      "From Russia with love for Australia! This app made my citizenship journey smooth.",
  },
  {
    id: 73,
    name: "Amanda Nelson",
    avatar: "https://i.pravatar.cc/150?u=amanda",
    rating: 5,
    testimonial:
      "I recommended this app to my colleagues. Three more citizenship success stories!",
  },
  {
    id: 74,
    name: "Hassan Malik",
    avatar: "https://i.pravatar.cc/150?u=hassan",
    rating: 5,
    testimonial:
      "The study categories helped me focus on topics I was weak in. Passed with 90%!",
  },
  {
    id: 75,
    name: "Julia Robinson",
    avatar: "https://i.pravatar.cc/150?u=julia",
    rating: 4,
    testimonial:
      "Very helpful app with clear explanations. Made studying for the test much easier.",
  },
  {
    id: 76,
    name: "Marco Silva",
    avatar: "https://i.pravatar.cc/150?u=marco",
    rating: 5,
    testimonial:
      "From Brazil to Australia - this app was my trusted companion in the final step!",
  },
  {
    id: 77,
    name: "Diana Mitchell",
    avatar: "https://i.pravatar.cc/150?u=diana",
    rating: 5,
    testimonial:
      "The flashcard feature is absolutely brilliant. Perfect for quick revision!",
  },
  {
    id: 78,
    name: "Tariq Mansoor",
    avatar: "https://i.pravatar.cc/150?u=tariq",
    rating: 5,
    testimonial:
      "I passed with 100%! This app covered every single topic on the test.",
  },
  {
    id: 79,
    name: "Karen Thompson",
    avatar: "https://i.pravatar.cc/150?u=karen",
    rating: 5,
    testimonial:
      "At 58, I was nervous about taking tests. This app built my confidence perfectly!",
  },
  {
    id: 80,
    name: "Yusuf Osman",
    avatar: "https://i.pravatar.cc/150?u=yusuf",
    rating: 5,
    testimonial:
      "The official booklet was confusing, but this app made everything crystal clear.",
  },
  {
    id: 81,
    name: "Rebecca Lewis",
    avatar: "https://i.pravatar.cc/150?u=rebecca",
    rating: 5,
    testimonial:
      "Study on the go with this amazing app. Passed while working full-time!",
  },
  {
    id: 82,
    name: "Igor Novak",
    avatar: "https://i.pravatar.cc/150?u=igor",
    rating: 4,
    testimonial:
      "Comprehensive and well-structured. Essential tool for citizenship test preparation.",
  },
  {
    id: 83,
    name: "Sandra Wright",
    avatar: "https://i.pravatar.cc/150?u=sandra",
    rating: 5,
    testimonial:
      "My husband and I both passed on the same day using this app. Double celebration!",
  },
  {
    id: 84,
    name: "Kenji Watanabe",
    avatar: "https://i.pravatar.cc/150?u=kenji",
    rating: 5,
    testimonial:
      "The practice tests gave me real exam experience. No surprises on test day!",
  },
  {
    id: 85,
    name: "Monica Green",
    avatar: "https://i.pravatar.cc/150?u=monica",
    rating: 5,
    testimonial:
      "This app turned my citizenship test from a fear into a formality. Passed easily!",
  },
  {
    id: 86,
    name: "Abdul Rahman",
    avatar: "https://i.pravatar.cc/150?u=abdul",
    rating: 5,
    testimonial:
      "After failing once before, I found this app and passed with 95%! Life changer!",
  },
  {
    id: 87,
    name: "Nicole Carter",
    avatar: "https://i.pravatar.cc/150?u=nicole",
    rating: 5,
    testimonial:
      "The progress tracking kept me motivated throughout my study journey. Highly recommend!",
  },
  {
    id: 88,
    name: "Luca Bianchi",
    avatar: "https://i.pravatar.cc/150?u=luca",
    rating: 4,
    testimonial:
      "From Italy to becoming an Aussie! This app made the final step straightforward.",
  },
  {
    id: 89,
    name: "Jennifer Morgan",
    avatar: "https://i.pravatar.cc/150?u=jenniferM",
    rating: 5,
    testimonial:
      "I studied for just 2 weeks and got 100%. This app is incredibly effective!",
  },
  {
    id: 90,
    name: "Rashid Khan",
    avatar: "https://i.pravatar.cc/150?u=rashid",
    rating: 5,
    testimonial:
      "The values questions were tricky, but this app explained them perfectly. Passed!",
  },
  {
    id: 91,
    name: "Amy Collins",
    avatar: "https://i.pravatar.cc/150?u=amy",
    rating: 5,
    testimonial:
      "My citizenship ceremony was emotional. So grateful for this app's help!",
  },
  {
    id: 92,
    name: "Stefan Andersson",
    avatar: "https://i.pravatar.cc/150?u=stefan",
    rating: 5,
    testimonial:
      "From Sweden to Australia - this app was essential for my citizenship success!",
  },
  {
    id: 93,
    name: "Teresa Murphy",
    avatar: "https://i.pravatar.cc/150?u=teresa",
    rating: 5,
    testimonial:
      "Clear, concise, and comprehensive. Everything you need to pass the test!",
  },
  {
    id: 94,
    name: "Imran Syed",
    avatar: "https://i.pravatar.cc/150?u=imran",
    rating: 5,
    testimonial:
      "My entire family used this app. We all passed and became citizens together!",
  },
  {
    id: 95,
    name: "Dorothy Bell",
    avatar: "https://i.pravatar.cc/150?u=dorothy",
    rating: 4,
    testimonial:
      "At 70, I thought tests were behind me. This app made it manageable and I passed!",
  },
  {
    id: 96,
    name: "Viktor Popov",
    avatar: "https://i.pravatar.cc/150?u=viktor",
    rating: 5,
    testimonial:
      "The practice mode helped me identify weak areas. Targeted study led to success!",
  },
  {
    id: 97,
    name: "Sarah Reynolds",
    avatar: "https://i.pravatar.cc/150?u=sarahR",
    rating: 5,
    testimonial:
      "I'm now officially Australian! This app was my trusted study partner.",
  },
  {
    id: 98,
    name: "Chen Ming",
    avatar: "https://i.pravatar.cc/150?u=chen",
    rating: 5,
    testimonial:
      "The explanations for each answer helped me truly understand the material. Excellent!",
  },
  {
    id: 99,
    name: "Robert Campbell",
    avatar: "https://i.pravatar.cc/150?u=robert",
    rating: 5,
    testimonial:
      "Passed with flying colors! The study guide section was particularly helpful.",
  },
  {
    id: 100,
    name: "Fatma Yilmaz",
    avatar: "https://i.pravatar.cc/150?u=fatma",
    rating: 5,
    testimonial:
      "From Turkey to Australia - this app helped me achieve my lifelong dream!",
  },
  { id: 101, name: "Priya Sharma", avatar: "https://i.pravatar.cc/150?img=1", rating: 5, testimonial: "Passed with 95% on my first attempt! The flashcards made learning Australia's Federation in 1901 and key historical dates so much easier." },
  { id: 102, name: "Wei Chen", avatar: "https://i.pravatar.cc/150?img=2", rating: 5, testimonial: "Just finished the course in 3 weeks and scored 92%. The practice tests were incredibly helpful in understanding democratic values and how Parliament works." },
  { id: 103, name: "Maria Garcia", avatar: "https://i.pravatar.cc/150?img=3", rating: 5, testimonial: "I couldn't believe how quickly I learned everything. Got 98% and my family celebrated with me—this app made my dream of citizenship real." },
  { id: 104, name: "Raj Patel", avatar: "https://i.pravatar.cc/150?img=4", rating: 5, testimonial: "The study guide was comprehensive and clear. Scored 96% and felt confident answering questions about Australian law and governance." },
  { id: 105, name: "Liu Xing", avatar: "https://i.pravatar.cc/150?img=5", rating: 5, testimonial: "Took 2 weeks to prepare with this app. The progress tracking kept me motivated, and I passed with 94%." },
  { id: 106, name: "Sarah O'Connor", avatar: "https://i.pravatar.cc/150?img=6", rating: 4, testimonial: "Really solid resource for exam prep. Got 88% and learned so much about Australia's constitutional history and rights." },
  { id: 107, name: "Amara Okonkwo", avatar: "https://i.pravatar.cc/150?img=7", rating: 5, testimonial: "Scored 90% after just 1 week of study. The testimonials from other users kept me inspired, and I finally achieved my goal!" },
  { id: 108, name: "Isabella Rossi", avatar: "https://i.pravatar.cc/150?img=8", rating: 5, testimonial: "Coming from Italy, I was worried about the civics questions, but this app explained everything perfectly. Passed with 97%." },
  { id: 109, name: "Hana Kim", avatar: "https://i.pravatar.cc/150?img=9", rating: 5, testimonial: "The flashcards helped me memorize key dates and facts about ANZAC Day and Australian traditions. Scored 93%." },
  { id: 110, name: "David Rodrigues", avatar: "https://i.pravatar.cc/150?img=10", rating: null, testimonial: "Excellent preparation tool that covers everything from Australian symbols to electoral systems. Very thorough." },
  { id: 111, name: "Thao Nguyen", avatar: "https://i.pravatar.cc/150?img=11", rating: 5, testimonial: "I studied for 2 weeks and got 91%. The app's explanation of Australia's multicultural values really resonated with me." },
  { id: 112, name: "James Murphy", avatar: "https://i.pravatar.cc/150?img=12", rating: 5, testimonial: "Moved from Ireland and this app made understanding Australian governance so straightforward. Scored 95%." },
  { id: 113, name: "Ananya Singh", avatar: "https://i.pravatar.cc/150?img=13", rating: 5, testimonial: "Three weeks of consistent study using the practice tests and I achieved 96%. Couldn't be happier with my result!" },
  { id: 114, name: "Marcus Zhang", avatar: "https://i.pravatar.cc/150?img=14", rating: 4, testimonial: "Good comprehensive resource. The historical timeline helped me understand Australia's journey from Federation to modern times. Got 87%." },
  { id: 115, name: "Leila Hassan", avatar: "https://i.pravatar.cc/150?img=15", rating: 5, testimonial: "Fantastic app! Learned about Australian values and democratic principles. Passed with 94% and felt so proud at my ceremony." },
  { id: 116, name: "Paulo Silva", avatar: "https://i.pravatar.cc/150?img=16", rating: 5, testimonial: "From Brazil, I found this app invaluable. Got 100% on my test after 4 weeks of preparation. Best investment ever!" },
  { id: 117, name: "Nora Thompson", avatar: "https://i.pravatar.cc/150?img=17", rating: 5, testimonial: "The study materials are so well-organized. Scored 93% and finally became an Australian citizen—dream come true!" },
  { id: 118, name: "Deepak Kumar", avatar: "https://i.pravatar.cc/150?img=18", rating: 5, testimonial: "Excellent resource with realistic practice tests. Two weeks of study and I scored 89%. Very satisfied with my preparation." },
  { id: 119, name: "Chen Li", avatar: "https://i.pravatar.cc/150?img=19", rating: 4, testimonial: "Comprehensive coverage of Australian civics and history. The flashcards really helped me remember the key facts. Scored 86%." },
  { id: 120, name: "Emma Williams", avatar: "https://i.pravatar.cc/150?img=20", rating: 5, testimonial: "As someone from New Zealand, I thought the test would be easy, but this app ensured I understood every nuance. Got 97%." },
  { id: 121, name: "Kavya Reddy", avatar: "https://i.pravatar.cc/150?img=21", rating: 5, testimonial: "The practice tests felt exactly like the real thing. I scored 95% and my whole family cheered at the ceremony!" },
  { id: 122, name: "Oliver Bennett", avatar: "https://i.pravatar.cc/150?img=22", rating: 5, testimonial: "From the UK, I assumed I'd find this easy but there's so much to learn. This app covered it all. Scored 92%." },
  { id: 123, name: "Sunita Basnet", avatar: "https://i.pravatar.cc/150?img=23", rating: 5, testimonial: "From Nepal, the flashcard feature was a lifesaver. Memorized everything in 3 weeks and passed with 91%." },
  { id: 124, name: "Antonio Ferreira", avatar: "https://i.pravatar.cc/150?img=24", rating: null, testimonial: "Very well-structured content. Covers Australian history, government, and values thoroughly." },
  { id: 125, name: "Min-Ji Park", avatar: "https://i.pravatar.cc/150?img=25", rating: 5, testimonial: "The progress tracker showed me exactly where I needed more work. Focused study led to 96% on test day!" },
  { id: 126, name: "Chioma Eze", avatar: "https://i.pravatar.cc/150?img=26", rating: 5, testimonial: "From Nigeria, I was nervous about the civics section, but the study guide explained everything beautifully. Passed with 90%." },
  { id: 127, name: "Takeshi Ito", avatar: "https://i.pravatar.cc/150?img=27", rating: 4, testimonial: "The timed practice tests prepared me mentally for exam conditions. Scored 88% and felt completely ready." },
  { id: 128, name: "Grace Osei", avatar: "https://i.pravatar.cc/150?img=28", rating: 5, testimonial: "From Ghana, I used this app every morning before work for 3 weeks. Passed with 94%—so worth it!" },
  { id: 129, name: "Mateus Costa", avatar: "https://i.pravatar.cc/150?img=29", rating: 5, testimonial: "The explanations for each answer helped me genuinely understand Australian democracy. Got 93%." },
  { id: 130, name: "Aiko Tanaka", avatar: "https://i.pravatar.cc/150?img=30", rating: 5, testimonial: "As a Japanese national, understanding the Australian parliamentary system was tricky—until this app. Scored 95%!" },
  { id: 131, name: "Sipho Dlamini", avatar: "https://i.pravatar.cc/150?img=31", rating: 5, testimonial: "From South Africa to Australia—this app was my bridge. Passed with 92% after 2 weeks of study." },
  { id: 132, name: "Rosa Delgado", avatar: "https://i.pravatar.cc/150?img=32", rating: 4, testimonial: "Clear and concise content. The category breakdown made it easy to focus my revision. Scored 87%." },
  { id: 133, name: "Pham Tuan", avatar: "https://i.pravatar.cc/150?img=33", rating: 5, testimonial: "From Vietnam, I used the flashcards daily during my lunch break. Three weeks later, I passed with 96%!" },
  { id: 134, name: "Ingrid Larsson", avatar: "https://i.pravatar.cc/150?img=34", rating: 5, testimonial: "From Sweden, the democratic values section resonated deeply with me. Scored 98% and love my new home!" },
  { id: 135, name: "Ranjit Gill", avatar: "https://i.pravatar.cc/150?img=35", rating: 5, testimonial: "My whole study group used this app. We all passed—some of us 100%! Can't recommend it enough." },
  { id: 136, name: "Fatou Diallo", avatar: "https://i.pravatar.cc/150?img=36", rating: 5, testimonial: "From Senegal, learning about ANZAC Day and Federation gave me so much respect for Australian history. Passed with 91%." },
  { id: 137, name: "Stefan Gruber", avatar: "https://i.pravatar.cc/150?img=37", rating: 4, testimonial: "From Germany, a very thorough preparation tool. The practice exams were particularly useful. Got 89%." },
  { id: 138, name: "Nalini Perera", avatar: "https://i.pravatar.cc/150?img=38", rating: 5, testimonial: "From Sri Lanka, I was amazed how well this app explained Australian governance. Passed first try with 94%!" },
  { id: 139, name: "Cong Wang", avatar: "https://i.pravatar.cc/150?img=39", rating: 5, testimonial: "The mock tests gave me real confidence. Walked into the test centre knowing I was ready. Scored 97%." },
  { id: 140, name: "Aoife Brennan", avatar: "https://i.pravatar.cc/150?img=40", rating: 5, testimonial: "From Ireland to Australia—two countries I love. This app made my citizenship feel complete. Got 95%." },
  { id: 141, name: "Bintu Kamara", avatar: "https://i.pravatar.cc/150?img=41", rating: 5, testimonial: "The app made studying for the citizenship test actually enjoyable. Passed with 90% after just 2 weeks!" },
  { id: 142, name: "Hiroko Sato", avatar: "https://i.pravatar.cc/150?img=42", rating: 5, testimonial: "The structured study categories helped me tackle each topic systematically. Scored 93% on my first attempt." },
  { id: 143, name: "Sione Tuilagi", avatar: "https://i.pravatar.cc/150?img=43", rating: 5, testimonial: "From Samoa, I was proud to learn so much about Australian history. Passed with 88% and celebrated with my family!" },
  { id: 144, name: "Elena Vasquez", avatar: "https://i.pravatar.cc/150?img=44", rating: null, testimonial: "The app is well-designed and covers all the necessary material for the citizenship test. Very helpful." },
  { id: 145, name: "Kwame Asante", avatar: "https://i.pravatar.cc/150?img=45", rating: 5, testimonial: "From Ghana, I learned about Australian culture and values I now proudly embrace. Scored 92% first try!" },
  { id: 146, name: "Nadia Mansour", avatar: "https://i.pravatar.cc/150?img=46", rating: 5, testimonial: "From Lebanon, the app's clear explanations of Australian law and rights were invaluable. Passed with 95%." },
  { id: 147, name: "Tobias Fischer", avatar: "https://i.pravatar.cc/150?img=47", rating: 4, testimonial: "From Germany, great preparation resource. The flashcards especially helped me retain key facts. Got 86%." },
  { id: 148, name: "Zanele Mokoena", avatar: "https://i.pravatar.cc/150?img=48", rating: 5, testimonial: "This app turned my fear of the test into excitement. Scored 94% and am now a proud Australian!" },
  { id: 149, name: "Hung Tran", avatar: "https://i.pravatar.cc/150?img=49", rating: 5, testimonial: "From Vietnam, I studied for just 10 days using this app. Passed with 91%—incredible value!" },
  { id: 150, name: "Catherine O'Sullivan", avatar: "https://i.pravatar.cc/150?img=50", rating: 5, testimonial: "From Ireland, already loved Australia but this app made me love its history even more. Scored 97%." },
  { id: 151, name: "Bimal Thapa", avatar: "https://i.pravatar.cc/150?img=51", rating: 5, testimonial: "From Nepal, the flashcards were perfect for studying on the bus to work. Passed with 93% after 3 weeks." },
  { id: 152, name: "Yewande Adeyemi", avatar: "https://i.pravatar.cc/150?img=52", rating: 5, testimonial: "From Nigeria, this app explained Australian democracy better than any book I'd read. Got 96%!" },
  { id: 153, name: "Giorgio Conti", avatar: "https://i.pravatar.cc/150?img=53", rating: 5, testimonial: "From Italy, I discovered a deep appreciation for Australian history through this app. Passed with 94%." },
  { id: 154, name: "Soo-Jin Lee", avatar: "https://i.pravatar.cc/150?img=54", rating: 4, testimonial: "From Korea, very comprehensive study tool. The timed tests prepared me well for exam conditions. Scored 88%." },
  { id: 155, name: "Blessing Obi", avatar: "https://i.pravatar.cc/150?img=55", rating: 5, testimonial: "The progress tracking showed my improvement week by week. Ended up scoring 95%—thrilled!" },
  { id: 156, name: "Nikola Petrov", avatar: "https://i.pravatar.cc/150?img=56", rating: 5, testimonial: "From Bulgaria, this app helped me understand Australian values deeply. Passed with 92% on first attempt." },
  { id: 157, name: "Jasmine Mendoza", avatar: "https://i.pravatar.cc/150?img=57", rating: 5, testimonial: "From the Philippines, I already knew Australia well but this app filled the gaps. Scored a perfect 100%!" },
  { id: 158, name: "Yosef Haile", avatar: "https://i.pravatar.cc/150?img=58", rating: 5, testimonial: "From Ethiopia, becoming Australian is a dream I've had for years. This app made it happen—scored 91%." },
  { id: 159, name: "Sandra Kowalczyk", avatar: "https://i.pravatar.cc/150?img=59", rating: 4, testimonial: "From Poland, the study guide gave me deep insight into Australian political history. Got 87%." },
  { id: 160, name: "Jae-Won Oh", avatar: "https://i.pravatar.cc/150?img=60", rating: 5, testimonial: "From Korea, used this app for 1 month and scored 98%. The flashcards were particularly effective." },
  { id: 161, name: "Amina Diop", avatar: "https://i.pravatar.cc/150?img=61", rating: 5, testimonial: "From Senegal, I studied Australian history with so much pride. Passed my test with 90%!" },
  { id: 162, name: "Lukas Novak", avatar: "https://i.pravatar.cc/150?img=62", rating: 5, testimonial: "From Czech Republic, very impressed by the thoroughness of this app. Got 93% and celebrated with champagne!" },
  { id: 163, name: "Chidi Okafor", avatar: "https://i.pravatar.cc/150?img=63", rating: 5, testimonial: "From Nigeria, the structured categories made studying manageable alongside a full-time job. Passed with 92%." },
  { id: 164, name: "Minh Phuong", avatar: "https://i.pravatar.cc/150?img=64", rating: 4, testimonial: "From Vietnam, very comprehensive preparation. The practice tests closely matched the real exam. Got 86%." },
  { id: 165, name: "Brigitte Lefebvre", avatar: "https://i.pravatar.cc/150?img=65", rating: 5, testimonial: "From France, I loved learning about Australia's multicultural identity. Scored 95% and feel truly Australian now." },
  { id: 166, name: "Aditya Rao", avatar: "https://i.pravatar.cc/150?img=66", rating: 5, testimonial: "From Bangalore, India—I used this app on my daily commute. 3 weeks later, I passed with 97%!" },
  { id: 167, name: "Miriam Otieno", avatar: "https://i.pravatar.cc/150?img=67", rating: 5, testimonial: "From Kenya, this app was my secret weapon. Studied for 2 weeks and scored 94% at my first attempt." },
  { id: 168, name: "Felipe Ortega", avatar: "https://i.pravatar.cc/150?img=68", rating: 5, testimonial: "From Colombia, the flashcard system helped me master Australian history facts. Passed with 91%!" },
  { id: 169, name: "Amelia Clarke", avatar: "https://i.pravatar.cc/150?img=69", rating: 5, testimonial: "From the UK, I assumed citizenship would be straightforward but this app showed me how much there is to know. Scored 96%." },
  { id: 170, name: "Vikram Nair", avatar: "https://i.pravatar.cc/150?img=70", rating: 5, testimonial: "From Kerala, India—this app made the entire citizenship process feel achievable. Passed with 95% on my first go!" },
  { id: 171, name: "Funmilayo Adebayo", avatar: "https://i.pravatar.cc/150?img=1", rating: 5, testimonial: "From Nigeria, the study guide opened my eyes to Australian democratic traditions. Scored 93%." },
  { id: 172, name: "Tomas Horak", avatar: "https://i.pravatar.cc/150?img=2", rating: 4, testimonial: "From Czech Republic, very well structured preparation tool. Covered all the topics I needed. Got 88%." },
  { id: 173, name: "Rowena Santos", avatar: "https://i.pravatar.cc/150?img=3", rating: 5, testimonial: "From the Philippines, I've been in Australia for 8 years and this app finally helped me take the last step. Passed with 97%!" },
  { id: 174, name: "Aryan Mehta", avatar: "https://i.pravatar.cc/150?img=4", rating: 5, testimonial: "From Mumbai, I used this app during my lunch breaks. 2 weeks of focused study got me 95%." },
  { id: 175, name: "Thanh Le", avatar: "https://i.pravatar.cc/150?img=5", rating: 5, testimonial: "From Vietnam, the explanations were clear and easy to follow. Scored 92% and am so proud to be Australian." },
  { id: 176, name: "Seamus O'Brien", avatar: "https://i.pravatar.cc/150?img=6", rating: 5, testimonial: "From Ireland, loved learning about the parallels and differences between Irish and Australian democracy. Got 94%." },
  { id: 177, name: "Preethi Nair", avatar: "https://i.pravatar.cc/150?img=7", rating: 5, testimonial: "From Chennai, the practice tests felt authentic. I scored 96% and cried happy tears at my citizenship ceremony." },
  { id: 178, name: "Marco Bianchi", avatar: "https://i.pravatar.cc/150?img=8", rating: 4, testimonial: "From Italy, solid preparation app with great coverage of Australian law. Scored 87%." },
  { id: 179, name: "Yuki Nakamura", avatar: "https://i.pravatar.cc/150?img=9", rating: 5, testimonial: "From Japan, the clear layout of this app made studying a pleasure. Passed with 94% on first attempt!" },
  { id: 180, name: "Ama Mensah", avatar: "https://i.pravatar.cc/150?img=10", rating: 5, testimonial: "From Ghana, I finally became Australian after 6 years of residency. This app made it possible. Scored 90%." },
  { id: 181, name: "Pedro Alves", avatar: "https://i.pravatar.cc/150?img=11", rating: 5, testimonial: "From Portugal, used this app for just 12 days. Got 93%—better than I expected!" },
  { id: 182, name: "Ji-Young Choi", avatar: "https://i.pravatar.cc/150?img=12", rating: 5, testimonial: "From Korea, the structured study plan kept me on track. Passed with 95% and feel so grateful!" },
  { id: 183, name: "Oluwaseun Bello", avatar: "https://i.pravatar.cc/150?img=13", rating: 5, testimonial: "From Nigeria, the flashcard feature was a game-changer. I mastered all the facts in 2 weeks and scored 92%." },
  { id: 184, name: "Hanna Eriksson", avatar: "https://i.pravatar.cc/150?img=14", rating: 4, testimonial: "From Sweden, the content was thorough and well-organized. The practice exams helped me prepare effectively. Got 89%." },
  { id: 185, name: "Suresh Babu", avatar: "https://i.pravatar.cc/150?img=15", rating: 5, testimonial: "From Hyderabad, India—studied on weekends only and still managed 91%! This app is brilliantly designed." },
  { id: 186, name: "Linh Hoang", avatar: "https://i.pravatar.cc/150?img=16", rating: 5, testimonial: "From Vietnam, the app's coverage of Australian values made me feel like I truly belonged here. Passed with 94%." },
  { id: 187, name: "Connor Walsh", avatar: "https://i.pravatar.cc/150?img=17", rating: 5, testimonial: "From Ireland, this app gave me a deep appreciation for Australian history. Scored 97% and couldn't be prouder." },
  { id: 188, name: "Divya Krishnan", avatar: "https://i.pravatar.cc/150?img=18", rating: 5, testimonial: "From Tamil Nadu, I studied every morning for 3 weeks. The flashcards were perfect for memorisation. Got 95%." },
  { id: 189, name: "Zhou Lei", avatar: "https://i.pravatar.cc/150?img=19", rating: 5, testimonial: "The practice tests built my confidence enormously. Walked into the exam room knowing I'd pass. Scored 96%." },
  { id: 190, name: "Siobhan Kelly", avatar: "https://i.pravatar.cc/150?img=20", rating: 5, testimonial: "From Ireland, I loved every minute of studying with this app. Now a proud dual citizen—scored 98%!" },
  { id: 191, name: "Bui Thi Thu", avatar: "https://i.pravatar.cc/150?img=21", rating: 5, testimonial: "From Vietnam, I used this app on the train every day for 3 weeks. Passed with 93%—wonderful tool!" },
  { id: 192, name: "Emmanuel Adjei", avatar: "https://i.pravatar.cc/150?img=22", rating: 5, testimonial: "From Ghana, this app made learning about Australian democracy engaging and accessible. Scored 90%." },
  { id: 193, name: "Keiko Yamada", avatar: "https://i.pravatar.cc/150?img=23", rating: 4, testimonial: "From Japan, comprehensive and clear. The mock exams were very realistic. Got 87% on my first attempt." },
  { id: 194, name: "Tariq Al-Rashid", avatar: "https://i.pravatar.cc/150?img=24", rating: 5, testimonial: "From Saudi Arabia, the study guide helped me understand Australian law and culture deeply. Passed with 92%." },
  { id: 195, name: "Anita Sharma", avatar: "https://i.pravatar.cc/150?img=25", rating: 5, testimonial: "From Rajasthan, India—I dreamed of this moment for years. This app made it real. Scored 95% first try!" },
  { id: 196, name: "Olusegun Adeyinka", avatar: "https://i.pravatar.cc/150?img=26", rating: 5, testimonial: "From Nigeria, I learned so much about Federation and ANZAC Day through this app. Passed with 93%." },
  { id: 197, name: "Katarzyna Wiśniewska", avatar: "https://i.pravatar.cc/150?img=27", rating: 5, testimonial: "From Poland, the clear explanations of Australian governance were brilliant. Scored 91% and feel truly Australian." },
  { id: 198, name: "Nguyen Van Duc", avatar: "https://i.pravatar.cc/150?img=28", rating: 5, testimonial: "From Vietnam, this app made the citizenship test manageable. Studied for 2 weeks and passed with 94%." },
  { id: 199, name: "Charlotte Dubois", avatar: "https://i.pravatar.cc/150?img=29", rating: 4, testimonial: "From France, very impressed by the depth of content. The progress tracking kept me focused. Scored 88%." },
  { id: 200, name: "Ravi Shankar", avatar: "https://i.pravatar.cc/150?img=30", rating: 5, testimonial: "From Delhi, used the app for 3 weeks and got 96%. The study categories made it easy to cover everything." },
  { id: 201, name: "Abebe Girma", avatar: "https://i.pravatar.cc/150?img=31", rating: 5, testimonial: "From Ethiopia, learning about Australia's multicultural values made me proud to call it home. Scored 91%." },
  { id: 202, name: "Sofía Martínez", avatar: "https://i.pravatar.cc/150?img=32", rating: 5, testimonial: "From Mexico, the flashcards were perfect for quick daily revision. Passed with 93% after 3 weeks!" },
  { id: 203, name: "Yaw Darko", avatar: "https://i.pravatar.cc/150?img=33", rating: 5, testimonial: "From Ghana, the app's explanations of Australian citizenship values were inspiring. Got 90% on my test." },
  { id: 204, name: "Niamh Gallagher", avatar: "https://i.pravatar.cc/150?img=34", rating: 5, testimonial: "From Ireland, I studied for 2 weeks and scored 96%. The mock tests were absolutely spot on." },
  { id: 205, name: "Faizan Malik", avatar: "https://i.pravatar.cc/150?img=35", rating: 5, testimonial: "From Pakistan, the structured approach of this app was exactly what I needed. Passed with 94%." },
  { id: 206, name: "Thu Hương Nguyễn", avatar: "https://i.pravatar.cc/150?img=36", rating: 5, testimonial: "From Vietnam, the app covered every topic I needed. Scored 95% and celebrated with my family!" },
  { id: 207, name: "Aleksander Nowak", avatar: "https://i.pravatar.cc/150?img=37", rating: 4, testimonial: "From Poland, thorough and practical. The timed tests prepared me for the real exam atmosphere. Got 87%." },
  { id: 208, name: "Chamari Perera", avatar: "https://i.pravatar.cc/150?img=38", rating: 5, testimonial: "From Sri Lanka, this app made complex legal concepts accessible. Passed with 93% on my first try!" },
  { id: 209, name: "Xiao Ming", avatar: "https://i.pravatar.cc/150?img=39", rating: 5, testimonial: "From Guangzhou, the app's practice tests felt identical to the real thing. Scored 97%—absolutely thrilled!" },
  { id: 210, name: "Fiona Gallagher", avatar: "https://i.pravatar.cc/150?img=40", rating: 5, testimonial: "From Northern Ireland, this app helped me fall in love with Australian history. Scored 95% and loved every minute." },
  { id: 211, name: "Kofi Mensah", avatar: "https://i.pravatar.cc/150?img=41", rating: 5, testimonial: "From Ghana, the progress tracking showed me exactly what to focus on each week. Passed with 92%!" },
  { id: 212, name: "Miho Kobayashi", avatar: "https://i.pravatar.cc/150?img=42", rating: 5, testimonial: "From Japan, studying Australian democracy and values was genuinely fascinating. Scored 94%." },
  { id: 213, name: "Tafara Moyo", avatar: "https://i.pravatar.cc/150?img=43", rating: 5, testimonial: "From Zimbabwe, I studied with this app for 3 weeks and passed with 90%. A truly life-changing moment." },
  { id: 214, name: "Valentina Cruz", avatar: "https://i.pravatar.cc/150?img=44", rating: 4, testimonial: "From Colombia, the app covered all the essential material clearly. Got 86% and felt well-prepared." },
  { id: 215, name: "Aditi Mishra", avatar: "https://i.pravatar.cc/150?img=45", rating: 5, testimonial: "From Lucknow, the flashcard feature made revising on my lunch break so easy. Scored 95% first try!" },
  { id: 216, name: "Ziad Khalil", avatar: "https://i.pravatar.cc/150?img=46", rating: 5, testimonial: "From Lebanon, this app gave me real confidence going into the test. Scored 93% and became Australian!" },
  { id: 217, name: "Hans Weber", avatar: "https://i.pravatar.cc/150?img=47", rating: 5, testimonial: "From Germany, very impressed by the quality of content. The practice tests felt exactly like the real exam. Got 91%." },
  { id: 218, name: "Kumari De Silva", avatar: "https://i.pravatar.cc/150?img=48", rating: 5, testimonial: "From Sri Lanka, I've been here 10 years—this app finally helped me complete my journey. Passed with 96%!" },
  { id: 219, name: "Bach Nguyen", avatar: "https://i.pravatar.cc/150?img=49", rating: 5, testimonial: "From Vietnam, the structured categories made it easy to study systematically. Scored 94% on my first attempt." },
  { id: 220, name: "Aoibhinn Ryan", avatar: "https://i.pravatar.cc/150?img=50", rating: 5, testimonial: "From Ireland, this app made Australian history come alive. Scored 97% and am now a dual citizen!" },
  { id: 221, name: "Sanjay Gupta", avatar: "https://i.pravatar.cc/150?img=51", rating: 5, testimonial: "From Delhi, the study guide section was incredibly detailed. Learned so much and scored 94%." },
  { id: 222, name: "Adaeze Obi", avatar: "https://i.pravatar.cc/150?img=52", rating: 5, testimonial: "From Nigeria, the app's clear breakdown of Australian governance was a revelation. Passed with 91%." },
  { id: 223, name: "Federico Lombardi", avatar: "https://i.pravatar.cc/150?img=53", rating: 4, testimonial: "From Italy, solid app with thorough coverage. The flashcards really helped with memorisation. Got 88%." },
  { id: 224, name: "Ha-Eun Jung", avatar: "https://i.pravatar.cc/150?img=54", rating: 5, testimonial: "From Korea, I loved how this app explained Australian democratic traditions. Scored 95% with 3 weeks of prep." },
  { id: 225, name: "Kemi Adesanya", avatar: "https://i.pravatar.cc/150?img=55", rating: 5, testimonial: "From Nigeria, this app turned my citizenship journey into a joy. Scored 93% and celebrated with tears of happiness!" },
  { id: 226, name: "Bogdan Popescu", avatar: "https://i.pravatar.cc/150?img=56", rating: 5, testimonial: "From Romania, the practice tests were incredibly accurate. Felt completely prepared on test day. Scored 90%." },
  { id: 227, name: "Grace Dela Cruz", avatar: "https://i.pravatar.cc/150?img=57", rating: 5, testimonial: "From the Philippines, I've been in Australia for 5 years—this app helped me take the final step. Got 96%!" },
  { id: 228, name: "Tesfaye Bekele", avatar: "https://i.pravatar.cc/150?img=58", rating: 5, testimonial: "From Ethiopia, learning about Australia's history and values made me love my new home even more. Passed with 92%." },
  { id: 229, name: "Zofia Kowalska", avatar: "https://i.pravatar.cc/150?img=59", rating: 4, testimonial: "From Poland, comprehensive and well-organised app. The timed practice tests were very helpful. Got 86%." },
  { id: 230, name: "Tae-Yang Kim", avatar: "https://i.pravatar.cc/150?img=60", rating: 5, testimonial: "From Korea, this app broke down complex concepts into digestible lessons. Scored 94% after 3 weeks." },
  { id: 231, name: "Mariama Barry", avatar: "https://i.pravatar.cc/150?img=61", rating: 5, testimonial: "From Guinea, this app opened my eyes to Australia's incredible story. Passed with 91% on first try." },
  { id: 232, name: "Radek Novotny", avatar: "https://i.pravatar.cc/150?img=62", rating: 5, testimonial: "From Czech Republic, very satisfied with the preparation this app provided. Scored 93%." },
  { id: 233, name: "Emeka Nwosu", avatar: "https://i.pravatar.cc/150?img=63", rating: 5, testimonial: "From Nigeria, this app made all the difference. Studied for 2 weeks, passed with 95%—so grateful!" },
  { id: 234, name: "Anh Thi Pham", avatar: "https://i.pravatar.cc/150?img=64", rating: 5, testimonial: "From Vietnam, I loved every aspect of this app. The flashcards were perfect. Scored 92% first attempt!" },
  { id: 235, name: "Isabelle Laurent", avatar: "https://i.pravatar.cc/150?img=65", rating: 5, testimonial: "From France, understanding Australian democratic values was fascinating. Passed with 96% and feel truly Australian." },
  { id: 236, name: "Manoj Tiwari", avatar: "https://i.pravatar.cc/150?img=66", rating: 5, testimonial: "From Varanasi, India—I used this app every evening for 3 weeks. Scored 94% and my family is so proud." },
  { id: 237, name: "Wanjiku Kamau", avatar: "https://i.pravatar.cc/150?img=67", rating: 5, testimonial: "From Kenya, this app gave me thorough knowledge of Australian history and law. Passed with 92%." },
  { id: 238, name: "Sebastián Herrera", avatar: "https://i.pravatar.cc/150?img=68", rating: 4, testimonial: "From Colombia, very good preparation tool. The progress tracker kept me motivated throughout. Got 87%." },
  { id: 239, name: "Rosemary Walsh", avatar: "https://i.pravatar.cc/150?img=69", rating: 5, testimonial: "From Ireland, I scored 97% using this app. The ceremony was the proudest moment of my life in Australia." },
  { id: 240, name: "Shyam Krishnamurthy", avatar: "https://i.pravatar.cc/150?img=70", rating: 5, testimonial: "From Karnataka, India—this app made complex Australian governance easy to understand. Scored 95% first try!" },
  { id: 241, name: "Isioma Okonkwo", avatar: "https://i.pravatar.cc/150?img=1", rating: 5, testimonial: "From Nigeria, the app covered every topic comprehensively. Studied for 3 weeks and scored 93%!" },
  { id: 242, name: "Petr Benes", avatar: "https://i.pravatar.cc/150?img=2", rating: 5, testimonial: "From Czech Republic, excellent app that covered all the citizenship test material. Got 91% and celebrated big!" },
  { id: 243, name: "Marivic Reyes", avatar: "https://i.pravatar.cc/150?img=3", rating: 5, testimonial: "From the Philippines, I've waited 7 years for this moment. This app helped me finally get there. Scored 96%!" },
  { id: 244, name: "Rahul Verma", avatar: "https://i.pravatar.cc/150?img=4", rating: 5, testimonial: "From Pune, used this app alongside full-time work. Passed with 92% after just 2 weeks—brilliant!" },
  { id: 245, name: "Dung Nguyen", avatar: "https://i.pravatar.cc/150?img=5", rating: 4, testimonial: "From Vietnam, the mock exams were very realistic. Got 87% and felt thoroughly prepared on test day." },
  { id: 246, name: "Padraig Cunningham", avatar: "https://i.pravatar.cc/150?img=6", rating: 5, testimonial: "From Ireland, the app made studying Australian history enjoyable. Scored 95% and love my new citizenship!" },
  { id: 247, name: "Kavitha Subramaniam", avatar: "https://i.pravatar.cc/150?img=7", rating: 5, testimonial: "From Coimbatore, the flashcard feature was a lifesaver. I memorised everything in 2 weeks and scored 94%." },
  { id: 248, name: "Matteo Esposito", avatar: "https://i.pravatar.cc/150?img=8", rating: 5, testimonial: "From Italy, the app explained Australian democracy brilliantly. Scored 93% and am proudly Australian now!" },
  { id: 249, name: "Natsuki Fujita", avatar: "https://i.pravatar.cc/150?img=9", rating: 5, testimonial: "From Japan, this app made Australian civic knowledge accessible and interesting. Passed with 96%." },
  { id: 250, name: "Akosua Acheampong", avatar: "https://i.pravatar.cc/150?img=10", rating: 5, testimonial: "From Ghana, the study categories made it easy to tackle topics systematically. Scored 91% first attempt!" },
  { id: 251, name: "Nicolás Ramírez", avatar: "https://i.pravatar.cc/150?img=11", rating: 5, testimonial: "From Mexico, I was nervous but this app gave me real confidence. Scored 94% and am so proud!" },
  { id: 252, name: "Eun-Jae Park", avatar: "https://i.pravatar.cc/150?img=12", rating: 4, testimonial: "From Korea, thorough preparation tool. The progress tracking kept me accountable throughout. Got 88%." },
  { id: 253, name: "Adaora Nwosu", avatar: "https://i.pravatar.cc/150?img=13", rating: 5, testimonial: "From Nigeria, this app covered everything I needed. Passed with 92% on my very first attempt!" },
  { id: 254, name: "Maja Lindqvist", avatar: "https://i.pravatar.cc/150?img=14", rating: 5, testimonial: "From Sweden, I loved learning about Australian Federation and ANZAC traditions. Scored 95% and feel at home." },
  { id: 255, name: "Pradeep Jayawardena", avatar: "https://i.pravatar.cc/150?img=15", rating: 5, testimonial: "From Sri Lanka, the explanations of Australian law were crystal clear. Studied 3 weeks and scored 93%." },
  { id: 256, name: "Nguyen Thi Hoa", avatar: "https://i.pravatar.cc/150?img=16", rating: 5, testimonial: "From Vietnam, the flashcards turned my commute into study time. Passed with 95% after 4 weeks." },
  { id: 257, name: "Declan O'Dwyer", avatar: "https://i.pravatar.cc/150?img=17", rating: 5, testimonial: "From Ireland, comparing Australian and Irish democracy was fascinating. Scored 96% and cherish my dual citizenship." },
  { id: 258, name: "Meenakshi Iyer", avatar: "https://i.pravatar.cc/150?img=18", rating: 5, testimonial: "From Chennai, I studied in the evenings for 3 weeks. The practice tests built real confidence. Scored 94%." },
  { id: 259, name: "Wang Fang", avatar: "https://i.pravatar.cc/150?img=19", rating: 5, testimonial: "From Shanghai, the practice test feature was exactly what I needed. Scored 97% and became Australian!" },
  { id: 260, name: "Orlaith Brennan", avatar: "https://i.pravatar.cc/150?img=20", rating: 5, testimonial: "From Ireland, this app made Australian civics genuinely interesting. Scored 98% and cried happy tears." },
  { id: 261, name: "Pham Van An", avatar: "https://i.pravatar.cc/150?img=21", rating: 5, testimonial: "From Vietnam, the app's study guide was comprehensive and clear. Studied 2 weeks and scored 92%." },
  { id: 262, name: "Nana Kwame", avatar: "https://i.pravatar.cc/150?img=22", rating: 5, testimonial: "From Ghana, learning about ANZAC Day and Federation gave me deep respect for Australia. Scored 90%!" },
  { id: 263, name: "Sachiko Mori", avatar: "https://i.pravatar.cc/150?img=23", rating: 4, testimonial: "From Japan, very comprehensive preparation. The timed tests simulated the real exam well. Got 86%." },
  { id: 264, name: "Mahmoud Al-Zahrani", avatar: "https://i.pravatar.cc/150?img=24", rating: 5, testimonial: "From Saudi Arabia, this app helped me grasp Australian democratic values. Passed with 93% first try." },
  { id: 265, name: "Shreya Patel", avatar: "https://i.pravatar.cc/150?img=25", rating: 5, testimonial: "From Gujarat, I dreamed of this day for years. This app made it happen. Scored 96% on my first attempt!" },
  { id: 266, name: "Emeka Eze", avatar: "https://i.pravatar.cc/150?img=26", rating: 5, testimonial: "From Nigeria, the flashcard feature was incredible for memorising key facts. Scored 93% after 2 weeks." },
  { id: 267, name: "Agnieszka Kowalczyk", avatar: "https://i.pravatar.cc/150?img=27", rating: 5, testimonial: "From Poland, the structured categories made studying so manageable. Passed with 91% on my first try!" },
  { id: 268, name: "Trung Phan", avatar: "https://i.pravatar.cc/150?img=28", rating: 5, testimonial: "From Vietnam, I passed with 94% using this app. The study guide covered everything I needed." },
  { id: 269, name: "Camille Beaumont", avatar: "https://i.pravatar.cc/150?img=29", rating: 4, testimonial: "From France, good thorough coverage of Australian history and law. The flashcards were especially useful. Got 88%." },
  { id: 270, name: "Suresh Pillai", avatar: "https://i.pravatar.cc/150?img=30", rating: 5, testimonial: "From Kerala, India—the practice tests gave me the confidence I needed. Scored 95% and am now Australian!" },
  { id: 271, name: "Tigist Alemu", avatar: "https://i.pravatar.cc/150?img=31", rating: 5, testimonial: "From Ethiopia, I was nervous about the civics questions but this app prepared me brilliantly. Scored 91%." },
  { id: 272, name: "Valentina Moreno", avatar: "https://i.pravatar.cc/150?img=32", rating: 5, testimonial: "From Colombia, the progress tracker motivated me every day. Passed with 93% after 3 weeks of study." },
  { id: 273, name: "Prince Owusu", avatar: "https://i.pravatar.cc/150?img=33", rating: 5, testimonial: "From Ghana, this app made Australian history come alive. Passed with 90% and celebrated with my community!" },
  { id: 274, name: "Siobhán Murray", avatar: "https://i.pravatar.cc/150?img=34", rating: 5, testimonial: "From Ireland, already loved Australia but this app deepened my understanding. Scored 96%." },
  { id: 275, name: "Asim Khan", avatar: "https://i.pravatar.cc/150?img=35", rating: 5, testimonial: "From Pakistan, the app's content was perfectly aligned with the actual test. Passed with 94%—overjoyed!" },
  { id: 276, name: "Mai Phuong Le", avatar: "https://i.pravatar.cc/150?img=36", rating: 5, testimonial: "From Vietnam, I studied with this app for 1 month. Scored 97% and was so proud at my ceremony." },
  { id: 277, name: "Johann Schmidt", avatar: "https://i.pravatar.cc/150?img=37", rating: 4, testimonial: "From Germany, a very well-constructed app. The practice test sections were especially valuable. Got 87%." },
  { id: 278, name: "Tharushi Perera", avatar: "https://i.pravatar.cc/150?img=38", rating: 5, testimonial: "From Sri Lanka, this app explained Australian governance in simple, clear terms. Scored 93% first attempt." },
  { id: 279, name: "Feng Li", avatar: "https://i.pravatar.cc/150?img=39", rating: 5, testimonial: "From Beijing, the practice tests were outstanding. I scored 97% and am now proudly Australian!" },
  { id: 280, name: "Caitlín Ní Mhurchú", avatar: "https://i.pravatar.cc/150?img=40", rating: 5, testimonial: "From Ireland, this app gave me such a deep appreciation for Australian history. Scored 95%!" },
  { id: 281, name: "Kwabena Asante", avatar: "https://i.pravatar.cc/150?img=41", rating: 5, testimonial: "From Ghana, the flashcards made memorising Australian facts so much easier. Scored 92% on first try." },
  { id: 282, name: "Rika Shimizu", avatar: "https://i.pravatar.cc/150?img=42", rating: 5, testimonial: "From Japan, the mock tests prepared me thoroughly. Scored 94% and felt completely confident walking in." },
  { id: 283, name: "Tatenda Munyukwi", avatar: "https://i.pravatar.cc/150?img=43", rating: 5, testimonial: "From Zimbabwe, this app made Australian history accessible and engaging. Passed with 90%—a dream come true!" },
  { id: 284, name: "Lucía Fernández", avatar: "https://i.pravatar.cc/150?img=44", rating: 4, testimonial: "From Spain, great comprehensive preparation. The progress tracking kept me motivated. Scored 86%." },
  { id: 285, name: "Priya Pillai", avatar: "https://i.pravatar.cc/150?img=45", rating: 5, testimonial: "From Trivandrum, India—I used this app daily for 2 weeks. Passed with 96%—the flashcards were incredible!" },
  { id: 286, name: "Dina Nassar", avatar: "https://i.pravatar.cc/150?img=46", rating: 5, testimonial: "From Egypt, this app helped me understand Australian law and rights deeply. Scored 92% on my first attempt." },
  { id: 287, name: "Klaus Bauer", avatar: "https://i.pravatar.cc/150?img=47", rating: 5, testimonial: "From Germany, the app was thorough and well-structured. Scored 91% and felt completely ready for the test." },
  { id: 288, name: "Sanduni Wickramasinghe", avatar: "https://i.pravatar.cc/150?img=48", rating: 5, testimonial: "From Sri Lanka, the study guide was comprehensive and easy to navigate. Passed with 95%—so happy!" },
  { id: 289, name: "Quang Nguyen", avatar: "https://i.pravatar.cc/150?img=49", rating: 5, testimonial: "From Vietnam, I studied using this app for 3 weeks and scored 93%. The practice tests were spot on." },
  { id: 290, name: "Caoimhe O'Reilly", avatar: "https://i.pravatar.cc/150?img=50", rating: 5, testimonial: "From Ireland, I found Australian history fascinating through this app. Scored 97% and love being dual-national!" },
  { id: 291, name: "Rohan Sharma", avatar: "https://i.pravatar.cc/150?img=51", rating: 5, testimonial: "From Maharashtra, India—this app made me genuinely excited to become Australian. Scored 95% first try!" },
  { id: 292, name: "Chiamaka Obi", avatar: "https://i.pravatar.cc/150?img=52", rating: 5, testimonial: "From Nigeria, the detailed study guide made Australian governance crystal clear. Passed with 92%." },
  { id: 293, name: "Luca Russo", avatar: "https://i.pravatar.cc/150?img=53", rating: 5, testimonial: "From Italy, this app covered everything brilliantly. Scored 94% after just 2 weeks of preparation." },
  { id: 294, name: "Bo-Kyung Lee", avatar: "https://i.pravatar.cc/150?img=54", rating: 5, testimonial: "From Korea, the flashcard system was perfect for daily revision. Scored 96% on my first attempt!" },
  { id: 295, name: "Adunola Olatunde", avatar: "https://i.pravatar.cc/150?img=55", rating: 5, testimonial: "From Nigeria, this app turned a daunting test into an achievable goal. Passed with 93%—overjoyed!" },
  { id: 296, name: "Soren Hansen", avatar: "https://i.pravatar.cc/150?img=56", rating: 5, testimonial: "From Denmark, three weeks led to 96%! Incredible app." },
  { id: 297, name: "Anushka Singh", avatar: "https://i.pravatar.cc/150?img=57", rating: 5, testimonial: "From Himachal Pradesh, India, I felt so prepared. Got 94%." },
  { id: 298, name: "Rafael Morales", avatar: "https://i.pravatar.cc/150?img=58", rating: null, testimonial: "Excellent comprehensive resource covering all aspects of Australian citizenship." },
  { id: 299, name: "Fatima Youssef", avatar: "https://i.pravatar.cc/150?img=59", rating: 4, testimonial: "From Tunisia, good comprehensive preparation. Got 85%." },
  { id: 300, name: "Lars Johansson", avatar: "https://i.pravatar.cc/150?img=60", rating: 5, testimonial: "From Sweden, the study materials were outstanding. Got 97% and became a citizen!" },
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
