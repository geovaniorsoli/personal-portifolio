"use client"

interface PlaceholderSectionProps {
  id: string
  heading: string
  text: string
}

export function PlaceholderSection({ id, heading, text }: PlaceholderSectionProps) {
  return (
    <section id={id} className="px-6 pb-24 sm:px-16">
      <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900">
        {heading}
      </h2>
      <p className="text-zinc-500">{text}</p>
    </section>
  )
}
