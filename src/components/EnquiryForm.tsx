import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function EnquiryForm() {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Enquiry Submitted!", description: "Our counselor will contact you within 24 hours." });
    setForm({ name: "", phone: "", email: "", course: "", message: "" });
  };

  return (
    <section className="section-padding bg-surface-elevated" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
            <h2 className="section-title">Quick Enquiry</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Fill in the form and our academic counselor will get in touch with you within 24 hours to discuss 
              the best course for your child.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>📞 <strong className="text-foreground">Phone:</strong> +91 98765 43210</p>
              <p>📧 <strong className="text-foreground">Email:</strong> info@eliteacademy.in</p>
              <p>📍 <strong className="text-foreground">Address:</strong> 123, Knowledge Park, Kota, Rajasthan</p>
              <p>⏰ <strong className="text-foreground">Office Hours:</strong> Mon–Sat, 9 AM – 7 PM</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`bg-card rounded-xl border border-border p-6 shadow-lg ${isVisible ? "animate-slide-left" : "opacity-0"}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <Input placeholder="Student Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <Input placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            </div>
            <Input placeholder="Email Address" className="mb-4" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <select
              className="w-full mb-4 rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground"
              value={form.course}
              onChange={(e) => setForm({ ...form, course: e.target.value })}
            >
              <option value="">Select Course *</option>
              <option>JEE Main + Advanced</option>
              <option>NEET UG</option>
              <option>Foundation (Class 9–10)</option>
              <option>Board Exam Prep</option>
              <option>Crash Course</option>
            </select>
            <Textarea placeholder="Your Message (optional)" className="mb-4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 btn-hover font-bold py-5">
              <Send className="mr-2 w-4 h-4" /> Submit Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
