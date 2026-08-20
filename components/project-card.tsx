"use client"

import { useLanguage } from "@/components/language-provider"
import { getTagColor } from "@/lib/tag-colors"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage()

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
      <h3 className="text-xl font-bold text-[#2F2F33]">
        {t.projects.cardTitle}
      </h3>
      <p className="mt-1 text-sm text-[#71717A]">{t.projects.cardTag}</p>

      <div className="mt-5 aspect-4/3 w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100" />

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => {
          const color = getTagColor(tag)
          return (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-medium ${color.bg} ${color.text}`}
            >
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}
