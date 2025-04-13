"use client";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

function Sponsers() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center max-w-xl mx-auto space-y-6 text-white px-4 py-8 rounded-2xl min-h-[400px]"
      style={{
        border: "4px solid transparent",
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden",
      }}
      animate={{
        borderColor: [
          "#FF007F", // Pink
          "#FF6600", // Orange
          "#FF0066", // Red
          "#FF00FF", // Magenta
          "#00FFFF", // Cyan
          "#FF007F", // Back to Pink
        ],
      }}
      transition={{
        duration: 6, 
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {/* Squid game theme image */}
      <Image
        src="/images/sponsor-soldiers.png"
        alt="Soldiers Image"
        width={500}
        height={500}
        className="object-contain"
      />

      {/* Sponsored by text */}
      <h1 className="text-4xl font-extrabold tracking-wide text-center text-red-400 drop-shadow-lg">
        Sponsored by
      </h1>

      {/* Sponsor Logo + Socials */}
      <div className="relative flex flex-col items-center space-y-4 p-6 rounded-2xl z-10 bg-black border border-pink-600 before:absolute before:inset-1 before:rounded-2xl before:-z-10 before:animate-glow before:bg-gradient-to-r before:from-pink-500 before:via-red-500 before:to-pink-500 before:blur-sm hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src="/images/null-kolkata.png"
          alt="null-logo"
          width={90}
          height={90}
          className="object-contain"
        />

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl text-yellow-400">
          <a
            href="https://www.linkedin.com/company/null-kolkata-chapter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-white transition duration-300" />
          </a>
          <a
            href="https://www.facebook.com/nullkolkata"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-white transition duration-300" />
          </a>
          <a href="https://x.com/nullkol?s=11" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-white transition duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Sponsers;
