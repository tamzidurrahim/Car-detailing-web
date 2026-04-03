import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-detailing.jpg";
import ceramicImg from "@/assets/ceramic-coating.jpg";
import interiorImg from "@/assets/interior-detail.jpg";
import detailingImg from "@/assets/detailing-closeup.jpg";

const images = [
  { src: heroImg, alt: "Luxury sports car in detailing studio", label: "Studio Environment" },
  { src: detailingImg, alt: "Hand polishing luxury car hood", label: "Paint Correction" },
  { src: ceramicImg, alt: "Ceramic coating application", label: "Ceramic Coating" },
  { src: interiorImg, alt: "Interior leather conditioning", label: "Interior Detail" },
];

const GallerySection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gradient-copper">Work</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative group rounded-xl overflow-hidden aspect-square transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-foreground font-heading font-semibold text-lg">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
