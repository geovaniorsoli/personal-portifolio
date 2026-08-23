"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Input } from "@heroui/react"

interface TagComboboxProps {
  tags: string[]
  value: string | null
  onChange: (tag: string | null) => void
  placeholder: string
  allLabel: string
}

export function TagCombobox({
  tags,
  value,
  onChange,
  placeholder,
  allLabel,
}: TagComboboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [])

  const filteredTags = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (normalized.length === 0) return tags
    return tags.filter((tag) => tag.toLowerCase().includes(normalized))
  }, [tags, query])

  function selectTag(tag: string | null) {
    onChange(tag)
    setQuery("")
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <Input
          value={isOpen ? query : (value ?? "")}
          onClick={() => {
            setIsOpen((prev) => {
              const next = !prev
              if (next) setQuery("")
              return next
            })
          }}
          onChange={(event) => {
            setQuery(event.target.value)
            setIsOpen(true)
          }}
          placeholder={value ?? placeholder}
          aria-label={placeholder}
          className="w-full rounded-[8px] pe-8"
        />
        <ChevronDown className="text-field-placeholder pointer-events-none absolute inset-y-0 end-2 my-auto size-4" />
      </div>

      {isOpen && (
        <div className="bg-overlay absolute z-10 mt-1 w-full overflow-hidden rounded-[8px] border border-zinc-200 p-1.5 shadow-lg">
          <button
            type="button"
            onClick={() => selectTag(null)}
            className="w-full rounded-lg px-2.5 py-1.5 text-start text-sm text-zinc-500 hover:bg-zinc-100"
          >
            {allLabel}
          </button>
          {filteredTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => selectTag(tag)}
              className="w-full rounded-lg px-2.5 py-1.5 text-start text-sm text-zinc-900 hover:bg-zinc-100"
            >
              {tag}
            </button>
          ))}
          {filteredTags.length === 0 && (
            <p className="px-2.5 py-1.5 text-sm text-zinc-400">{allLabel}</p>
          )}
        </div>
      )}
    </div>
  )
}
