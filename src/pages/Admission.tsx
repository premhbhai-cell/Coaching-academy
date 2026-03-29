import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, CheckCircle, ArrowRight, FileText, ClipboardList, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const admissionSteps = [
  { step: "01", title: "Fill Application Form", desc: "Complete the online application form with your personal, academic, and course preference details." },
  { step: "02", title: "Entrance Test", desc: "Take our scholarship-cum-admission test (online or offline). The test evaluates your current level and determines scholarship eligibility." },
  { step: "03", title: "Counseling Session", desc: "Attend a free counseling session with our academic advisor. They'll help you choose the right course and batch based on your goals." },
  { step: "04", title: "Fee Payment & Enrollment", desc: "Pay the course fee (EMI options available) and get enrolled. Receive your study material, batch details, and mentor assignment." },
];

const requiredDocs = [
  "Recent passport-size photographs (2 copies)",
  "Aadhar card or any government ID (photocopy)",
  "Previous year's mark sheet / report card",
  "School leaving certificate or bonafide certificate",
  "Transfer certificate (if applicable)",
  "Caste certificate (for scholarship applicants)",
];

const admissionFaqs = [
  { q: "What is the last date for admission?", a: "Admissions are open throughout the year, but we recommend applying early as seats are limited. The main batch for 2025-26 starts in April. Late admissions are accepted subject to availability." },
  { q: "Is there an entrance test?", a: "Yes, all students take a scholarship-cum-admission test. It's a 1-hour objective test covering Science and Math at your current class level. The test also determines scholarship eligibility (up to 50% fee waiver)." },
  { q: "What are the payment options?", a: "We accept one-time payment, semester-wise payment, and monthly EMI (0% interest for 6 months). Payment can be made via bank transfer, UPI, credit card, or demand draft." },
  { q: "Can I get a refund if I withdraw?", a: "Yes, 100% refund within 7 days of enrollment. After 7 days, a pro-rata refund is provided based on the number of classes attended. Processing takes 15 working days." },
  { q: "Is hostel available for outstation students?", a: "Yes, we have separate boys and girls hostels with AC/non-AC rooms. Hostel fee includes meals (breakfast, lunch, dinner), Wi-Fi, laundry, and supervised study hours." },
  { q: "Can I switch courses after enrollment?", a: "Yes, course switching is allowed within the first 30 days of enrollment. Talk to your batch coordinator or visit the admin office to initiate the switch." },
];

export default function Admission() {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({
    studentName: "", fatherName: "", motherName: "", dob: "", gender: "",
    phone: "", altPhone: "", email: "", address: "", city: "", state: "", pincode: "",
    currentClass: "", school: "", board: "", percentage: "",
    course: "", batch: "",
    howDidYouHear: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted Successfully! 🎉",
      description: "Our admissions team will contact you within 24 hours. Check your email for confirmation.",
    });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="trust-bar-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">Admission 2025–26</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Limited seats available. Fill the form below to start your journey with Elite Academy. Early applicants get up to 20% discount.
          </p>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="section-padding bg-surface" ref={ref}>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title">Admission Process</h2>
          <p className="section-subtitle">Simple 4-step process to join Elite Academy. Start your journey today.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {admissionSteps.map((s, i) => (
              <div key={s.step} className={`bg-card rounded-xl border border-border p-5 text-left card-hover ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
                <span className="text-primary font-heading font-extrabold text-3xl">{s.step}</span>
                <h4 className="font-heading font-bold text-foreground mt-2 mb-1">{s.title}</h4>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">Why Apply Now?</h3>
                <ul className="space-y-3">
                  {[
                    "Early bird discount up to 20%",
                    "Scholarship based on entrance test",
                    "Free demo class before joining",
                    "Flexible payment options (EMI)",
                    "100% refund within 7 days",
                    "Personal counseling session",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-highlight/10 rounded-lg">
                  <p className="text-sm font-bold text-foreground flex items-center gap-1"><Phone className="w-4 h-4" /> Admission Helpline</p>
                  <p className="text-primary font-bold">+91 98765 43210</p>
                  <p className="text-xs text-muted-foreground mt-1">Mon–Sat, 9 AM – 7 PM</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-card rounded-xl border border-border p-6 md:p-8 shadow-lg">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Admission Application Form</h2>

              <h3 className="font-heading font-semibold text-foreground mb-3 pb-2 border-b border-border">Student Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Input placeholder="Student Full Name *" required value={form.studentName} onChange={update("studentName")} />
                <Input placeholder="Date of Birth *" type="date" required value={form.dob} onChange={update("dob")} />
                <Input placeholder="Father's Name *" required value={form.fatherName} onChange={update("fatherName")} />
                <Input placeholder="Mother's Name" value={form.motherName} onChange={update("motherName")} />
                <select className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground" value={form.gender} onChange={update("gender")}>
                  <option value="">Gender *</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <h3 className="font-heading font-semibold text-foreground mb-3 pb-2 border-b border-border">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Input placeholder="Phone Number *" required value={form.phone} onChange={update("phone")} />
                <Input placeholder="Alternate Phone" value={form.altPhone} onChange={update("altPhone")} />
                <Input placeholder="Email Address *" type="email" required value={form.email} onChange={update("email")} className="sm:col-span-2" />
                <Textarea placeholder="Full Address *" required value={form.address} onChange={update("address")} className="sm:col-span-2" />
                <Input placeholder="City *" required value={form.city} onChange={update("city")} />
                <Input placeholder="State *" required value={form.state} onChange={update("state")} />
                <Input placeholder="Pin Code *" required value={form.pincode} onChange={update("pincode")} />
              </div>

              <h3 className="font-heading font-semibold text-foreground mb-3 pb-2 border-b border-border">Academic Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <select className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground" value={form.currentClass} onChange={update("currentClass")} required>
                  <option value="">Current Class *</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11</option>
                  <option>Class 12</option>
                  <option>Dropper</option>
                </select>
                <Input placeholder="School Name *" required value={form.school} onChange={update("school")} />
                <select className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground" value={form.board} onChange={update("board")}>
                  <option value="">Board *</option>
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                  <option>Other</option>
                </select>
                <Input placeholder="Last Exam Percentage" value={form.percentage} onChange={update("percentage")} />
              </div>

              <h3 className="font-heading font-semibold text-foreground mb-3 pb-2 border-b border-border">Course Selection</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <select className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground" value={form.course} onChange={update("course")} required>
                  <option value="">Select Course *</option>
                  <option>JEE Main + Advanced (2 Year)</option>
                  <option>JEE Crash Course</option>
                  <option>NEET UG Complete (2 Year)</option>
                  <option>NEET Crash Course</option>
                  <option>Foundation (Class 9)</option>
                  <option>Foundation (Class 10)</option>
                  <option>Board Excellence (Class 11)</option>
                  <option>Board Excellence (Class 12)</option>
                </select>
                <select className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground" value={form.batch} onChange={update("batch")}>
                  <option value="">Preferred Batch</option>
                  <option>Morning (7 AM – 11 AM)</option>
                  <option>Evening (4 PM – 8 PM)</option>
                  <option>Weekend (Sat–Sun)</option>
                </select>
              </div>

              <select className="w-full mb-4 rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground" value={form.howDidYouHear} onChange={update("howDidYouHear")}>
                <option value="">How did you hear about us?</option>
                <option>Google Search</option>
                <option>Social Media</option>
                <option>Friend/Family</option>
                <option>Newspaper</option>
                <option>Other</option>
              </select>
              <Textarea placeholder="Any additional message or query..." className="mb-6" value={form.message} onChange={update("message")} />

              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 btn-hover font-bold py-6 text-base shadow-lg">
                Submit Application <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                By submitting, you agree to be contacted by Elite Academy regarding admissions.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center"><FileText className="inline w-7 h-7 text-primary mr-2" />Required Documents</h2>
          <p className="section-subtitle text-center">Please keep the following documents ready for the admission process.</p>
          <div className="bg-card rounded-xl border border-border p-6">
            <ul className="space-y-3">
              {requiredDocs.map((doc) => (
                <li key={doc} className="flex items-start gap-3">
                  <ClipboardList className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Admission FAQs */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center">Admission FAQs</h2>
          <p className="section-subtitle text-center">Common questions about our admission process and policies.</p>
          <Accordion type="single" collapsible className="space-y-3">
            {admissionFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`afaq-${i}`} className="bg-card rounded-xl border border-border px-5">
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
