import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  close: {
    width: "4rem",
    transition: {
      type: "spring",
      dumping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      dumping: 15,
      duration: 0.5,
    },
  },
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerAnimationContrors = useAnimationControls();

  useEffect(() => {
    containerAnimationContrors.start(isOpen ? "open" : "close");
  }, [isOpen]);

  const toggleNavigation = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial="close"
      animate={containerAnimationContrors}
      variants={containerVariants}
      className="flex flex-col z-10 gap-20 p-5 bg-neutral-950 absolute h-full top-0 left-0 shadow shadow-neutral-600"
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full"></div>
        <button className="p-1 rounded-full flex" onClick={toggleNavigation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-neutral-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};
