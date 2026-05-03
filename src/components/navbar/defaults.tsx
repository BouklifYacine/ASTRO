import { Book, Sunset, Trees, Zap } from "lucide-react";

import type { MenuItem, NavbarAction, NavbarLogo } from "@/components/navbar/types";

export const defaultNavbarLogo: NavbarLogo = {
  url: "#",
  title: "BoyaStudio",
};

export const defaultMenu: MenuItem[] = [
  {
    title: "Services",
    url: "#",
    items: [
      {
        title: "MVP/POC",
        description: "Prototype rapide pour valider une idee produit",
        icon: <Book className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Site vitrine",
        description: "Site rapide, clair et oriente conversion",
        icon: <Trees className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Refonte",
        description: "Moderniser l'existant sans perdre en performance",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  {
    title: "Stack",
    url: "#",
    items: [
      {
        title: "Astro",
        description: "Front rapide et ultra leger pour le contenu",
        icon: <Zap className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "React",
        description: "Interfaces interactives et composants evolutifs",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "NextJS",
        description: "Framework React pour apps et SEO",
        icon: <Trees className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "OpenAI",
        description: "Agents, chatbots et automatisations IA utiles",
        icon: <Book className="size-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  {
    title: "Free Tools",
    url: "#",
    items: [
      {
        title: "Simulateur ROI",
        description: "Estimer rapidement le gain potentiel d'un projet",
        icon: <Zap className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Checklist SEO",
        description: "Verifier les points cles avant mise en ligne",
        icon: <Book className="size-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  {
    title: "Cas clients",
    url: "#",
  },
  {
    title: "À propos",
    url: "#",
  },
];

export const defaultCta: NavbarAction = {
  text: "Prendre rendez-vous",
  url: "#",
};

export const defaultContactUrl = "#";
