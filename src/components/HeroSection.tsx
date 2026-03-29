import { Link } from "react-router-dom";
import { CheckCircle, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-classroom.jpg";

export default function HeroSection() {
  return (
    <section className="bg-surface-elevated overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ⭐ Trusted by 5000+ Students Across India
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-tight text-foreground mb-6">
              Join the Most Trusted Coaching Institute for{" "}
              <span className="text-primary">JEE</span> &{" "}
              <span className="text-accent">NEET</span> Preparation
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-xl">
              At Elite Academy, we follow a structured and result-oriented teaching methodology designed by IITians and 
              top medical professionals. Our comprehensive test system evaluates students weekly, ensuring continuous improvement. 
              With personal mentorship from day one, daily doubt-clearing sessions, and India's best curated study material, 
              we have consistently produced top rankers in JEE and NEET over the past 15 years.
            </p>
            <ul className="space-y-2.5 mb-8">
              {[
                "Weekly Tests & Performance Tracking",
                "Personal Mentorship by IITians & Doctors",
                "Structured Study Material (15,000+ Questions)",
                "Proven Selection Results Every Year",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-foreground font-medium">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/admission">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-hover text-base px-8 py-6 font-bold shadow-lg">
                  Book Free Demo Class <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="btn-hover text-base px-8 py-6 font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="mr-2 w-5 h-5" /> Download Brochure
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="relative animate-slide-left">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImg} alt="Elite Academy classroom with teacher teaching" width={800} height={640} className="w-full h-auto object-cover" />
            </div>
            {/* Badges */}
            <div className="absolute -top-3 -right-3 md:top-4 md:right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-lg font-heading font-bold text-sm animate-float">
              🏆 AIR 15
            </div>
            <div className="absolute bottom-8 -left-3 md:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg font-heading font-bold text-sm animate-float" style={{ animationDelay: "1s" }}>
              🎯 Topper 97.8%
            </div>
            <div className="absolute top-1/2 -right-3 md:right-4 bg-highlight text-highlight-foreground px-4 py-2 rounded-xl shadow-lg font-heading font-bold text-sm animate-float" style={{ animationDelay: "0.5s" }}>
              ⚡ JEE Ranker
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
