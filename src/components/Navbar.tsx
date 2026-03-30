import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoss from "@/assets/logoss.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/courses", label: "Courses" },
  { path: "/results", label: "Results & Material" },
  { path: "/faculty", label: "Faculty" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-surface-elevated shadow-sm border-b border-border">
      {/* Top bar */}
      <div className="trust-bar-gradient text-primary-foreground py-1.5 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span>📞 Helpline: 9650254876 | 📧 info@adhyayanacademy.in</span>
          <span>🏆 The Only Mantra of Success — Quality Education for Classes 6–12!</span>
        </div>
      </div>
      {/* Main navbar */}
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoss} alt="Adhyayan Academy Logo" className="w-10 h-10 object-contain" />
          <div>
            <span className="font-heading font-bold text-xl text-foreground leading-tight block">Adhyayan Academy</span>
            <span className="text-xs text-muted-foreground leading-none">Classes 6–12</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919650254876" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <Link to="/admission">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 btn-hover font-semibold">
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-elevated border-t border-border px-4 pb-4 animate-fade-up">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 text-sm font-medium border-b border-border/50 ${
                location.pathname === link.path ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/admission" onClick={() => setMobileOpen(false)}>
            <Button className="w-full mt-3 bg-accent text-accent-foreground">Apply Now</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
