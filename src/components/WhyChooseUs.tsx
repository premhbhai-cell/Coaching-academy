import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle, Target, BookOpen, Users, Award, Lightbulb, HeadphonesIcon } from "lucide-react";

const points = [
  { icon: Target, title: "Result-Oriented Teaching", desc: "Our teaching methodology is laser-focused on exam patterns and high-weightage topics for maximum marks." },
  { icon: BookOpen, title: "Comprehensive Study Material", desc: "15,000+ practice questions, chapter-wise notes, and formula sheets — all prepared by our expert faculty." },
  { icon: Users, title: "Small Batch Sizes", desc: "Maximum 40 students per batch ensures individual attention and better teacher-student interaction." },
  { icon: Award, title: "Experienced Faculty", desc: "Learn from IITians, AIIMS alumni, and PhD holders with 10–20+ years of teaching experience." },
  { icon: Lightbulb, title: "Daily Doubt Sessions", desc: "Dedicated doubt-clearing slots every day. No question goes unanswered at Elite Academy." },
  { icon: HeadphonesIcon, title: "Personal Mentorship", desc: "Each student is assigned a personal mentor who tracks their progress and provides regular feedback." },
  { icon: CheckCircle, title: "Weekly Test Series", desc: "Regular chapter-wise and full-syllabus tests with detailed analysis and rank comparison." },
  { icon: Target, title: "Board + Competitive Balance", desc: "Integrated approach to ensure students excel in both board exams and competitive entrance tests." },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">Why Choose Elite Academy?</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Here's what sets us apart from other coaching institutes and why parents and students trust us.
        </p>

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
