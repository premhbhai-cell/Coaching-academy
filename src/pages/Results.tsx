import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Star, Download, FileText, BookOpen, Trophy, Filter, CheckCircle, Quote } from "lucide-react";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import studyMaterialImg from "@/assets/study-material.jpg";

const toppers = [
  { name: "Sneha Reddy", rank: "Top Scorer", exam: "Biology Excellence 2024", category: "Science", score: "715/720", year: "2024", img: student2 },
  { name: "Aarav Sharma", rank: "Top Scorer", exam: "Physics Mastery 2024", category: "Science", score: "328/360", year: "2024", img: student1 },
  { name: "Priya Patel", rank: "Top Scorer", exam: "Chemistry Edge 2024", category: "Science", score: "710/720", year: "2024", img: student2 },
  { name: "Rohit Kumar", rank: "Top Scorer", exam: "Mathematics Mastery 2024", category: "Mathematics", score: "312/360", year: "2024", img: student1 },
  { name: "Vikram Singh", rank: "Top Scorer", exam: "Science Proficiency 2024", category: "Science", score: "99.8%ile", year: "2024", img: student1 },
  { name: "Ananya Gupta", rank: "Top Scorer", exam: "Biology Insight 2024", category: "Science", score: "705/720", year: "2024", img: student2 },
  { name: "Karan Joshi", rank: "Top Scorer", exam: "Physics Excellence 2023", category: "Science", score: "320/360", year: "2023", img: student1 },
  { name: "Meera Nair", rank: "Top Scorer", exam: "Chemistry Edge 2023", category: "Science", score: "712/720", year: "2023", img: student2 },
  { name: "Aditya Verma", rank: "Top Scorer", exam: "Mathematics Mastery 2023", category: "Mathematics", score: "305/360", year: "2023", img: student1 },
  { name: "Pooja Singh", rank: "Top Scorer", exam: "Accountancy Foundation 2023", category: "Commerce", score: "718/720", year: "2023", img: student2 },
];

const successStories = [
  { name: "Sneha Reddy", rank: "Biology Excellence 2024", img: student2, story: "I joined Elite Academy to build strength in Biology and Chemistry. The subject-focused coaching, weekly tests, and doubt sessions helped me improve my score and confidence." },
  { name: "Aarav Sharma", rank: "Physics Mastery 2024", img: student1, story: "The faculty helped me develop clarity in Physics problem solving and exam strategy. Regular practice and review sessions made a huge difference." },
];

const materials = [
  { title: "Physics Complete Notes", type: "Notes", pages: "450+ pages", exams: "Science", desc: "Chapter-wise comprehensive notes with solved examples, derivations, and important formulas for Physics." },
  { title: "Chemistry Formula Sheet", type: "Notes", pages: "120 pages", exams: "Science", desc: "All formulas, reactions, and important facts organized by chapter for Chemistry." },
  { title: "Mathematics DPP Set", type: "Assignments", pages: "300+ problems", exams: "Mathematics", desc: "Practice problems arranged by topic and difficulty level with detailed solutions." },
  { title: "Biology NCERT Companion", type: "Notes", pages: "380 pages", exams: "Biology", desc: "NCERT-aligned analysis with additional practice questions and diagrams." },
  { title: "Subject Practice Series", type: "Test Series", pages: "20 full tests", exams: "All Subjects", desc: "Simulated subject-level tests with detailed solutions, time tips, and performance analytics." },
  { title: "Revision Master Pack", type: "Notes", pages: "200 pages", exams: "All Subjects", desc: "Quick revision material covering high-weightage topics and key concepts." },
  { title: "Previous Year Subject Papers", type: "Assignments", pages: "10 years", exams: "All Subjects", desc: "Solved previous year papers with trend analysis and topic distribution." },
  { title: "Concept Checkers", type: "Practice", pages: "150+ worksheets", exams: "All Subjects", desc: "Weekly concept check worksheets for targeted practice and rapid improvement." },
];

const years = ["All", "2024", "2023"];
const exams = ["All", "Science", "Commerce", "Mathematics"];

const materialBenefits = [
  "Prepared by faculty with 15+ years of teaching experience",
  "Updated every year based on the latest subject exam trends",
  "Covers NCERT thoroughly — the foundation of strong subject learning",
  "Graded difficulty from basic to advanced for progressive learning",
  "Includes solved examples, practice problems, and previous year questions",
  "Digital access included — study on any device, anytime",
];

export default function Results() {
  const [yearFilter, setYearFilter] = useState("All");
  const [examFilter, setExamFilter] = useState("All");
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();

  const filtered = toppers.filter((t) => {
    const yearMatch = yearFilter === "All" || t.year === yearFilter;
    const examMatch = examFilter === "All" || t.category === examFilter;
    return yearMatch && examMatch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="trust-bar-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">Results & Study Material</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Our results speak louder than words. Access our top-quality study material to boost your preparation.
          </p>
        </div>
      </section>

      {/* Results with Filters */}
      <section className="section-padding bg-surface-elevated" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="section-title"><Trophy className="inline w-8 h-8 text-highlight mr-2" />Our Toppers</h2>
            <p className="section-subtitle">Students who trusted Elite Academy and achieved extraordinary results.</p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                {years.map((y) => (
                  <button key={y} onClick={() => setYearFilter(y)} className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${yearFilter === y ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground hover:bg-primary/10"}`}>{y}</button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {exams.map((e) => (
                  <button key={e} onClick={() => setExamFilter(e)} className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${examFilter === e ? "bg-accent text-accent-foreground" : "bg-card border border-border text-foreground hover:bg-accent/10"}`}>{e}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {filtered.map((t, i) => (
              <div key={`${t.name}-${t.year}`} className={`bg-card rounded-xl border border-border overflow-hidden text-center card-hover ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 80}ms` }}>
                <div className="h-40 overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-foreground">{t.name}</h3>
                  <div className="inline-block bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-sm font-bold mt-1">{t.rank}</div>
                  <p className="text-muted-foreground text-xs mt-1">{t.exam}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-highlight fill-highlight" />
                    <span className="font-bold text-sm text-foreground">{t.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center"><Quote className="inline w-7 h-7 text-primary mr-2" />Success Stories</h2>
          <p className="section-subtitle text-center">In their own words — how Elite Academy changed their lives.</p>
          <div className="space-y-6">
            {successStories.map((s) => (
              <div key={s.name} className="bg-card rounded-xl border border-border p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start card-hover">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">{s.name}</h3>
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2.5 py-0.5 rounded-full mb-3">{s.rank}</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Material Section */}
      <section className="section-padding bg-surface-elevated" ref={ref2}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title"><BookOpen className="inline w-8 h-8 text-primary mr-2" />Study Material</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Download our expertly crafted study material. All materials are prepared by our faculty with 15+ years of experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {materials.map((m, i) => (
              <div key={m.title} className={`bg-card rounded-xl border border-border p-5 flex gap-4 card-hover ${isVisible2 ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 60}ms` }}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">{m.type}</span>
                    <span className="text-xs text-muted-foreground">{m.exams}</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{m.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{m.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{m.pages}</span>
                    <Button size="sm" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground btn-hover text-xs">
                      <Download className="mr-1 w-3 h-3" /> Download Sample
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Material Improves Performance */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src={studyMaterialImg} alt="Study material books" className="w-full h-auto object-cover" loading="lazy" width={800} height={512} />
            </div>
            <div>
              <h2 className="section-title">How Our Material Improves Performance</h2>
              <p className="text-muted-foreground mb-5">Our study material is the backbone of Elite Academy's success. It's not just notes — it's a complete learning system designed to maximize your score.</p>
              <ul className="space-y-3">
                {materialBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
