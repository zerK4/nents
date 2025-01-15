"use client";

import { delay, motion } from "framer-motion";
import Link from "next/link";
import { Github } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Page() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleDocsClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTransitioning(true);

    setTimeout(() => {
      router.push("/docs/multiStepForm");
    }, 2000); // Adjust timing based on animation duration
  };

  return (
    <div className='h-screen w-screen overflow-hidden flex flex-col items-center justify-center gap-12 bg-black text-white p-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [1, 0.4, 0],
          y: [0, -10, -20],
          transition: {
            duration: 0.5,
            staggerChildren: 0.2,
            delay: 1,
          },
        }}
      >
        <h2 className='text-4xl md:text-6xl font-bold mb-4 relative'>nents</h2>
      </motion.div>

      <div className='text-center'>
        <motion.div className='text-4xl md:text-6xl font-bold mb-4 relative'>
          {`compo_nents`.split("").map((letter, index) => {
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isTransitioning ? [1, 1, 1, 0] : 1,
                  scale: isTransitioning ? [1, 1.5, 1.5, 2] : 1,
                  y: isTransitioning
                    ? [
                        0,
                        0,
                        index % 2 === 0 ? -100 : 100,
                        index % 2 === 0 ? -200 : 200,
                      ]
                    : 0,
                }}
                transition={
                  isTransitioning
                    ? {
                        duration: 1.5,
                        times: [0, 0.3, 0.6, 1],
                        ease: "easeInOut",
                      }
                    : {
                        duration: 0.3,
                        delay: 1,
                        ease: "easeOut",
                      }
                }
                className={
                  letter === "_" ? "text-blue-500 inline-block" : "inline-block"
                }
              >
                {letter === "_" ? (
                  <motion.span
                    animate={{
                      opacity: isTransitioning ? 1 : [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: isTransitioning ? 0 : Infinity,
                      repeatType: "loop",
                      times: [0, 0.3, 0.7, 1],
                      repeatDelay: 1.4,
                    }}
                  >
                    _
                  </motion.span>
                ) : (
                  letter
                )}
              </motion.span>
            );
          })}
          <Link href={"https://sepavl.com"} target='_blank'>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isTransitioning ? [1, 0] : [0, 1],
                y: isTransitioning ? [0, -50] : [50, 0],
              }}
              transition={{ delay: isTransitioning ? 0 : 1.4, duration: 0.5 }}
              className='text-xs md:text-sm text-gray-400 flex justify-end font-normal mt-1'
            >
              sepavl.com
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <div className='flex gap-6'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: isTransitioning ? [0, 50] : [-50, 0],
            opacity: isTransitioning ? [1, 0] : [0, 1],
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ delay: isTransitioning ? 0.1 : 0.8 }}
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
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: isTransitioning ? [0, 50] : [-50, 0],
            opacity: isTransitioning ? [1, 0] : [0, 1],
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ delay: isTransitioning ? 0.3 : 1 }}
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
