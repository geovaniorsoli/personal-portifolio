"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { getTagColor, getTagLabel } from "@/lib/tag-colors"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  const { t, locale } = useLanguage()
  const [loaded, setLoaded] = useState(false)
  const title = project.title ?? t.projects.cardTitle
  const subtitle =
    (locale === "en-US" ? project.subtitleEn : undefined) ??
    project.subtitle ??
    t.projects.cardTag
  const isLinked = Boolean(project.slug)
  const meta = project.year ? String(project.year) : ""

  const card = (
    <div
      className={`group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 ease-out sm:p-6 ${
        isLinked
          ? "cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-zinc-900/10"
          : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-[#2F2F33]">{title}</h3>
        {meta && (
          <span className="shrink-0 pt-1 text-xs font-medium text-zinc-400">
            {meta}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-[#71717A]">{subtitle}</p>

      <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
        {project.image && (
          <>
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-zinc-200" aria-hidden />
            )}
            <Image
              src={project.image}
              alt={title}
              fill
              style={{ objectPosition: project.imagePosition ?? "center" }}
              onLoad={() => setLoaded(true)}
              className={`object-cover transition-opacity duration-300 ease-out ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => {
          const color = getTagColor(tag)
          return (
            <span
              key={tag}
              className={`rounded-lg border px-3 py-1 text-xs font-medium ${color.bg} ${color.border} ${color.text}`}
            >
              {getTagLabel(tag, locale)}
            </span>
          )
        })}

        {isLinked && (
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-500 transition-colors group-hover:bg-blue-200">
            {t.projects.viewProject}
            <ArrowUpRight className="size-4" />
          </span>
        )}
      </div>
    </div>
  )

  if (!project.slug) return card

  return (
    <Link href={`/projetos/${project.slug}`} className="block h-full">
      {card}
    </Link>
  )
}
