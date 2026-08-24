import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProjectDetail } from "@/components/project-detail"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { PROJECTS } from "@/lib/projects"
import { SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/site"

export function generateStaticParams() {
  return PROJECTS.filter((project) => project.slug).map((project) => ({
    slug: project.slug!,
  }))
}

export async function generateMetadata({
  params,
}: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((item) => item.slug === slug)

  if (!project) {
    return {
      title: "Projeto",
      robots: { index: false, follow: false },
    }
  }

  const description = project.subtitle ?? SITE_DESCRIPTION
  const title = project.title ? `${project.title} | ${SITE_NAME}` : SITE_NAME

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `/projetos/${slug}`,
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/projetos/${slug}`,
      siteName: SITE_NAME,
      locale: "pt_BR",
      title,
      description,
      images: [{ ...SITE_OG_IMAGE, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_OG_IMAGE.url],
    },
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
