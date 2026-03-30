import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Trophy, Star } from "lucide-react";

const toppers = [
  { name: "Student A", rank: "Class 10 - 94%", exam: "CBSE Boards 2024", score: "470/500", photo: "👨‍🎓" },
  { name: "Student B", rank: "Class 12 - 96%", exam: "CBSE Boards 2024", score: "480/500", photo: "👩‍🎓" },
  { name: "Student C", rank: "Class 9 - 93%", exam: "School Exam 2024", score: "465/500", photo: "👨‍🎓" },
  { name: "Student D", rank: "Class 10 - 95%", exam: "CBSE Boards 2024", score: "475/500", photo: "👩‍🎓" },
  { name: "Student E", rank: "Class 11 - 91%", exam: "School Exam 2024", score: "455/500", photo: "👨‍🎓" },
  { name: "Student F", rank: "Class 12 - 94%", exam: "School Exam 2024", score: "470/500", photo: "👩‍🎓" },
];

export default function ResultsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface-elevated" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-highlight/20 text-highlight-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Trophy className="w-4 h-4" /> Our Pride — Star Performers
        </div>
        <h2 className="section-title">Our Toppers Speak for Us</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Year after year, Elite Academy students secure top ranks in JEE and NEET, 
          making us one of India's most result-oriented coaching institutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card rounded-xl border border-border p-6 card-hover ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-5xl mb-3">{t.photo}</div>
              <h3 className="font-heading font-bold text-lg text-foreground">{t.name}</h3>
              <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold mt-2">
                {t.rank}
              </div>
              <p className="text-muted-foreground text-sm mt-2">{t.exam}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <Star className="w-4 h-4 text-highlight fill-highlight" />
                <span className="font-bold text-foreground">{t.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
