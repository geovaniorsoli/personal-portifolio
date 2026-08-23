import { notFound } from "next/navigation"

import { ProjectDetail } from "@/components/project-detail"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { PROJECTS } from "@/lib/projects"

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
      ? `${project.title} - Geovani Orsoli Gongora`
      : "Projeto - Geovani Orsoli Gongora",
  }
}

export default async function ProjectPage({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params
  const project = PROJECTS.find((item) => item.slug === slug)

  if (!project) notFound()

  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteNav />
      <main>
        <ProjectDetail project={project} />
      </main>
      <SiteFooter />
    </div>
  )
}
