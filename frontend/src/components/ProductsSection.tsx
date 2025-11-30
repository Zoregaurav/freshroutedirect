import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import product1 from "@/assets/products-1.jpeg";
import product2 from "@/assets/products-2.jpeg";
import product3 from "@/assets/products-3.jpeg";


const products = [
  {
    image: product1,
    category: "Fresh vegitables",
    title: "GREEN HARVEST",
    description: "Farm-picked leafy greens and crunchy veggies, harvested daily.",
    freshness: "100% Fresh",
    badge: "Popular",
  },
  
  {
    image: product2,
    category: "Fresh Fruits",
    title: "FRESH FRUIT DELIGHT",
    description: "Assorted seasonal fruits-sweet, juicy and perfectly ripened.",
    freshness: "24hrs Fresh",
    badge: "Best Seller",
  },
    {
    image: product3,
    category: "Fresh  Cuts",
    title: "Fresh Cuts ",
    description: "Freshly cut seasonal fruits, ready to enjoy anytime.",
    freshness: "12hrs Fresh",
    badge: "New",
  },

 
];

const ProductShowcaseSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const getCardPosition = (index) => {
    const distance = (index - activeIndex + products.length) % products.length;

    if (distance === 0) return "center";
    if (distance === 1 || distance === -(products.length - 1)) return "right";
    if (distance === products.length - 1 || distance === -1) return "left";
    return "hidden";
  };

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-slate-100/20 to-slate-50 py-24 px-4 md:px-8">
      <style>{`
        @keyframes slideInCenter {
          from {
            transform: translateX(100px) scale(0.85);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes slideOutLeft {
          from {
            transform: translateX(-100px) scale(0.85);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 0.5;
          }
        }
        
        @keyframes slideOutRight {
          from {
            transform: translateX(100px) scale(0.85);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .card-center {
          animation: slideInCenter 0.6s ease-out forwards;
        }

        .card-left {
          animation: slideOutLeft 0.6s ease-out forwards;
          margin-left: -20px;
        }

        .card-right {
          animation: slideOutRight 0.6s ease-out forwards;
          margin-right: -20px;
        }

        .card-hidden {
          display: none;
        }

        .float-blob {
          animation: float 4s ease-in-out infinite;
        }

        .product-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover {
          transform: scale(1.03);
        }

        .circular-image {
          border: 6px solid #D4AF37;
          transition: all 0.4s ease;
        }

        .product-card.active .circular-image {
          border-color: #FFD700;
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
        }

        .product-card:hover .circular-image {
          border-color: #FFD700;
          box-shadow: 0 0 25px rgba(255, 215, 0, 0.3);
        }

        .card-background {
          transition: all 0.4s ease;
        }

        .product-card.active .card-background {
          background-color: #0E6B38;
        }

        .product-card:hover .card-background {
          background-color: #0E6B38;
        }

        .product-card.active .card-text {
          color: white;
        }

        .product-card:hover .card-text {
          color: white;
        }

        .underline-accent {
          transition: all 0.4s ease;
        }

        .product-card.active .underline-accent {
          background-color: #FFD700;
        }

        .read-more {
          position: relative;
          display: inline-block;
          color: inherit;
        }

        .read-more::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #FFD700;
          transition: width 0.3s ease;
        }

        .product-card:hover .read-more::after {
          width: 100%;
        }

        .product-card.active .read-more::after {
          width: 100%;
          background-color: #FFD700;
        }
      `}</style>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl float-blob" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl float-blob"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our finest agricultural products, carefully selected and
            sustainably grown
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 md:left-4 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all hover:shadow-xl"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Cards Container */}
          <div className="w-full overflow-hidden px-16 md:px-20">
            <div className="flex justify-center gap-8 md:gap-12">
              {products.map((product, index) => {
                const position = getCardPosition(index);
                const isActive = position === "center";
                let cardClass = `product-card ${isActive ? "active" : ""} `;

                if (position === "center")
                  cardClass +=
                    "card-center flex-shrink-0 w-full max-w-sm md:max-w-md";
                else if (position === "left")
                  cardClass +=
                    "card-left flex-shrink-0 w-full max-w-sm md:max-w-md";
                else if (position === "right")
                  cardClass +=
                    "card-right flex-shrink-0 w-full max-w-sm md:max-w-md";
                else cardClass += "card-hidden";

                return (
                  <div key={index} className={cardClass}>
                    <div className="card-background bg-white rounded-3xl overflow-hidden shadow-lg p-0 h-full flex flex-col">
                      {/* Image Section */}
                      <div className="flex justify-center pt-8 px-8">
                        <div className="circular-image w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="card-text flex-1 px-8 py-8 flex flex-col justify-center text-center space-y-4 transition-colors duration-400 text-gray-900">
                        {/* Category */}
                        <div className="flex items-center justify-center gap-2">
                          <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
                          <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                            {product.category}
                          </p>
                        </div>

                        {/* Underline */}
                        <div className="flex justify-center">
                          <div className="underline-accent h-1 w-16 rounded-full bg-green-600 transition-all duration-400" />
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                          {product.title}
                        </h3>

                        {/* Freshness Badge */}
                        <p className="text-sm md:text-base font-semibold text-green-600 uppercase tracking-widest">
                          {product.freshness}
                        </p>

                        {/* Description */}
                        <p className="text-sm md:text-base leading-relaxed opacity-75">
                          {product.description}
                        </p>

                        {/* Read More Link */}
                        <div className="pt-4">
                          <button className="read-more text-sm md:text-base font-semibold uppercase tracking-wider hover:opacity-80 transition-opacity">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-4 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all hover:shadow-xl"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-green-600 w-3 h-3"
                  : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcaseSlider;
