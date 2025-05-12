/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useScroll } from "framer-motion";
export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#footer" },
  ];

  // Scroll to top for Home link
  const handleNavClick = (e, href) => {
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Otherwise, let anchor work as normal for in-page navigation
  };

  return (
    <div>
      <motion.div className="fixed z-90"
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    originX: 0,
                    backgroundColor: "#38BDF8",
                }}
            />
    <nav className="bg-[#0B101D]/70 backdrop-blur-md h-[9vh] text-[#ADB3BD] flex justify-between items-center px-12 w-full fixed z-50">
      <div className="logo flex items-center">
        <h1 className="text-white font-bold text-[26px] cursor-pointer">Port</h1>
        <h1 className="text-[#309FD3] font-bold text-[26px] cursor-pointer">folio</h1>
      </div>
      <div className="links flex gap-8 font-semibold text-[17px]">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="hover:text-white transition-colors duration-300 cursor-pointer"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
    </div>
  );
};
