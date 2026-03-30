import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Classes 6–7",
    duration: "1 Year",
    students: "200+",
    classes: "6–7",
    color: "bg-primary",
    desc: "Foundation building in Mathematics, Science, English, and Social Science with focus on conceptual clarity.",
    features: ["All subjects", "Concept focus", "Regular tests"],
  },
  {
    title: "Classes 8–9",
    duration: "1 Year",
    students: "250+",
    classes: "8–9",
    color: "bg-green-600",
    desc: "Advanced concepts in all subjects with preparation for competitive awareness.",
    features: ["All subjects", "Regular tests", "Problem solving"],
  },
  {
    title: "Class 10",
    duration: "1 Year",
    students: "300+",
    classes: "10",
    color: "bg-accent",
    desc: "Comprehensive Board exam preparation with focus on scoring 90%+.",
    features: ["Board prep", "Sample papers", "Doubt sessions"],
  },
  {
    title: "Classes 11–12",
    duration: "1 Year",
    students: "320+",
    classes: "11–12",
    color: "bg-purple-600",
    desc: "Advanced course covering all subjects with focus on Board exams and higher studies.",
    features: ["All subjects", "Board focused", "Regular tests"],
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
        <h2 className="section-title">Courses for Every Grade</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Quality education for Classes 6 to 12 with comprehensive curriculum covering all subjects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((c, i) => (
            <div
              key={c.title}
              className={`bg-card rounded-xl border border-border overflow-hidden text-left card-hover ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`${c.color} h-2`} />
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="flex items-center gap-1 text-xs bg-muted px-2.5 py-1 rounded-full">
                    <Clock className="w-3 h-3" /> {c.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs bg-muted px-2.5 py-1 rounded-full">
                    <Users className="w-3 h-3" /> {c.students} Students
                  </span>
                  <span className="text-xs bg-muted px-2.5 py-1 rounded-full">{c.classes}</span>
                </div>
                <ul className="space-y-1 mb-4">
                  {c.features.map((f) => (
                    <li key={f} className="text-sm text-foreground">✔ {f}</li>
                  ))}
                </ul>
                <Link to="/courses">
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground btn-hover">
                    View Details <ArrowRight className="ml-1 w-4 h-4" />
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
