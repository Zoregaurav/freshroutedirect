import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Leaf,
  Target,
  Eye,
  Award,
  TrendingDown,
  Clock,
  Warehouse,
  Scissors,
  RefrigeratorIcon,
  ShoppingCart,
} from "lucide-react";
import aboutImage from "@/assets/about-farming.jpeg";
import journeyImage from "@/assets/darkStore.jpeg";

// Constants for better maintainability
const PROCESS_STEPS = [
  {
    title: "Farm Procurement",
    description: "Direct sourcing from verified farmers",
    icon: Leaf,
  },
  {
    title: "Micro Hub Intake",
    description: "Sorting & quality checks",
    icon: Warehouse,
  },
  {
    title: "Fresh-Cut & Prep",
    description: "Hygienic processing for ready-to-sell SKUs",
    icon: Scissors,
  },
  {
    title: "Cold Chain Dispatch",
    description: "Temperature-controlled optimized routing",
    icon: RefrigeratorIcon,
  },
  {
    title: "Direct-to-Dark-Store",
    description: "2-3 hour restocking to partner stores",
    icon: ShoppingCart,
  },
];

const MISSION_VALUES = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To build India's fastest and most reliable freshness infrastructure for Quick Commerce, ensuring produce reaches consumers at peak freshness.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To ensure every household in India receives truly fresh produce-not by chance, but because the supply chain itself is built for freshness.",
  },
  {
    icon: Award,
    title: "Our Values",
    description:
      "Innovation, sustainability, quality, and reliability. These core values guide every decision we make and every optimization we implement.",
  },
];

// Reusable Card Component
interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  variant?: "process" | "values";
}

const ProcessCard: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  index,
  variant = "process",
}) => {
  const baseDelay = `${index * 100}ms`;

  return (
    <div
      className="group animate-fade-in-up"
      style={{ animationDelay: baseDelay }}
    >
      <div className="relative h-full p-8 bg-white border-2 border-primary/10 rounded-3xl text-center transition-all duration-500 hover:shadow-lg hover:border-primary/30 flex flex-col">
        {/* Icon Container */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-br from-primary to-primary/80 w-28 h-28 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-3">
            <Icon className="h-14 w-14 text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-foreground transition-all duration-500 group-hover:text-primary">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed text-sm transition-all duration-500 group-hover:text-foreground/80 flex-grow">
          {description}
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl" />
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-down">
          <Leaf className="h-6 w-6" />
          <span className="text-sm font-semibold uppercase tracking-wider">
            About FreshRoute
          </span>
        </div>
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Our Story
        </h1>
        <p
          className="text-xl max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Revolutionizing fresh produce delivery through innovation and precision
          logistics
        </p>
      </div>
    </section>
  );
};

// Problem Statement Section
const ProblemSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="animate-slide-in-left">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={aboutImage}
            alt="Fresh produce"
            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover relative transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="animate-slide-in-right space-y-6">
        <div>
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            <TrendingDown className="inline h-4 w-4 mr-2" />
            The Problem
          </span>
          <h2 className="text-4xl font-bold mb-6">
            Addressing India's Post-Harvest Crisis
          </h2>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          India experiences substantial post-harvest losses, with fresh fruits
          and vegetables accounting for 37% of the nation's ₹152,700 crore
          annual loss. This massive inefficiency impacts farmers, retailers, and
          consumers alike.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Traditional supply chains operate on 12-24 hour cycles, causing
          significant spoilage, wastage, and loss of freshness. FreshRoute was
          born to address this critical gap through strategic innovation and
          precision logistics.
        </p>
      </div>
    </div>
  );
};

// Solution Section
const SolutionSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="order-2 lg:order-1 space-y-6 animate-slide-in-left">
        <div>
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            <span className="inline h-4 w-4 mr-2">💡</span>
            Our Solution
          </span>
          <h2 className="text-4xl font-bold mb-6">The FreshRoute Advantage</h2>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          By utilizing a network of strategically positioned Micro Hubs located
          within 3-5 kilometers of client dark store clusters, we've compressed
          the supply cycle from 12-24 hours down to just 2-3 hours.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This operational agility enables our QC clients to realize near-zero
          wastage on high-value perishable stock while ensuring maximum
          freshness from farm to shelf.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground">2-3 Hour Delivery</p>
            <p className="text-sm text-muted-foreground">From hub to dark store</p>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 animate-slide-in-right">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={journeyImage}
            alt="FreshRoute innovation"
            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover relative transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

// Process Steps Section
const ProcessSection: React.FC = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4">How FreshRoute Works</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Five strategic steps from farm procurement to direct-to-dark-store
          delivery
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {PROCESS_STEPS.map((step, index) => (
          <ProcessCard key={step.title} {...step} index={index} />
        ))}
      </div>
    </div>
  );
};

// Mission & Values Section
const MissionValuesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {MISSION_VALUES.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.title}
            className="group text-center p-8 bg-muted/50 rounded-2xl hover:bg-primary/5 transition-all duration-500 animate-fade-in-up border border-transparent hover:border-primary/20"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
              <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

// Main Component
const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <ProblemSection />
            <SolutionSection />
            <ProcessSection />
            <MissionValuesSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;