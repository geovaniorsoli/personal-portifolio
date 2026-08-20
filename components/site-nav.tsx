"use client"

import { Button } from "@heroui/react"

import { useLanguage } from "@/components/language-provider"
import { localeLabels } from "@/lib/i18n/dictionaries"
import { NAV_SECTIONS } from "@/lib/nav-sections"

export function SiteNav() {
  const { t, locale, toggleLocale } = useLanguage()

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 border-b border-zinc-200/80 bg-zinc-100/80 px-4 py-6 backdrop-blur-md sm:px-16">
      <nav className="flex items-center gap-3 text-xs text-zinc-700 sm:gap-8 sm:text-base">
        {NAV_SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="whitespace-nowrap transition-colors hover:text-zinc-950"
          >
            {t.nav[section.key]}
          </a>
        ))}
      </nav>
      <Button
        variant="ghost"
        size="sm"
        onPress={toggleLocale}
        aria-label="Toggle language"
        className="shrink-0 text-zinc-700"
      >
        {localeLabels[locale]}
      </Button>
    </header>
  )
}
