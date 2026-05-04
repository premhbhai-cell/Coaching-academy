import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import FacultySection from "@/components/FacultySection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StudyProcess from "@/components/StudyProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnquiryForm from "@/components/EnquiryForm";
import CTABanner from "@/components/CTABanner";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <CoursesSection />
      <WhyChooseUs />
      <StudyProcess />
      <FacultySection />
      <TestimonialsSection />
      <EnquiryForm />
      <CTABanner />
      <Footer />
    </div>
  );
}
