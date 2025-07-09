import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'Pawthway',
      description: 'A comprehensive lost & found pet platform that helps reunite pets with their families. Features include pet registration, search functionality, and community support.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Supabase', 'Material UI'],
      liveUrl: 'https://pawthway.vercel.app/',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with Laravel and Vue.js. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/api/placeholder/600/400',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Stripe API', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'WordPress Business Theme',
      description: 'Custom WordPress theme for business websites with advanced customization options, responsive design, and SEO optimization.',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'Custom Post Types'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Task Management App',
      description: 'React-based task management application with drag-and-drop functionality, team collaboration features, and real-time updates.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            WordPress customization, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group overflow-hidden bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-500 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:flex lg:items-center' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                    <div className="text-primary/60 text-lg font-medium">
                      {project.title} Preview
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className={`p-6 ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="h-5 w-5 mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;