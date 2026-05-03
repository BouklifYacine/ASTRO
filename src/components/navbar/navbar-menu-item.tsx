import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { MenuItem } from "@/components/navbar/types";

interface NavbarMenuItemProps {
  item: MenuItem;
}

export function DesktopNavbarMenuItem({ item }: NavbarMenuItemProps) {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="h-auto rounded-full bg-transparent px-2.5 py-1.5  font-medium text-white hover:bg-white/8 hover:text-white focus:bg-white/8 focus:text-white data-active:bg-white/8 data-[state=open]:bg-white/8">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="rounded-3xl border border-white/10 bg-black/96 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur">
          <ul className="grid w-[320px] gap-1">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <a
                    className="flex select-none gap-4 rounded-2xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/6"
                    href={subItem.url}
                  >
                    <span className="mt-0.5 text-white/90">{subItem.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-white/55">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="inline-flex h-auto items-center justify-center rounded-full px-2.5 py-1.5 text-[0.86rem] font-medium text-white transition-colors hover:bg-white/8"
      href={item.url}
    >
      {item.title}
    </a>
  );
}

export function MobileNavbarMenuItem({ item }: NavbarMenuItemProps) {
  if (item.items) {
    return (
      <AccordionItem
        key={item.title}
        value={item.title}
        className="border-b border-white/10 py-1 last:border-b-0"
      >
        <AccordionTrigger className="py-4 text-left text-[1.08rem] font-medium text-white hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-3 rounded-2xl px-3 py-3 leading-none outline-none transition-colors hover:bg-white/6"
              href={subItem.url}
            >
              <span className="mt-0.5 text-white/80">{subItem.icon}</span>
              <div>
                <div className="text-sm font-semibold text-white">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-white/55">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="block border-b border-white/10 py-5 text-[1.08rem] font-medium text-white last:border-b-0"
    >
      {item.title}
    </a>
  );
}
