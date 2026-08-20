"use client"

import { useLanguage } from "@/components/language-provider"
import { NAV_SECTIONS } from "@/lib/nav-sections"

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/GeovaniOrsoli" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/geovani-orsoli/" },
]

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="overflow-hidden bg-zinc-900 text-zinc-500">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 sm:px-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-12">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-lg font-bold text-zinc-50">
              Geovani Orsoli Gongora
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase">
              {t.footer.navigationLabel}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="transition-colors hover:text-zinc-50"
                  >
                    {t.nav[section.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase">
              {t.footer.socialsLabel}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-zinc-50"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-zinc-800 pt-6 text-xs">
          {t.footer.rights}
        </p>
      </div>

      <div aria-hidden className="h-[4vw] select-none">
        <p className="px-4 text-[6.6vw] leading-none font-extrabold tracking-tight whitespace-nowrap text-zinc-50 sm:px-10">
          Geovani Orsoli Gongora
        </p>
      </div>
    </footer>
  )
}
