import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";

const faculty = [
  {
    name: "Sunil Vasisht",
    subject: "Mathematics",
    exp: "15 years",
    tag: "Expert Teacher",
    desc: "Expert faculty member dedicated to simplifying complex concepts and helping students achieve academic excellence through personalized guidance.",
    img: faculty1,
  },
  {
    name: "Ram Sharma",
    subject: "Chemistry",
    exp: "15 years",
    tag: "Expert Teacher",
    desc: "Expert faculty member dedicated to simplifying complex concepts and helping students achieve academic excellence through personalized guidance.",
    img: faculty2,
  },
];

export default function FacultySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Award className="w-4 h-4" /> Expert Faculty Team
        </div>
        <h2 className="section-title">Our Teachers</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Learn from the experts who care about your future
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {faculty.map((f, i) => (
            <div
              key={f.name}
              className={`group relative bg-card rounded-[2rem] border border-border p-0 overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="p-7 text-center">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-2">{f.name}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{f.subject}</p>
                <span className="inline-flex items-center justify-center rounded-full bg-highlight/10 text-highlight-foreground text-xs px-3 py-1 font-semibold mb-4">
                  {f.tag}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                <div className="mt-4 text-xs text-muted-foreground">{f.exp} experience</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
