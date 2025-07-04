"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Introduction", href: "#Introduction" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 z-50 w-full py-4 lg:py-8">
        <div className="container mx-auto max-w-5xl">
          <div
            className="border border-white/15 rounded-[27px] md:rounded-full
                          bg-neutral-950/75 backdrop-blur"
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 items-center p-2 px-4 md:pr-2">
              <Image
                src={logoImage}
                alt="Layers"
                className="h-9 md:h-auto w-auto"
              />

              <div className="hidden lg:flex justify-center items-center">
                <nav className="relative z-20 flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="px-3 py-1 rounded-md cursor-pointer transition-all duration-200 ease-out hover:text-lime-400 hover:-translate-y-1 hover:shadow-lg"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex justify-end gap-4 relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen((o) => !o)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  />
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  />
                </svg>

                <Button
                  variant="secondary"
                  className="hidden md:inline-flex items-center cursor-pointer hover:bg-lime-400 hover:text-black"
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  className="hidden md:inline-flex items-center cursor-pointer hover:bg-black hover:text-white"
                >
                  Sign Up
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="px-3 py-1 rounded-md transition-colors
                                   cursor-pointer hover:text-lime-400"
                      >
                        {link.label}
                      </a>
                    ))}
                    <Button variant="secondary">Log In</Button>
                    <Button variant="primary">Sign Up</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
    </>
  );
}
