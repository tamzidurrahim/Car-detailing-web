import { useEffect, useRef, useState } from "react";
import { Shield, Droplets, Car, Sparkles } from "lucide-react";
import ceramicImg from "@/assets/ceramic-coating.jpg";
import interiorImg from "@/assets/interior-detail.jpg";
import detailingImg from "@/assets/detailing-closeup.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Exterior Detail",
    price: "From ৳2,499",
    description: "Multi-stage paint correction, clay bar treatment, and premium wax application for a showroom finish.",
    image: detailingImg,
    features: ["Paint Correction", "Clay Bar Treatment", "Hand Wax & Seal"],
  },
  {
    icon: Car,
    title: "Interior Restoration",
    price: "From ৳2,999",
    description: "Deep cleaning, leather conditioning, and odor elimination. Every surface restored to factory fresh.",
    image: interiorImg,
    features: ["Deep Vacuum & Steam", "Leather Conditioning", "Odor Elimination"],
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    price: "From ৳7,499",
    description: "Professional-grade 9H ceramic coating providing years of protection with hydrophobic properties.",
    image: ceramicImg,
    features: ["9H Hardness", "5-Year Protection", "Hydrophobic Finish"],
  },
  {
    icon: Droplets,
    title: "Full Detail Package",
    price: "From ৳9,999",
    description: "The ultimate treatment. Complete exterior and interior detail with ceramic coating protection.",
    image: detailingImg,
    features: ["Everything Included", "Paint Enhancement", "Ceramic Protection"],
  },
];

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setVisibleCards((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.2 }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-copper">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each service is performed by certified detailing professionals using premium products and equipment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                ref={(el) => { cardsRef.current[idx] = el; }}
                data-idx={idx}
                className={`glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500 ${
                  visibleCards.has(idx) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-copper flex items-center justify-center">
                      <Icon size={20} className="text-primary-foreground" />
                    </div>
                    <span className="text-primary font-semibold text-lg">{service.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
