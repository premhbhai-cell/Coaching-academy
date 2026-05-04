import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const subjects = [
  {
    title: "Physics",
    stream: "Science Stream",
    desc: "Understanding the laws of the universe",
    icon: "⚛️",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    title: "Chemistry",
    stream: "Science Stream",
    desc: "Exploring the building blocks of matter",
    icon: "🧪",
    gradient: "from-fuchsia-400 to-pink-600",
  },
  {
    title: "Mathematics",
    stream: "Core Subject",
    desc: "Mastering numbers and logic",
    icon: "📐",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    title: "Biology",
    stream: "Science Stream",
    desc: "Studying the science of life",
    icon: "🧬",
    gradient: "from-emerald-300 to-lime-500",
  },
  {
    title: "Accountancy",
    stream: "Commerce Stream",
    desc: "Foundations of financial management",
    icon: "💼",
    gradient: "from-yellow-300 to-orange-500",
  },
  {
    title: "Economics",
    stream: "Commerce Stream",
    desc: "Analyzing markets and resources",
    icon: "📈",
    gradient: "from-violet-400 to-indigo-600",
  },
];

export default function CoursesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface-elevated" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <BookOpen className="w-4 h-4" /> Our Programs
        </div>
        <h2 className="section-title">Subjects We Teach</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Comprehensive coverage of Science and Commerce streams
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {subjects.map((subject, i) => (
            <div
              key={subject.title}
              className={`group bg-white/80 border border-border/70 shadow-2xl rounded-[2rem] p-6 text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`mb-6 w-16 h-16 rounded-3xl bg-gradient-to-br ${subject.gradient} text-white shadow-lg flex items-center justify-center text-3xl`}>{subject.icon}</div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{subject.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{subject.desc}</p>
              <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-5">
                {subject.stream}
              </span>
              <div className="flex justify-between items-center">
                <Link to="/courses">
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground btn-hover text-sm px-4 py-3">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
