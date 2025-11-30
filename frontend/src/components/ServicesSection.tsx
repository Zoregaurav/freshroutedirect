import { useState, useRef, useEffect } from "react";
import { Warehouse, Refrigerator, Zap, Leaf, Truck, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    icon: Warehouse,
    title: "Micro Hub Network",
    description: "Strategic 500-800 sq ft hubs positioned within 3-5km of dark store cluster for maximum efficiency and minimal delivery time.",
    details: "Strategic placement for optimal distribution",
  },
  {
    icon: Refrigerator,
    title: "Cold Chain & Smart Logistics",
    description: "Cold-chain handling from farm-side to last mile. Traceable, predictable, freshness-driven supply chain.",
    details: "Temperature-controlled excellence",
  },
  {
    icon: Zap,
    title: "Just-in-Time Delivery",
    description: "Revolutionary 2-3 hour restocking window replacing the industry standard 12-24 hour cycle for maximum freshness.",
    details: "Lightning-fast delivery guarantee",
  },
  {
    icon: Leaf,
    title: "Near-Zero Wastage",
    description: "Minimize losses on high-value perishables through precision timing and optimized supply chains, saving costs and environment.",
    details: "Sustainable & cost-effective",
  },
  {
    icon: Truck,
    title: "Direct-to-Dark-Store",
    description: "Bypass centralized logistic bottlenecks with our D2DS model, ensuring products reach your stores in optimal condition.",
    details: "Efficient delivery guarantee",
  },
  {
    icon: CheckCircle,
    title: "Compliance & Quality",
    description: "Rigorous food safety standards, certification, and quality control measures ensuring the highest supply standards.",
    details: "Highest standards maintained",
  },
];

const ServiceCard = ({ service, isActive, onClick }) => {
  const Icon = service.icon;

  return (
    <div
      onClick={onClick}
      className={`relative flex-shrink-0 w-80 p-7 cursor-pointer bg-white border-2 rounded-2xl transition-all duration-500 flex flex-col h-[360px] ${
        isActive ? "border-primary shadow-2xl scale-105" : "border-primary/10"
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-0"
      }`} />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-center mb-5">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
            isActive ? "bg-gradient-to-br from-primary to-primary/80" : "bg-gradient-to-br from-primary/15 to-primary/5"
          }`}>
            <Icon className={`w-10 h-10 transition-all duration-500 ${isActive ? "text-white" : "text-primary"}`} />
          </div>
        </div>

        <div className="flex flex-col text-center flex-grow">
          <h3 className={`text-lg font-bold mb-3 transition-colors duration-500 ${
            isActive ? "text-primary" : "text-foreground"
          }`}>
            {service.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
            {service.description}
          </p>

          <div className={`overflow-hidden transition-all duration-500 ${
            isActive ? "max-h-12 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}>
            <div className="pt-2 border-t border-primary/20 flex items-center justify-center gap-2 text-primary font-semibold text-sm">
              <span>{service.details}</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-0"
      }`} />
    </div>
  );
};

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24; // card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      const newIndex = direction === 'left' 
        ? Math.max(0, activeIndex - 1)
        : Math.min(SERVICES.length - 1, activeIndex + 1);
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24;
      scrollRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted to-background overflow-hidden relative">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .float { animation: float 3s ease-in-out infinite; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 hover:bg-primary/15 transition-colors cursor-pointer">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Why FreshRoute?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Designed for quick commerce: fast, traceable and ready-to-sell fresh produce solutions
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              canScrollLeft ? 'opacity-100 hover:scale-110' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              canScrollRight ? 'opacity-100 hover:scale-110' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 py-4"
          >
            {SERVICES.map((service, index) => (
              <div key={index} className="snap-center">
                <ServiceCard
                  service={service}
                  isActive={activeIndex === index}
                  onClick={() => scrollToIndex(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                activeIndex === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}