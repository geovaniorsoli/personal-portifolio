"use client"

import { Avatar, Button } from "@heroui/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { useLanguage } from "@/components/language-provider"
import { localeLabels } from "@/lib/i18n/dictionaries"
import { NAV_SECTIONS } from "@/lib/nav-sections"
import { goToSection } from "@/lib/scroll-to-section"

export function SiteNav() {
  const { t, locale, toggleLocale } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 border-b border-zinc-200/80 bg-zinc-100/80 px-4 py-6 backdrop-blur-md sm:px-16">
      <div className="flex items-center gap-4 sm:gap-8">
        <Link
          href="/"
          onClick={(event) => {
            event.preventDefault()
            goToSection("home", pathname, router.push)
          }}
          aria-label={t.nav.home}
          className="shrink-0"
        >
          <Avatar className="size-9 rounded-full bg-blue-500 p-1 sm:size-10">
            <Avatar.Image
              src="/Eu.png"
              alt="Geovani Orsoli Gongora"
              className="rounded-full object-cover"
            />
            <Avatar.Fallback className="rounded-full text-xs font-semibold text-white">
              GO
            </Avatar.Fallback>
          </Avatar>
        </Link>

        <nav className="flex items-center gap-3 text-base text-zinc-700 sm:gap-8">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`/#${section.id}`}
              onClick={(event) => {
                event.preventDefault()
                goToSection(section.id, pathname, router.push)
              }}
              className="whitespace-nowrap transition-colors hover:text-zinc-950"
            >
              {t.nav[section.key]}
            </a>
          ))}
        </nav>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onPress={toggleLocale}
        aria-label={t.common.toggleLanguage}
        className="shrink-0 text-zinc-700"
      >
        {localeLabels[locale]}
      </Button>
    </header>
  )
}
