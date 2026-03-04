'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-[#e8b4d0] dark:selection:bg-[#e8b4d0]/30 font-mono flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              rotate: [0, -5, 5, -5, 0],
              scale: [1, 1.05, 1, 1.05, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-9xl md:text-[12rem] font-black text-black dark:text-zinc-50 leading-none mb-8 relative inline-block"
          >
            404
            <div className="absolute top-0 -right-4 md:-right-8 w-4 h-4 md:w-8 md:h-8 bg-[#e8b4d0] rounded-full animate-ping" />
          </motion.div>

          <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-zinc-50 mb-6 lowercase tracking-tight">
            looks like you&#39;re lost... <span className="text-[#e8b4d0]">somewhere...</span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-md mx-auto leading-relaxed">
            the page you are looking for doesn&#39;t exist...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="rounded-full px-8 bg-[#e8b4d0] hover:bg-[#e8b4d0]/80 text-white border-none transition-all hover:scale-105 active:scale-95">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all hover:scale-105 active:scale-95"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </motion.div>

        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-[#e8b4d0]/5 dark:bg-[#e8b4d0]/2 rounded-full blur-3xl"
              animate={{
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

