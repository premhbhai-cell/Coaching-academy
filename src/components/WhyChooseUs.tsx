import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, Users, Lightbulb, CheckCircle } from "lucide-react";

const points = [
  { icon: Users, title: "Experienced Faculty", desc: "Subject experts who build strong understanding through clear teaching." },
  { icon: Lightbulb, title: "Concept-Based Learning", desc: "Deep understanding instead of rote memorization for lasting success." },
  { icon: CheckCircle, title: "Regular Tests", desc: "Frequent assessments with performance tracking to spot improvement areas." },
  { icon: BookOpen, title: "Doubt Sessions", desc: "Dedicated doubt-solving support to ensure no concept is left behind." },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Premium subject coaching with proven methodology, expert faculty, and performance-first support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`group bg-card rounded-[2rem] border border-border p-6 text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(15,23,42,0.12)] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="mb-5 w-14 h-14 rounded-3xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
