"use client"

import { useEffect, useState } from "react"

import { useLanguage } from "@/components/language-provider"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"
import { TAG_COLOR_LIST, type TagColor } from "@/lib/tag-colors"

const SKILLS_PT = [
  "UI/UX",
  "Product Design",
  "UX Research",
  "User Journey",
  "Design System",
  "Design Tokens",
  "Acessibilidade",
  "Motion",
  "Design Thinking",
  "AI",
  "Vibecoding",
  "User Docs",
  "Analytics",
  "Figma",
  "AfterEffects",
  "Edição de Vídeo",
  "Cores",
  "Criação",
]

const SKILLS_EN = [
  "UI/UX",
  "Product Design",
  "UX Research",
  "User Journey",
  "Design System",
  "Design Tokens",
  "Accessibility",
  "Motion",
  "Design Thinking",
  "AI",
  "Vibecoding",
  "User Docs",
  "Analytics",
  "Figma",
  "AfterEffects",
  "Video Editing",
  "Colors",
  "Creative",
]

const RADII = ["rounded-full", "rounded-2xl", "rounded-none", "rounded-4xl", "rounded-lg"]

interface BadgeStyle {
  color: TagColor
  radius: string
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function defaultStyles(count: number): BadgeStyle[] {
  return Array.from({ length: count }, (_, index) => ({
    color: TAG_COLOR_LIST[index % TAG_COLOR_LIST.length],
    radius: RADII[index % RADII.length],
  }))
}

function randomStyles(count: number): BadgeStyle[] {
  const colors = shuffle(TAG_COLOR_LIST)
  const radii = shuffle(RADII)
  return Array.from({ length: count }, (_, index) => ({
    color: colors[index % colors.length],
    radius: radii[index % radii.length],
  }))
}

export function SkillsMarquee() {
  const { locale } = useLanguage()
  const skills = locale === "en-US" ? SKILLS_EN : SKILLS_PT
  const [styles, setStyles] = useState<BadgeStyle[]>(() => defaultStyles(skills.length))

  useEffect(() => {
    // Randomize only after mount: doing this during render would mismatch SSR output.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStyles(randomStyles(skills.length))
  }, [skills.length])

  return (
    <div className="-mx-6 overflow-hidden py-6">
      <ScrollVelocityContainer>
        <ScrollVelocityRow baseVelocity={2} direction={1}>
          {skills.map((skill, index) => {
            const { color, radius } = styles[index]
            return (
              <span
                key={skill}
                className={`mx-2 shrink-0 border-4 px-4 py-2 text-sm font-bold sm:mx-2.5 sm:border-8 sm:px-8 sm:py-4 sm:text-3xl ${radius} ${color.bg} ${color.border} ${color.text}`}
              >
                {skill}
              </span>
            )
          })}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  )
}
