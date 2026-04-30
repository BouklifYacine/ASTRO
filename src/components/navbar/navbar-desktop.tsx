import { NavbarLogoLink } from "@/components/navbar/navbar-logo";
import { DesktopNavbarMenuItem } from "@/components/navbar/navbar-menu-item";
import type { MenuItem, NavbarAuth, NavbarLogo } from "@/components/navbar/types";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface NavbarDesktopProps {
  logo: NavbarLogo;
  menu: MenuItem[];
  auth: NavbarAuth;
}

export function NavbarDesktop({ logo, menu, auth }: NavbarDesktopProps) {
  return (
    <nav className="hidden justify-between lg:flex">
      <div className="flex items-center gap-6">
        <NavbarLogoLink logo={logo} />
        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((item) => (
                <DesktopNavbarMenuItem key={item.title} item={item} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex gap-2">
        <Button asChild variant="outline" size="sm">
          <a href={auth.login.url}>{auth.login.text}</a>
        </Button>
        <Button asChild size="sm">
          <a href={auth.signup.url}>{auth.signup.text}</a>
        </Button>
      </div>
    </nav>
  );
}
