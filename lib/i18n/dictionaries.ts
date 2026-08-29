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
      contact: "Contato",
    },
    hero: {
      role: "UI/UX Designer & Motion Graphic",
      greeting: "Olá, eu sou",
      bio: "UI/UX designer de Campinas-SP, {age} anos, com base em Ciência da Computação. Foco em experiência do usuário, com o audiovisual como diferencial.",
    },
    projects: {
      heading: "Projetos",
      cardTitle: "Projeto em breve",
      cardTag: "Em construção",
      viewProject: "Acessar projeto",
      searchLabel: "Buscar",
      searchPlaceholder: "Buscar por título...",
      yearLabel: "Ano",
      yearPlaceholder: "Todos os anos",
      workLabel: "Trabalho",
      workPlaceholder: "Todas",
      typeLabel: "Projeto",
      typePlaceholder: "Todos",
      clear: "Limpar",
      noResults: "Nenhum projeto encontrado",
      noResultsHint: "Tente buscar por outro termo",
      clearFilters: "Limpar Filtros",
      filter: "Filtrar",
      filterModalTitle: "Filtrar projetos",
      cancel: "Cancelar",
      backToProjects: "Voltar para projetos",
      backShort: "Voltar",
      nextProject: "Conhecer próximo projeto",
      nextShort: "Próximo",
      videoTitle: "Vídeo do projeto",
    },
    contact: {
      heading: "Entre em Contato",
      description:
        "Tem um projeto em mente ou só quer trocar uma ideia? Me manda uma mensagem.",
      nameLabel: "Nome",
      namePlaceholder: "Nome",
      emailLabel: "Email",
      emailPlaceholder: "Email",
      messageLabel: "Mensagem",
      messagePlaceholder: "Digite sua mensagem",
      submit: "Enviar mensagem",
      submitting: "Enviando...",
      success: "Mensagem enviada!",
      error: "Não foi possível enviar. Tente de novo ou use os links ao lado.",
      linksLabel: "Ou me encontre em",
      resume: "Currículo",
    },
    footer: {
      tagline:
        "Criando interfaces que as pessoas sentem, não apenas veem.",
      navigationLabel: "Navegação",
      socialsLabel: "Redes sociais",
      rights: "© 2026 Geovani Orsoli Gongora. Todos os direitos reservados.",
    },
    common: {
      toggleLanguage: "Alternar idioma",
      previousImage: "Imagem anterior",
      nextImage: "Próxima imagem",
      goToImage: "Ir para imagem {n}",
      zoomImage: "Ampliar imagem: {alt}",
      close: "Fechar",
    },
  },
  "en-US": {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      role: "UI/UX Designer & Motion Graphic",
      greeting: "Hi, I'm",
      bio: "UI/UX designer from Campinas, Brazil, {age} years old, with a background in Computer Science. Focused on user experience, with motion as the edge.",
    },
    projects: {
      heading: "Projects",
      cardTitle: "Project coming soon",
      cardTag: "In progress",
      viewProject: "View project",
      searchLabel: "Search",
      searchPlaceholder: "Search by title...",
      yearLabel: "Year",
      yearPlaceholder: "All years",
      workLabel: "Work",
      workPlaceholder: "All",
      typeLabel: "Project",
      typePlaceholder: "All",
      clear: "Clear",
      noResults: "No projects found",
      noResultsHint: "Try a different search term",
      clearFilters: "Clear Filters",
      filter: "Filter",
      filterModalTitle: "Filter projects",
      cancel: "Cancel",
      backToProjects: "Back to projects",
      backShort: "Back",
      nextProject: "See next project",
      nextShort: "Next",
      videoTitle: "Project video",
    },
    contact: {
      heading: "Get in Touch",
      description:
        "Have a project in mind or just want to chat? Send me a message.",
      nameLabel: "Name",
      namePlaceholder: "Name",
      emailLabel: "Email",
      emailPlaceholder: "Email",
      messageLabel: "Message",
      messagePlaceholder: "Type your message",
      submit: "Send message",
      submitting: "Sending...",
      success: "Message sent!",
      error: "Couldn't send it. Try again or use the links on the side.",
      linksLabel: "Or find me on",
      resume: "Resume",
    },
    footer: {
      tagline: "Crafting interfaces you can feel, not just see.",
      navigationLabel: "Navigation",
      socialsLabel: "Socials",
      rights: "© 2026 Geovani Orsoli Gongora. All rights reserved.",
    },
    common: {
      toggleLanguage: "Toggle language",
      previousImage: "Previous image",
      nextImage: "Next image",
      goToImage: "Go to image {n}",
      zoomImage: "Zoom image: {alt}",
      close: "Close",
    },
  },
} as const satisfies Record<Locale, unknown>

export type Dictionary = (typeof dictionaries)[Locale]

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
