"use client"

import { Avatar } from "@heroui/react"

import { useLanguage } from "@/components/language-provider"
import Text3DFlip from "@/components/ui/text-3d-flip"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="flex min-h-[90dvh] flex-col items-center justify-center px-6 pt-20 pb-16 text-center"
    >
      <Avatar className="size-56 rounded-full bg-amber-50 shadow-lg shadow-zinc-900/5 sm:size-64">
        <Avatar.Image
          src="/Eu.png"
          alt="Geovani Orsoli Gongora"
          className="rounded-full object-cover"
        />
        <Avatar.Fallback className="rounded-full text-4xl font-semibold text-zinc-400">
          GO
        </Avatar.Fallback>
      </Avatar>

      <Text3DFlip
        as="h1"
        rotateDirection="top"
        className="mt-8 justify-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
      >
        Geovani Orsoli Gongora
      </Text3DFlip>

      <p className="mt-3 text-lg text-zinc-500">{t.hero.role}</p>

      <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-[#46464C]">
        {t.hero.bio}
      </p>
    </section>
  )
}
