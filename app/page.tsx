"use client"

import { HeroSection } from "@/components/hero-section"
import { PlaceholderSection } from "@/components/placeholder-section"
import { ProjectsSection } from "@/components/projects-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteNav />
      <main>
        <HeroSection />
        <ProjectsSection />
        <PlaceholderSection
          id="sobre"
          heading={t.about.heading}
          text={t.about.placeholder}
        />
        <PlaceholderSection
          id="contato"
          heading={t.contact.heading}
          text={t.contact.placeholder}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
