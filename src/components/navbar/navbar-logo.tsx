import type { NavbarLogo } from "@/components/navbar/types";

interface NavbarLogoProps {
  logo: NavbarLogo;
}

export function NavbarLogoLink({ logo }: NavbarLogoProps) {
  return (
    <a href={logo.url} className="flex items-center text-white">
      <span className="text-[1.1rem] font-semibold tracking-[-0.04em]">{logo.title}</span>
    </a>
  );
}
