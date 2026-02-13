"use client";

import { FaVolumeHigh } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
  },
};

const Introduction = () => {
  const playPronunciation = () => {
    const audio = new Audio("/audio/JUBA.mp3");

    audio.play().catch((error) => {
      console.error("Playback failed:", error);
    });
  };

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="mb-10 flex flex-col gap-4 lg:flex-row lg:justify-between"
    >
      <div className="lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[1.6rem] block tracking-wide font-normal font-space text-white/70 mb-4">
        <span>I am Abisola Jegede,</span>
        <div>a Jack of all trades</div>
        <div>and master of ...</div>
      </div>
      <div>
        <div className="text-[15px] flex items-center my-2">
          <span className="font-mono xs:text-sm sm:text-sm md:text-md lg:text-xl text-white/80">
            Pronunciation{" "}
          </span>

          <button
            onClick={playPronunciation}
            className="ml-3 text-xl text-white hover:scale-125 hover:text-[#FF5F1F] transition-all cursor-pointer"
            aria-label="Play pronunciation"
          >
            <FaVolumeHigh />
          </button>
        </div>
        <span className="font-thin text-2xl text-white/60">
          /Ah: bi: soh: la/
        </span>
      </div>
    </motion.section>
  );
};

export default Introduction;
