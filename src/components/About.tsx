import { Code2, Database, Globe, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = {
    'Frontend': {
      icon: Globe,
      technologies: ['React', 'Vue.js', 'JavaScript', 'CSS', 'Tailwind CSS', 'Bootstrap']
    },
    'Backend': {
      icon: Database,
      technologies: ['Laravel', 'PHP', 'Node.js', 'REST API']
    },
    'Database': {
      icon: Code2,
      technologies: ['MySQL', 'SQL', 'NoSQL']
    },
    'Tools & Others': {
      icon: Smartphone,
      technologies: ['Git', 'WordPress', 'Responsive Design']
    }
  };

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Full Stack Developer with a Passion for Innovation
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated Full Stack Developer with expertise in modern web technologies. 
              Currently working as a WordPress Developer at Averps, where I optimize website 
              performance and implement custom themes and plugins.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development spans over 4 years, during which I've worked with 
              companies like H Grant Design and IformatLogic, developing full-stack applications 
              using Laravel, React, WordPress, and Vue.js. I pride myself on creating responsive, 
              user-friendly applications that deliver exceptional user experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I graduated with a BSIT degree from Polytechnic College of Botolan in 2022 and 
              have been continuously learning and adapting to new technologies. When I'm not 
              coding, I enjoy exploring new frameworks and contributing to open-source projects.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">Zambales, Philippines</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                <p className="text-muted-foreground">4+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground">efrenosio15@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-muted-foreground">09513188173</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, { icon: Icon, technologies }]) => (
              <Card key={category} className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-primary mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;