import { Link } from "react-router-dom";
import { CheckCircle, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-classroom.jpg";

export default function HeroSection() {
  return (
    <section className="bg-surface-elevated overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ⭐ Premium Subject Coaching
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-tight text-foreground mb-6">
              A Complete Educational Solution
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              We provide expert coaching in core Science and Commerce subjects with a strong focus on conceptual clarity and academic excellence. Our goal is to build a solid foundation for every student through structured learning and expert guidance.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Expert Faculty",
                "Concept-Based Learning",
                "Regular Tests & Performance Tracking",
                "Personalized Attention",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/admission">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-hover text-base px-8 py-6 font-bold shadow-xl">
                  Book Free Demo Class <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="btn-hover text-base px-8 py-6 font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="mr-2 w-5 h-5" /> Download Brochure
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-left">
            <div className="rounded-[2rem] overflow-hidden shadow-[0_40px_120px_rgba(15,23,42,0.18)]">
              <img src={heroImg} alt="Elite Academy classroom with teacher teaching" width={800} height={640} className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -top-3 -right-3 md:top-4 md:right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-xl font-heading font-bold text-sm animate-float">
              🏆 Premium Coaching
            </div>
            <div className="absolute bottom-8 -left-3 md:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-xl font-heading font-bold text-sm animate-float" style={{ animationDelay: "1s" }}>
              🎯 Subject Mastery
            </div>
            <div className="absolute top-1/2 -right-3 md:right-4 bg-highlight text-highlight-foreground px-4 py-2 rounded-xl shadow-xl font-heading font-bold text-sm animate-float" style={{ animationDelay: "0.5s" }}>
              ⚡ Exam Focused
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
