import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="relative z-10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.jpg" 
                alt="FreshrouteLogo" 
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="text-2xl font-bold">FreshRoute</span>
            </div>
            <p className="text-primary-foreground/80">
             Ultra-Fast Fresh Supply For Quick Commerce
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61583152423864" className="hover:text-secondary transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/freshroute.india/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" className="hover:text-secondary transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/freshroutee/" className="hover:text-secondary transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
                 <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
          
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-secondary transition-colors cursor-pointer">Micro Hub Network</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Cold Chain & Smart Logistics</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Just-in-Time-delivery</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Near-Zero Wastage</li>
                  <li className="hover:text-secondary transition-colors cursor-pointer">Direct-to-Dark-Store</li>
                    <li className="hover:text-secondary transition-colors cursor-pointer">Compliance & Quality</li>
             
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Navi Mumabi  Sec-30A Vashi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>8308306678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>Contact@freshroutedirect.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/80">
            &copy; {new Date().getFullYear()} FreshRoute. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
