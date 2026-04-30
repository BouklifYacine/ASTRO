import { Menu } from "lucide-react";

import { NavbarLogoLink } from "@/components/navbar/navbar-logo";
import { MobileNavbarMenuItem } from "@/components/navbar/navbar-menu-item";
import type {
  MenuItem,
  MobileExtraLink,
  NavbarAuth,
  NavbarLogo,
} from "@/components/navbar/types";
import {
  Accordion,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavbarMobileProps {
  logo: NavbarLogo;
  menu: MenuItem[];
  mobileExtraLinks: MobileExtraLink[];
  auth: NavbarAuth;
}

export function NavbarMobile({
  logo,
  menu,
  mobileExtraLinks,
  auth,
}: NavbarMobileProps) {
  return (
    <div className="block lg:hidden">
      <div className="flex items-center justify-between">
        <NavbarLogoLink logo={logo} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <NavbarLogoLink logo={logo} />
              </SheetTitle>
            </SheetHeader>
            <div className="my-6 flex flex-col gap-6">
              <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-4"
              >
                {menu.map((item) => (
                  <MobileNavbarMenuItem key={item.title} item={item} />
                ))}
              </Accordion>
              <div className="border-t py-4">
                <div className="grid grid-cols-2 justify-start">
                  {mobileExtraLinks.map((link) => (
                    <a
                      key={link.name}
                      className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                      href={link.url}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button asChild variant="outline">
                  <a href={auth.login.url}>{auth.login.text}</a>
                </Button>
                <Button asChild>
                  <a href={auth.signup.url}>{auth.signup.text}</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
