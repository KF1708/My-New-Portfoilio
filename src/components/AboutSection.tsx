"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey and expertise in web development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">
                My Story
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 4 years of experience in Front-End development,
                  I&apos;ve dedicated myself to mastering the MERN stack and
                  creating web applications that make a difference. My journey
                  began with a fascination for solving complex problems through
                  code.
                </p>
                <p>
                  I specialize in building scalable applications using MongoDB
                  for robust data management, Express.js for efficient
                  server-side development, React for dynamic user interfaces,
                  and Node.js for powerful backend solutions.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring the
                  latest web technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community through blog
                  posts and mentoring.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100/60 to-blue-200/60 rounded-lg absolute -inset-4" />
              <Image
                height={500}
                width={500}
                src="/1.png"
                alt="About me"
                className="w-96 h-64 hue-rotate-180 rounded-lg object-cover relative z-10 shadow-2xl border-2 border-blue-200"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
