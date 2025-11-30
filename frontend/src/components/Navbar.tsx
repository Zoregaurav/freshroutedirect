import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-background/98 to-background/95 backdrop-blur-xl shadow-xl shadow-primary/5 border-b border-primary/10"
          : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <style>{`
        @keyframes link-underline {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(var(--primary), 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(var(--primary), 0); }
        }
        .link-underline::after {
          animation: link-underline 0.4s ease-out;
        }
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/src/assets/logo.jpg"
                alt="FreshRoute Logo"
                className="relative h-12 w-12 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg object-cover border border-primary/20"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl md:text-2xl font-bold transition-all duration-300 ${
                  scrolled ? "text-foreground" : "text-white drop-shadow-lg"
                }`}
              >
                FreshRoute
              </span>
              <span className={`text-xs font-semibold transition-colors ${
                scrolled ? "text-primary/70" : "text-white/70"
              }`}>
                Eat Fresh Feel Fresh
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group ${
                  location.pathname === link.path
                    ? "text-foreground bg-primary/10"
                    : scrolled
                    ? "text-foreground hover:text-black"
                    : "text-white/90 hover:text-black"
                }`}
              >
                {/* Background highlight */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transition-all duration-300 -z-10 ${
                    hoveredLink === link.path || location.pathname === link.path
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                />

                {/* Text with animation */}
                <span className="relative flex items-center gap-2">
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  )}
                </span>

                {/* Underline */}
                {hoveredLink === link.path && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Info & Button */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Phone Contact */}
            <a
              href="tel:8689964708"
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer group hover:scale-105 ${
                scrolled
                  ? "bg-primary/5 hover:bg-primary/10 text-foreground"
                  : "bg-white/5 hover:bg-white/10 text-white/90"
              }`}
            >
              <div
                className={`p-2 rounded-full transition-all duration-300 group-hover:scale-110 ${
                  scrolled
                    ? "bg-primary/15 group-hover:bg-primary/25"
                    : "bg-white/10 group-hover:bg-white/20"
                }`}
              >
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-primary/70">Call Us</span>
                <span className="text-xs font-bold group-hover:text-black transition-colors">
                  8308306678
                </span>
              </div>
            </a>

            {/* Email Contact */}
            <a
              href="mailto:Contact@freshroutedirect.com"
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer group hover:scale-105 ${
                scrolled
                  ? "bg-primary/5 hover:bg-primary/10 text-foreground"
                  : "bg-white/5 hover:bg-white/10 text-white/90"
              }`}
            >
              <div
                className={`p-2 rounded-full transition-all duration-300 group-hover:scale-110 ${
                  scrolled
                    ? "bg-primary/15 group-hover:bg-primary/25"
                    : "bg-white/10 group-hover:bg-white/20"
                }`}
              >
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-primary/70">Email</span>
                <span className="text-xs font-bold group-hover:text-black transition-colors">
                  Contact@freshroutedirect.com
                </span>
              </div>
            </a>

            {/* Get Started Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-secondary-foreground text-sm font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-secondary/40 hover:scale-105 active:scale-95 group flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled
                ? "hover:bg-primary/10 text-foreground"
                : "hover:bg-white/10 text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden overflow-hidden">
            <div className="py-4 bg-gradient-to-b from-background/95 to-background/98 backdrop-blur-xl border-t border-primary/10">
              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-6 text-sm font-semibold transition-all duration-300 hover:text-black hover:bg-primary/10 hover:translate-x-2 border-l-4 ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/5 border-l-primary"
                      : "text-foreground border-l-transparent hover:border-l-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Contact Section */}
              <div className="px-6 pt-6 pb-4 border-t border-primary/10 mt-4 space-y-4">
                <div className="space-y-3">
                  <a
                    href="mailto:Contact@freshroutedirect.com"
                    className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-primary/70">Email</span>
                      <span className="text-xs font-bold text-foreground">
                        Contact@freshroutedirect.com
                      </span>
                    </div>
                  </a>
                  <a
                    href="tel:8689964708"
                    className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-primary/70">Phone</span>
                      <span className="text-xs font-bold text-foreground">8308306678</span>
                    </div>
                  </a>
                </div>

                {/* Mobile Get Started Button */}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-secondary to-accent text-secondary-foreground hover:shadow-lg hover:shadow-secondary/30 font-bold transition-all duration-300 py-3 text-center rounded-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;