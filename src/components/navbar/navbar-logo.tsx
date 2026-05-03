import type { NavbarLogo } from "@/components/navbar/types";

interface NavbarLogoProps {
  logo: NavbarLogo;
}

export function NavbarLogoLink({ logo }: NavbarLogoProps) {
  return (
    <a href={logo.url} className="flex items-center text-white">
      <span className="text-xl font-semibold tracking-tighter">{logo.title}</span>
    </a>
  );
}
