import {
  personalInfo,
  projects,
  skills,
} from "@/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SkillCard } from "@/components/SkillCard";
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-16 md:py-24 lg:py-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-display">
              {personalInfo.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {personalInfo.about}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link to="/contact">
                  Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download>
                  Download CV <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-16 md:py-24 lg:py-32"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Technologies I'm proficient with.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.section>
      {/* Featured Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-16 md:py-24 lg:py-32"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of projects I'm proud of.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project) => (
            <Card key={project.title} className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2 flex-grow">{project.description}</CardDescription>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Skills Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skillsUsed.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button asChild className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.section>
      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-16 md:py-24 lg:py-32"
      >
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </CardTitle>
            <CardDescription className="mt-4 max-w-2xl mx-auto text-lg">
              Have a project in mind? I'd love to hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="max-w-xl mx-auto">
              <ContactForm />
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}