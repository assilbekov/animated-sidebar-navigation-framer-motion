interface NavigationLinkProps {
  label: string;
  icon: React.ReactNode;
  href?: string;
}

export const NavigationLink = ({ href, icon, label }: NavigationLinkProps) => {
  return (
    <a
      href={href}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-slate-50 stroke-slate-200 text-slate-200 hover:text-slate-50 place-items-center gap-3 hover:bg-slate-700/30 transition-colors duration-100"
    >
      {icon}
      <p className="text-inherit overflow-clip whitespace-nowrap tracking-wide">
        {label}
      </p>
    </a>
  );
};
