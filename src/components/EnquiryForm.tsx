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
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
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
              <p>📞 <strong className="text-foreground">Phone:</strong> +91 8076882138, +91 9953877650</p>
              <p>📧 <strong className="text-foreground">Email:</strong> info@adhyayanacademy.in</p>
              <p>📍 <strong className="text-foreground">Address:</strong> DP Door Road, Near BS Memorial School, Adarsh Nagar, Ballabgarh, Haryana</p>
              <p>⏰ <strong className="text-foreground">Office Hours:</strong> Mon–Sat, 9 AM – 7 PM</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`bg-card rounded-xl border border-border p-8 shadow-lg h-fit ${isVisible ? "animate-slide-left" : "opacity-0"}`}
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">Send Us a Message</h3>
            <p className="text-muted-foreground text-sm mb-6">Fill the form below and our team will get back to you within 24 hours.</p>
            <div className="space-y-4">
              <Input placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Email *" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <Input placeholder="Phone *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              <Textarea placeholder="Your Message *" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 btn-hover font-bold py-5">
                <Send className="mr-2 w-4 h-4" /> Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
