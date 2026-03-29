import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="trust-bar-gradient py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
          Ready to Start Your Journey to IIT / AIIMS?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Join the 5000+ students who chose Elite Academy and achieved their dreams. 
          Limited seats available for the 2025–26 batch. Don't miss out!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/admission">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-hover font-bold px-8 py-6 text-base shadow-lg">
              Apply Now — Free Counseling <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <a href="tel:+919876543210">
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-hover font-bold px-8 py-6 text-base">
              <Phone className="mr-2 w-5 h-5" /> Call: +91 98765 43210
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
