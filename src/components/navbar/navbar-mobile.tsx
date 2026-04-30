import { Menu, X } from "lucide-react";
import { useState } from "react";

import { NavbarLogoLink } from "@/components/navbar/navbar-logo";
import { MobileNavbarMenuItem } from "@/components/navbar/navbar-menu-item";
import type { MenuItem, NavbarAction, NavbarLogo } from "@/components/navbar/types";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import whatsappIcon from "../../assets/whatsapp-symbol-logo-svgrepo-com.svg";

interface NavbarMobileProps {
  logo: NavbarLogo;
  menu: MenuItem[];
  cta: NavbarAction;
  contactUrl: string;
}

export function NavbarMobile({ logo, menu, cta, contactUrl }: NavbarMobileProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <div className="rounded-[22px] bg-black px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
        <div className="flex items-center justify-between">
          <NavbarLogoLink logo={logo} />
          <div className="flex items-center gap-3">
            <a
              href={contactUrl}
              aria-label="Contacter PeakLab"
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_0_10px_rgba(37,211,102,0.16)]"
            >
              <img
                src={whatsappIcon.src}
                alt=""
                aria-hidden="true"
                className="h-7 w-7 object-contain"
              />
            </a>
            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="grid h-10 w-10 place-items-center rounded-full text-white/65 transition-colors hover:text-white"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="mt-3 rounded-[22px] border border-white/10 bg-black px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col"
          >
            {menu.map((item) => (
              <MobileNavbarMenuItem key={item.title} item={item} />
            ))}
          </Accordion>
          <div className="mt-6 flex items-end justify-between gap-4">
            <Button
              asChild
              className="h-11 rounded-2xl bg-white px-6 text-[0.98rem] font-semibold text-black shadow-none hover:bg-white/90"
            >
              <a href={cta.url}>{cta.text}</a>
            </Button>
            <span className="mb-1 mr-1 h-3.5 w-3.5 rounded-full bg-[#ff3b3b]" />
          </div>
        </div>
      )}
    </div>
  );
}
