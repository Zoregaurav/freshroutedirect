import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { CheckCircle2, Leaf, ArrowRight, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-farming.jpeg";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden relative">
      {/* Animated background elements */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(var(--primary), 0.2); }
          50% { box-shadow: 0 0 40px rgba(var(--primary), 0.4); }
        }
        @keyframes text-shine {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes word-pop {
          0% { opacity: 0; transform: scale(0.8) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes underline-expand {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 0px rgba(var(--primary), 0); }
          50% { text-shadow: 0 0 10px rgba(var(--primary), 0.5); }
        }
        @keyframes float-text {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes slide-in-text {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .float { animation: float 4s ease-in-out infinite; }
        .glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
        .text-shine {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: text-shine 3s infinite;
        }
        .word-pop {
          animation: word-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .underline-expand {
          position: relative;
          display: inline-block;
        }
        .underline-expand::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          animation: underline-expand 0.8s ease-out forwards;
        }
        .text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        .float-text {
          animation: float-text 3s ease-in-out infinite;
        }
        .slide-in-text {
          animation: slide-in-text 0.8s ease-out;
        }
      `}</style>

      {/* Decorative floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with enhanced animations */}
          <div className="animate-slide-in-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <img
                src={aboutImage}
                alt="Sustainable farming with renewable energy"
                className="w-full h-[550px] object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay with shine effect */}
              <div className="absolute inset-0 text-shine opacity-0 group-hover:opacity-100" />

              {/* Info badge that appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                  <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Premium Quality</span>
                </div>
                <p className="text-white text-sm leading-relaxed">The Fast Lane To Freshness</p>
              </div>
            </div>
          </div>

          {/* Content Section with text animations */}
          <div className="animate-slide-in-right space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-2 hover:bg-primary/15 transition-colors cursor-pointer group">
              <Leaf className="h-5 w-5 text-primary animate-pulse-slow group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
            </div>

            {/* Animated heading with word pop effect */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="inline-block word-pop" style={{ animationDelay: "0.1s" }}>
                Delivering
              </span>
              {" "}
              <span className="inline-block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent word-pop" style={{ animationDelay: "0.2s" }}>
                Freshness,
              </span>
              {" "}
              <span className="inline-block word-pop" style={{ animationDelay: "0.3s" }}>
                Every
              </span>
              {" "}
              <span className="inline-block word-pop" style={{ animationDelay: "0.4s" }}>
                Single
              </span>
              {" "}
              <span className="inline-block word-pop" style={{ animationDelay: "0.5s" }}>
                Day
              </span>
            </h2>

            {/* Paragraphs with staggered animation */}
            <div className="space-y-4 overflow-hidden">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed slide-in-text" style={{ animationDelay: "0.6s" }}>
                <span className="text-glow">FreshRoute</span> is a hyperlocal B2B fresh-produce supply company designed for quick commerce, dark stores, retail chains, and cloud grocery platforms. We specialize in delivering <span className="underline-expand text-primary font-semibold">high-quality</span> fruits and vegetables with unmatched speed, reliability, and consistency.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed slide-in-text" style={{ animationDelay: "0.9s" }}>
                Traditional centralized systems are slow and inefficient. <span className="float-text inline-block">FreshRoute</span> solves this with a <span className="bg-gradient-to-r from-primary/20 to-accent/20 px-2 py-1 rounded hover:from-primary/40 hover:to-accent/40 transition-all duration-300 cursor-pointer font-semibold">micro-hub model</span> that sources locally, grades professionally, and delivers within 3–4 hours. This ensures that every store we serve receives ready-to-sell, <span className="underline-expand text-accent font-semibold">farm-fresh produce</span>-every single day.
              </p>
            </div>

            {/* Features with enhanced animations */}
            <div className="space-y-5 pt-4">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300 cursor-pointer animate-fade-in-up" style={{ animationDelay: "1.0s" }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-accent/10 p-2 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors duration-300">Fresh-Cut & Prep</h4>
                  <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">Hygienic processing for ready-to-sell SKUS</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300 cursor-pointer animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-accent/10 p-2 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors duration-300">Cold-Chain Dispatch</h4>
                  <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">Our experienced farmers ensure the highest quality products</p>
                </div>
              </div>
              
            </div>
            

            {/* CTA Button with enhanced animation */}
            <div className="pt-4 animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/40 text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;