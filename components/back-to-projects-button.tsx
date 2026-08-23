"use client"

import { buttonVariants } from "@heroui/styles"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import type { ReactNode } from "react"

import { goToSection } from "@/lib/scroll-to-section"

export function BackToProjectsButton({ label }: { label: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Link
      href="/#projetos"
      onClick={(event) => {
        event.preventDefault()
        goToSection("projetos", pathname, router.push)
      }}
      className={buttonVariants({ variant: "tertiary", size: "sm" })}
    >
      <ArrowLeft />
      {label}
    </Link>
  )
}
