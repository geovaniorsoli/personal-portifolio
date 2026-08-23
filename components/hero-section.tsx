"use client"

import { Avatar } from "@heroui/react"

import { useLanguage } from "@/components/language-provider"
import { SkillsMarquee } from "@/components/skills-marquee"
import { Highlighter } from "@/components/ui/highlighter"
import Text3DFlip from "@/components/ui/text-3d-flip"

const BIRTH_DATE = { year: 2005, month: 9, day: 30 }

function getAge() {
  const now = new Date()
  let age = now.getFullYear() - BIRTH_DATE.year
  const hadBirthdayThisYear =
    now.getMonth() + 1 > BIRTH_DATE.month ||
    (now.getMonth() + 1 === BIRTH_DATE.month && now.getDate() >= BIRTH_DATE.day)
  if (!hadBirthdayThisYear) age -= 1
  return age
}

export function HeroSection() {
  const { t } = useLanguage()
  const bio = t.hero.bio.replace("{age}", String(getAge()))

  return (
    <section
      id="home"
      className="flex min-h-dvh flex-col px-6 pt-20 pb-16 text-center"
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <Avatar className="size-56 rounded-full bg-blue-500 shadow-lg shadow-zinc-900/5 sm:size-64">
          <Avatar.Image
            src="/Eu.png"
            alt="Geovani Orsoli Gongora"
            className="rounded-full object-cover"
          />
          <Avatar.Fallback className="rounded-full text-4xl font-semibold text-zinc-400">
            GO
          </Avatar.Fallback>
        </Avatar>

        <h1 className="mt-8 justify-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Geovani Orsoli Gongora
        </h1>

        <p className="mt-3 text-lg text-zinc-500">
          <Highlighter action="underline" color="#105cd6">
            UI/UX Designer
          </Highlighter>{" "}
          &{" "}
          <Highlighter action="highlight" color="#c2d9ff">
            Product Developer
          </Highlighter>
        </p>

        <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-[#46464C]">
          {bio}
        </p>
      </div>

      <SkillsMarquee />
    </section>
  )
}
