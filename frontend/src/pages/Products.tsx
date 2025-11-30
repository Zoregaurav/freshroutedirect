import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/ProductsSection";
import { Leaf } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Products</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Farm Fresh Organic Products
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Discover our wide selection of premium organic produce, harvested daily and delivered fresh to your door
            </p>
          </div>
        </section>

        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
