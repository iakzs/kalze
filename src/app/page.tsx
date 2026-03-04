'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Timeline from "@/components/Timeline";
import { Github, Mail, ExternalLink, Code2, Terminal, Cpu } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "KMod / Kalze",
      description: "A quality-of-life Minecraft mod designed for efficiency and ease of use.",
      tech: ["Java", "Minecraft Forge & Fabric"],
      link: "https://kalze.dev/404", // no blog yet lol
    },
    {
      title: "ACS",
      description: "Human-interaction simulators for anti-cheat research in Minecraft.",
      tech: ["C#", "Security Research"],
      link: "https://kalze.dev/blog/acs",
    },
    {
      title: "Epic-Bot",
      description: "A long-standing Discord utility bot serving thousands of users.",
      tech: ["TypeScript", "Discord.js", "Postgres"],
      link: "https://top.gg/bot/1181315256505618462",
    },
    {
      title: "Websocket",
      description: "A simple WebSocket service for real-time data exchange. (In development!)",
      tech: ["TypeScript", "WebSockets", "Postgres"],
      github: "https://github.com/kalze-ws/kalze-ws",
      link: "https://websocket.cl"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-[#e8b4d0] dark:selection:bg-[#e8b4d0]/30 font-mono">
      <main className="max-w-6xl mx-auto px-6 md:px-16 py-24 md:py-32">
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <Avatar className="w-32 h-32 mb-8 ring-4 ring-[#e8b4d0]/10 dark:ring-[#e8b4d0]/20">
              <AvatarImage src="https://github.com/iakzs.png" alt="kalze" />
              <AvatarFallback>imag</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-6xl font-black text-black dark:text-zinc-50 mb-6 tracking-tight lowercase">
              haaai! i&#39;m <span className="text-[#e8b4d0] underline decoration-[#e8b4d0]/30 underline-offset-8">kalze</span> 👋
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              i&#39;m a <span className="text-black dark:text-zinc-200 font-medium">student & dev</span> from Chile 🇨🇱.
              i spend way too much time in <span className="text-[#e8b4d0]">C#</span>, <span className="text-[#e8b4d0]">TypeScript</span>, and <span className="text-[#e8b4d0]">Python</span> building things that probably shouldn&#39;t work, but do!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8 bg-[#e8b4d0] hover:bg-[#e8b4d0]/80 text-white border-none transition-colors">
                <Link href="/blog">blog!!</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 border-[#e8b4d0]/20 dark:border-[#e8b4d0]/30 hover:bg-[#e8b4d0]/5 dark:hover:bg-[#e8b4d0]/10 transition-colors" asChild>
                <a href="https://github.com/iakzs" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <Code2 className="w-8 h-8 text-[#e8b4d0] mb-4" />
              <h3 className="font-bold text-lg mb-2">Languages</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">TypeScript, C#, Python, Go, Java, C++</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <Terminal className="w-8 h-8 text-[#e8b4d0] mb-4" />
              <h3 className="font-bold text-lg mb-2">Web & Backend</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Next.js, Node.js, Bun, Postgres, Tailwind</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <Cpu className="w-8 h-8 text-[#e8b4d0] mb-4" />
              <h3 className="font-bold text-lg mb-2">Hardware</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">ESP32, KiCad, LTE/GPS, Circuits</p>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black text-black dark:text-zinc-50 lowercase tracking-tight">
                some projects
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">things i&#39;ve spent too much time on.</p>
            </div>
            <Link href="https://github.com/iakzs" target="_blank" className="text-sm font-medium text-[#e8b4d0] hover:underline inline-flex items-center transition-colors">
              view more on GitHub <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-sm overflow-hidden group hover:border-[#e8b4d0]/50 dark:hover:border-[#e8b4d0]/50 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold group-hover:text-[#e8b4d0] transition-colors uppercase tracking-tight">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        {project.github && <a href={project.github} target="_blank" className="text-zinc-400 hover:text-[#e8b4d0] transition-colors"><Github className="w-5 h-5"/></a>}
                        {project.link && <a href={project.link} target="_blank" className="text-zinc-400 hover:text-[#e8b4d0] transition-colors"><ExternalLink className="w-5 h-5"/></a>}
                      </div>
                    </div>
                    <CardDescription className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-3xl font-black text-black dark:text-zinc-50 text-center lowercase tracking-tight">
            the journey
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-center max-w-xl mx-auto">
            (not everything)
          </p>
          <Timeline />
        </section>

        <section className="text-center py-16 border-t border-zinc-100 dark:border-zinc-900">
          <h2 className="text-3xl font-black text-black dark:text-zinc-50 mb-4 lowercase tracking-tight">
            let&#39;s talk!
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
            looking for a dev, a collaborator, or just want to talk? (please no offers for editing my website)
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 bg-[#e8b4d0] hover:bg-[#e8b4d0]/80 text-white border-none transition-colors" asChild>
              <a href="mailto:kz@doro.cl">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-[#e8b4d0]/20 dark:border-[#e8b4d0]/30 hover:bg-[#e8b4d0]/5 dark:hover:bg-[#e8b4d0]/10 transition-colors" asChild>
              <a href="https://ko-fi.com/29dkz" target="_blank" rel="noopener noreferrer">
                Support Me
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
