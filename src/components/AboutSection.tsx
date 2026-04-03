import { useEffect, useRef, useState } from "react";
import { Award, Clock, Users, Star } from "lucide-react";

const stats = [
  { icon: Car, value: "2,500+", label: "Vehicles Detailed" },
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Google Rating" },
  { icon: Users, value: "100%", label: "Satisfaction" },
];

import { Car } from "lucide-react";

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div
        ref={ref}
        className={`container mx-auto px-6 relative transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crafted With <span className="text-gradient-copper">Passion</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Doozy Detailing, we don't just clean cars — we transform them. Founded by automotive
              enthusiasts with an obsession for perfection, our studio combines cutting-edge technology
              with meticulous hand craftsmanship.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every vehicle that enters our studio receives the same level of care and attention,
              whether it's a daily driver or a million-dollar supercar. We use only the finest
              products from brands like Gtechniq, Rupes, and Gyeon.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-copper text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity copper-glow"
            >
              Get In Touch
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <Icon size={24} className="text-primary mx-auto mb-3" />
                  <p className="font-heading text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
