import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactFaqs = [
  { q: "What are the office hours for visiting?", a: "Our office is open Monday to Saturday, 9:00 AM to 7:00 PM. Sunday visits are by appointment only. We recommend calling ahead to schedule a campus tour." },
  { q: "How can I schedule a free counseling session?", a: "You can call our admission helpline at +91 98765 43210, fill the contact form on this page, or WhatsApp us. We'll schedule a 30-minute counseling session at your convenience." },
  { q: "Do you have branches in other cities?", a: "Currently, our main campus is in Kota, Rajasthan. We also offer online classes for students across India. We're planning to open centers in Delhi and Jaipur by 2026." },
  { q: "Can parents visit the campus?", a: "Absolutely! We encourage parents to visit our campus, meet the faculty, and see our infrastructure. Campus tours are available during office hours." },
  { q: "How do I report an issue or give feedback?", a: "You can email us at feedback@eliteacademy.in or call our helpline. We take every feedback seriously and respond within 24 hours." },
];

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="trust-bar-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">We're here to help. Reach out to us anytime for admissions, queries, or campus visits.</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info */}
            <div>
              <h2 className="section-title mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">Have a question about our courses, admission process, or want to schedule a campus visit? We'd love to hear from you. Our team responds within 24 hours.</p>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "+91 98765 43210", sub: "+91 98765 43211 (Admissions)" },
                  { icon: Mail, label: "Email", value: "info@eliteacademy.in", sub: "admissions@eliteacademy.in" },
                  { icon: MapPin, label: "Address", value: "123, Knowledge Park", sub: "Kota, Rajasthan - 324005" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-card rounded-xl border border-border p-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground">{item.label}</h3>
                      <p className="text-foreground text-sm">{item.value}</p>
                      <p className="text-muted-foreground text-sm">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Working Hours */}
              <div className="mt-5 bg-card rounded-xl border border-border p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground">Working Hours</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-foreground font-medium">Monday – Friday</span>
                  <span className="text-muted-foreground">9:00 AM – 7:00 PM</span>
                  <span className="text-foreground font-medium">Saturday</span>
                  <span className="text-muted-foreground">9:00 AM – 5:00 PM</span>
                  <span className="text-foreground font-medium">Sunday</span>
                  <span className="text-muted-foreground">By Appointment Only</span>
                </div>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-green-600 text-primary-foreground px-6 py-3 rounded-xl font-bold btn-hover shadow-lg">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-8 shadow-lg h-fit">
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

      {/* Map */}
      <section className="bg-surface">
        <div className="container mx-auto px-4 py-10">
          <h2 className="section-title text-center mb-6">Find Us on Map</h2>
          <div className="rounded-xl overflow-hidden border border-border h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.123456!2d75.857727!3d25.180126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEwJzQ4LjUiTiA3NcKwNTEnMjcuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Elite Academy Location"
            />
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <p className="section-subtitle text-center">Common questions about reaching us and visiting our campus.</p>
          <Accordion type="single" collapsible className="space-y-3">
            {contactFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5">
                <AccordionTrigger className="font-heading font-semibold text-left text-foreground hover:text-primary py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
