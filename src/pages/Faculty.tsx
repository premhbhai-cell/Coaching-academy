import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Star, CheckCircle, Quote } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";

const facultyList = [
  {
    name: "Sunil Vasisht",
    subject: "Mathematics",
    exp: "15 years",
    qualification: "M.Sc Mathematics",
    achievements: "Dedicated to helping students master concepts",
    style: "Expert faculty member dedicated to simplifying complex concepts and helping students achieve academic excellence through personalized guidance.",
    specialization: "Mathematics",
    img: faculty1,
  },
  {
    name: "Ram Sharma",
    subject: "Chemistry",
    exp: "15 years",
    qualification: "M.Sc Chemistry",
    achievements: "Experienced chemistry instructor focused on clarity",
    style: "Expert faculty member dedicated to simplifying complex concepts and helping students achieve academic excellence through personalized guidance.",
    specialization: "Chemistry",
    img: faculty2,
  },
];

const teachingPhilosophy = [
  { title: "Concept Before Formula", desc: "We never teach formulas in isolation. Every formula is derived from first principles so students understand the 'why' behind the 'what'." },
  { title: "Practice Makes Perfect", desc: "Theory without practice is incomplete. Our DPP system ensures students solve 50+ problems per topic before moving forward." },
  { title: "Individual Attention", desc: "With a mentor-to-student ratio of 1:30, every student gets personalized guidance, weekly progress reviews, and customized improvement plans." },
  { title: "Exam-Oriented Approach", desc: "While we build deep understanding, our teaching is laser-focused on what examiners test. We analyze 15+ years of papers to identify patterns." },
];

const studentFeedback = [
  { name: "Sneha R.", about: "Dr. Rajesh Kumar", text: "Sir's way of teaching Physics is magical. He made Electromagnetism — my weakest topic — into my strongest. His visual explanations stay in your mind forever." },
  { name: "Aarav S.", about: "Mr. Amit Sharma", text: "Amit Sir doesn't just solve problems — he teaches you how to think about problems. After his classes, I could attempt advanced subject-level questions with confidence." },
  { name: "Priya P.", about: "Dr. Priya Nair", text: "Ma'am's NCERT line-by-line approach is the reason I scored top marks. She makes even the most difficult chapters interesting with her clinical examples." },
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
          <h2 className="section-title text-center">Our Teachers</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">Learn from the experts who care about your future</p>
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

      {/* Teaching Methodology */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title">Teaching Methodology</h2>
          <p className="section-subtitle max-w-2xl mx-auto">Our proven approach to making complex subjects simple and enjoyable.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">🧠</div>
              <h4 className="font-heading font-bold text-foreground mb-2">Concept Explanation</h4>
              <p className="text-muted-foreground text-sm">Every topic starts with clear, step-by-step conceptual understanding using real-world examples.</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl mb-4">🌍</div>
              <h4 className="font-heading font-bold text-foreground mb-2">Real-Life Examples</h4>
              <p className="text-muted-foreground text-sm">We connect theoretical concepts to practical applications and everyday scenarios.</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center text-highlight-foreground text-2xl mb-4">📝</div>
              <h4 className="font-heading font-bold text-foreground mb-2">Practice Sessions</h4>
              <p className="text-muted-foreground text-sm">Regular practice with graded difficulty to build confidence and problem-solving skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Teachers Stand Out */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title">Why Our Teachers Stand Out</h2>
          <p className="section-subtitle max-w-2xl mx-auto">What makes our faculty exceptional in the coaching industry.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">👨‍🏫</div>
              <h4 className="font-heading font-bold text-foreground mb-2">Experienced Faculty</h4>
              <p className="text-muted-foreground text-sm">Years of teaching experience with deep subject knowledge and exam expertise.</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl mb-4">🎯</div>
              <h4 className="font-heading font-bold text-foreground mb-2">Student-Focused Teaching</h4>
              <p className="text-muted-foreground text-sm">Personalized attention and adaptive teaching methods for every student's needs.</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center text-highlight-foreground text-2xl mb-4">📈</div>
              <h4 className="font-heading font-bold text-foreground mb-2">Regular Mentoring</h4>
              <p className="text-muted-foreground text-sm">Continuous guidance and progress tracking to ensure consistent improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Support */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title">Student Support</h2>
          <p className="section-subtitle max-w-2xl mx-auto">Comprehensive support system to help students succeed at every step.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">❓</div>
              <h4 className="font-heading font-bold text-foreground mb-2">Doubt Sessions</h4>
              <p className="text-muted-foreground text-sm">Dedicated doubt-clearing sessions with subject experts available regularly.</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl mb-4">👥</div>
              <h4 className="font-heading font-bold text-foreground mb-2">Personal Guidance</h4>
              <p className="text-muted-foreground text-sm">One-on-one mentoring and customized study plans for individual needs.</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center text-highlight-foreground text-2xl mb-4">📊</div>
              <h4 className="font-heading font-bold text-foreground mb-2">Performance Tracking</h4>
              <p className="text-muted-foreground text-sm">Regular assessments and detailed analytics to monitor and improve performance.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
