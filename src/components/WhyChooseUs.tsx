import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle, Target, BookOpen, Users, Award, Lightbulb, HeadphonesIcon } from "lucide-react";

const points = [
  { icon: Target, title: "Personalized Attention", desc: "Small class sizes ensure every student receives individual care and focus." },
  { icon: BookOpen, title: "Quality Study Material", desc: "Comprehensive notes, practice questions, and reference materials for all subjects." },
  { icon: Users, title: "Experienced Faculty", desc: "Dedicated educators focused on clarity and conceptual understanding." },
  { icon: Award, title: "Regular Assessments", desc: "Frequent tests and evaluations to track progress and identify improvement areas." },
  { icon: Lightbulb, title: "Concept-Based Learning", desc: "Focus on understanding concepts rather than rote memorization." },
  { icon: HeadphonesIcon, title: "Doubt Sessions", desc: "Regular doubt-clearing sessions to ensure no student is left confused." },
  { icon: CheckCircle, title: "Progress Tracking", desc: "Regular feedback and parent-teacher meetings to monitor academic progress." },
  { icon: Target, title: "Holistic Development", desc: "Focus on academic excellence combined with overall student development." },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">Why Choose Adhyayan Academy?</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Here's what sets us apart from other coaching institutes and why parents and students trust us.

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`bg-card rounded-xl border border-border p-5 text-left card-hover ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
