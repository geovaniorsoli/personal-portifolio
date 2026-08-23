"use client"

import { useState, type FormEvent, type SVGProps } from "react"
import { Input, TextArea } from "@heroui/react"
import { FileText, Mail } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjvqzowo"

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

type Status = "idle" | "submitting" | "success" | "error"

function RequiredMark() {
  return (
    <span aria-hidden className="text-red-500">
      {" "}
      *
    </span>
  )
}

export function ContactSection() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<Status>("idle")

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/GeovaniOrsoli",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/geovani-orsoli/",
      icon: LinkedinIcon,
    },
    {
      name: t.contact.resume,
      href: "https://docs.google.com/document/d/1nnljCgs-6u_tL711w67NUjOt4jQVmVH2jyN3xfTPrEE/edit?usp=sharing",
      icon: FileText,
    },
    {
      name: "Email",
      href: "mailto:geovanispop@gmail.com",
      icon: Mail,
    },
  ]

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus("submitting")

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const isSubmitting = status === "submitting"
  const isSuccess = status === "success"
  const isLocked = isSubmitting || isSuccess

  return (
    <section id="contato" className="bg-[#131316] px-6 py-24 sm:px-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#EFEFF0]">
            {t.contact.heading}
          </h2>
          <p className="mt-3 max-w-md text-lg leading-relaxed text-[#D8D8D8]">
            {t.contact.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <div key={link.name} className="group relative">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                  className="inline-flex size-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-zinc-300 hover:text-[#2F2F33]"
                >
                  <link.icon className="size-5" />
                </a>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[#2F2F33] px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                >
                  {link.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="nome"
                className="text-sm font-medium text-[#2F2F33]"
              >
                {t.contact.nameLabel}
                <RequiredMark />
              </label>
              <Input
                id="nome"
                name="nome"
                placeholder={t.contact.namePlaceholder}
                required
                disabled={isLocked}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#2F2F33]"
              >
                {t.contact.emailLabel}
                <RequiredMark />
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t.contact.emailPlaceholder}
                required
                disabled={isLocked}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="msg"
                className="text-sm font-medium text-[#2F2F33]"
              >
                {t.contact.messageLabel}
                <RequiredMark />
              </label>
              <TextArea
                id="msg"
                name="msg"
                placeholder={t.contact.messagePlaceholder}
                required
                maxLength={300}
                rows={5}
                disabled={isLocked}
              />
            </div>

            <button
              type="submit"
              disabled={isLocked}
              className={`mt-2 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed ${
                isSuccess
                  ? "bg-emerald-600"
                  : "bg-[#2F2F33] hover:bg-zinc-700 disabled:opacity-50"
              }`}
            >
              {isSuccess
                ? t.contact.success
                : isSubmitting
                  ? t.contact.submitting
                  : t.contact.submit}
            </button>

            {status === "error" && (
              <p className="text-sm font-medium text-red-600">
                {t.contact.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
