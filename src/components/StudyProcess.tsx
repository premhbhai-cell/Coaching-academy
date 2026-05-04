import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { step: "01", title: "Concept Learning", desc: "Begin every subject with deep conceptual understanding from expert faculty." },
  { step: "02", title: "Practice & Assignments", desc: "Regular practice sessions and assignment reviews to build speed and accuracy." },
  { step: "03", title: "Regular Testing", desc: "Frequent assessments with detailed analysis to track progress and improve performance." },
  { step: "04", title: "Performance Analysis", desc: "Data-driven review sessions help identify strengths and plan targeted improvements." },
];

export default function StudyProcess() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface-elevated" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">Our Study Process</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          A modern learning path designed to make subject mastery effortless and measurable.
        </p>

        <div className="relative mt-12">
          <div className="hidden md:block absolute inset-x-0 top-1/2 h-px bg-border" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative bg-card rounded-[2rem] border border-border p-6 text-left card-hover ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-5 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                </div>
                <div className="mt-6 md:mt-2">
                  <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
