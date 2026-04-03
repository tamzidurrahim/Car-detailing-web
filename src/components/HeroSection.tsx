import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-detailing.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const overlay = heroRef.current.querySelector(".hero-overlay") as HTMLElement;
      if (overlay) {
        overlay.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium automotive detailing studio with luxury sports car under dramatic lighting"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
            Premium Automotive Detailing
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            <span className="text-foreground">Obsessive</span>
            <br />
            <span className="text-gradient-copper">Perfection</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Where artistry meets automotive excellence. Every detail matters. Every surface perfected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-gradient-copper text-primary-foreground px-8 py-4 rounded-lg text-sm font-semibold tracking-wide hover:opacity-90 transition-all duration-300 copper-glow"
            >
              Explore Services
            </a>
            <a
              href="#gallery"
              className="glass-card text-foreground px-8 py-4 rounded-lg text-sm font-semibold tracking-wide hover:border-primary/50 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-shimmer" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
