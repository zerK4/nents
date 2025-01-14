"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const firstWord = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const linkVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    hover: { scale: 1.1 },
  };

  const handleDocsClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTransitioning(true);

    setTimeout(() => {
      router.push("/docs/multiStepForm");
    }, 2000); // Adjust timing based on animation duration
  };

  // Split text into individual letters for animation
  const letters = "components".split("");

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-12 bg-black text-white p-4'>
      {isTransitioning && (
        <motion.div
          className='fixed inset-0 flex items-center justify-center bg-black z-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className='flex'>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className='text-6xl md:text-8xl font-bold'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1.5, 1.5, 2, 5],
                  y: [
                    0,
                    0,
                    index % 2 === 0 ? -50 : 50,
                    index % 2 === 0 ? -100 : 100,
                  ],
                }}
                transition={{
                  duration: 2 - index * 0.1,
                  times: [0, 0.2, 0.8, 1],
                  ease: "easeInOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}

      <div className='text-center'>
        <motion.div
          initial='initial'
          animate='animate'
          variants={firstWord}
          className='text-4xl md:text-6xl font-bold mb-4 relative'
        >
          <motion.span variants={item} className='inline-block'>
            compo
          </motion.span>
          <motion.span
            variants={item}
            className='inline-block text-blue-500'
            animate={{
              opacity: [0, 1, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              },
            }}
          >
            -
          </motion.span>
          <motion.span variants={item} className='inline-block'>
            nents
          </motion.span>
          <Link href={"https://www.linkedin.com/in/s-pavel/"} target='_blank'>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className='text-xs md:text-sm text-gray-400 flex justify-end font-normal mt-1'
            >
              by Sebastian Pavel
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <div className='flex gap-6'>
        <motion.div
          variants={linkVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
          transition={{ delay: 0.5 }}
        >
          <Link
            href='https://github.com/zerK4/nents'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors'
          >
            <Github size={20} />
            GitHub
          </Link>
        </motion.div>

        <motion.div
          variants={linkVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
          transition={{ delay: 0.7 }}
        >
          <button
            onClick={handleDocsClick}
            className='flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors'
          >
            Docs →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
