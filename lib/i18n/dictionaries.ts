export const locales = ["pt-BR", "en-US"] as const

export type Locale = (typeof locales)[number]

export const localeLabels: Record<Locale, string> = {
  "pt-BR": "PT-BR",
  "en-US": "EN-US",
}

const dictionaries = {
  "pt-BR": {
    nav: {
      home: "Home",
      projects: "Projetos",
      about: "Sobre mim",
      contact: "Contato",
    },
    hero: {
      role: "UI/UX Designer & Motion Graphic",
      greeting: "Olá, eu sou",
      bio: "UI/UX designer de Campinas-SP, 20 anos, com base em Ciência da Computação. Foco em experiência do usuário, com o audiovisual como diferencial: uno design que funciona e interfaces que se movem bem.",
    },
    projects: {
      heading: "Projetos",
      cardTitle: "Projeto em breve",
      cardTag: "Em construção",
      searchPlaceholder: "Buscar por título...",
      tagsPlaceholder: "Todas as tags",
      noResults: "Nenhum projeto encontrado.",
    },
    about: {
      heading: "Sobre mim",
      placeholder: "Em breve.",
    },
    contact: {
      heading: "Contato",
      placeholder: "Em breve.",
    },
    footer: {
      tagline:
        "Criando interfaces que as pessoas sentem, não apenas veem.",
      navigationLabel: "Navegação",
      socialsLabel: "Redes sociais",
      rights: "© 2026 Geovani Orsoli Gongora. Todos os direitos reservados.",
    },
  },
  "en-US": {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About me",
      contact: "Contact",
    },
    hero: {
      role: "UI/UX Designer & Motion Graphic",
      greeting: "Hi, I'm",
      bio: "UI/UX designer from Campinas, Brazil, 20 years old, with a background in Computer Science. Focused on user experience, with motion as the edge: design that works and interfaces that move well.",
    },
    projects: {
      heading: "Projects",
      cardTitle: "Project coming soon",
      cardTag: "In progress",
      searchPlaceholder: "Search by title...",
      tagsPlaceholder: "All tags",
      noResults: "No projects found.",
    },
    about: {
      heading: "About me",
      placeholder: "Coming soon.",
    },
    contact: {
      heading: "Contact",
      placeholder: "Coming soon.",
    },
    footer: {
      tagline: "Crafting interfaces you can feel, not just see.",
      navigationLabel: "Navigation",
      socialsLabel: "Socials",
      rights: "© 2026 Geovani Orsoli Gongora. All rights reserved.",
    },
  },
} as const satisfies Record<Locale, unknown>

export type Dictionary = (typeof dictionaries)[Locale]

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
