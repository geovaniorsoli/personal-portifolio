import type { Locale } from "@/lib/i18n/dictionaries"

export interface TagColor {
  bg: string
  border: string
  text: string
}

const TAG_COLORS: Record<string, TagColor> = {
  Voluntário: {
    bg: "bg-[rgba(255,56,60,0.2)]",
    border: "border-[rgba(255,56,60,0.1)]",
    text: "text-[#ad2b2b]",
  },
  Profissional: {
    bg: "bg-[rgba(70,70,70,0.2)]",
    border: "border-[rgba(70,70,70,0.1)]",
    text: "text-[#505057]",
  },
  Freelance: {
    bg: "bg-[rgba(255,204,0,0.2)]",
    border: "border-[rgba(255,204,0,0.1)]",
    text: "text-[#a94f00]",
  },
  Pessoal: {
    bg: "bg-[rgba(255,76,222,0.2)]",
    border: "border-[rgba(255,76,222,0.1)]",
    text: "text-[#e000b7]",
  },
  "Web Dev": {
    bg: "bg-[rgba(4,133,247,0.2)]",
    border: "border-[rgba(4,133,247,0.1)]",
    text: "text-[#004fa9]",
  },
  Motion: {
    bg: "bg-[rgba(255,56,219,0.2)]",
    border: "border-[rgba(255,56,219,0.1)]",
    text: "text-[#620487]",
  },
  Branding: {
    bg: "bg-[rgba(255,120,0,0.2)]",
    border: "border-[rgba(255,120,0,0.1)]",
    text: "text-[#ca5e00]",
  },
  Redesign: {
    bg: "bg-[#d3ffe6]",
    border: "border-[#a7ffcd]",
    text: "text-[#108f47]",
  },
}

export const TAG_COLOR_LIST: TagColor[] = Object.values(TAG_COLORS)

const FALLBACK_TAG_COLOR: TagColor = {
  bg: "bg-zinc-100",
  border: "border-zinc-200",
  text: "text-zinc-700",
}

export function getTagColor(tag: string): TagColor {
  return TAG_COLORS[tag] ?? FALLBACK_TAG_COLOR
}

const TAG_LABELS_EN: Record<string, string> = {
  Voluntário: "Volunteer",
  Profissional: "Professional",
  Pessoal: "Personal",
}

export function getTagLabel(tag: string, locale: Locale): string {
  if (locale === "en-US") return TAG_LABELS_EN[tag] ?? tag
  return tag
}
