"use client"

import { useEffect } from "react"

import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { consumePendingScrollTarget } from "@/lib/scroll-to-section"

export default function Home() {
  useEffect(() => {
    const target = consumePendingScrollTarget()
    if (target) {
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteNav />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
