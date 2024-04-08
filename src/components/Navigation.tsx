import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  Square2StackIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { NavigationLink } from "./NavigationLink";
import { ProjectLink } from "./ProjectLink";
import { ProjectNavigation } from "./ProjectNavigation";

const containerVariants = {
  close: {
    width: "5rem",
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

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerAnimationContrors = useAnimationControls();
  const svgAnimationControls = useAnimationControls();
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    containerAnimationContrors.start(isOpen ? "open" : "close");
    svgAnimationControls.start(isOpen ? "open" : "close");
  }, [isOpen]);

  const toggleNavigation = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        initial="close"
        animate={containerAnimationContrors}
        variants={containerVariants}
        className="flex flex-col z-10 gap-20 p-5 bg-neutral-950 absolute h-full top-0 left-0 shadow shadow-neutral-600"
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full"></div>
          <button className="p-1 rounded-full flex" onClick={toggleNavigation}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              variants={svgVariants}
              animate={svgAnimationControls}
              transition={{ duration: 0.5, type: "spring" }}
              stroke="currentColor"
              className="w-8 h-8 stroke-neutral-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </motion.svg>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <NavigationLink
            icon={
              <ChartBarIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
            }
            label="Dashboard"
          />
          <NavigationLink
            icon={
              <Square2StackIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
            }
            label="Projects"
          />
          <NavigationLink
            icon={
              <DocumentCheckIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
            }
            label="Tasks"
          />
          <NavigationLink
            icon={
              <ChartPieIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
            }
            label="Reporting"
          />
          <NavigationLink
            icon={
              <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
            }
            label="Users"
          />
        </div>
        <div className="flex flex-col gap-3">
          <ProjectLink
            iconClassName="bg-pink-700 border-pink-600"
            label="Virtual Reality"
            onClick={setSelectedProject}
          />
          <ProjectLink
            iconClassName="bg-indigo-700 border-indigo-600"
            label="Augmented Reality"
            onClick={setSelectedProject}
          />
          <ProjectLink
            iconClassName="bg-cyan-700 border-cyan-600"
            label="Mixed Reality"
            onClick={setSelectedProject}
          />
          <ProjectLink
            iconClassName="bg-yellow-700 border-yellow-600"
            label="Artificial Intelligence"
            onClick={setSelectedProject}
          />
        </div>
      </motion.nav>
      <AnimatePresence>
        {selectedProject && <ProjectNavigation isOpen={isOpen} />}
      </AnimatePresence>
    </>
  );
};
