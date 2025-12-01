-- Enable UUID generation
-- CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  -- id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow service_role to view submissions (admin panel)
CREATE POLICY "Service role can view all submissions"
  ON public.contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

-- Create products table
CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON public.products
  FOR SELECT
  TO public
  USING (true);

-- Create blog posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view blog posts"
  ON public.blog_posts
  FOR SELECT
  TO public
  USING (true);

-- Sample Products
INSERT INTO public.products (title, description, category, price, in_stock) VALUES
('Organic Vegetable Box', 'Farm-fresh organic vegetables harvested daily', 'Fresh Vegetables', 24.99, true),
('Seasonal Fruit Basket', 'Handpicked seasonal fruits bursting with flavor', 'Fresh Fruits', 32.99, true),
('Fresh Herb Collection', 'Aromatic organic herbs and leafy greens', 'Herbs & Greens', 18.99, true),
('Mixed Greens Bundle', 'Assorted organic leafy greens and lettuce', 'Fresh Vegetables', 15.99, true),
('Berry Collection', 'Fresh organic strawberries, blueberries, and raspberries', 'Fresh Fruits', 28.99, true),
('Root Vegetable Pack', 'Organic carrots, beets, and potatoes', 'Fresh Vegetables', 22.99, true);

-- Sample Blog Posts
INSERT INTO public.blog_posts (title, content, excerpt, author, category) VALUES
('10 Benefits of Organic Farming for the Environment', 'Organic farming is more than just a method...', 'Discover how organic farming practices...', 'John Smith', 'Sustainability'),
('Seasonal Guide: What to Plant in Spring', 'Spring is the season of renewal...', 'A comprehensive guide to spring planting...', 'Emily Green', 'Farming Tips'),
('The Rise of Regenerative Agriculture', 'Regenerative agriculture represents...', 'Exploring how regenerative practices...', 'Michael Chen', 'Innovation'),
('How to Start Your Own Organic Garden', 'Starting an organic garden...', 'Step-by-step instructions...', 'Sarah Johnson', 'How-To'),
('Understanding Soil Health and Nutrition', 'Healthy soil is the foundation...', 'Learn about the importance of soil health...', 'David Brown', 'Education'),
('Farm-to-Table: Reducing Food Miles', 'The farm-to-table movement...', 'The environmental and health benefits...', 'Emma Davis', 'Sustainability');
