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
  { id: "jee-main-advanced", title: "JEE Main + Advanced (2 Year)", category: "JEE", classLevel: "11-12", duration: "2 Years", students: "1200+", fee: "₹1,50,000/year", desc: "Complete preparation for IIT JEE with structured curriculum covering Physics, Chemistry, and Mathematics. Includes daily classes, DPP, weekly tests, and personal mentorship.", features: ["4 hrs daily classes", "Weekly chapter tests", "Monthly mock exams", "Personal mentor", "Doubt sessions", "Study material included"] },
  { id: "jee-crash", title: "JEE Crash Course", category: "JEE", classLevel: "12", duration: "6 Months", students: "400+", fee: "₹75,000", desc: "Intensive short-term course covering all high-weightage topics. Perfect for students who want focused last-minute preparation.", features: ["6 hrs daily", "Daily tests", "Revision sheets", "Previous year papers", "Mock tests", "Formula booklet"] },
  { id: "neet-complete", title: "NEET UG Complete (2 Year)", category: "NEET", classLevel: "11-12", duration: "2 Years", students: "1500+", fee: "₹1,40,000/year", desc: "Comprehensive NEET preparation with focus on NCERT mastery, Biology excellence, and competitive problem-solving skills.", features: ["Biology focus sessions", "NCERT line-by-line", "Weekly NEET mocks", "Doubt clearing daily", "AIIMS-level problems", "Study material"] },
  { id: "neet-crash", title: "NEET Crash Course", category: "NEET", classLevel: "12", duration: "4 Months", students: "350+", fee: "₹60,000", desc: "Quick revision and intensive practice for NEET. Covers all chapters with focus on high-yield topics.", features: ["5 hrs daily", "Daily practice", "Topic-wise tests", "Previous years", "Quick revision notes"] },
  { id: "foundation-9", title: "Foundation Course (Class 9)", category: "Foundation", classLevel: "9", duration: "1 Year", students: "300+", fee: "₹80,000", desc: "Build a strong foundation in Science and Mathematics. Prepares students for Olympiads and future competitive exams.", features: ["Olympiad prep", "Concept building", "Board excellence", "Science labs", "Math workshops"] },
  { id: "foundation-10", title: "Foundation Course (Class 10)", category: "Foundation", classLevel: "10", duration: "1 Year", students: "350+", fee: "₹85,000", desc: "Advanced foundation with Board exam focus. Bridges the gap between school and competitive exam preparation.", features: ["Board mastery", "Pre-JEE/NEET prep", "Olympiad training", "Weekly tests", "Career counseling"] },
  { id: "boards-11", title: "Board Excellence (Class 11)", category: "Boards", classLevel: "11", duration: "1 Year", students: "500+", fee: "₹60,000", desc: "Focused on CBSE/State Board syllabus with concept clarity and exam-oriented preparation.", features: ["NCERT focus", "Chapter tests", "Lab practicals", "Board pattern papers", "Revision classes"] },
  { id: "boards-12", title: "Board Excellence (Class 12)", category: "Boards", classLevel: "12", duration: "1 Year", students: "600+", fee: "₹65,000", desc: "Complete Class 12 Board preparation with previous year paper analysis and exam strategies.", features: ["Board pattern focus", "Sample papers", "Practical prep", "Revision modules", "Exam strategies"] },
];

const categories = ["All", "JEE", "NEET", "Foundation", "Boards"];

const categoryOverview = [
  { name: "JEE Preparation", desc: "Complete IIT JEE Main & Advanced preparation with structured 2-year and crash course programs. Our JEE division has produced 200+ IIT selections.", color: "bg-primary/10 text-primary" },
  { name: "NEET Preparation", desc: "Focused medical entrance preparation with NCERT-first approach, Biology mastery, and regular NEET-pattern testing. 300+ AIIMS/medical selections.", color: "bg-accent/10 text-accent" },
  { name: "Foundation Courses", desc: "Building strong fundamentals for Class 9 & 10 students. Early preparation gives a significant edge in competitive exams.", color: "bg-highlight/20 text-highlight-foreground" },
  { name: "Board Excellence", desc: "Dedicated Board exam preparation ensuring students score 90%+ in CBSE/State Boards alongside competitive exam prep.", color: "bg-primary/10 text-primary" },
];

const whoShouldJoin = [
  { title: "Class 9–10 Students", desc: "Start early with foundation courses to build strong concepts in Science and Mathematics before entering competitive exam preparation." },
  { title: "Class 11–12 Students", desc: "Join our flagship JEE/NEET programs for structured, comprehensive preparation with daily classes, tests, and mentorship." },
  { title: "Droppers / Repeaters", desc: "Focused crash courses designed for students who want to improve their rank with intensive revision and problem-solving." },
  { title: "Board Exam Aspirants", desc: "Students aiming for 90%+ in Board exams with strong conceptual understanding and exam-oriented preparation." },
];

const courseFaqs = [
  { q: "What is the admission process?", a: "Fill the online application form or visit our center. You'll take an entrance test followed by a counseling session. Admission is based on test performance and available seats." },
  { q: "Are scholarships available?", a: "Yes! We offer scholarships up to 50% based on entrance test scores. Students from economically weaker backgrounds can also apply for fee waivers." },
  { q: "Can I switch between batches?", a: "Yes, batch switching is allowed within the first month subject to availability. Talk to your batch coordinator for the process." },
  { q: "Is hostel facility available?", a: "Yes, we have separate boys and girls hostels with meals, Wi-Fi, laundry, and supervised study hours included." },
  { q: "What if I miss classes?", a: "Recorded lectures are available for all sessions. You can also attend the same topic in another batch at no extra cost." },
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
            Explore our range of courses designed for every level — from foundation building to IIT/NEET cracking. Choose the right program for your goals.
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
