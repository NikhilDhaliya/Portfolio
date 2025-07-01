/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useLocoScroll } from "./ScrollProvider";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
  const { scroll } = useLocoScroll();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "TechStack", href: "#skills" },
    { name: "Contact", href: "#footer" },
  ];

  // Scroll to top for Home link
  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (scroll) {
      if (href === "#home") {
        scroll.scrollTo(0, { duration: 800, disableLerp: false });
      } else {
        const el = document.querySelector(href);
        if (el) {
          scroll.scrollTo(el, { duration: 800, disableLerp: false });
        }
      }
    } else {
      // fallback
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <div>
      <motion.div
        className="fixed z-90"
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "gray",
        }}
      />
      <nav className="bg-black/70 backdrop-blur-md h-16 md:h-[9vh] text-white flex justify-between items-center px-4 md:px-12 w-full fixed left-0 top-0 z-50 border-b border-white/10 shadow-lg shadow-white/5">
        <div className="logo flex items-center">
          <h1 className="text-white font-bold text-[22px] md:text-[26px] cursor-pointer">
            Port
          </h1>
          <h1 className="text-white font-bold text-[22px] md:text-[26px] cursor-pointer">
            folio
          </h1>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex links gap-8 font-semibold text-[16px] md:text-[17px]">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-7 rounded bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-1 w-7 rounded bg-white transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-7 rounded bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {/* Mobile Menu & Overlay */}
        {open && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 w-full h-screen bg-black/40 z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            {/* Menu */}
            <div className="fixed top-0 left-0 w-full h-screen bg-[#0B101D] flex flex-col items-center justify-center gap-10 text-xl font-semibold z-50 md:hidden">
              {links.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="hover:text-white transition-colors duration-300 cursor-pointer text-2xl"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </>
        )}
      </nav>
    </div>
  );
};
export default Navbar;