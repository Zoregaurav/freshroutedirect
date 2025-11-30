import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Leaf, Play, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpeg";
import hero2 from "@/assets/hero-2.jpg";

const slides = [
  {
    image: hero1,
    badge: "The Fast Lane For Freshness",
    title: "B2B.Hyperlocal.Fresh",
    description: "Delivering Farm Freshness to Quick Commerce-in Just Hours",
    color: "from-primary/20 to-accent/10",
  },
  {
    image: hero2,
    badge: "The Fast Lane For Freshness",
    title: "Ultra-Fast Fresh Supply For Quick Commerce",
    description:
      "Direct-to-Dark-Store delivery in 2-3 hours.Serving Zepto,Blinkit & Swiggy Instamart with near-zero wastage and maximum freshness.",
    color: "from-accent/20 to-primary/10",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth) * 20 - 10,
      y: (clientY / innerHeight) * 20 - 10,
    });
  };

  return (
    <section
      className="relative h-screen overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      <style>{`
        @keyframes word-slide {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes number-counter {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-shine {
          0%, 100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.3); }
          50% { text-shadow: 0 0 30px rgba(var(--secondary), 0.6); }
        }
        .word-slide { animation: word-slide 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .number-counter { animation: number-counter 0.6s ease-out; }
        .glow-shine { animation: glow-shine 3s ease-in-out infinite; }
      `}</style>

      {/* Animated slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background image with parallax */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          />

          {/* Enhanced gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.color}`}
          />

          {/* Dark overlay with color shift */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl">
                <div
                  className={`space-y-6 md:space-y-8 ${
                    index === currentSlide ? "" : "opacity-0"
                  }`}
                >
                  {/* Badge with animation */}
                  <div
                    className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-xl rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 ${
                      index === currentSlide ? "animate-bounce-in" : ""
                    }`}
                  >
                    <div className="relative flex items-center gap-2">
                      <Zap className="h-5 w-5 text-secondary animate-pulse" />
                      <span className="text-sm font-bold uppercase tracking-widest text-white">
                        {slide.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title with word animations */}
                  <h1
                    className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight ${
                      index === currentSlide ? "animate-fade-in-up" : ""
                    }`}
                    style={{ animationDelay: "0.1s" }}
                  >
                    {slide.title.split(" ").map((word, i) => (
                      <span
                        key={i}
                        className="word-slide inline-block mr-3"
                        style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                      >
                        {word}
                      </span>
                    ))}
                  </h1>

                  {/* Description with glow */}
                  <p
                    className={`text-xl md:text-2xl text-white/90 max-w-3xl font-light leading-relaxed glow-shine ${
                      index === currentSlide ? "animate-fade-in-up" : ""
                    }`}
                    style={{ animationDelay: "0.5s" }}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Buttons with enhanced styling */}
                  <div
                    className={`flex flex-wrap gap-4 pt-8 ${
                      index === currentSlide ? "animate-scale-in" : ""
                    }`}
                    style={{ animationDelay: "0.7s" }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary text-secondary-foreground text-lg px-8 md:px-10 py-6 md:py-7 font-bold rounded-xl hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 active:scale-95 group"
                    >
                      <Link to="/services" className="flex items-center gap-2">
                        <Play className="h-5 w-5 fill-current group-hover:scale-110 transition-transform" />
                        See Our Services
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="border-2 border-white bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 hover:border-secondary/50 text-lg px-8 md:px-10 py-6 md:py-7 font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-white/10 hover:scale-105 active:scale-95"
                    >
                      <Link to="/about">Learn More</Link>
                    </Button>
                  </div>

                  {/* Stats or trust badges */}
                  <div
                    className={`flex gap-8 pt-12 flex-wrap ${
                      index === currentSlide ? "animate-fade-in-up" : ""
                    }`}
                    style={{ animationDelay: "0.9s" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl md:text-3xl font-bold text-secondary number-counter">
                        2-3 hrs
                      </div>
                      <p className="text-white/70 text-sm font-medium">
                        Delivery Time
                      </p>
                    </div>
                    <div className="h-12 w-px bg-white/20" />
                    <div className="flex items-center gap-3">
                      <div className="text-2xl md:text-3xl font-bold text-secondary number-counter">
                        Near-Zero
                      </div>
                      <p className="text-white/70 text-sm font-medium">
                        Product Wastage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={handlePrev}
        disabled={isAnimating}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 backdrop-blur-xl p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-125 border border-white/20 hover:border-secondary/50 group disabled:opacity-50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:text-secondary transition-colors" />
      </button>

      <button
        onClick={handleNext}
        disabled={isAnimating}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 backdrop-blur-xl p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-125 border border-white/20 hover:border-secondary/50 group disabled:opacity-50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:text-secondary transition-colors" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && setCurrentSlide(index)}
            disabled={isAnimating}
            className={`rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-12 h-3 bg-gradient-to-r from-secondary to-accent shadow-lg shadow-secondary/50"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            } disabled:opacity-50`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated corner accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
};

export default HeroSection;