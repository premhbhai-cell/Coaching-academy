import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What courses does Elite Academy offer?", a: "We offer comprehensive courses for JEE Main, JEE Advanced, NEET UG, Foundation (Class 9–10), Board exam preparation, and short-term Crash Courses. Each course is designed with a structured curriculum, daily practice, and regular testing." },
  { q: "What is the batch size at Elite Academy?", a: "We maintain a maximum of 40 students per batch to ensure personalized attention. Each student gets a dedicated mentor who tracks their progress throughout the course duration." },
  { q: "Do you provide study material?", a: "Yes! Our study material is prepared by our expert faculty and includes comprehensive notes, 15,000+ practice questions, formula sheets, previous year papers, and chapter-wise test papers. It's included in the course fee." },
  { q: "How are the test series structured?", a: "We conduct Daily Practice Problems (DPP), weekly chapter tests, bi-weekly revision tests, and monthly full-syllabus mock exams. Detailed performance analytics help students identify and improve their weak areas." },
  { q: "Is hostel facility available?", a: "Yes, we provide separate hostel facilities for boys and girls with meals, security, and a supervised study environment. The hostel is located within 500 meters of our coaching center." },
  { q: "What are the fee payment options?", a: "We offer flexible payment options including one-time payment (with discount), semester-wise, and monthly EMI options. Scholarships are available for meritorious students based on entrance test performance." },
  { q: "Can I attend a demo class before joining?", a: "Absolutely! We offer free demo classes every week. You can book a demo class through our website or by calling our helpline. Come experience our teaching methodology firsthand." },
  { q: "What is the selection rate of Elite Academy?", a: "In the last 5 years, we have produced 300+ selections in IIT/NIT and 500+ in NEET. Our success rate for JEE Main qualification is above 85%, which is among the highest in the coaching industry." },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Got questions? We have answers. Here are the most commonly asked questions about Elite Academy.</p>
        </div>

        <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5">
                <AccordionTrigger className="font-heading font-semibold text-left text-foreground hover:text-primary py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
