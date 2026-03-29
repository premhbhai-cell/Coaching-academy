import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, BookOpen } from "lucide-react";

const faculty = [
  { name: "Dr. Rajesh Kumar", subject: "Physics", exp: "18 years", tag: "IIT Delhi Alumni", desc: "Specializes in Mechanics & Electromagnetism. Known for making complex concepts easy." },
  { name: "Prof. Sunita Verma", subject: "Chemistry", exp: "15 years", tag: "PhD Chemistry", desc: "Expert in Organic Chemistry. Published 12 research papers in international journals." },
  { name: "Mr. Amit Sharma", subject: "Mathematics", exp: "20 years", tag: "IIT Bombay Alumni", desc: "Master of Calculus & Algebra. Produced 50+ IIT selections in last 5 years." },
  { name: "Dr. Priya Nair", subject: "Biology", exp: "14 years", tag: "AIIMS Faculty", desc: "Specialist in Human Physiology. Former AIIMS professor with deep NEET expertise." },
];

export default function FacultySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Award className="w-4 h-4" /> Expert Faculty Team
        </div>
        <h2 className="section-title">Learn From the Best Educators</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Our faculty comprises IITians, AIIMS alumni, PhD holders, and experienced educators 
          who have collectively mentored thousands of successful students.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((f, i) => (
            <div
              key={f.name}
              className={`bg-card rounded-xl border border-border p-6 text-left card-hover ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-center">{f.name}</h3>
              <p className="text-primary font-semibold text-sm text-center mt-1">{f.subject}</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="bg-highlight/20 text-highlight-foreground text-xs px-2 py-0.5 rounded-full font-medium">{f.tag}</span>
                <span className="text-xs text-muted-foreground">{f.exp}</span>
              </div>
              <p className="text-muted-foreground text-sm mt-3 text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
