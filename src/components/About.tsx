import { useEffect, useRef, useState } from 'react';
import { Award, Users, FolderCheck } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: Award, label: 'Awards', value: 5 },
    { icon: FolderCheck, label: 'Complete Projects', value: 10 },
    { icon: Users, label: 'Happy Customers', value: 100 },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-6 text-lg leading-relaxed text-foreground">
                <p>
                  I'm a Fullstack Developer with a passion for crafting efficient, user-friendly web applications. I specialize in the MERN stack and have a keen eye for design, ensuring every project is both functional and visually appealing.
                </p>
                <p>
                  With a strong foundation in both frontend and backend technologies, I bring ideas to life through code. I thrive on challenges and love collaborating with teams to build impactful digital products.
                </p>
                <p>
                  Let's connect and create something amazing together!
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Based in Nairobi, Kenya</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="card-elegant text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-primary rounded-full text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {value}+
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;