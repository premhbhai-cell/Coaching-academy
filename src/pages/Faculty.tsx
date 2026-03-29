import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Star, CheckCircle, Quote } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";

const facultyList = [
  { name: "Dr. Rajesh Kumar", subject: "Physics", exp: "18 years", qualification: "PhD Physics, IIT Delhi", achievements: "200+ IIT selections, Published author", style: "Known for breaking down complex problems into simple, visual concepts. Uses real-world examples extensively.", specialization: "Mechanics, Electromagnetism, Modern Physics", img: faculty1 },
  { name: "Prof. Sunita Verma", subject: "Chemistry", exp: "15 years", qualification: "PhD Organic Chemistry, BHU", achievements: "12 research papers, National award for teaching", style: "Interactive teaching with molecular models and reaction mechanism walkthroughs. Makes Organic Chemistry intuitive.", specialization: "Organic Chemistry, Physical Chemistry", img: faculty2 },
  { name: "Mr. Amit Sharma", subject: "Mathematics", exp: "20 years", qualification: "M.Tech, IIT Bombay", achievements: "50+ IIT selections in 5 years, Textbook author", style: "Problem-solving focused approach. Starts with basics and builds to JEE Advanced level problems systematically.", specialization: "Calculus, Algebra, Coordinate Geometry", img: faculty3 },
  { name: "Dr. Priya Nair", subject: "Biology", exp: "14 years", qualification: "MBBS, AIIMS Delhi", achievements: "300+ NEET selections, Former AIIMS faculty", style: "NCERT-first approach with clinical case studies. Makes Biology memorable through storytelling and diagrams.", specialization: "Human Physiology, Genetics, Ecology", img: faculty4 },
  { name: "Mr. Suresh Iyer", subject: "Physics", exp: "16 years", qualification: "M.Sc Physics, IISc Bangalore", achievements: "Olympiad trainer, 100+ JEE Advanced selections", style: "Mathematical rigor combined with physical intuition. Excellent for advanced problem-solving techniques.", specialization: "Optics, Thermodynamics, Waves", img: faculty1 },
  { name: "Dr. Meena Saxena", subject: "Chemistry", exp: "12 years", qualification: "PhD Inorganic Chemistry, JNU", achievements: "Pioneer in Inorganic teaching methodology", style: "Systematic approach to Inorganic Chemistry with pattern recognition techniques and memory aids.", specialization: "Inorganic Chemistry, Coordination Compounds", img: faculty4 },
  { name: "Mr. Vikash Gupta", subject: "Mathematics", exp: "14 years", qualification: "M.Sc Mathematics, IIT Kanpur", achievements: "National-level math quiz conductor", style: "Concept-driven teaching with emphasis on understanding 'why' before 'how'. Great at building mathematical intuition.", specialization: "Trigonometry, Vectors, 3D Geometry", img: faculty3 },
  { name: "Dr. Anita Sharma", subject: "Biology", exp: "10 years", qualification: "MD, JIPMER", achievements: "Botany specialist, 150+ NEET selections", style: "Visual teaching with extensive use of diagrams, flowcharts, and comparison tables. Makes Botany interesting.", specialization: "Plant Physiology, Botany, Biotechnology", img: faculty2 },
];

const teachingPhilosophy = [
  { title: "Concept Before Formula", desc: "We never teach formulas in isolation. Every formula is derived from first principles so students understand the 'why' behind the 'what'." },
  { title: "Practice Makes Perfect", desc: "Theory without practice is incomplete. Our DPP system ensures students solve 50+ problems per topic before moving forward." },
  { title: "Individual Attention", desc: "With a mentor-to-student ratio of 1:30, every student gets personalized guidance, weekly progress reviews, and customized improvement plans." },
  { title: "Exam-Oriented Approach", desc: "While we build deep understanding, our teaching is laser-focused on what examiners test. We analyze 15+ years of papers to identify patterns." },
];

const studentFeedback = [
  { name: "Sneha R.", about: "Dr. Rajesh Kumar", text: "Sir's way of teaching Physics is magical. He made Electromagnetism — my weakest topic — into my strongest. His visual explanations stay in your mind forever." },
  { name: "Aarav S.", about: "Mr. Amit Sharma", text: "Amit Sir doesn't just solve problems — he teaches you how to think about problems. After his classes, I could attempt JEE Advanced level questions with confidence." },
  { name: "Priya P.", about: "Dr. Priya Nair", text: "Ma'am's NCERT line-by-line approach is the reason I scored 710 in NEET. She makes even the most boring Botany chapters interesting with her clinical examples." },
  { name: "Rohit K.", about: "Prof. Sunita Verma", text: "Organic Chemistry felt like a nightmare before joining Elite Academy. Sunita Ma'am's reaction mechanism walkthroughs made it my favorite subject." },
];

export default function FacultyPage() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="trust-bar-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">Our Faculty</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Meet the brilliant minds behind Elite Academy's success. IITians, AIIMS alumni, and PhD holders with a combined 100+ years of teaching experience.
          </p>
        </div>
      </section>

      {/* Faculty Grid with Photos */}
      <section className="section-padding bg-surface" ref={ref}>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Meet Our Expert Faculty</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">Every faculty member at Elite Academy is handpicked from India's top institutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facultyList.map((f, i) => (
              <div
                key={f.name}
                className={`bg-card rounded-xl border border-border overflow-hidden card-hover ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <img src={f.img} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground">{f.name}</h3>
                      <p className="text-primary font-semibold text-sm">{f.subject} | {f.exp} Experience</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{f.qualification}</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <span className="text-xs font-bold text-foreground uppercase tracking-wider">Specialization</span>
                      <p className="text-muted-foreground text-sm">{f.specialization}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-foreground uppercase tracking-wider">Teaching Style</span>
                      <p className="text-muted-foreground text-sm">{f.style}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{f.achievements}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title">Our Teaching Philosophy</h2>
          <p className="section-subtitle max-w-2xl mx-auto">What makes Elite Academy's teaching different from every other coaching institute.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {teachingPhilosophy.map((p) => (
              <div key={p.title} className="bg-card rounded-xl border border-border p-6 text-left card-hover">
                <CheckCircle className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-heading font-bold text-foreground mb-2">{p.title}</h4>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="trust-bar-gradient py-12">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-heading font-extrabold text-4xl text-primary-foreground">50+</div>
            <div className="text-primary-foreground/80 text-sm">Expert Faculty</div>
          </div>
          <div>
            <div className="font-heading font-extrabold text-4xl text-primary-foreground">100+</div>
            <div className="text-primary-foreground/80 text-sm">Years Combined Exp.</div>
          </div>
          <div>
            <div className="font-heading font-extrabold text-4xl text-primary-foreground">15+</div>
            <div className="text-primary-foreground/80 text-sm">IIT/AIIMS Alumni</div>
          </div>
          <div>
            <div className="font-heading font-extrabold text-4xl text-primary-foreground">300+</div>
            <div className="text-primary-foreground/80 text-sm">Selections/Year</div>
          </div>
        </div>
      </section>

      {/* Student Feedback about Faculty */}
      <section className="section-padding bg-surface" ref={ref2}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title text-center"><Quote className="inline w-7 h-7 text-primary mr-2" />What Students Say About Our Faculty</h2>
          <p className="section-subtitle text-center">Real feedback from students who achieved their dreams with our faculty's guidance.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {studentFeedback.map((fb, i) => (
              <div key={fb.name} className={`bg-card rounded-xl border border-border p-6 card-hover ${isVisible2 ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 80}ms` }}>
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-highlight fill-highlight" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">"{fb.text}"</p>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">{fb.name}</p>
                  <p className="text-primary text-xs">About {fb.about}</p>
                </div>
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
