import { useEffect, useRef, useState } from "react";
import { Tractor, Users, Award, Leaf } from "lucide-react";

const stats = [
  {
    icon: Tractor,
    value: 10,
    suffix: "+",
    label: "Agricultural Products",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Trust By Clients",
  },
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Leaf,
    value: 100,
    suffix: "%",
    label: "Organic Certified",
  },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCA2YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-2xl md:text-3xl text-primary-foreground/95 max-w-4xl mx-auto leading-relaxed font-light">
            Freshroute is here to {" "}
            <span className="font-bold text-secondary">Power the next generation of quick commerce supply!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group ${
                isVisible ? "animate-bounce-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-secondary p-6 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <stat.icon className="h-12 w-12 text-secondary-foreground" />
                </div>
              </div>
              <div className="text-6xl md:text-7xl font-bold text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                {isVisible && <CountUp end={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-xl font-semibold text-primary-foreground/95">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

export default StatsSection;
