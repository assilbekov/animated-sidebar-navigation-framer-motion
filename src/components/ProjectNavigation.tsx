

interface ProjectNavigationProps {
  isOpen: boolean;
}

export const ProjectNavigation = ({isOpen}: ProjectNavigationProps) => {
  return (
    <div className={`flex flex-col gap-8 h-full w-64 absolute bg-neutral-900 ml-0 border-r border-neutral-800 p-5 ${isOpen ? "left-64" : "left-20"}`}></div>
  )
}