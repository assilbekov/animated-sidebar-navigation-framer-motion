import { ChevronRightIcon } from "@heroicons/react/24/outline";

type ProjectLinkProps = {
  iconClassName: string;
  label: React.ReactNode;
  href?: string;
};

export const ProjectLink = ({
  iconClassName,
  label,
  href,
}: ProjectLinkProps) => {
  return (
    <a
      href={href}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-slate-50 stroke-slate-200 text-slate-200 hover:text-slate-50 place-items-center gap-3 hover:bg-slate-700/30 transition-colors duration-100"
    >
      <div
        className={`min-w-4 mx-2 rounded-full aspect-square ${iconClassName}`}
      />
      <div className="flex overflow-clip place-items-center justify-between w-full">
        <p className="text-inherit truncate whitespace-nowrap tracking-wide">
          {label}
        </p>
        <ChevronRightIcon className="stroke-inherit stroke-[0.75] min-w-6 w-6" />
      </div>
    </a>
  );
};
