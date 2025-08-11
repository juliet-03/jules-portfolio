import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      title: "Building My Portfolio with Tailwind & HTML",
      description: "A peek into how I structured and designed this portfolio using simple, effective tools.",
      date: "2025-02-15",
      readTime: "5 min read",
      category: "Development",
      gradient: "from-primary to-primary-hover"
    },
    {
      title: "From Figma to Code: A UI/UX Developer's Workflow",
      description: "How I transform design mockups into interactive, responsive components.",
      date: "2025-04-10",
      readTime: "8 min read",
      category: "Design",
      gradient: "from-accent to-accent-hover"
    },
    {
      title: "MongoDB + Node.js = Full-Stack Magic",
      description: "Lessons from building full-stack apps using the MERN stack in real-world projects.",
      date: "2025-01-05",
      readTime: "12 min read",
      category: "Backend",
      gradient: "from-secondary to-secondary-hover"
    },
  ];

  return (
    <section ref={sectionRef} id="blog" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Latest Blog Posts
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.title}
                className={`card-elegant group cursor-pointer transition-all duration-500`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white text-sm font-medium mb-4`}>
                  {post.category}
                </div>

                {/* Post Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="pt-4 border-t border-border">
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-accent group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <Button className="btn-accent">
              View All Posts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;