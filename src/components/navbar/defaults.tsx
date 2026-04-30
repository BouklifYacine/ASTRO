import { Book, Sunset, Trees, Zap } from "lucide-react";

import type { MenuItem, NavbarAction, NavbarLogo } from "@/components/navbar/types";

export const defaultNavbarLogo: NavbarLogo = {
  url: "#",
  title: "PeakLab",
};

export const defaultMenu: MenuItem[] = [
  {
    title: "Services",
    url: "#",
    items: [
      {
        title: "Audit SEO",
        description: "Analyse technique, contenu et opportunites de croissance",
        icon: <Book className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Site vitrine",
        description: "Conception rapide et conversion orientee business",
        icon: <Trees className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Refonte",
        description: "Refondre l'existant sans perdre en performance",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Automatisation",
        description: "Flux, CRM et integrations pour gagner du temps",
        icon: <Zap className="size-5 shrink-0" />,
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
        title: "Supabase",
        description: "Base de donnees, auth et backend moderne",
        icon: <Trees className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "OpenAI",
        description: "Agents, chatbots et workflows IA utiles",
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
        description: "Verifier les points cles avant une mise en ligne",
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
  {
    title: "Blog",
    url: "#",
  },
];

export const defaultCta: NavbarAction = {
  text: "Prendre rendez-vous",
  url: "#",
};

export const defaultContactUrl = "#";
