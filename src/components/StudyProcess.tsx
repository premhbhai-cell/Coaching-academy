import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { step: "01", title: "Enroll & Assessment", desc: "Take a diagnostic test to assess your current level. We place you in the right batch based on your strengths and weaknesses." },
  { step: "02", title: "Structured Learning", desc: "Daily 4-hour classroom sessions with expert faculty. Each topic covered with theory, examples, and practice problems." },
  { step: "03", title: "Practice & Testing", desc: "Daily Practice Problems (DPP), weekly chapter tests, and monthly full-syllabus exams to track your progress continuously." },
  { step: "04", title: "Doubt Resolution", desc: "Daily 2-hour doubt sessions where you can get one-on-one help from faculty. No question left unanswered." },
  { step: "05", title: "Performance Review", desc: "Monthly parent-teacher meetings and detailed progress reports. Personal mentor tracks your improvement areas." },
  { step: "06", title: "Exam Ready", desc: "Final revision modules, mock tests simulating real exams, and time management strategies to ensure peak performance on D-day." },
];

export default function StudyProcess() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface-elevated" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">Our Proven Study Process</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          A step-by-step journey designed to take you from foundation to top rank.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`relative bg-card rounded-xl border border-border p-6 text-left card-hover ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="font-heading font-extrabold text-5xl text-primary/10 absolute top-3 right-4">{s.step}</div>
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-3">
                {s.step}
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
