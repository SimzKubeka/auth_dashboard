/**
 * Landing Page
 * 
 * This page serves as the main entry point for the application. It includes:
 * - Hero section: Welcomes users and provides a prominent call-to-action.
 * - About Us section: Describes the purpose of the application.
 * - Services section: Highlights key services or features offered.
 * - Partners section: Showcases notable partners or collaborators.
 * 
 * Features:
 * - Fully responsive layout.
 * - Clear separation of sections for easy readability and future enhancements.
 */

import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection";
import ServicesSection from "../components/ServicesSection";
import PartnersSection from "../components/PartnersSection";
import { ABOUT_US_TEXT } from "@/lib/common";


export default function LandingPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutUsSection
        text={ABOUT_US_TEXT}
      />
      <ServicesSection />
      <PartnersSection />
    </div>
  );
}

