import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Trophy } from "lucide-react";

const teachingPoints = [
  { title: "Concept-Based Learning", desc: "We focus on deep understanding of core concepts rather than rote memorization.", icon: "🧠" },
  { title: "Regular Tests & Analysis", desc: "Frequent assessments with detailed performance analysis to track progress.", icon: "📊" },
  { title: "Doubt Solving Sessions", desc: "Dedicated sessions to clear all doubts and ensure no concept is left behind.", icon: "❓" },
  { title: "Personalized Attention", desc: "Individual mentoring and customized learning plans for every student.", icon: "👤" },
];

export default function ResultsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface-elevated" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-highlight/20 text-highlight-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Trophy className="w-4 h-4" /> Our Teaching Approach
        </div>
        <h2 className="section-title">Our Teaching Approach</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          We focus on concept clarity, regular practice, and performance tracking to ensure students achieve academic excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {teachingPoints.map((point, i) => (
            <div
              key={point.title}
              className={`bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-7 text-left shadow-2xl card-hover ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="mb-5 w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-accent text-white shadow-lg flex items-center justify-center text-3xl">{point.icon}</div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
