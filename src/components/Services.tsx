import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Plug, BarChart3 } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Code,
      title: 'Web Development (MERN)',
      description: 'Building responsive, fast, and secure websites',
      gradient: 'from-primary to-primary-hover',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful interfaces',
      gradient: 'from-accent to-accent-hover',
    },
    {
      icon: Plug,
      title: 'API Integration',
      description: 'Connecting applications and services',
      gradient: 'from-secondary to-secondary-hover',
    },
    {
      icon: BarChart3,
      title: 'Dashboard Development',
      description: 'Analytics & admin panels',
      gradient: 'from-primary to-accent',
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Services
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer comprehensive development services to bring your digital ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`card-elegant group hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;