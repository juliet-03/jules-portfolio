import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Clock, CheckCircle, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

import poultryProImage from '@/assets/poultry-pro.jpg';
import creditTrackerImage from '@/assets/credit-tracker.jpg';
import devConnectImage from '@/assets/devconnect.jpg';
import taskFlowImage from '@/assets/taskflow.jpg';

const Projects = () => {
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

  const projects = [
    {
      title: 'Poultry Pro',
      description: 'An intelligent poultry management system for tracking inventory, feed, egg production, and sales. Built with the MERN stack.',
      image: poultryProImage,
      status: 'In Progress',
      statusIcon: Clock,
      statusColor: 'warning',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      features: [
        'Real-time inventory tracking',
        'Production analytics dashboard',
        'Sales management system',
        'Feed consumption monitoring',
        'Automated reporting'
      ]
    },
    {
      title: 'Credit Tracker',
      description: 'A debt recovery and credit scoring platform that helps lenders track repayments, contact clients, and assess risk levels.',
      image: creditTrackerImage,
      status: 'In Progress',
      statusIcon: Clock,
      statusColor: 'warning',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      features: [
        'Credit scoring algorithm',
        'Payment tracking system',
        'Client communication tools',
        'Risk assessment dashboard',
        'Automated reminders'
      ]
    },
    {
      title: 'DevConnect',
      description: 'A networking platform for developers to showcase portfolios, collaborate on open-source, and find freelance gigs.',
      image: devConnectImage,
      status: 'Coming Soon',
      statusIcon: Eye,
      statusColor: 'secondary',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      features: [
        'Developer portfolio showcase',
        'Project collaboration tools',
        'Freelance job marketplace',
        'Real-time messaging',
        'Skill-based matching'
      ]
    },
    {
      title: 'TaskFlow',
      description: 'A personal productivity app to track tasks, set priorities, and visualize progress — light and dark mode included!',
      image: taskFlowImage,
      status: 'Coming Soon',
      statusIcon: Eye,
      statusColor: 'secondary',
      technologies: ['React', 'TypeScript', 'LocalStorage', 'Framer Motion'],
      features: [
        'Task management system',
        'Priority-based organization',
        'Progress visualization',
        'Dark/Light mode toggle',
        'Productivity analytics'
      ]
    },
  ];

  const getStatusBadge = (status: string, icon: any, color: string) => {
    const Icon = icon;
    return (
      <Badge variant={color as any} className="flex items-center gap-1">
        <Icon className="w-3 h-3" />
        {status}
      </Badge>
    );
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and ongoing projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`card-elegant group transition-all duration-500`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(project.status, project.statusIcon, project.statusColor)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-success" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button variant="outline" size="sm" disabled>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    
                    <Button variant="outline" size="sm" disabled>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;