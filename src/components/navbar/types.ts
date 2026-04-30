import type { JSX } from "react";

export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

export interface NavbarLogo {
  url: string;
  src?: string;
  alt?: string;
  title: string;
}

export interface NavbarAction {
  text: string;
  url: string;
}

export interface Navbar1Props {
  logo?: NavbarLogo;
  menu?: MenuItem[];
  cta?: NavbarAction;
  contactUrl?: string;
}
