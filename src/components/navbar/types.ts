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
  src: string;
  alt: string;
  title: string;
}

export interface MobileExtraLink {
  name: string;
  url: string;
}

export interface NavbarAuthLink {
  text: string;
  url: string;
}

export interface NavbarAuth {
  login: NavbarAuthLink;
  signup: NavbarAuthLink;
}

export interface Navbar1Props {
  logo?: NavbarLogo;
  menu?: MenuItem[];
  mobileExtraLinks?: MobileExtraLink[];
  auth?: NavbarAuth;
}
