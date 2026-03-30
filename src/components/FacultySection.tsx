import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, BookOpen } from "lucide-react";

const faculty = [
  { name: "Anil Sharma", subject: "Mathematics & Science", exp: "15 years", tag: "Subject Expert", desc: "Specializes in making concepts easy to understand. Known for personalized teaching approach." },
  { name: "Avni Sharma", subject: "English & Social Science", exp: "12 years", tag: "Expert Faculty", desc: "Focuses on comprehensive learning and analytical thinking. Dedicated to student development." },
];

export default function FacultySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Award className="w-4 h-4" /> Expert Faculty Team
        </div>
        <h2 className="section-title">Learn From Experienced Faculty</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Our faculty comprises dedicated educators committed to providing quality education 
          and personalized attention to every student.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
