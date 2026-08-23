"use client"

import { useMemo, useState } from "react"
import { Button } from "@heroui/react"

import { useLanguage } from "@/components/language-provider"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilters } from "@/components/project-filters"
import { Reveal } from "@/components/ui/reveal"
import { PROJECTS } from "@/lib/projects"

export function ProjectsSection() {
  const { t } = useLanguage()
  const [query, setQuery] = useState("")
  const [year, setYear] = useState<string | null>(null)
  const [workTags, setWorkTags] = useState<string[]>([])
  const [typeTags, setTypeTags] = useState<string[]>([])

  const hasActiveFilters =
    query.trim().length > 0 || year !== null || workTags.length > 0 || typeTags.length > 0

  function handleClear() {
    setQuery("")
    setYear(null)
    setWorkTags([])
    setTypeTags([])
  }

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return PROJECTS.filter((project) => {
      const title = project.title ?? t.projects.cardTitle
      const matchesQuery =
        normalizedQuery.length === 0 ||
        title.toLowerCase().includes(normalizedQuery)
      const matchesYear = !year || String(project.year) === year
      const matchesWork =
        workTags.length === 0 || workTags.some((tag) => project.tags.includes(tag))
      const matchesType =
        typeTags.length === 0 || typeTags.some((tag) => project.tags.includes(tag))
      return matchesQuery && matchesYear && matchesWork && matchesType
    })
  }, [query, year, workTags, typeTags, t.projects.cardTitle])

  return (
    <section id="projetos" className="px-6 pb-24 sm:px-16">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
          {t.projects.heading}
        </h2>
        <ProjectFilters
          query={query}
          onQueryChange={setQuery}
          year={year}
          onYearChange={setYear}
          workTags={workTags}
          onWorkTagsChange={setWorkTags}
          typeTags={typeTags}
          onTypeTagsChange={setTypeTags}
          hasActiveFilters={hasActiveFilters}
          onClear={handleClear}
        />
      </Reveal>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} variant="media" delay={(index % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-bold text-zinc-900">{t.projects.noResults}</p>
            <p className="text-sm text-zinc-500">{t.projects.noResultsHint}</p>
          </div>
          <Button
            variant="tertiary"
            size="sm"
            onPress={handleClear}
            className="rounded-[8px]"
          >
            {t.projects.clearFilters}
          </Button>
        </div>
      )}
    </section>
  )
}
