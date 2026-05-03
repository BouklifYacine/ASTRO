import {
  defaultContactUrl,
  defaultCta,
  defaultMenu,
  defaultNavbarLogo,
} from "@/components/navbar/defaults";
import { NavbarDesktop } from "@/components/navbar/navbar-desktop";
import { NavbarMobile } from "@/components/navbar/navbar-mobile";
import type { Navbar1Props } from "@/components/navbar/types";

export function Navbar1({
  logo = defaultNavbarLogo,
  menu = defaultMenu,
  cta = defaultCta,
  contactUrl = defaultContactUrl,
}: Navbar1Props) {
  return (
    <section className="px-3 py-4 sm:px-5">
      <div className="mx-auto w-full max-w-280">
        <NavbarDesktop
          logo={logo}
          menu={menu}
          cta={cta}
          contactUrl={contactUrl}
        />
        <NavbarMobile
          logo={logo}
          menu={menu}
          cta={cta}
          contactUrl={contactUrl}
        />
      </div>
    </section>
  );
}
