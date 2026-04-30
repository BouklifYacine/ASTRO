import type { NavbarLogo } from "@/components/navbar/types";

interface NavbarLogoProps {
  logo: NavbarLogo;
}

export function NavbarLogoLink({ logo }: NavbarLogoProps) {
  return (
    <a href={logo.url} className="flex items-center gap-3 text-white">
      {logo.src ? (
        <img src={logo.src} className="h-8 w-8 rounded-md object-cover" alt={logo.alt ?? logo.title} />
      ) : (
        <span className="flex items-center gap-1">
          <span className="h-4 w-6 rounded-lg bg-white" />
          <span className="h-4 w-2 rounded-lg bg-white/85" />
        </span>
      )}
      <span className="text-[1.1rem] font-semibold tracking-[-0.04em]">{logo.title}</span>
    </a>
  );
}
