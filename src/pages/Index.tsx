import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ResultsSection from "@/components/ResultsSection";
import FacultySection from "@/components/FacultySection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StudyProcess from "@/components/StudyProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import EnquiryForm from "@/components/EnquiryForm";
import CTABanner from "@/components/CTABanner";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ResultsSection />
      <CoursesSection />
      <WhyChooseUs />
      <StudyProcess />
      <FacultySection />
      <TestimonialsSection />
      <EnquiryForm />
      <FAQSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
