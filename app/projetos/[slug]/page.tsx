import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ProjectCarousel } from "@/components/project-carousel"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ZoomableImage } from "@/components/zoomable-image"
import { PROJECTS } from "@/lib/projects"
import { getTagColor } from "@/lib/tag-colors"

function renderInlineText(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part, i) => {
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

export function generateStaticParams() {
  return PROJECTS.filter((project) => project.slug).map((project) => ({
    slug: project.slug!,
  }))
}

export async function generateMetadata({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params
  const project = PROJECTS.find((item) => item.slug === slug)

  return {
    title: project
      ? `${project.title} — Geovani Orsoli Gongora`
      : "Projeto — Geovani Orsoli Gongora",
  }
}

export default async function ProjectPage({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params
  const project = PROJECTS.find((item) => item.slug === slug)

  if (!project) notFound()

  const meta = [project.tool, project.year].filter(Boolean).join(" · ")

  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteNav />
      <main>
        <article className="mx-auto max-w-4xl px-6 pt-32 pb-24 sm:px-16">
          <Link
            href="/#projetos"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            ← Projetos
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
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

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#2F2F33] sm:text-5xl">
            {project.title}
          </h1>

          {meta && <p className="mt-2 text-sm text-zinc-400">{meta}</p>}

          {project.video ? (
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-3xl shadow-lg shadow-zinc-900/10">
              <iframe
                title={project.title ?? "Vídeo do projeto"}
                src={getYouTubeEmbedUrl(project.video) ?? undefined}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ) : (
            project.image && (
              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-3xl shadow-lg shadow-zinc-900/10">
                <ZoomableImage
                  src={project.image}
                  alt={project.title ?? ""}
                  priority
                  sizes="(min-width: 1024px) 896px, 100vw"
                  objectPosition={project.imagePosition}
                />
              </div>
            )
          )}

          {project.content && (
            <div className="mt-10 space-y-10">
              {project.content.map((block, index) => {
                switch (block.type) {
                  case "heading":
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-bold tracking-tight text-[#2F2F33] sm:text-3xl"
                      >
                        {block.text}
                      </h2>
                    )
                  case "stats":
                    return (
                      <div
                        key={index}
                        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-sm text-zinc-500"
                      >
                        {block.items.map((item, itemIndex) => (
                          <span key={itemIndex} className="flex items-center gap-3">
                            {itemIndex > 0 && (
                              <span aria-hidden className="text-zinc-300">
                                ·
                              </span>
                            )}
                            {renderInlineText(item)}
                          </span>
                        ))}
                      </div>
                    )
                  case "divider":
                    return <hr key={index} className="border-t border-zinc-200" />
                  case "paragraph":
                    return (
                      <p
                        key={index}
                        className="text-lg leading-relaxed text-[#46464C]"
                      >
                        {renderInlineText(block.text)}
                      </p>
                    )
                  case "carousel":
                    return <ProjectCarousel key={index} images={block.images} />
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
                        key={index}
                        className={`relative mx-auto w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white ${aspectClass}`}
                      >
                        <ZoomableImage
                          src={block.src}
                          alt={block.alt}
                          sizes={sizes}
                          objectPosition={block.objectPosition}
                        />
                      </div>
                    )
                  }
                  case "image-pair":
                    return (
                      <div key={index} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {block.images.map((image, imageIndex) => (
                          <div
                            key={imageIndex}
                            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white"
                          >
                            <ZoomableImage
                              src={image.src}
                              alt={image.alt}
                              sizes="(min-width: 640px) 448px, 100vw"
                            />
                          </div>
                        ))}
                      </div>
                    )
                  case "figma":
                    return (
                      <div
                        key={index}
                        className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200"
                      >
                        <iframe
                          title={`${project.title} — Figma`}
                          src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(block.url)}`}
                          allowFullScreen
                          className="h-full w-full"
                        />
                      </div>
                    )
                  case "link":
                    return (
                      <div key={index} className="flex flex-wrap gap-3">
                        {block.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#2F2F33] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                          >
                            {link.label}
                            <ArrowUpRight className="size-4" />
                          </a>
                        ))}
                      </div>
                    )
                  default:
                    return null
                }
              })}
            </div>
          )}
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
