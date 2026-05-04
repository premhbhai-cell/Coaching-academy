import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, Users, ArrowRight, CheckCircle } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";

const allCourses = [
  {
    id: "physics",
    title: "Physics Mastery",
    category: "Science",
    classLevel: "Core Subject",
    duration: "Year-Round",
    students: "520+",
    fee: "₹28,000/year",
    desc: "Interactive Physics coaching to master concepts, problem solving, and application for competitive exams.",
    features: ["Concept clarity", "Problem solving", "Regular quizzes", "Doubt support", "Performance tracking"],
  },
  {
    id: "chemistry",
    title: "Chemistry Excellence",
    category: "Science",
    classLevel: "Core Subject",
    duration: "Year-Round",
    students: "480+",
    fee: "₹28,000/year",
    desc: "Comprehensive Chemistry guidance covering physical, organic, and inorganic topics with exam focus.",
    features: ["Topic mastery", "Reaction mapping", "Practice sessions", "Doubt clearing", "Test analysis"],
  },
  {
    id: "mathematics",
    title: "Mathematics Mastery",
    category: "Core",
    classLevel: "Core Subject",
    duration: "Year-Round",
    students: "600+",
    fee: "₹30,000/year",
    desc: "Advanced Mathematics tutoring for strong fundamentals, speed, and accuracy in problem solving.",
    features: ["Algebra", "Calculus", "Geometry", "Mock tests", "Performance review"],
  },
  {
    id: "biology",
    title: "Biology Insight",
    category: "Science",
    classLevel: "Core Subject",
    duration: "Year-Round",
    students: "420+",
    fee: "₹28,000/year",
    desc: "Focused Biology coaching with detailed NCERT coverage, diagrams, and high-yield exam preparation.",
    features: ["NCERT mastery", "Diagram practice", "MCQ training", "Revision notes", "Mock tests"],
  },
  {
    id: "accountancy",
    title: "Accountancy Foundation",
    category: "Commerce",
    classLevel: "Core Subject",
    duration: "Year-Round",
    students: "360+",
    fee: "₹25,000/year",
    desc: "Strong Accountancy training for conceptual clarity, numerical practice, and exam readiness.",
    features: ["Financial accounting", "Ledger practice", "Problem solving", "Concept checks", "Assessment"],
  },
  {
    id: "economics",
    title: "Economics Edge",
    category: "Commerce",
    classLevel: "Core Subject",
    duration: "Year-Round",
    students: "340+",
    fee: "₹25,000/year",
    desc: "Insightful Economics coaching with focus on theory, diagrams, case studies, and exam strategy.",
    features: ["Microeconomics", "Macroeconomics", "Charts & diagrams", "Practice questions", "Performance review"],
  },
];

const categories = ["All", "Science", "Commerce", "Core"];

const categoryOverview = [
  {
    name: "Science Subjects",
    desc: "Deep mastery of Physics, Chemistry, and Biology with concept-driven learning.",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Commerce Subjects",
    desc: "Expert coaching in Accountancy and Economics for competitive and academic success.",
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Mathematics Support",
    desc: "Advanced Mathematics tutoring to improve speed, accuracy, and conceptual strength.",
    color: "bg-highlight/20 text-highlight-foreground",
  },
  {
    name: "Subject Excellence",
    desc: "Focused coaching for students seeking premium subject-level preparation.",
    color: "bg-primary/10 text-primary",
  },
];

const whoShouldJoin = [
  {
    title: "Students Seeking Mastery",
    desc: "Ideal for learners who want deep subject understanding and strong concept clarity.",
  },
  {
    title: "Competitive Exam Aspirants",
    desc: "Designed for ambitious students aiming for top subject-level performance through focused coaching.",
  },
  {
    title: "Board Exam Improve",
    desc: "Great for students who want stronger board exam performance with expert guidance.",
  },
  {
    title: "Revision & Practice Boost",
    desc: "Ideal for students who need structured revision and frequent assessment.",
  },
];

export default function Courses() {
  const [filter, setFilter] = useState("All");
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();

  const filtered = filter === "All" ? allCourses : allCourses.filter((c) => c.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="trust-bar-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">Our Courses</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Expert subject coaching in Science and Commerce with a premium learning experience.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Course Categories</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">Choose the right subject track to strengthen your preparation and boost your confidence.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {categoryOverview.map((cat) => (
              <div key={cat.name} className="bg-card rounded-xl border border-border p-6 card-hover">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${cat.color}`}>{cat.name}</span>
                <p className="text-muted-foreground text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-surface border-b border-border">
        <div className="container mx-auto px-4 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border text-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((c, i) => (
              <div
                key={c.id}
                className={`bg-card rounded-xl border border-border overflow-hidden card-hover ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-0.5 rounded-full">{c.category}</span>
                    <span className="text-xs text-muted-foreground">{c.classLevel}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="flex items-center gap-1 text-xs bg-muted px-2.5 py-1 rounded-full"><Clock className="w-3 h-3" /> {c.duration}</span>
                    <span className="flex items-center gap-1 text-xs bg-muted px-2.5 py-1 rounded-full"><Users className="w-3 h-3" /> {c.students}</span>
                    <span className="text-xs bg-highlight/20 text-highlight-foreground px-2.5 py-1 rounded-full font-bold">{c.fee}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    {c.features.map((f) => (
                      <span key={f} className="text-sm text-foreground flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-primary" /> {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link to={`/courses/${c.id}`}>
                      <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground btn-hover">
                        View Details <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link to="/admission">
                      <Button className="bg-accent text-accent-foreground hover:bg-accent/90 btn-hover">Enroll Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-elevated" ref={ref2}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="section-title">Who Should Join Elite Academy?</h2>
              <p className="text-muted-foreground mb-6">Whether you're building fundamentals or aiming for top competitive exam ranks, we have the right coaching program for you.</p>
              <div className="space-y-4">
                {whoShouldJoin.map((item, i) => (
                  <div key={item.title} className={`bg-card rounded-xl border border-border p-4 card-hover ${isVisible2 ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 80}ms` }}>
                    <h4 className="font-heading font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src={classroomImg} alt="Students in classroom" className="w-full h-auto object-cover" loading="lazy" width={800} height={512} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title">Our Teaching Approach</h2>
          <p className="section-subtitle max-w-2xl mx-auto">A proven methodology that helps students gain clarity, confidence, and consistent performance.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { step: "01", title: "Concept Building", desc: "Start every topic with deep understanding before moving to practice." },
              { step: "02", title: "Practice Sessions", desc: "Daily problem-solving and topic-based exercises to strengthen skills." },
              { step: "03", title: "Regular Assessments", desc: "Weekly evaluations and detailed feedback to monitor progress." },
              { step: "04", title: "Doubt Support", desc: "Dedicated doubt sessions to clear every question and misconception." },
              { step: "05", title: "Revision Cycles", desc: "Structured revision with notes, formula sheets, and quick tests." },
              { step: "06", title: "Mock Exams", desc: "Real exam simulations with performance analytics and strategy review." },
            ].map((item) => (
              <div key={item.step} className="bg-card rounded-xl border border-border p-5 text-left card-hover">
                <span className="text-primary font-heading font-extrabold text-2xl">{item.step}</span>
                <h4 className="font-heading font-bold text-foreground mt-2 mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
