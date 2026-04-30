import { NavbarLogoLink } from "@/components/navbar/navbar-logo";
import { DesktopNavbarMenuItem } from "@/components/navbar/navbar-menu-item";
import type { MenuItem, NavbarAction, NavbarLogo } from "@/components/navbar/types";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import whatsappIcon from "../../assets/whatsapp-symbol-logo-svgrepo-com.svg";

interface NavbarDesktopProps {
  logo: NavbarLogo;
  menu: MenuItem[];
  cta: NavbarAction;
  contactUrl: string;
}

export function NavbarDesktop({ logo, menu, cta, contactUrl }: NavbarDesktopProps) {
  return (
    <nav className="hidden items-center justify-between rounded-[22px] bg-black px-5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.18)] lg:flex">
      <div className="flex items-center gap-8">
        <NavbarLogoLink logo={logo} />
        <div className="flex items-center">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="gap-1">
              {menu.map((item) => (
                <DesktopNavbarMenuItem key={item.title} item={item} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          asChild
          className="h-11 rounded-md bg-white px-6 text-[0.98rem] font-semibold text-black shadow-none hover:bg-white/90"
        >
          <a href={cta.url}>{cta.text}</a>
        </Button>
        <a
          href={contactUrl}
          aria-label="Contacter PeakLab"
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_0_10px_rgba(37,211,102,0.16)] transition-transform hover:scale-[1.03]"
        >
          <img
            src={whatsappIcon.src}
            alt="Logo Whatsapp"
            aria-hidden="true"
            className="h-6 w-6"
          />
        </a>
      </div>
    </nav>
  );
}
