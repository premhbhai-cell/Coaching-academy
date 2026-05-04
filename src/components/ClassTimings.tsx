import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock } from "lucide-react";

export default function ClassTimings() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface-elevated" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-highlight/20 text-highlight-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Clock className="w-4 h-4" /> Class Timings
        </div>
        <h2 className="section-title">Class Timings</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Flexible scheduling to fit your routine.
        </p>

        <div className="max-w-md mx-auto mt-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 text-center shadow-2xl card-hover">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-accent text-white shadow-lg flex items-center justify-center text-3xl mb-5">
              🕒
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Monday – Friday</h3>
            <p className="text-muted-foreground text-lg font-semibold">02:00 PM – 08:30 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}