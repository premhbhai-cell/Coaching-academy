import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { Target, Eye, Award, CheckCircle, Star } from "lucide-react";
import campusImg from "@/assets/campus.jpg";
import classroomImg from "@/assets/classroom.jpg";
import libraryImg from "@/assets/library.jpg";
import labImg from "@/assets/lab.jpg";
import hostelImg from "@/assets/hostel.jpg";

const milestones = [
  { year: "2015", title: "Founded", desc: "Started with a mission to deliver premium subject coaching for Science and Commerce." },
  { year: "2018", title: "Growth", desc: "Expanded offerings to include dedicated Physics, Chemistry, Mathematics, Biology, Accountancy, and Economics programs." },
  { year: "2020", title: "Online Expansion", desc: "Launched hybrid learning with live online classes and digital resources for every subject." },
  { year: "2022", title: "Dedicated Campus", desc: "Established modern classrooms, labs, and study centers focused on subject mastery." },
  { year: "2023", title: "Academic Excellence", desc: "Helped thousands of students strengthen fundamentals and improve performance across core subjects." },
  { year: "2024", title: "The Only Mantra of Success", desc: "Recognized for quality teaching, strong subject clarity, and consistent student progress." },
];

const infrastructure = [
  { img: campusImg, title: "20,000 sq ft Campus", desc: "State-of-the-art campus with AC classrooms, smart boards, and modern amenities designed for focused learning." },
  { img: classroomImg, title: "Smart Classrooms", desc: "40+ AC classrooms with digital whiteboards, projectors, and comfortable seating for up to 60 students each." },
  { img: libraryImg, title: "Well-Stocked Library", desc: "10,000+ books, journals, and digital resources available 12 hours a day with silent study zones." },
  { img: labImg, title: "Science Laboratories", desc: "Fully equipped Physics, Chemistry, and Biology labs for practical learning and experimentation." },
  { img: hostelImg, title: "Hostel Facility", desc: "Separate boys and girls hostels with nutritious meals, 24/7 security, Wi-Fi, and supervised study hours." },
];

const trustPoints = [
  "Expert faculty for Science and Commerce subjects",
  "Concept-first teaching that builds strong understanding",
  "Regular tests with performance analytics",
  "Personalized attention and mentor feedback",
  "Transparent progress tracking and review sessions",
  "Premium study material curated by subject experts",
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();
  const { count: studentsCount, ref: sRef } = useCountUp(2500);
  const { count: selectionsCount, ref: selRef } = useCountUp(1500);
  const { count: facultyCount, ref: fRef } = useCountUp(15);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="trust-bar-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">About Vidyarthi Academy</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Vidyarthi Academy is a professional coaching institute focused on providing quality education and concept-based learning for students. Our aim is to help students build strong academic foundations and achieve success in their studies.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="section-title">About Vidyarthi Academy</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
                <p>Vidyarthi Academy is a professional coaching institute focused on providing quality education and concept-based learning for students. Our aim is to help students build strong academic foundations and achieve success in their studies.</p>
                <p>We provide expert guidance in science and commerce subjects with experienced teachers and a supportive learning environment.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src={campusImg} alt="Elite Academy Campus" className="w-full h-auto object-cover" loading="lazy" width={800} height={512} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-card rounded-xl border border-border p-8 card-hover">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a trusted educational organization that transforms learners into confident, capable thinkers through premium subject coaching and concept-first learning.
            </p>
          </div>
          <div className="bg-card rounded-xl border border-border p-8 card-hover">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver high-impact coaching in Science and Commerce subjects with deep conceptual clarity, consistent testing, and personalized guidance for every student.
            </p>
          </div>
        </div>
      </section>

      {/* Why Students Trust Us */}
      <section className="section-padding bg-surface-elevated" ref={ref2}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src={classroomImg} alt="Students studying at Elite Academy" className="w-full h-auto object-cover" loading="lazy" width={800} height={512} />
            </div>
            <div>
              <h2 className="section-title">Why Students Trust Us</h2>
              <p className="text-muted-foreground mb-6">Over 5000+ students and their parents have chosen Elite Academy because of our transparent approach, proven results, and genuine care for every student's success.</p>
              <ul className="space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className={`flex items-start gap-3 ${isVisible2 ? "animate-fade-up" : "opacity-0"}`}>
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-surface" ref={ref}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">Key milestones that shaped Elite Academy into what it is today.</p>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative pl-12 md:pl-0 md:flex items-center gap-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"} ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
                  {/* Mobile dot */}
                  <div className="absolute left-2.5 top-5 w-3 h-3 rounded-full bg-primary md:hidden" />
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card rounded-xl border border-border p-5 card-hover text-left">
                      <span className="text-primary font-heading font-bold text-lg">{m.year}</span>
                      <h4 className="font-heading font-bold text-foreground">{m.title}</h4>
                      <p className="text-muted-foreground text-sm">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary shrink-0 z-10" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="trust-bar-gradient py-12">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div ref={sRef}>
            <div className="font-heading font-extrabold text-4xl text-primary-foreground">{studentsCount}+</div>
            <div className="text-primary-foreground/80 text-sm">Students Taught</div>
          </div>
          <div ref={selRef}>
            <div className="font-heading font-extrabold text-4xl text-primary-foreground">{selectionsCount}+</div>
            <div className="text-primary-foreground/80 text-sm">Top Selections</div>
          </div>
          <div ref={fRef}>
            <div className="font-heading font-extrabold text-4xl text-primary-foreground">{facultyCount}+</div>
            <div className="text-primary-foreground/80 text-sm">Expert Faculty</div>
          </div>
          <div>
            <div className="font-heading font-extrabold text-4xl text-primary-foreground">85%</div>
            <div className="text-primary-foreground/80 text-sm">Selection Rate</div>
          </div>
        </div>
      </section>

      {/* Infrastructure with Images */}
      <section className="section-padding bg-surface-elevated">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Our Infrastructure & Facilities</h2>
          <p className="section-subtitle max-w-2xl mx-auto">World-class facilities designed to provide the best learning environment for serious aspirants.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item) => (
              <div key={item.title} className="bg-card rounded-xl border border-border overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover img-hover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title">Achievements & Milestones</h2>
          <p className="section-subtitle">Recognition that reflects our commitment to excellence.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🏆", title: "Best Coaching Institute", desc: "Awarded Best Coaching Institute in Rajasthan — 2022, 2023" },
              { icon: "🎖️", title: "Top Performers", desc: "45+ students ranked in the top 100 across science and commerce subjects" },
              { icon: "📊", title: "85% Success Rate", desc: "Highest subject excellence rate among coaching institutes in the region" },
              { icon: "👨‍🏫", title: "50+ Expert Faculty", desc: "All faculty from IITs, AIIMS, and top universities" },
              { icon: "📚", title: "Own Study Material", desc: "Proprietary study material used by 10,000+ students" },
              { icon: "🌐", title: "Pan-India Reach", desc: "Students from 15+ states trust Elite Academy" },
            ].map((a) => (
              <div key={a.title} className="bg-card rounded-xl border border-border p-6 card-hover text-left">
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="font-heading font-bold text-foreground mb-1">{a.title}</h3>
                <p className="text-muted-foreground text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
