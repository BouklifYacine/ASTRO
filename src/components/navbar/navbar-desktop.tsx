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
    <nav className="hidden w-full items-center rounded-xl bg-black px-4 py-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] lg:flex">
      <div className="flex basis-70 shrink-0 items-center justify-start">
        <NavbarLogoLink logo={logo} />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <NavigationMenu>
          <NavigationMenuList className="gap-3">
            {menu.map((item) => (
              <DesktopNavbarMenuItem key={item.title} item={item} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex basis-[17.5rem] shrink-0 items-center justify-end gap-3">
        <Button
          asChild
          className="h-10 rounded-md bg-white px-5 text-[0.88rem] font-semibold text-black shadow-none hover:bg-white/90"
        >
          <a href={cta.url}>{cta.text}</a>
        </Button>
        <a
          href={contactUrl}
          aria-label="Contacter BoyaStudio"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_0_8px_rgba(37,211,102,0.16)] transition-transform hover:scale-[1.03]"
        >
          <img
            src={whatsappIcon.src}
            alt="Logo Whatsapp"
            aria-hidden="true"
            className="h-5 w-5"
          />
        </a>
      </div>
    </nav>
  );
}
