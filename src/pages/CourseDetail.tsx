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
  "jee-main-advanced": {
    title: "JEE Main + Advanced (2 Year Program)",
    subtitle: "Complete IIT JEE Preparation — Class 11 & 12",
    duration: "2 Years",
    students: "1200+",
    fee: "₹1,50,000/year",
    batches: ["Morning Batch: 7 AM – 11 AM", "Evening Batch: 4 PM – 8 PM", "Weekend Batch: Sat–Sun 9 AM – 5 PM"],
    overview: "Our flagship JEE preparation program designed for Class 11 and 12 students aiming for IIT. This 2-year program covers the complete JEE Main and Advanced syllabus with a structured approach that builds concepts from scratch and progressively increases difficulty. Students receive daily classes, practice problems, weekly tests, and personal mentorship from IITians. The program integrates Board preparation seamlessly, ensuring students excel in both competitive exams and school exams without the need for separate coaching.",
    methodology: [
      "Concept-first approach: Every topic starts with deep conceptual understanding before problem-solving",
      "Progressive difficulty: Problems gradually increase in complexity from NCERT to JEE Advanced level",
      "Integrated Board prep: Board exam syllabus covered simultaneously — no separate preparation needed",
      "Test-driven learning: Weekly chapter tests, monthly full-syllabus tests, and bi-annual grand tests",
      "Error analysis: Detailed analysis of every test to identify and address weak areas systematically",
      "Personal mentorship: Each student is assigned a dedicated mentor who tracks progress weekly",
    ],
    syllabus: [
      { title: "Physics", topics: ["Mechanics (Kinematics, Laws of Motion, Work-Energy, Rotational)", "Electromagnetism (Electrostatics, Current, Magnetism, EMI)", "Optics & Modern Physics", "Thermodynamics & Waves", "Fluid Mechanics & Properties of Matter"] },
      { title: "Chemistry", topics: ["Physical Chemistry (Mole Concept, Thermodynamics, Equilibrium, Electrochemistry)", "Organic Chemistry (GOC, Hydrocarbons, Functional Groups, Named Reactions)", "Inorganic Chemistry (Periodic Table, Coordination, Metallurgy, Qualitative Analysis)"] },
      { title: "Mathematics", topics: ["Algebra (Quadratics, Sequences, Matrices, Probability)", "Calculus (Limits, Differentiation, Integration, Differential Equations)", "Coordinate Geometry (Straight Lines, Circles, Conics)", "Trigonometry & Vectors", "3D Geometry"] },
    ],
    testSchedule: [
      { type: "Daily Practice Problems (DPP)", frequency: "Every day", desc: "20-30 problems per subject covering the topic taught that day." },
      { type: "Weekly Chapter Test", frequency: "Every Saturday", desc: "Full chapter test with JEE-pattern questions and detailed solutions." },
      { type: "Monthly Full Syllabus Test", frequency: "Last Sunday of month", desc: "Cumulative test covering all topics taught so far with All India ranking." },
      { type: "Grand Mock Test", frequency: "Every 3 months", desc: "Full-length JEE Main/Advanced pattern paper in exam-like conditions." },
    ],
    studyMaterial: [
      "Comprehensive theory notes for all subjects",
      "Chapter-wise DPP booklets with graded difficulty",
      "Previous 15 years JEE papers (solved)",
      "Formula sheets and quick revision booklets",
      "Mind maps and concept flow charts",
      "Online test series with 50+ mock tests",
    ],
    faqs: [
      { q: "Is Board preparation included?", a: "Yes, our curriculum integrates Board syllabus seamlessly. Students don't need separate coaching for boards. Our students consistently score 90%+ in Boards alongside cracking JEE." },
      { q: "What if I miss a class?", a: "Recorded lectures are available for all sessions. You can also attend the same topic in another batch at no extra cost." },
      { q: "Are scholarships available?", a: "Yes, up to 50% scholarship based on our entrance test score. Toppers from school exams also qualify for merit-based fee waivers." },
      { q: "What is the batch size?", a: "Each batch has a maximum of 45 students to ensure personal attention. Doubt sessions are conducted in groups of 15." },
      { q: "Do you provide hostel facility?", a: "Yes, separate boys and girls hostels with meals, Wi-Fi, laundry, and supervised study hours are available at additional cost." },
      { q: "Can I take a demo class before joining?", a: "Absolutely! We offer 2 free demo classes so you can experience our teaching methodology before making a decision." },
    ],
  },
};

const defaultCourse = courseData["jee-main-advanced"];

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
          <p className="section-subtitle">Detailed topic-wise syllabus covering the entire JEE Main & Advanced curriculum.</p>
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

      {/* FAQs */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center">Course FAQs</h2>
          <p className="section-subtitle text-center">Got questions? Find your answers below.</p>
          <Accordion type="single" collapsible className="space-y-3">
            {course.faqs.map((faq: any, i: number) => (
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
