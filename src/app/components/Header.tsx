"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Resume", href: "https://www.figma.com/...", isExternal: true },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Management", href: "/Management" },
  ];

  const pathname = usePathname();

  return (
    <header className="font-space flex justify-between px-6 items-center pb-10 relative z-50">
      <h1 className="border-b-[3px] border-[#FF5F1F] inline-block sm:text-md lg:text-2xl font-bold text-white">
        <Link href="/">Arby</Link>
      </h1>

      <nav className="hidden md:block">
        <ul className="flex gap-10 text-lg text-gray-400">
          {navLinks.map((link) => {
            const isActive =
              !link.isExternal &&
              pathname.toLowerCase() === link.href.toLowerCase();

            return (
              <li
                key={link.name}
                className="relative flex flex-col items-center"
              >
                {link.isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      isActive ? "text-[#FF5F1F]" : "hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -bottom-3 w-2 h-2 bg-[#FF5F1F] rounded-full"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="mailto:arby.jegede@gmail.com"
          className="hidden sm:block bg-[#782E14] shadow-md text-white py-3 px-8 rounded-full hover:bg-[#782E14] hover:shadow-neon transition-all duration-300"
        >
          Contact me
        </a>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 z-[60]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[50]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[60%] sm:w-[50%] bg-[#151515] border-l border-white/10 p-10 pt-32 z-[55] shadow-2xl"
            >
              <ul className="flex flex-col gap-8 text-2xl text-gray-300">
                {navLinks.map((link) => (
                  <li
                    key={link.name}
                    className="hover:text-[#FF5F1F] transition-colors"
                  >
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} onClick={toggleMenu}>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <a
                    href="mailto:arby.jegede@gmail.com"
                    className="text-[#FF5F1F] font-bold"
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
