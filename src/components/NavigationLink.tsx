

interface NavigationLinkProps {
  label: React.ReactNode;
  icon: React.ReactNode;
  href: string;
}

export const NavigationLink = ({ href, icon, label }: NavigationLinkProps) => {
  return (
    <a 
    href={href}
    className=""
    >
      {icon}
      <p>{label}</p>
    </a>
  )
}