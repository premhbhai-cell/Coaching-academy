import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Aryan Singh", role: "Physics Student", text: "The subject-wise coaching at Elite Academy helped me build clarity from day one. Every concept was explained slowly and then practiced with plenty of questions.", rating: 5 },
  { name: "Priya Sharma", role: "Chemistry Student", text: "The Chemistry sessions were easy to follow and the regular assessments made sure I stayed on track. The faculty supported me through every doubt.", rating: 5 },
  { name: "Rahul Verma", role: "Mathematics Student", text: "Maths became enjoyable after joining Elite Academy. The teaching style is concept-first, and the performance tracking helped me improve quickly.", rating: 5 },
  { name: "Sneha Reddy", role: "Biology Student", text: "Biology coaching here is exceptional. The diagrams and practical examples made complex topics simple.", rating: 5 },
  { name: "Karan Joshi", role: "Accountancy Student", text: "Accountancy became my favorite subject. The practical approach and regular tests built my confidence.", rating: 5 },
  { name: "Meera Nair", role: "Economics Student", text: "Economics sessions are insightful. The real-world examples and case studies made learning engaging.", rating: 5 },
  { name: "Vikram Singh", role: "Physics Student", text: "The faculty's dedication to concept clarity is unmatched. I improved significantly in a short time.", rating: 5 },
  { name: "Ananya Gupta", role: "Chemistry Student", text: "Chemistry was tough, but the step-by-step teaching made it manageable. Great doubt sessions.", rating: 5 },
  { name: "Aditya Verma", role: "Mathematics Student", text: "Mathematics mastery program is excellent. Speed and accuracy improved with regular practice.", rating: 5 },
  { name: "Pooja Singh", role: "Biology Student", text: "Biology insight coaching covered all topics thoroughly. Mock tests were very helpful.", rating: 5 },
  { name: "Rohit Kumar", role: "Accountancy Student", text: "Accountancy foundation course is well-structured. Practical examples made learning easy.", rating: 5 },
  { name: "Neha Patel", role: "Economics Student", text: "Economics edge program provided deep insights. Charts and diagrams were very useful.", rating: 5 },
  { name: "Arjun Rao", role: "Physics Student", text: "Physics mastery helped me understand complex theories. Regular quizzes kept me engaged.", rating: 5 },
  { name: "Kavya Iyer", role: "Chemistry Student", text: "Chemistry excellence course is comprehensive. Reaction mechanisms were explained clearly.", rating: 5 },
  { name: "Siddharth Jain", role: "Mathematics Student", text: "Mathematics coaching built my logical thinking. Problem-solving skills improved a lot.", rating: 5 },
  { name: "Tanya Kapoor", role: "Biology Student", text: "Biology coaching was detailed. NCERT coverage and diagrams were perfect.", rating: 5 },
  { name: "Yash Gupta", role: "Accountancy Student", text: "Accountancy training was practical. Ledger practice and assessments were great.", rating: 5 },
  { name: "Simran Kaur", role: "Economics Student", text: "Economics coaching was insightful. Theory and applications were balanced well.", rating: 5 },
  { name: "Dev Patel", role: "Physics Student", text: "Physics sessions were interactive. Concept building was strong.", rating: 5 },
  { name: "Aisha Khan", role: "Chemistry Student", text: "Chemistry guidance was excellent. Organic and inorganic topics were covered well.", rating: 5 },
  { name: "Ravi Sharma", role: "Mathematics Student", text: "Mathematics support was timely. Doubts were cleared immediately.", rating: 5 },
  { name: "Maya Singh", role: "Biology Student", text: "Biology insight provided high-yield preparation. Mock exams were realistic.", rating: 5 },
  { name: "Nikhil Agarwal", role: "Accountancy Student", text: "Accountancy foundation built strong basics. Numerical practice was extensive.", rating: 5 },
  { name: "Zara Ali", role: "Economics Student", text: "Economics edge made theory interesting. Case studies were engaging.", rating: 5 },
];

export default function TestimonialsSection() {
  const { ref } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsPerView = 2;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const startIndex = currentIndex * testimonialsPerView;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerView);

  return (
    <section className="section-padding bg-surface relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">What Students Say</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Smooth subject-led learning with results-driven coaching.
        </p>

        <div className="relative mt-10 max-w-5xl mx-auto">
          <div className="flex gap-6 justify-center">
            {visibleTestimonials.map((t, index) => (
              <div key={`${t.name}-${startIndex + index}`} className="w-full max-w-md rounded-[2rem] border border-border bg-card p-8 shadow-2xl hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)] transition-all duration-500 hover:-translate-y-1">
                <Quote className="w-10 h-10 text-primary/30 mb-5" />
                <p className="text-muted-foreground text-base leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-2 mb-3 justify-center">
                  {[...Array(t.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 text-highlight fill-highlight" />
                  ))}
                </div>
                <h4 className="font-heading font-bold text-2xl text-foreground mb-1">{t.name}</h4>
                <p className="text-primary text-sm font-medium">{t.role}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
