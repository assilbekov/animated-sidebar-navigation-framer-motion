import { motion } from "framer-motion";

interface ProjectNavigationProps {
  isOpen: boolean;
}

const variants = {
  close: {
    x: -300,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
  },
};

export const ProjectNavigation = ({ isOpen }: ProjectNavigationProps) => {
  return (
    <motion.nav
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={`flex flex-col gap-8 h-screen w-64 absolute bg-neutral-900 ml-0 border-r border-neutral-800 p-5 ${
        isOpen ? "left-64" : "left-20"
      }`}
    ></motion.nav>
  );
};
