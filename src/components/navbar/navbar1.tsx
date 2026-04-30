import {
  defaultAuth,
  defaultMenu,
  defaultMobileExtraLinks,
  defaultNavbarLogo,
} from "@/components/navbar/defaults";
import { NavbarDesktop } from "@/components/navbar/navbar-desktop";
import { NavbarMobile } from "@/components/navbar/navbar-mobile";
import type { Navbar1Props } from "@/components/navbar/types";

export function Navbar1({
  logo = defaultNavbarLogo,
  menu = defaultMenu,
  mobileExtraLinks = defaultMobileExtraLinks,
  auth = defaultAuth,
}: Navbar1Props) {
  return (
    <section className="py-4">
      <div className="container">
        <NavbarDesktop logo={logo} menu={menu} auth={auth} />
        <NavbarMobile
          logo={logo}
          menu={menu}
          mobileExtraLinks={mobileExtraLinks}
          auth={auth}
        />
      </div>
    </section>
  );
}
