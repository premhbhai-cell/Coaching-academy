import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">Vidyarthi Academy</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              Vidyarthi Academy is a trusted coaching institute providing premium subject coaching in Science and Commerce. With experienced faculty, concept-based learning, and regular assessments, we help students achieve academic excellence.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                { to: "/about", label: "About Us" },
                { to: "/courses", label: "Our Courses" },
                { to: "/results", label: "Results & Material" },
                { to: "/faculty", label: "Our Faculty" },
                { to: "/admission", label: "Admission" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-highlight transition-colors">
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Courses</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {["Physics Mastery", "Chemistry Excellence", "Mathematics Mastery", "Biology Insight", "Accountancy Foundation", "Economics Edge"].map((c) => (
                <li key={c}>→ {c}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm opacity-80">
            <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>DP Door Road, Near BS Memorial School, Adarsh Nagar, Ballabgarh, Haryana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 8076882138, +91 9953877650</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>vidyarthiacadmy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-sm opacity-60">
        © 2025 Vidyarthi Academy. All Rights Reserved. | The Only Mantra of Success
      </div>
    </footer>
  );
}
