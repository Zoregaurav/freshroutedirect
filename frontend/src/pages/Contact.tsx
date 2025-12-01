import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Leaf, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";
    else if (formData.name.trim().length > 100)
      newErrors.name = "Name cannot exceed 100 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";

    if (formData.phone.trim()) {
      if (!/^[0-9\s\-\+\(\)]{7,}$/.test(formData.phone))
        newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    else if (formData.subject.trim().length < 3)
      newErrors.subject = "Subject must be at least 3 characters";
    else if (formData.subject.trim().length > 100)
      newErrors.subject = "Subject cannot exceed 100 characters";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    else if (formData.message.trim().length > 5000)
      newErrors.message = "Message cannot exceed 5000 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Supabase
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (dbError) throw dbError;

      // Send to Web3Forms
      const web3FormData = new FormData();
      web3FormData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
      web3FormData.append("from_name", formData.name);
      web3FormData.append("from_email", formData.email);
      web3FormData.append("phone", formData.phone);
      web3FormData.append("subject", formData.subject);
      web3FormData.append("message", formData.message);
      web3FormData.append(
        "redirect",
        "https://yourdomain.com/contact" // replace with production URL
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const result = await response.json();

      if (!result.success) throw new Error(result.message || "Failed to send email");

      toast.success("Message sent successfully! We'll get back to you soon.");

      // Reset form
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Supply Chain?
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Join the hyperlocal revolution. Partner with FreshRoute Direct for faster, fresher,
              and more efficient produce delivery
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center hover-lift">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">Navi Mumbai, Sec-30A Vashi</p>
              </Card>

              <Card className="p-8 text-center hover-lift">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-muted-foreground">8308306678</p>
              </Card>

              <Card className="p-8 text-center hover-lift">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground">contact@freshroute.com</p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Request a Partnership Discussion</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name * <span className="text-xs text-muted-foreground">(2-100 characters)</span>
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Company Name"
                      disabled={isSubmitting}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Business Email"
                      disabled={isSubmitting}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone <span className="text-xs text-muted-foreground">(optional)</span>
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Phone Number"
                      disabled={isSubmitting}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject * <span className="text-xs text-muted-foreground">(3-100 characters)</span>
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="How can we help?"
                      disabled={isSubmitting}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.subject}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message * <span className="text-xs text-muted-foreground">(5-5000 characters)</span>
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    disabled={isSubmitting}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      {errors.message}
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">Minimum 10 characters required</p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
