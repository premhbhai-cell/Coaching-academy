import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="trust-bar-gradient py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
          Ready to Excel in Your Studies?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Join Adhyayan Academy for Classes 6–12 and experience quality education with experienced faculty. 
          Limited seats available. Enroll now and start your journey to success!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/admission">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground btn-hover font-bold px-8 py-6 text-base shadow-lg">
              Apply Now — Free Counseling <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <a href="tel:+919650254876">
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold px-8 py-6 text-base">
              <Phone className="mr-2 w-5 h-5" /> Call: 9650254876
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
