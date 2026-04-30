import type { NavbarLogo } from "@/components/navbar/types";

interface NavbarLogoProps {
  logo: NavbarLogo;
}

export function NavbarLogoLink({ logo }: NavbarLogoProps) {
  return (
    <a href={logo.url} className="flex items-center gap-2">
      <img src={logo.src} className="w-8" alt={logo.alt} />
      <span className="text-lg font-semibold">{logo.title}</span>
    </a>
  );
}
