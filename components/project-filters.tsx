"use client"

import { Input } from "@heroui/react"

import { useLanguage } from "@/components/language-provider"
import { TagCombobox } from "@/components/tag-combobox"
import { PROJECT_TAGS } from "@/lib/projects"

interface ProjectFiltersProps {
  query: string
  onQueryChange: (value: string) => void
  selectedTag: string | null
  onSelectedTagChange: (tag: string | null) => void
}

export function ProjectFilters({
  query,
  onQueryChange,
  selectedTag,
  onSelectedTagChange,
}: ProjectFiltersProps) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder={t.projects.searchPlaceholder}
        aria-label={t.projects.searchPlaceholder}
        className="w-full sm:w-56"
      />

      <TagCombobox
        tags={PROJECT_TAGS}
        value={selectedTag}
        onChange={onSelectedTagChange}
        placeholder={t.projects.tagsPlaceholder}
        allLabel={t.projects.tagsPlaceholder}
      />
    </div>
  )
}
