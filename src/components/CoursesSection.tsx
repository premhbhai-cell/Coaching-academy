import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "JEE Main + Advanced",
    duration: "2 Years",
    students: "1200+",
    classes: "Class 11–12",
    color: "bg-primary",
    desc: "Complete preparation for JEE Main & Advanced with daily classes, weekly tests, and personal mentorship from IITians.",
    features: ["Physics, Chemistry, Maths", "DPP + Weekly Tests", "Doubt Sessions Daily"],
  },
  {
    title: "NEET UG Complete",
    duration: "2 Years",
    students: "1500+",
    classes: "Class 11–12",
    color: "bg-green-600",
    desc: "Comprehensive NEET preparation covering Biology, Physics & Chemistry with AIIMS-level problem solving.",
    features: ["Biology Focus", "NCERT Mastery", "Mock Tests Every Week"],
  },
  {
    title: "Foundation Course",
    duration: "1 Year",
    students: "800+",
    classes: "Class 9–10",
    color: "bg-accent",
    desc: "Build a strong base for competitive exams early. Olympiad prep, board exam excellence, and conceptual clarity.",
    features: ["Olympiad Prep", "Board Excellence", "Concept Building"],
  },
  {
    title: "Crash Course",
    duration: "3–6 Months",
    students: "600+",
    classes: "Class 12",
    color: "bg-purple-600",
    desc: "Intensive short-term program for last-minute preparation. Covers all high-weightage topics with test series.",
    features: ["High-Yield Topics", "Daily Tests", "Revision Sheets"],
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
        <h2 className="section-title">Courses Designed for Success</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Choose from our carefully crafted courses tailored for JEE, NEET, Foundation, and Board exam preparation.
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
