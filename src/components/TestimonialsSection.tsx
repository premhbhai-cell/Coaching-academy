import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rahul Mehra", role: "JEE Advanced 2024 — AIR 156", text: "Elite Academy changed my life. The structured approach, daily tests, and personal mentorship helped me crack JEE Advanced. The faculty are incredibly knowledgeable and supportive.", rating: 5 },
  { name: "Neha Gupta", role: "NEET 2024 — 698/720", text: "I joined Elite Academy in Class 11 and never looked back. The Biology faculty is outstanding. The doubt sessions were a game-changer for me. Highly recommend for NEET aspirants!", rating: 5 },
  { name: "Mr. Suresh Patel", role: "Parent of Arjun Patel (JEE)", text: "As a parent, I was very impressed with the regular updates and parent-teacher meetings. My son's improvement was visible within the first 3 months. The discipline and care at Elite Academy is unmatched.", rating: 5 },
  { name: "Kavya Sharma", role: "NEET 2023 — AIR 42", text: "The mock tests and performance analytics at Elite Academy helped me understand my weak areas. The faculty made sure I was exam-ready. Got into my dream medical college!", rating: 5 },
  { name: "Mrs. Anita Reddy", role: "Parent of Sneha Reddy (NEET)", text: "My daughter got AIR 7 in NEET. The credit goes to the amazing faculty and the structured curriculum at Elite Academy. They truly care about each student's success.", rating: 5 },
  { name: "Arjun Verma", role: "JEE Main 2024 — 99.9%ile", text: "The Maths faculty at Elite Academy is the best I've encountered. Amit sir makes calculus feel like a cakewalk. The test series was exactly like the real exam.", rating: 5 },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">What Students & Parents Say</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Real feedback from our students and their parents — the true measure of our success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card rounded-xl border border-border p-6 text-left card-hover ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-highlight fill-highlight" />
                ))}
              </div>
              <h4 className="font-heading font-bold text-foreground text-sm">{t.name}</h4>
              <p className="text-primary text-xs font-medium">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
