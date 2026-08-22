"use client"

import { useMemo, useState } from "react"

import { useLanguage } from "@/components/language-provider"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilters } from "@/components/project-filters"
import { PROJECTS } from "@/lib/projects"

export function ProjectsSection() {
  const { t } = useLanguage()
  const [query, setQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return PROJECTS.filter((project) => {
      const title = project.title ?? t.projects.cardTitle
      const matchesQuery =
        normalizedQuery.length === 0 ||
        title.toLowerCase().includes(normalizedQuery)
      const matchesTag = !selectedTag || project.tags.includes(selectedTag)
      return matchesQuery && matchesTag
    })
  }, [query, selectedTag, t.projects.cardTitle])

  return (
    <section id="projetos" className="px-6 pb-24 sm:px-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
          {t.projects.heading}
        </h2>
        <ProjectFilters
          query={query}
          onQueryChange={setQuery}
          selectedTag={selectedTag}
          onSelectedTagChange={setSelectedTag}
        />
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-500">{t.projects.noResults}</p>
      )}
    </section>
  )
}
