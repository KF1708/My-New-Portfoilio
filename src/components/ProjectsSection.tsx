"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Ecommerce-inngest is a full-stack e-commerce app using Next.js, Inngest, and Clerk for auth, with Cloudinary for uploads and MongoDB via Mongoose. It’s built for speed with React 19 and Tailwind CSS.",
    image: "/p-1.png",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Inngest",
      "Clerk",
      "Cloudinary",
      "Axios",
      "Tailwind CSS",
      "React Hot Toast",
    ],
    liveDemo: "https://quick-cart-eight-lemon.vercel.app/",
    github: "https://github.com/KF1708/QuickCart",
  },
  {
    id: 2,
    title: "Beauty-Product",
    description:
      "Natural-beauty-nextjs is a modern e-commerce web app built with Next.js and React 19 for a fast, dynamic user experience. It integrates Stripe for payments and Supabase for backend services like authentication and database. Styling is handled with Tailwind CSS and enhanced with UI libraries like Radix UI and Lucide Icons, while Zustand manages state efficiently.",
    image: "/p-2.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Stripe",
      "Zustand",
      "Lucide Icons",
      "TypeScript",
    ],
    liveDemo: "https://natural-beauty-nextjs.vercel.app/",
    github: "https://github.com/KF1708/Natural_Beauty_Nextjs",
  },
  {
    id: 3,
    title: "Career-Focused App",
    description:
      "my-project is a career-focused web app built with Next.js and React, helping users land $100k+ jobs in 8–16 weeks. It offers one-on-one mentoring, live interview support, salary negotiation boosts, and 99.99% guaranteed placement—all tailored for AI-ready, recession-proof careers.",
    image: "/p-3.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Radix UI",
      "Lucide Icons",
      "React Confetti",
      "React Day Picker",
      "Date-fns",
      "Next Themes",
      "TypeScript",
    ],
    liveDemo: "https://my-project-high-paid-jobs.vercel.app/",
    github: "https://github.com/KF1708/My-Project-HighPaidJobs",
  },
  {
    id: 4,
    title: "Management Application",
    description:
      "Appie-app-react-project is a responsive React-based admin or management dashboard application. It uses modern UI libraries like Ant Design and Bootstrap, with smooth navigation, animations, and API handling—ideal for managing apps, content, or users efficiently.",
    image: "/p-4.png",
    technologies: [
      "React",
      "Ant Design",
      "Bootstrap",
      "React Bootstrap",
      "React Router",
      "Axios",
      "AOS",
      "Swiper",
      "Tailwind CSS",
    ],
    liveDemo: "https://appie-app-react-project.vercel.app/",
    github: "https://github.com/KF1708/APPIE_APP_React_Project",
  },
  {
    id: 5,
    title: "My Next Ecommerce",
    description:
      "my-next-ecommerce is a modern e-commerce web application built with Next.js and React 19, featuring secure user auth with Clerk, payment integration via PayPal, and global state management using Redux Toolkit. It delivers a smooth shopping experience with responsive UI components from Ant Design, animated transitions via AOS, and toast notifications for user feedback.",
    image: "/p-5.png",
    technologies: [
      "Next.js",
      "React",
      "Clerk",
      "Redux Toolkit",
      "PayPal",
      "Ant Design",
      "Axios",
      "Swiper",
      "Tailwind CSS",
      "React Icons",
      "AOS",
      "React Hot Toast",
    ],
    liveDemo: "https://my-next-ecommerce-nu.vercel.app/",
    github: "https://github.com/KF1708/My-Next-Ecommerce",
  },
  {
    id: 6,
    title: "Food Delivery App",
    description:
      "Mobile-first food delivery platform with real-time tracking, payment processing, and restaurant management.",
    image:
      "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "#",
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 overflow-hidden border-blue-100">
                <div className="relative overflow-hidden">
                  <Image
                    height={500}
                    width={500}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => window.open(project.liveDemo, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 text-blue-700 border-blue-300 hover:bg-white"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
