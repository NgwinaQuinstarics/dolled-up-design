import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Booking } from "@/components/Booking";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LoadingScreen } from "@/components/LoadingScreen";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "dolledbyVishi · Luxury Beauty Studio in Bamenda" },
      {
        name: "description",
        content:
          "dolledbyVishi — luxury hair, nails, makeup and lash extensions in Bamenda. Book your glow with Vishi.",
      },
      { property: "og:title", content: "dolledbyVishi · Luxury Beauty Studio" },
      {
        property: "og:description",
        content: "Hair, nails, makeup & lash extensions crafted with elegance.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="dark min-h-screen scroll-smooth">
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
      <Toaster richColors position="top-center" theme="dark" />
    </div>
  );
}
