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
  { name: "Sneha Reddy", rank: "AIR 7", exam: "NEET 2024", score: "715/720", year: "2024", img: student2 },
  { name: "Aarav Sharma", rank: "AIR 15", exam: "JEE Advanced 2024", score: "328/360", year: "2024", img: student1 },
  { name: "Priya Patel", rank: "AIR 42", exam: "NEET 2024", score: "710/720", year: "2024", img: student2 },
  { name: "Rohit Kumar", rank: "AIR 89", exam: "JEE Advanced 2024", score: "312/360", year: "2024", img: student1 },
  { name: "Vikram Singh", rank: "AIR 156", exam: "JEE Main 2024", score: "99.8%ile", year: "2024", img: student1 },
  { name: "Ananya Gupta", rank: "AIR 23", exam: "NEET 2024", score: "705/720", year: "2024", img: student2 },
  { name: "Karan Joshi", rank: "AIR 34", exam: "JEE Advanced 2023", score: "320/360", year: "2023", img: student1 },
  { name: "Meera Nair", rank: "AIR 12", exam: "NEET 2023", score: "712/720", year: "2023", img: student2 },
  { name: "Aditya Verma", rank: "AIR 67", exam: "JEE Advanced 2023", score: "305/360", year: "2023", img: student1 },
  { name: "Pooja Singh", rank: "AIR 5", exam: "NEET 2023", score: "718/720", year: "2023", img: student2 },
];

const successStories = [
  { name: "Sneha Reddy", rank: "AIR 7 — NEET 2024", img: student2, story: "When I joined Elite Academy in Class 11, I was scoring below average in Biology. The NCERT line-by-line approach and daily practice completely transformed my preparation. My mentor Dr. Priya Nair would personally review my weak areas every week. The mock tests were extremely close to the actual NEET paper. I owe my success to the entire Elite Academy team." },
  { name: "Aarav Sharma", rank: "AIR 15 — JEE Advanced 2024", img: student1, story: "I had failed to crack JEE in my first attempt. The crash course at Elite Academy changed everything. The faculty identified my weak areas within the first week and created a personalized improvement plan. The daily tests and error analysis sessions were game-changers. The problem-solving workshops by Mr. Amit Sharma helped me tackle even the toughest JEE Advanced questions with confidence." },
];

const materials = [
  { title: "Physics Complete Notes", type: "Notes", pages: "450+ pages", exams: "JEE + NEET", desc: "Chapter-wise comprehensive notes with solved examples, derivations, and important formulas. Covers all topics from mechanics to modern physics." },
  { title: "Chemistry Formula Sheet", type: "Notes", pages: "120 pages", exams: "JEE + NEET", desc: "All formulas, reactions, and important facts organized by chapter. Includes organic reaction mechanisms and periodic table shortcuts." },
  { title: "Mathematics DPP Set", type: "Assignments", pages: "300+ problems", exams: "JEE", desc: "Daily Practice Problems organized by topic and difficulty level. Includes hints and detailed solutions for every problem." },
  { title: "Biology NCERT Companion", type: "Notes", pages: "380 pages", exams: "NEET", desc: "Line-by-line NCERT analysis with additional MCQs and explanations. Covers all 38 chapters with diagrams and flowcharts." },
  { title: "JEE Mock Test Series", type: "Test Series", pages: "20 full tests", exams: "JEE", desc: "Simulated JEE Main & Advanced papers with detailed solutions, time management tips, and performance analytics." },
  { title: "NEET Mock Test Series", type: "Test Series", pages: "25 full tests", exams: "NEET", desc: "NEET-pattern tests with answer keys, performance analysis, and comparison with All India toppers." },
  { title: "Previous Year Papers", type: "Assignments", pages: "10 years", exams: "JEE + NEET", desc: "Solved previous year papers with trend analysis, topic distribution, and difficulty level marking." },
  { title: "Quick Revision Booklet", type: "Notes", pages: "200 pages", exams: "JEE + NEET", desc: "Last-minute revision material covering all high-weightage topics with quick formulas and key points." },
];

const years = ["All", "2024", "2023"];
const exams = ["All", "JEE", "NEET"];

const materialBenefits = [
  "Prepared by faculty with 15+ years of teaching experience",
  "Updated every year based on latest exam patterns and trends",
  "Covers NCERT thoroughly — the backbone of JEE & NEET",
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
    const examMatch = examFilter === "All" || t.exam.includes(examFilter);
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
