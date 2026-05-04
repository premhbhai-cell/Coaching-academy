import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, Users, CheckCircle, ArrowRight, BookOpen, Calendar, FileText, ClipboardList } from "lucide-react";
import studyMaterialImg from "@/assets/study-material.jpg";
import classroomImg from "@/assets/classroom.jpg";

const courseData: Record<string, any> = {
  physics: {
    title: "Physics Mastery",
    subtitle: "Premium Physics coaching for deep conceptual clarity and exam readiness.",
    duration: "Year-Round",
    students: "520+",
    fee: "₹28,000/year",
    batches: ["Morning Batch: 7 AM – 11 AM", "Evening Batch: 4 PM – 8 PM", "Weekend Batch: Sat–Sun 9 AM – 5 PM"],
    overview: "A subject-focused Physics program designed to strengthen fundamentals, improve problem-solving speed, and build the confidence needed for board and competitive exams.",
    methodology: [
      "Concept-driven teaching with emphasis on visual understanding and application",
      "Gradual progression from basic concepts to advanced problem solving",
      "Regular chapter tests and practice sessions for retention",
      "Doubt resolution sessions after every module",
      "Performance analysis through quizzes and weekly assessments",
      "Dedicated mentor support for each student",
    ],
    syllabus: [
      { title: "Mechanics & Properties", topics: ["Kinematics and Laws of Motion", "Work, Energy, and Power", "Rotational Motion", "Properties of Matter", "Fluid Mechanics"] },
      { title: "Electricity & Optics", topics: ["Electrostatics and Current Electricity", "Magnetism and EMI", "Optics and Wave Optics", "Dual Nature of Matter"] },
      { title: "Modern Physics & Thermodynamics", topics: ["Thermodynamics and Heat", "Oscillations and Waves", "Modern Physics", "Nuclear Physics"] },
    ],
    testSchedule: [
      { type: "Daily Practice Problems", frequency: "Every day", desc: "Conceptual practice to reinforce topics taught in class." },
      { type: "Weekly Chapter Test", frequency: "Every Saturday", desc: "Focused chapter tests with detailed solution discussions." },
      { type: "Monthly Mock Test", frequency: "Last Sunday of month", desc: "Comprehensive assessments covering all topics taught so far." },
      { type: "Revision Session", frequency: "Every month", desc: "Strategy-focused revision to solidify core concepts and formula recall." },
    ],
    studyMaterial: [
      "Complete Physics notes with solved examples",
      "Topic-wise practice booklets",
      "Formula sheets and quick revision guides",
      "Previous years’ important questions",
      "Mock tests with performance analytics",
      "Doubt-clearing worksheets",
    ],
    faqs: [
      { q: "Is this program suitable for board and competitive exams?", a: "Yes. The Physics Mastery program is designed to help students excel in both board exams and subject-level competitive assessments." },
      { q: "Can I join mid-term?", a: "Yes, students can join mid-term with a personalized catch-up plan and doubt support." },
      { q: "Are recorded lectures available?", a: "Yes, all classes are recorded and shared with students for revision and missed sessions." },
      { q: "Will I get doubt support?", a: "Yes, we conduct dedicated doubt clearing sessions and offer mentor support for every topic." },
      { q: "What study materials are included?", a: "Comprehensive notes, problem sets, formula sheets, and mock tests are included in the course fee." },
      { q: "Can I take a demo class?", a: "Yes, free demo classes are available before enrollment." },
    ],
  },
  chemistry: {
    title: "Chemistry Excellence",
    subtitle: "Premium Chemistry coaching for strong concepts and exam skills.",
    duration: "Year-Round",
    students: "480+",
    fee: "₹28,000/year",
    batches: ["Morning Batch: 7 AM – 11 AM", "Evening Batch: 4 PM – 8 PM", "Weekend Batch: Sat–Sun 9 AM – 5 PM"],
    overview: "Focused coaching in Physical, Organic, and Inorganic Chemistry with an emphasis on concept clarity, reactions, and exam-ready problem solving.",
    methodology: [
      "Concept-first learning for all three branches",
      "Reaction mechanism mapping and periodic analysis",
      "Regular question practice with evaluation",
      "Module-wise doubt clearing sessions",
      "Performance tracking through tests",
      "Dedicated mentor guidance and feedback",
    ],
    syllabus: [
      { title: "Physical Chemistry", topics: ["Mole Concept and Stoichiometry", "Chemical Thermodynamics", "Equilibrium and Ionic Equilibrium", "Electrochemistry", "Chemical Kinetics"] },
      { title: "Organic Chemistry", topics: ["Basic Concepts and Hydrocarbons", "Functional Groups", "Reaction Mechanisms", "Stereochemistry", "Biomolecules"] },
      { title: "Inorganic Chemistry", topics: ["Periodic Table and Bonding", "Coordination Compounds", "Metallurgy", "Environmental Chemistry", "Qualitative Analysis"] },
    ],
    testSchedule: [
      { type: "Daily Practice", frequency: "Every day", desc: "Numerical and concept practice based on daily lessons." },
      { type: "Weekly Tests", frequency: "Every Saturday", desc: "Branch-wise tests with detailed answer discussion." },
      { type: "Monthly Revision Test", frequency: "Last Sunday of month", desc: "Comprehensive coverage of topics learned during the month." },
      { type: "Mock Revision Session", frequency: "Every month", desc: "Revision focused session with top-problem discussions." },
    ],
    studyMaterial: [
      "Complete Chemistry notes and reaction charts",
      "Organic mechanism booklets",
      "Inorganic summary sheets",
      "Practice problem sets",
      "Mock test papers",
      "Revision flashcards",
    ],
    faqs: [
      { q: "Does this course cover both board and competitive patterns?", a: "Yes, the Chemistry Excellence course covers board syllabus as well as advanced problems for stronger exam readiness." },
      { q: "Are worksheets provided?", a: "Yes, weekly worksheets and practice sets are provided for each topic." },
      { q: "Can I access course recordings?", a: "All recorded classes are shared with enrolled students for revision." },
      { q: "Is there a doubt resolution mechanism?", a: "Yes, daily doubt sessions and mentor support are available." },
      { q: "Are study materials inclusive?", a: "Yes, all notes, formula sheets, and practice tests are included." },
      { q: "Can I join a weekend batch?", a: "Yes, weekend batch options are available for working students." },
    ],
  },
  mathematics: {
    title: "Mathematics Mastery",
    subtitle: "Premium Mathematics coaching for logical strength and accuracy.",
    duration: "Year-Round",
    students: "600+",
    fee: "₹30,000/year",
    batches: ["Morning Batch: 7 AM – 11 AM", "Evening Batch: 4 PM – 8 PM", "Weekend Batch: Sat–Sun 9 AM – 5 PM"],
    overview: "A subject-oriented Mathematics program to improve conceptual clarity, speed, and accuracy in algebra, calculus, geometry, and trigonometry.",
    methodology: [
      "Step-by-step concept building and formula mastery",
      "Progressive problem solving from basic to advanced",
      "Chapter-wise practice and tests",
      "Mentor-led doubt clearing sessions",
      "Performance tracking and error analysis",
      "Focused revisions before exams",
    ],
    syllabus: [
      { title: "Algebra", topics: ["Quadratic Equations", "Sequences and Series", "Probability", "Matrices and Determinants"] },
      { title: "Calculus", topics: ["Limits and Derivatives", "Integration", "Differential Equations", "Applications of Calculus"] },
      { title: "Geometry & Trigonometry", topics: ["Coordinate Geometry", "3D Geometry", "Trigonometric Identities", "Vector Algebra"] },
    ],
    testSchedule: [
      { type: "Daily Practice", frequency: "Every day", desc: "Problem solving practice to build speed and accuracy." },
      { type: "Weekly Quiz", frequency: "Every Friday", desc: "Focused quizzes on recent chapters." },
      { type: "Monthly Test", frequency: "Last Saturday of month", desc: "Comprehensive tests covering the month's syllabus." },
      { type: "Revision Session", frequency: "Every month", desc: "Revision of key formulas and techniques." },
    ],
    studyMaterial: [
      "Mathematics theory notes with examples",
      "Practice worksheets and problem banks",
      "Formula sheets and quick revision cards",
      "Topic-wise solved problems",
      "Mock practice sets",
      "Performance review reports",
    ],
    faqs: [
      { q: "Is this course suitable for students preparing for board exams?", a: "Yes, the Mathematics Mastery course covers board and subject-level exam requirements thoroughly." },
      { q: "Are extra practice materials provided?", a: "Yes, we provide extra problem sets and revision sheets for every chapter." },
      { q: "Can I switch batches?", a: "Batch switching is possible based on availability with prior notice." },
      { q: "Do you offer one-on-one doubt support?", a: "Yes, we conduct group and one-on-one doubt sessions regularly." },
      { q: "Is there regular progress tracking?", a: "Yes, performance is monitored through tests and mentor feedback." },
      { q: "Can I join the course anytime?", a: "Yes, students can join anytime and receive a catch-up plan." },
    ],
  },
  biology: {
    title: "Biology Insight",
    subtitle: "Premium Biology coaching for deep understanding and high scores.",
    duration: "Year-Round",
    students: "420+",
    fee: "₹28,000/year",
    batches: ["Morning Batch: 7 AM – 11 AM", "Evening Batch: 4 PM – 8 PM", "Weekend Batch: Sat–Sun 9 AM – 5 PM"],
    overview: "A dedicated Biology program focused on NCERT mastery, diagrams, theory clarity, and exam practice.",
    methodology: [
      "NCERT-driven teaching with diagram practice",
      "Topic-wise tests and revisions",
      "Concept summaries and flowcharts",
      "Weekly doubt clearing sessions",
      "Performance feedback and tracking",
      "Exam strategy for healthy marks and competitive success",
    ],
    syllabus: [
      { title: "Botany", topics: ["Plant Kingdom", "Morphology and Physiology", "Genetics and Evolution", "Biotechnology"] },
      { title: "Zoology", topics: ["Human Physiology", "Reproduction", "Ecology and Environment", "Evolution"] },
      { title: "Practical Biology", topics: ["Lab Skills", "Diagrams", "Experiments", "Practical Revision"] },
    ],
    testSchedule: [
      { type: "Daily Practice", frequency: "Every day", desc: "Short practice sets to reinforce theory and diagrams." },
      { type: "Weekly Test", frequency: "Every Wednesday", desc: "Topic-focused tests with answer analysis." },
      { type: "Monthly Mock", frequency: "Last Saturday of month", desc: "Full syllabus test covering theory and practical aspects." },
      { type: "Revision Session", frequency: "Every month", desc: "Concept revision and diagram practice." },
    ],
    studyMaterial: [
      "Complete Biology notes and diagrams",
      "NCERT practice booklets",
      "Question banks and MCQs",
      "Revision flashcards",
      "Mock practice sheets",
      "Lab and practical support guides",
    ],
    faqs: [
      { q: "Is this course NCERT aligned?", a: "Yes, the Biology Insight course is aligned with NCERT and board exam patterns." },
      { q: "Are diagrams and practicals covered?", a: "Yes, diagram practice and practical revision are integral parts of the course." },
      { q: "Can I access class recordings?", a: "Yes, all recordings are shared for revision." },
      { q: "How often are tests conducted?", a: "Weekly tests and monthly mocks are held consistently." },
      { q: "Will I get mentor feedback?", a: "Yes, mentors review your progress and suggest improvement plans." },
      { q: "Is special coaching available for board exams?", a: "Yes, the course covers board syllabus and exam strategy thoroughly." },
    ],
  },
  accountancy: {
    title: "Accountancy Foundation",
    subtitle: "Premium Accountancy coaching for strong financial skills.",
    duration: "Year-Round",
    students: "360+",
    fee: "₹25,000/year",
    batches: ["Morning Batch: 7 AM – 11 AM", "Evening Batch: 4 PM – 8 PM", "Weekend Batch: Sat–Sun 9 AM – 5 PM"],
    overview: "A practical Accountancy course designed to build clarity in accounting principles, ledgers, and financial statements.",
    methodology: [
      "Concept clarity with practical examples",
      "Step-by-step ledger and journal training",
      "Real-time problem solving",
      "Regular assessment of numerical accuracy",
      "Mentor-led doubt sessions",
      "Exam-focused revision and sample papers",
    ],
    syllabus: [
      { title: "Accounting Basics", topics: ["Journal Entries", "Ledger Posting", "Trial Balance", "Rectification of Errors"] },
      { title: "Financial Statements", topics: ["Profit & Loss Account", "Balance Sheet", "Final Accounts", "Company Accounts"] },
      { title: "Ratio Analysis", topics: ["Financial Ratios", "Interpretation", "Cash Flow Statement", "Project Accounting"] },
    ],
    testSchedule: [
      { type: "Daily Practice", frequency: "Every day", desc: "Problem-solving practice for key accounting topics." },
      { type: "Weekly Assessments", frequency: "Every Friday", desc: "Accuracy and concept tests for accounting entries." },
      { type: "Monthly Mock", frequency: "Last Sunday of month", desc: "Full syllabus tests with detailed walkthroughs." },
      { type: "Revision Session", frequency: "Every month", desc: "Consolidation of important financial concepts." },
    ],
    studyMaterial: [
      "Note sets for accounting principles",
      "Workbook for journal and ledger practice",
      "Sample balance sheets and P&L statements",
      "Revision notes and formula sheets",
      "Mock practice papers",
      "Exam strategy guides",
    ],
    faqs: [
      { q: "Is this course suitable for commerce students?", a: "Yes, the Accountancy Foundation course is perfect for commerce students preparing for board and subject exams." },
      { q: "Are sample papers included?", a: "Yes, we provide sample papers and revision sets for all major chapters." },
      { q: "Can I join a weekend batch?", a: "Yes, weekend batches are available for flexible learning." },
      { q: "Do you provide mentor support?", a: "Yes, our mentors help with conceptual doubts and exam strategy." },
      { q: "Are practical accounting examples covered?", a: "Yes, all lessons use practical examples and real-world case studies." },
      { q: "Will I get revision notes?", a: "Yes, concise revision notes are included in the course package." },
    ],
  },
  economics: {
    title: "Economics Edge",
    subtitle: "Premium Economics coaching for theory, diagrams, and exam technique.",
    duration: "Year-Round",
    students: "340+",
    fee: "₹25,000/year",
    batches: ["Morning Batch: 7 AM – 11 AM", "Evening Batch: 4 PM – 8 PM", "Weekend Batch: Sat–Sun 9 AM – 5 PM"],
    overview: "An intensive Economics program covering Microeconomics, Macroeconomics, and practical application with exam-ready strategy.",
    methodology: [
      "Theory-first approach with clear definitions",
      "Graph and diagram practice for concepts",
      "Case study analysis and application",
      "Regular practice tests and reviews",
      "Mentor feedback on performance",
      "Board and exam strategy sessions",
    ],
    syllabus: [
      { title: "Microeconomics", topics: ["Demand and Supply", "Production and Costs", "Market Structures", "Consumer Behaviour"] },
      { title: "Macroeconomics", topics: ["National Income", "Money and Banking", "Government Budget", "Inflation and Growth"] },
      { title: "Practical Economics", topics: ["Diagrams and Charts", "Case Studies", "Economic Survey", "Sample Questions"] },
    ],
    testSchedule: [
      { type: "Daily Practice", frequency: "Every day", desc: "Theory and diagram practice for important economic concepts." },
      { type: "Weekly Tests", frequency: "Every Thursday", desc: "Topic-wise tests with answer explanations." },
      { type: "Monthly Mock", frequency: "Last Saturday of month", desc: "Comprehensive tests covering all economic chapters." },
      { type: "Revision Session", frequency: "Every month", desc: "Focused revision of diagrams and theory." },
    ],
    studyMaterial: [
      "Complete Economics theory notes",
      "Diagram and chart practice booklets",
      "Case study worksheets",
      "Revision summaries",
      "Mock test sets",
      "Exam strategy notes",
    ],
    faqs: [
      { q: "Does this course include diagram practice?", a: "Yes, Economics Edge includes regular diagram and chart revision for board and subject exams." },
      { q: "Are current events covered?", a: "Yes, we discuss current economic developments and connect them to syllabus topics." },
      { q: "Can I access recorded lectures?", a: "Yes, all lectures are available for enrolled students." },
      { q: "How often are assessments conducted?", a: "Weekly tests and monthly mocks are held consistently." },
      { q: "Will I receive mentor support?", a: "Yes, mentors help with conceptual doubts and exam strategy." },
      { q: "Is this course suitable for board exams?", a: "Yes, the course covers board syllabus and exam-focused preparation thoroughly." },
    ],
  },
};

const defaultCourse = courseData["physics"];

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseData[id || ""] || defaultCourse;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="trust-bar-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-3">{course.title}</h1>
            <p className="text-primary-foreground/80 text-lg mb-6">{course.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-1.5 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm"><Clock className="w-4 h-4" /> {course.duration}</span>
              <span className="flex items-center gap-1.5 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm"><Users className="w-4 h-4" /> {course.students} Students</span>
              <span className="bg-highlight text-highlight-foreground px-4 py-2 rounded-full text-sm font-bold">{course.fee}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h2 className="section-title">Course Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-6">{course.overview}</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/admission">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-hover font-bold">
                    Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground btn-hover font-bold">
                    Book Free Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
              <img src={classroomImg} alt="Classroom" className="w-full h-full object-cover" loading="lazy" width={800} height={512} />
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title">Our Teaching Methodology</h2>
          <p className="section-subtitle">A proven 6-step approach that has delivered consistent results year after year.</p>
          <ul className="space-y-3">
            {course.methodology.map((m: string, i: number) => (
              <li key={i} className="flex items-start gap-3 bg-card rounded-xl border border-border p-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Syllabus Accordion */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title">Complete Syllabus</h2>
          <p className="section-subtitle">Detailed topic-wise syllabus covering the full subject curriculum for this course.</p>
          <Accordion type="multiple" className="space-y-3">
            {course.syllabus.map((s: any, i: number) => (
              <AccordionItem key={i} value={`syl-${i}`} className="bg-card rounded-xl border border-border px-5">
                <AccordionTrigger className="font-heading font-semibold text-foreground hover:text-primary py-4">
                  <span className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" /> {s.title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pb-4">
                    {s.topics.map((t: string) => (
                      <li key={t} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary">•</span> {t}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Test Schedule */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title"><ClipboardList className="inline w-7 h-7 text-primary mr-2" />Test Schedule</h2>
          <p className="section-subtitle">Regular assessments to track progress and identify areas for improvement.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.testSchedule.map((t: any) => (
              <div key={t.type} className="bg-card rounded-xl border border-border p-5 card-hover">
                <h4 className="font-heading font-bold text-foreground mb-1">{t.type}</h4>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full mb-2">{t.frequency}</span>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Material Included */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title"><FileText className="inline w-7 h-7 text-primary mr-2" />Study Material Included</h2>
              <p className="text-muted-foreground mb-5">All study material is prepared by our expert faculty with 15+ years of experience. No need to buy any external books.</p>
              <ul className="space-y-3">
                {course.studyMaterial.map((m: string) => (
                  <li key={m} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={studyMaterialImg} alt="Study material books" className="w-full h-auto object-cover" loading="lazy" width={800} height={512} />
            </div>
          </div>
        </div>
      </section>

      {/* Batch Timings */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title"><Calendar className="inline w-7 h-7 text-primary mr-2" />Batch Timings & Fee</h2>
          <div className="grid gap-4 mb-6">
            {course.batches.map((b: string) => (
              <div key={b} className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{b}</span>
              </div>
            ))}
          </div>
          <div className="bg-highlight/10 rounded-xl p-6 border border-highlight/30 mb-6">
            <h4 className="font-heading font-bold text-foreground text-lg mb-2">Fee Structure</h4>
            <p className="text-foreground font-bold text-2xl text-primary">{course.fee}</p>
            <p className="text-muted-foreground text-sm mt-1">EMI options available. Scholarship up to 50% based on entrance test.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/admission">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-hover font-bold">
                Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground btn-hover font-bold">
                Ask a Question
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
