import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 Benefits of Organic Farming for the Environment",
    excerpt: "Discover how organic farming practices contribute to a healthier planet and sustainable future for all.",
    author: "John Smith",
    date: "March 15, 2025",
    category: "Sustainability",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Seasonal Guide: What to Plant in Spring",
    excerpt: "A comprehensive guide to spring planting, including the best crops and timing for optimal growth.",
    author: "Emily Green",
    date: "March 10, 2025",
    category: "Farming Tips",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "The Rise of Regenerative Agriculture",
    excerpt: "Exploring how regenerative practices are transforming modern farming and restoring soil health.",
    author: "Michael Chen",
    date: "March 5, 2025",
    category: "Innovation",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "How to Start Your Own Organic Garden",
    excerpt: "Step-by-step instructions for beginners looking to grow their own organic vegetables at home.",
    author: "Sarah Johnson",
    date: "February 28, 2025",
    category: "How-To",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Understanding Soil Health and Nutrition",
    excerpt: "Learn about the importance of soil health and how to maintain nutrient-rich soil naturally.",
    author: "David Brown",
    date: "February 20, 2025",
    category: "Education",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Farm-to-Table: Reducing Food Miles",
    excerpt: "The environmental and health benefits of sourcing food locally from nearby organic farms.",
    author: "Emma Davis",
    date: "February 15, 2025",
    category: "Sustainability",
    image: "/placeholder.svg",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Latest News & Insights
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Stay updated with the latest trends, tips, and stories from the world of organic farming
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover-lift cursor-pointer group"
                >
                  <div className="relative h-64 bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Load More Posts
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// export default Blog;
