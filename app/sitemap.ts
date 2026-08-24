import type { MetadataRoute } from "next"

import { PROJECTS } from "@/lib/projects"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.filter(
    (project) => project.slug
  ).map((project) => ({
    url: `${SITE_URL}/projetos/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes,
  ]
}
