"use client"

import { buttonVariants } from "@heroui/styles"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { BackToProjectsButton } from "@/components/back-to-projects-button"
import { useLanguage } from "@/components/language-provider"
import { ProjectCarousel } from "@/components/project-carousel"
import { Reveal } from "@/components/ui/reveal"
import { ZoomableImage } from "@/components/zoomable-image"
import type { Locale } from "@/lib/i18n/dictionaries"
import { PROJECTS, type ContentBlock, type Project } from "@/lib/projects"
import { getTagColor, getTagLabel } from "@/lib/tag-colors"

function pick(text: string, textEn: string | undefined, locale: Locale) {
  return locale === "en-US" && textEn ? textEn : text
}

function renderInlineText(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g)
    .filter(Boolean)
    .map((part, i) => {
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      if (linkMatch) {
        return (
          <Link
            key={i}
            href={linkMatch[2]}
            className="font-semibold text-[#2F2F33] underline underline-offset-2 decoration-zinc-300 transition-colors hover:decoration-zinc-500"
          >
            {linkMatch[1]}
          </Link>
        )
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-[#2F2F33]">
            {part.slice(2, -2)}
          </strong>
        )
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <em key={i} className="font-semibold text-[#2F2F33]">
            {part.slice(1, -1)}
          </em>
        )
      }
      return <span key={i}>{part}</span>
    })
}

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/)
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null
}

const MEDIA_BLOCK_TYPES = new Set(["image", "image-pair", "carousel"])

function renderContentBlock(block: ContentBlock, locale: Locale) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-2xl font-bold tracking-tight text-[#2F2F33] sm:text-3xl">
          {pick(block.text, block.textEn, locale)}
        </h2>
      )
    case "subheading":
      return (
        <h3 className="text-lg font-semibold tracking-tight text-[#2F2F33]">
          {pick(block.text, block.textEn, locale)}
        </h3>
      )
    case "divider":
      return <hr className="border-t border-zinc-200" />
    case "paragraph":
      return (
        <p className="text-lg leading-relaxed text-[#46464C]">
          {renderInlineText(pick(block.text, block.textEn, locale))}
        </p>
      )
    case "note":
      return (
        <p className="text-sm text-zinc-400">
          {renderInlineText(pick(block.text, block.textEn, locale))}
        </p>
      )
    case "carousel":
      return (
        <ProjectCarousel
          images={block.images.map((image) => ({
            src: image.src,
            alt: pick(image.alt, image.altEn, locale),
          }))}
        />
      )
    case "image": {
      const aspectClass =
        block.aspect === "square"
          ? "aspect-square max-w-md"
          : block.aspect === "portrait"
            ? "aspect-[1098/932] max-w-md"
            : "aspect-[1918/1040]"
      const sizes =
        block.aspect === "square" || block.aspect === "portrait"
          ? "448px"
          : "(min-width: 1024px) 896px, 100vw"
      return (
        <div
          className={`relative mx-auto w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white ${aspectClass}`}
        >
          <ZoomableImage
            src={block.src}
            alt={pick(block.alt, block.altEn, locale)}
            sizes={sizes}
            objectPosition={block.objectPosition}
          />
        </div>
      )
    }
    case "image-pair":
      return (
        <div className="flex flex-col gap-6">
          {block.images.map((image, imageIndex) => (
            <div key={imageIndex} className="flex flex-col gap-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <ZoomableImage
                  src={image.src}
                  alt={pick(image.alt, image.altEn, locale)}
                  sizes="(min-width: 1024px) 896px, 100vw"
                />
              </div>
              {image.caption && (
                <p className="text-center text-sm text-zinc-400">
                  {pick(image.caption, image.captionEn, locale)}
                </p>
              )}
            </div>
          ))}
        </div>
      )
    case "link":
      return (
        <div className="flex flex-wrap gap-3">
          {block.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#2F2F33] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              {pick(link.label, link.labelEn, locale)}
              <ArrowUpRight className="size-4" />
            </a>
          ))}
        </div>
      )
    default:
      return null
  }
}

export function ProjectDetail({ project }: { project: Project }) {
  const { t, locale } = useLanguage()
  const meta = project.year ? String(project.year) : ""

  const projectsWithSlug = PROJECTS.filter((item) => item.slug)
  const currentIndex = projectsWithSlug.findIndex((item) => item.slug === project.slug)
  const nextProject = projectsWithSlug[(currentIndex + 1) % projectsWithSlug.length]

  return (
    <article className="mx-auto max-w-4xl px-6 pt-32 pb-24 sm:px-16">
      <BackToProjectsButton label={t.projects.backToProjects} />

      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="text-4xl font-bold tracking-tight text-[#2F2F33] sm:text-5xl">
          {project.title}
        </h1>
        {meta && (
          <span className="shrink-0 text-sm font-medium text-zinc-400">{meta}</span>
        )}
      </div>

      {project.video ? (
        <Reveal variant="media" className="mt-8">
          <div className="aspect-video w-full overflow-hidden rounded-3xl shadow-lg shadow-zinc-900/10">
            <iframe
              title={project.title ?? t.projects.videoTitle}
              src={getYouTubeEmbedUrl(project.video) ?? undefined}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </Reveal>
      ) : (
        project.image && (
          <Reveal variant="media" className="mt-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-lg shadow-zinc-900/10">
              <ZoomableImage
                src={project.image}
                alt={project.title ?? ""}
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                objectPosition={project.imagePosition}
              />
            </div>
          </Reveal>
        )
      )}

      {project.content && (
        <div className="mt-10 space-y-10">
          {project.content.map((block, index) => {
            const content = renderContentBlock(block, locale)
            if (!content) return null
            return (
              <Reveal
                key={index}
                variant={MEDIA_BLOCK_TYPES.has(block.type) ? "media" : "fade"}
              >
                {content}
              </Reveal>
            )
          })}
        </div>
      )}

      {project.tags.length > 0 && (
        <Reveal className="mt-10 flex flex-wrap items-center gap-2 border-t border-zinc-200 pt-8">
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
        </Reveal>
      )}

      <div className="mt-10 flex items-center justify-between gap-3">
        <BackToProjectsButton label={t.projects.backToProjects} />
        <Link
          href={`/projetos/${nextProject.slug}`}
          className={buttonVariants({ variant: "tertiary", size: "sm" })}
        >
          {t.projects.nextProject}
          <ArrowRight />
        </Link>
      </div>
    </article>
  )
}
