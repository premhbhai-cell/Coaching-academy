import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, Users, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import classroomImg from "@/assets/classroom.jpg";

const allCourses = [
  { id: "class-6-7", title: "Classes 6–7", category: "Foundation", classLevel: "6-7", duration: "1 Year", students: "200+", fee: "₹25,000/year", desc: "Build strong foundation in Mathematics, Science, English, and Social Science. Focus on conceptual clarity and developing problem-solving skills.", features: ["All 4 subjects", "Regular tests", "Doubt sessions", "Concept clarity", "Study material", "Assessment"] },
  { id: "class-8-9", title: "Classes 8–9", category: "Foundation", classLevel: "8-9", duration: "1 Year", students: "250+", fee: "₹30,000/year", desc: "Strengthen fundamentals with advanced topics in Math and Science. Prepare for competitive exams while exceling in academics.", features: ["All 4 subjects", "Weekly tests", "Doubt sessions", "Concept building", "Board prep", "Assessment"] },
  { id: "class-10", title: "Class 10", category: "Board", classLevel: "10", duration: "1 Year", students: "300+", fee: "₹35,000/year", desc: "Comprehensive Board exam preparation for Class 10. Focus on scoring 90%+ with clear concept understanding.", features: ["All 4 subjects", "Board pattern", "Sample papers", "Regular tests", "Doubt sessions", "Lab practicals"] },
  { id: "class-11", title: "Class 11", category: "Board", classLevel: "11", duration: "1 Year", students: "280+", fee: "₹40,000/year", desc: "Advanced curriculum covering Mathematics, Science, English, and Social Science. Focus on both board and competitive exam preparation.", features: ["All 4 subjects", "Regular tests", "Concept focus", "Doubt sessions", "Study material", "Assessment"] },
  { id: "class-12", title: "Class 12", category: "Board", classLevel: "12", duration: "1 Year", students: "320+", fee: "₹40,000/year", desc: "Complete Class 12 preparation with focus on Board exams and higher studies. Strong emphasis on concept clarity and exam strategies.", features: ["All 4 subjects", "Board pattern", "Sample papers", "Doubt sessions", "Career guidance", "Assessment"] },
  { id: "maths-special", title: "Mathematics Mastery", category: "Subject", classLevel: "6-12", duration: "As needed", students: "400+", fee: "₹15,000/year", desc: "Specialized Mathematics coaching for students who need extra support. Covers all topics from basics to advanced level.", features: ["Core concepts", "Problem solving", "Regular practice", "One-on-one", "Doubt clearing", "Assessment"] },
  { id: "science-special", title: "Science Excellence", category: "Subject", classLevel: "6-12", duration: "As needed", students: "350+", fee: "₹15,000/year", desc: "Comprehensive Science tutoring covering Physics, Chemistry, and Biology. Strong focus on lab work and practical understanding.", features: ["All sciences", "Practicals", "Labs", "Doubt clearing", "Regular tests", "Assessment"] },
  { id: "english-special", title: "English Enhancement", category: "Subject", classLevel: "6-12", duration: "As needed", students: "300+", fee: "₹12,000/year", desc: "English language and literature coaching for better communication, grammar, and writing skills.", features: ["Grammar", "Literature", "Speaking", "Writing", "Reading", "Assessment"] },
];

const categories = ["All", "Foundation", "Board", "Subject"];

const categoryOverview = [
  { name: "Foundation (6–9)", desc: "Build strong fundamentals in Mathematics, Science, English, and Social Science for Classes 6 to 9.", color: "bg-primary/10 text-primary" },
  { name: "Board Preparation (10–12)", desc: "Comprehensive Board exam preparation ensuring excellent results in Class 10 and 12 Board exams.", color: "bg-accent/10 text-accent" },
  { name: "Subject Specialization", desc: "Focused coaching in Mathematics, Science, and English for students who need additional support.", color: "bg-highlight/20 text-highlight-foreground" },
  { name: "All Subjects", desc: "Complete curriculum covering Mathematics, Science, English, and Social Science for academic excellence.", color: "bg-primary/10 text-primary" },
];

const whoShouldJoin = [
  { title: "Class 6–7 Students", desc: "Build a strong foundation in all subjects. Develop core concepts in Mathematics and Science." },
  { title: "Class 8–9 Students", desc: "Strengthen fundamentals and prepare for competitive exams. Focus on conceptual clarity." },
  { title: "Class 10 Students", desc: "Comprehensive Board exam preparation with focus on scoring 90%+." },
  { title: "Class 11–12 Students", desc: "Advanced curriculum with focus on Board exams and higher studies." },
];

const courseFaqs = [
  { q: "What subjects are covered?", a: "We cover Mathematics, Science (Physics, Chemistry, Biology), English, and Social Science for Classes 6 to 12." },
  { q: "What is the admission process?", a: "Fill the online form or visit our campus. We provide a counseling session to understand your needs and recommend the best course." },
  { q: "Are there scholarships available?", a: "Yes, we offer scholarships based on merit. Contact us for details." },
  { q: "Can I switch between batches?", a: "Yes, batch switching is allowed with prior notice, subject to availability." },
  { q: "What if I miss classes?", a: "Study materials and reference notes are provided. Doubt sessions are held regularly to help you catch up." },
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
            Quality education for Classes 6 to 12 covering Mathematics, Science, English, and Social Science. Choose the right program for your child's success.
          </p>
        </div>
      </section>

      {/* Course Categories Overview */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Course Categories</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">We offer specialized programs for every competitive exam and academic level.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categoryOverview.map((cat) => (
              <div key={cat.name} className="bg-card rounded-xl border border-border p-6 card-hover">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${cat.color}`}>{cat.name}</span>
                <p className="text-muted-foreground text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
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

      {/* Course List */}
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
                    <span className="text-xs text-muted-foreground">Class {c.classLevel}</span>
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
                  <div className="flex gap-3">
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

      {/* Who Should Join */}
      <section className="section-padding bg-surface-elevated" ref={ref2}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="section-title">Who Should Join Elite Academy?</h2>
              <p className="text-muted-foreground mb-6">Whether you're just starting your competitive exam journey or looking for that final push, we have the right program for you.</p>
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

      {/* Teaching Approach */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title">Our Teaching Approach</h2>
          <p className="section-subtitle max-w-2xl mx-auto">A proven methodology that has helped thousands of students crack JEE & NEET.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { step: "01", title: "Concept Building", desc: "Every topic begins with deep conceptual understanding using real-world examples and visual aids." },
              { step: "02", title: "Problem Practice", desc: "Gradual difficulty increase from NCERT to advanced-level problems with daily practice sheets (DPP)." },
              { step: "03", title: "Testing & Analysis", desc: "Weekly chapter tests and monthly full-syllabus tests with detailed performance analysis and ranking." },
              { step: "04", title: "Doubt Resolution", desc: "Daily doubt-clearing sessions with subject experts. No question goes unanswered." },
              { step: "05", title: "Revision Cycles", desc: "Structured revision schedule with formula sheets, quick notes, and topic-wise revision tests." },
              { step: "06", title: "Mock Exams", desc: "Full-length JEE/NEET pattern mock exams with All India ranking and detailed solutions." },
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

      {/* Course FAQs */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <p className="section-subtitle text-center">Common questions about our courses and admission process.</p>
          <Accordion type="single" collapsible className="space-y-3">
            {courseFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`cfaq-${i}`} className="bg-card rounded-xl border border-border px-5">
                <AccordionTrigger className="font-heading font-semibold text-left text-foreground hover:text-primary py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
